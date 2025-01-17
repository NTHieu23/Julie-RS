import { Routes, Route, useLocation } from "react-router-dom";
import { ADMIN_PATH, ROUTERS } from "../utils/router";
import HomePage from "./user/homePage";
import ProfilePage from "./user/profilePage";
import MasterLayout from "./user/theme/masterLayout";
import ProductsPage from "./user/productsPage";
import ProductDetailPage from "./user/productDetailPage";
import ShoppingCartPage from "./user/shoppingCartPage";
import CheckoutPage from "./user/checkoutPage";
import LoginPage from "./admin/loginPage";
import MasterLayoutAdmin from "./admin/theme/masterLayoutAdmin";
import OrderPage from "./admin/orderPage";

const renderUserRouter = () => {
  const userRouter = [
    {
      path: ROUTERS.USER.HOME,
      component: <HomePage />,
    },
    {
      path: ROUTERS.USER.PROFILE,
      component: <ProfilePage />,
    },
    {
      path: ROUTERS.USER.PRODUCTS,
      component: <ProductsPage />,
    },
    {
      path: ROUTERS.USER.PRODUCT,
      component: <ProductDetailPage />,
    },
    {
      path: ROUTERS.USER.SHOPPING_CART,
      component: <ShoppingCartPage />,
    },
    {
      path: ROUTERS.USER.CHECKOUT,
      component: <CheckoutPage />,
    },
  ];

  return (
    <MasterLayout>
      <Routes>
        {userRouter.map((item, key) => (
          <Route key={key} path={item.path} element={item.component}></Route>
        ))}
      </Routes>
    </MasterLayout>
  );
};

const renderAdminRouter = () => {
  const adminRouter = [
    {
      path: ROUTERS.ADMIN.LOGIN,
      component: <LoginPage />,
    },
    {
      path: ROUTERS.ADMIN.ORDERS,
      component: <OrderPage/>,
    },
  ];

  return (
    <MasterLayoutAdmin>
      <Routes>
        {adminRouter.map((item, key) => (
          <Route key={key} path={item.path} element={item.component}></Route>
        ))}
      </Routes>
    </MasterLayoutAdmin>
  );
};


const RouterCustom = () => {
  const location = useLocation();
  const isAdminRouter = location.pathname.startsWith(ADMIN_PATH);
  return isAdminRouter ? renderAdminRouter() : renderUserRouter();
};

export default RouterCustom;
