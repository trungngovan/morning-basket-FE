import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/Default";
import { Home } from "./pages/Home";
// import { AboutUsPage } from "./pages/AboutUs";
import { CompleteOrderPage } from "./pages/CompleteOrder";
import { OrderConfirmedPage } from "./pages/OrderConfirmed";
import { SingleProductPage } from "./pages/SingleProduct";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/aboutUs" element={<AboutUsPage />} /> */}
        <Route path="/completeOrder" element={<CompleteOrderPage />} />
        <Route path="/orderConfirmed" element={<OrderConfirmedPage />} />
        <Route path="/product" element={<SingleProductPage />} />{" "}
      </Route>
    </Routes>
  );
}
