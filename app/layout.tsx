export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}<div>hii layout</div>
      </body>
      
    </html>
  );
}
