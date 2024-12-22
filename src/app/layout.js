import "./globals.css";

export const metadata = {
  title: "SCONEXSOFT",
  description: "Best Consulting Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="/path/to/non-essential-script.js" defer></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
