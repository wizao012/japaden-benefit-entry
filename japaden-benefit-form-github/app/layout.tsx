import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={title:"ベネフィットプラン お申し込み｜Japan電力",description:"Japan電力 ハーモニーでんき ベネフィットプランのお申し込みフォームです。"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ja"><body>{children}</body></html>}
