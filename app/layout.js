import { Cardo } from "next/font/google";
import "./globals.css";

const cardo = Cardo({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Ami Studio",
  description: "AMI PHOTOGRAPHY STUDIO delivers quality, creative images tailored to exceed client expectations with global industry standard services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cardo.className}>{children}</body>
    </html>
  );
}
