import { useEffect } from 'react';
import { useRouter } from "next/router";
import { Button, Box } from '@mui/material';
import gaEvent from '@/lib/gaEvent';
import Head from 'next/head';

export default function CreatePasswordScreen() {
  const router = useRouter();
  const handleClick = () => {
    gaEvent({
      category: 'Login Routing',
      action: 'Clicked Create Password',
      label: 'Route to dash',
      value: 3
    });
    router.push("/dash")
  };
  return (
    <>
      <Head>
        <title>Create Password ~ Whabam!</title>
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
            Create Password
          </Button>
        </Box>
    </>
  );
}
