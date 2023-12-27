import React from "react";
import ReactDOMClient from "react-dom/client";
import { OptionAdvance } from "./screens/OptionAdvance";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<OptionAdvance />);
