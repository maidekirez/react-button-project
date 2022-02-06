import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter} from "react-router-dom"
import {ThemeContextProvider} from "./context/ThemeContext"

import App from "./App";

ReactDOM.render(
<BrowserRouter>
<ThemeContextProvider>
  {/* ThemeContextProvider bilgisini biz oluşturduk */}
<App />
</ThemeContextProvider>
</BrowserRouter>,
document.getElementById("root")
);
