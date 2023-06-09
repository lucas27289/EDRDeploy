import bcrypt from "bcryptjs";
import {
  createCookieSessionStorage,
  redirect,
} from "@remix-run/node";

import { db } from "./db.server";

type LoginForm = {
  email: string;
  password: string;
};

export async function login({
  email,
  password
}: LoginForm) {
  const user = await db.user.findUnique({
    where: { email: email.toLowerCase() },
  });
  if (!user) return null;

  const isCorrectPassword = await bcrypt.compare(
    password,
    user.passwordHash
  );
  if (!isCorrectPassword) return null;

  return { id: user.id, email: user.email, name: user.name, surname: user.surname };
}


const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}

const storage = createCookieSessionStorage({
  cookie: {
    name: "ER_session",
    // normally you want this to be `secure: true`
    // but that doesn't work on localhost for Safari
    // https://web.dev/when-to-use-local-https/
    secure: true,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
  },
});

function getUserSession(request: Request) {
  return storage.getSession(request.headers.get("Cookie"));
}

export async function getUserId(request: Request) {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (!userId || typeof userId !== "string") return null;
  return userId;
}

export async function getUserName(request: Request) {
  const session = await getUserSession(request);
  const userName = session.get("userName");
  if (!userName || typeof userName !== "string") return null;
  return userName;
}

export async function isAdminUser(request: Request) {
  const session = await getUserSession(request);
  const userType = session.get("userType");
  if (!userType || typeof userType !== "string") return false;
  return userType == "admin";
}

export async function requireUserId(
  request: Request,
  redirectTo: string = new URL(request.url).pathname
) {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (!userId || typeof userId !== "string") {
    const searchParams = new URLSearchParams([
      ["redirectTo", redirectTo],
    ]);
    throw redirect(`/login?${searchParams}`);
  }
  return userId;
}

export async function createUserSession(
  userId: string,
  redirectTo: string
) {
  const session = await storage.getSession();

  let user = await db.user.findUnique({
    where: {
      id: userId
    }
  })
  session.set("userId", userId);
  session.set("userType", user!.userType);
  session.set("userName", user!.name);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session),
    },
  });
}

export async function getUser(request: Request) {
  const userId = await getUserId(request);
  if (typeof userId !== "string") {
    return null;
  }

  try {
    const user = await db.user.findUnique({
      select: { id: true, email: true },
      where: { id: userId },
    });
    return user;
  } catch {
    throw logout(request);
  }
}

export async function logout(request: Request) {
  const session = await getUserSession(request);
  return redirect("/login", {
    headers: {
      "Set-Cookie": await storage.destroySession(session),
    },
  });
}