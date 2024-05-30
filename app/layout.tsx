import "../styles/global.css";
import Load from "../components/load";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SUJIN'S PORTFOLIO ",
  description: "박수진의 포트폴리오입니다.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      <Load>
        {children}
        {modal}
      </Load>
    </>
  );
}
