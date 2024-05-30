"use client";
import { useEffect, useState } from "react";
import Header from "./header";
import Loading from "../app/loadingWindow";

export default function Load({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal?: React.ReactNode;
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
