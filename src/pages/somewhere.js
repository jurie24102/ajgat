import Head from "next/head";
import { Inter } from "next/font/google";
import { Box, Typography } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Somewhere() {
  return (
    <>
      <Head>
        <title>Somewhere ~ Whabam!</title>
        <meta name="description" content="Whabam! Analytics!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100vh",
          }}
        >
          <Typography variant="h2">Welcome to Somewhere</Typography>
        <Typography variant="h1">Whabam!</Typography>
        
        </Box>
    </>
  );
}
