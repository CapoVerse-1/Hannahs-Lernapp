import "../styles/globals.css"
import type { Metadata } from "next"
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Hannah Psychologie",
  description: "Study app for psychology entrance exam",
  manifest: "/manifest.webmanifest"
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0B0F14"
}

function ServiceWorkerRegister() {
  return (
    <script dangerouslySetInnerHTML={{
      __html: `if ('serviceWorker' in navigator) { window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js').then(()=>navigator.serviceWorker.getRegistrations().then(rs=>rs.forEach(r=>r.update())))); }`
    }} />
  )
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body>
        {children}
        <ServiceWorkerRegister />
      </body>
    </html>
  )
}


