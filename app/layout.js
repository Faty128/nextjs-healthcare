// app/layout.js
"use client";

// import Sidebar from "@/components/Sidebar";
import "./globals.css";

// export const metadata = {
//   title: "Nextjs Healthcare",
//   description: "This is a project from DevEmpower Healthcare channel",
// };

export default function RootLayout({ children}) {
  return (
    <html lang="en">
      <body>
      {children}
      </body>
    </html>
  );
}
