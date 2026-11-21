import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Atmos Weather", description: "Seven-day weather, air quality and outdoor planning." };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
