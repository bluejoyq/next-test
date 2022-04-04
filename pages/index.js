import {Box, Typography, Container} from "@mui/material";
import Link from 'next/link';
import Head from 'next/head';
function Index() {
  return (
    <>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/public/icons/favicon.ico" />
    </Head>
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          bluejoy의 example
        </Typography>
      </Box>
      <h1>
        Read{' '}
        <Link href="/posts/first-post">
          this page!
        </Link>
      </h1>
    </Container>
    </>

  );
}

export default Index;