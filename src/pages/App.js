import { PaginationProvider } from "../context/PaginationContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import HomePage from "./HomePage";
import BoardPage from "./BoardPage";
import AddItemPage from "./AddItem/AddItemPage";
import FleaMarketPage from "./FleaMarket/FleaMarketPage";
import LoginPage from "./LoginPage";
import { ThemeProvider } from 'styled-components'
import theme from "../styles/theme";
import GlobalStyle from "../styles/GlobalStyle";


function App() {
  return (
    <PaginationProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="board" element={<BoardPage />} />
              <Route path="fleamarket" element={<FleaMarketPage />} />
              <Route path="additem" element={<AddItemPage />} />
              <Route path="login" element={<LoginPage />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </PaginationProvider>
  );
}

export default App;
