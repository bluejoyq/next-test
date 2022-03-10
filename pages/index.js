import {Box, Typography, Container} from "@mui/material";

function Index() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          bluejoy's example
        </Typography>
      </Box>
    </Container>
  );
}

export default Index;