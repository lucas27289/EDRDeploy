import { LinksFunction, LoaderFunction, json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { getUserName, isAdminUser } from "./utils/session.server";
import customStyles from "~/../public/css/customStyles.css"
import logoIco from "~/../public/logoico.ico"
import { Col } from "react-bootstrap";
import MainHeader from "./components/mainHeader";


export let loader:LoaderFunction = async ({ request }) => {

    let userName = await getUserName(request);
    let isAdmin = await isAdminUser(request);

    return json({
      userName: userName,
      isAdmin: isAdmin
    })

}

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
    },
    {
      rel: "stylesheet",
      href: customStyles,
    },
    {
      rel: "icon",
      href: logoIco,
    }
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-100 w-100 bg-custom-dark">
        <MainHeader />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

