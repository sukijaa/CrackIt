import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import { Header } from "@/components/Header"; // ✅ Import Header here

import "./globals.css";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CrackIt",
  description: "An AI-powered platform for preparing for mock interviews",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${monaSans.className} antialiased pattern`}>
        <Header /> {/* ✅ Replaces direct LogoutButton */}

        {children}
        <Toaster />
      </body>
    </html>
  );
}


// import { Toaster } from "sonner";
// import type { Metadata } from "next";
// import { Mona_Sans } from "next/font/google";

// import "./globals.css";

// const monaSans = Mona_Sans({
//   variable: "--font-mona-sans",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "CrackIt",
//   description: "An AI-powered platform for preparing for mock interviews",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className="dark">
//       <body className={`${monaSans.className} antialiased pattern`}>
//         {children}

//         <Toaster />
//       </body>
//     </html>
//   );
// }