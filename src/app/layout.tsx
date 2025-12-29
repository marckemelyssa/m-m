import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

import { LanguageProvider } from "@/hooks/useLanguage"
import { Providers } from "@/components/common/providers"
import { cookies } from "next/headers"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "M&M",
  description: "Marck Melyssa",
  icons: { icon: "favicon.ico" },
}

const SUPPORTED_LANGUAGES = ["en", "pt"] as const
type Language = (typeof SUPPORTED_LANGUAGES)[number]

async function detectLanguage(): Promise<Language> {
  const cookieStore = await cookies()
  const langCookie = cookieStore.get("language")?.value as Language | undefined
  if (langCookie && SUPPORTED_LANGUAGES.includes(langCookie)) {
    return langCookie
  }

  // Detecta língua do navegador via header Accept-Language
  try {
    const { headers } = await import("next/headers")
    const headersList = await headers()
    const acceptLanguage = headersList.get("accept-language")
    
    if (acceptLanguage) {
      const preferredLang = acceptLanguage.split(",")[0].split("-")[0].toLowerCase()
      if (SUPPORTED_LANGUAGES.includes(preferredLang as Language)) {
        return preferredLang as Language
      }
    }
  } catch (error) {
    console.log("Could not detect browser language:", error)
  }

  return "en"
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const language = await detectLanguage()

  return (
    <html lang={language} className="bg-transparent">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-transparent`}>
        <Providers>
          <LanguageProvider initialLanguage={language}>
            {children}
          </LanguageProvider>
        </Providers>
      </body>
    </html>
  )
}
