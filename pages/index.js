import {Box, Typography, Container} from "@mui/material";
import Link from 'next/link';
function Index() {
  return (
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
  );
}

export default Index;