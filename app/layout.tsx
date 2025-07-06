import "./globals.css";

import Navbar from "./components/Navbar"
import { Container } from "@mui/material";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      
      <body>
        <Container
          maxWidth="lg"
          sx={{
            px: {
              xs: 1,
              sm: 1,
              md: 10, // spacing on >= 900px
            },
          }}

        >
          <Navbar/>
          {children}
        </Container>
      </body>
      
    </html>
  );
}
