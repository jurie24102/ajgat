import Head from "next/head";
import { Box, Button, Typography } from "@mui/material";
import {useRouter} from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>A&JGAT ~ Whabam!</title>
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
          <Typography variant="h2">André & Jurie Google Analytics Test Site</Typography>
        <Typography variant="h1">Whabam!</Typography>
        <Button onClick={() => router.push("/somewhere")} variant="contained">Go Somewhere</Button>
        </Box>
    </>
  );
}
