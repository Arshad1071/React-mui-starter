import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";

import Invoice from "./pages/invoice";
import { customTheme } from "./theme/customTheme";

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Invoice />
    </ThemeProvider>
  );
};

export default App;
