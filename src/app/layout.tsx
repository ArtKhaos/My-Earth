import type {Metadata} from "next";
import {Inter, Raleway, Rubik} from "next/font/google";
import "./globals.scss";
import classNames from "classnames";

const inter = Inter({subsets: ["latin"]})
const rubik = Rubik({subsets: ['latin']})
const raleway = Raleway({subsets: ['latin']})

export const metadata: Metadata = {
    title: "Моя Земля",
    description: "Местная социальная сеть",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <body
            className={classNames(inter.className, raleway.className, rubik.className, ' bg-primary')}>{children}</body>
        </html>
    );
}
