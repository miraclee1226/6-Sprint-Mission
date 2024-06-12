import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import HomePage from "./HomePage";
import BoardPage from "./BoardPage";
import AddItemPage from "./AddItem/AddItemPage";
import FleaMarketPage from "./FleaMarket/FleaMarketPage";
import SignInPage from "./Auth/SignInPage";
import SignUpPage from "./Auth/SignUpPage";
import NotFoundPage from "./NotFoundPage";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyle from "../styles/GlobalStyle";
import ProductDetailPage from "./FleaMarket/ProductDetail/ProductDetailPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="board" element={<BoardPage />} />
            <Route path="items">
              <Route index element={<FleaMarketPage />} />
              <Route path=":productId" element={<ProductDetailPage />} />
            </Route>
            <Route path="additem" element={<AddItemPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          <Route path="signin" element={<SignInPage />} />
          <Route path="signup" element={<SignUpPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
