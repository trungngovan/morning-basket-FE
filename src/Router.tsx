import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/Default";
import { Home } from "./pages/Home";
import { CompleteOrderPage } from "./pages/CompleteOrder";
import { OrderConfirmedPage } from "./pages/OrderConfirmed";
import ProductDetail from "./pages/ProductDetail";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/completeOrder" element={<CompleteOrderPage />} />
        <Route path="/orderConfirmed" element={<OrderConfirmedPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Route>
    </Routes>
  );
}
