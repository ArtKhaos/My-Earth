
import type {Metadata} from "next";
import {Inter, Raleway, Rubik} from "next/font/google";
import "./globals.scss";
import React from "react";


const inter = Inter({subsets: ["latin"], display: 'swap', variable: '--font-inter'})
const rubik = Rubik({subsets: ["latin"], display: 'swap', variable: '--font-rubik'})
const raleway = Raleway({subsets: ["latin"], display: 'swap', variable: '--font-raleway'})

export const metadata: Metadata = {
    title: "Моя Земля",
    description: "Местная социальная сеть",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="ru">
        <body
            className={`${inter.variable} ${rubik.variable} ${raleway.variable} bg-primary`}>{children}</body>
        </html>
    );
}
