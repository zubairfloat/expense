import React from "react";
import MailRouter from "./MainRouter";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <MailRouter theme={theme}></MailRouter>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
