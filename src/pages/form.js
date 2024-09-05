import Head from "next/head";
import { Box, Button, Typography } from "@mui/material";
import {useRouter} from "next/router";
import ButtonComponent from "@/components/ButtonComponent";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Form ~ Whabam!</title>
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
              <Typography variant="h6">Send data to GA4.</Typography>
        <Typography variant="h6" color="grey" fontStyle={"italic"}>form placeholder</Typography>
        <ButtonComponent/>
              <Button sx={{mt: 3}} onClick={() => router.back()} variant="contained">
                Back
            </Button>
        
      </Box>
    </>
  );
}
