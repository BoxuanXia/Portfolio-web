import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Boxuan Xia | GIS Professional",
  description: "Portfolio of Boxuan Xia, GIS analyst and developer focusing on Web GIS and spatial analysis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, backgroundColor: "var(--background)", color: "var(--text-primary)" }}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
