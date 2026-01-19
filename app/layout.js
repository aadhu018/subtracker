import "./globals.css";
import './fanta.css'
import Head from "./Head";
import Link from "next/link";
import GoTo from "@/components/GoTo";
import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  title: "SubTracker ⋅ A Subscription Tracker",
  description: "Track and manage all your subscriptions in one place with SubTracker!",
};

export default function RootLayout({ children }) {

  const header = (
    <header>
      <div>
        <Link href={"/"}>
          <h1 className="text-gradient">SubTracker</h1>
        </Link>
        <p>A Subscription Tracker</p>
      </div>
      <GoTo />
    </header>
  )

  const footer = (
    <footer>
      <div className="hard-line" />
      <div className="footer-content">
        <div>
          <div>
            <h4>SubTracker</h4>
            <p>|</p>
            <button disabled>Install app</button>
          </div>
          <p className="copyright">© 2025 SubTracker</p>
        </div>
        <div>
          <p>Facing issues? <a>Get Help</a></p>
          <p>Suggestions for improvement? <a>Share feedback</a></p>
          <div>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/tos">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )

  return (
    <html lang="en">
      <Head />
      <AuthProvider>
      <body >
        {header}
        <div className="full-line" />
        <main>
          {children}
        </main>
        {footer}
      </body>
      </AuthProvider>
    </html>
  );
}
