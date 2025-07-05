import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Synapse Bank",
  description: "Synpase Bank is a modern banking platform for everyone.",
  icons: {
    icon: "/icons/logo.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const attrs = ['data-new-gr-c-s-check-loaded', 'data-gr-ext-installed'];
                const remove = el => attrs.forEach(a => el.removeAttribute(a));
                remove(document.documentElement);
                if (document.body) remove(document.body);

                // Watch for re-injection of Grammarly attrs on html/body
                const observer = new MutationObserver(muts => {
                  muts.forEach(m => {
                    if (m.type === 'attributes' && attrs.includes(m.attributeName)) {
                      const t = m.target;
                      if (t instanceof HTMLElement && (t.tagName === 'HTML' || t.tagName === 'BODY')) {
                        t.removeAttribute(m.attributeName);
                      }
                    }
                  });
                });
                observer.observe(document.documentElement, { attributes: true });
                if (document.body) observer.observe(document.body, { attributes: true });
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}
