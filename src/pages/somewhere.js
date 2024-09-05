import Head from "next/head";
import { Box, Typography, Button } from "@mui/material";
import {useRouter} from "next/router";

export default function Somewhere() {
    const router = useRouter();
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
            <Typography variant="h6">Welcome to Somewhere</Typography>
            <Button sx={{mt: 3}} onClick={() => router.back()} variant="contained">
                Back
            </Button>
        </Box>
    </>
  );
}
