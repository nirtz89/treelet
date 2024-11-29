import { Stack, Box, Typography } from "@mui/material";
import logo from "./treelet.png";
const Logo = () => {
  return (
    <Stack width="400px" justifyContent="center" alignItems="center" mb={3}>
      <Stack width="250px" mb={0.5}>
        <img src={logo} alt="logo" />
      </Stack>
      <Box mt={-2} ml={-2}>
        <Typography variant="caption" color="white">
          <a
            href="https://www.linkedin.com/in/nir-tzezana-918a376b/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "white" }}
          >
            Nir Tzezana's
          </a>{" "}
          Treelet Component
        </Typography>
      </Box>
    </Stack>
  );
};

export default Logo;
