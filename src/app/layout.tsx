import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
    title: "Template",
    description: "TODO: Change the description here",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${poppins.variable} ${poppins.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
