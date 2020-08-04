import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CardsProvider } from "./Contexts/CardsContext";
import { CardProvider } from "./Contexts/CardContext";
import { BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <CardsProvider>
      <CardProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CardProvider>
    </CardsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
