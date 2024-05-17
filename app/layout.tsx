"use client";
import { useEffect, useState } from "react";
import Header from "../components/header";
import "../styles/global.css";
import Loading from "./loadingWindow";

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const [isloading, setisLoading] = useState(true);

  useEffect(() => {
    setisLoading(false);
  }, []);
  return (
    <html lang="en">
      <body>
        <Loading isloading={isloading} />
        <Header />
        {children}
        {modal}
      </body>
    </html>
  );
}
