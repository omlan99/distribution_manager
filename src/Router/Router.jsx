import {
    createBrowserRouter,
  } from "react-router-dom";
import StockPage from "../Page/StockPage";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <StockPage></StockPage>,
    },
  ]);