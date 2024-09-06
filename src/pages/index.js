import Head from "next/head";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import FormButtonEvent from "@/components/FormButtonEvent";
import SomewhereButtonEvent from "@/components/SomewhereButtonEvent";
import UserColor from "@/components/UserColor";
import StartButton from "@/components/StartButton";

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
        <Typography variant="h6">André & Jurie</Typography>
        <Typography variant="h6">Google Analytics Test Site</Typography>
        <Typography mt={2} variant="h4">Whabam!</Typography>
        <SomewhereButtonEvent/>
        <FormButtonEvent />
        <UserColor />
        <StartButton/>
      </Box>
    </>
  );
}
