import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import PageNotFound from "./components/PageNotFound";
import Transactions from "./components/Transaction";
import RefreshProvider from "./Contexts/RefreshContext";

import { GlobalStyle } from "./globalStyles";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <RefreshProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/" element={<Login />} />
            <Route path="/transactions/:type" element={<Transactions />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </RefreshProvider>
    </>
  );
}
