/* eslint-disable @next/next/no-sync-scripts */
import "@/public/assets/css/line-awesome.min.css";
import "@/public/assets/css/bootstrap.min.css";
import "@/public/assets/css/animate.min.css";
import "@/public/assets/css/smooth-scrollbar.css";
import "@/public/assets/css/lightbox.min.css";
import "@/public/assets/css/style.css";
import "@/public/assets/css/responsive.css";
import "./globals.css";

export const metadata = {
  title: "Mohammad Abdul Aquin Khan - Portfolio",
  description: "Portfolio page for Mohammad Abdul Aquin Khan",
  openGraph: {
    title: "Mohammad Abdul Aquin Khan - Portfolio",
    description: "Portfolio page for Mohammad Abdul Aquin Khan",
    url: "https://siddhantsinghthakur.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://siddhantsinghthakur.vercel.app/assets/images/Sid.png",
        width: 1200,
        height: 630,
        alt: "Portfolio of Mohammad Abdul Aquin Khan",
      },
    ],
    siteName: "Mohammad Abdul Aquin Khan's Portfolio",
  },
  twitter: {
    card: "Mohammad Abdul Aquin Khan - Portfolio",
    title: "Mohammad Abdul Aquin Khan - Portfolio",
    description: "Portfolio page for Mohammad Abdul Aquin Khan",
    images: [
      "https://siddhantsinghthakur.vercel.app/assets/images/Sid.png",
    ],
  },
  alternates: {
    canonical: "https://siddhantsinghthakur.vercel.app/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <span className="icon-menu">
          <span className="bar"></span>
          <span className="bar"></span>
        </span>
        {children}

        <script src="assets/js/jquery.js"></script>
        <script src="assets/js/bootstrap.bundle.min.js" />
        <script src="assets/js/gsap.min.js" />
        <script src="assets/js/ScrollTrigger.min.js" />
        <script src="assets/js/ScrollToPlugin.min.js" />
        <script src="assets/js/lightbox.min.js" />
        <script src="assets/js/main.js" />
      </body>
    </html>
  );
}
