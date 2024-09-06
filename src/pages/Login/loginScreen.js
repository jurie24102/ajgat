import { useEffect } from 'react';
import { useRouter } from "next/router";
import { Button, Box } from '@mui/material';
import gaEvent from '@/lib/gaEvent';
import Head from 'next/head';

export default function LoginScreen() {
  const router = useRouter();
  const handleClick = () => {
  gaEvent({
      category: 'Routing',
      action: 'Clicked Login',
      label: 'Route to Create Password',
      value: 1
    });
  router.push("/Login/createPasswordScreen")
};
  return (
    <>
    <Head>
        <title>Login ~ Whabam!</title>
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
      <Button sx={{mt: 3}} onClick={handleClick} variant="contained">
        Login
        </Button>
        </Box>
    </>
  );
}