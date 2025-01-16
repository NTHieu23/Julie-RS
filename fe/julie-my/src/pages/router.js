import { Routes, Route } from "react-router-dom";
import { ROUTERS } from "../utils/router";
import HomePages from "./user/homePages";
import ProfilePages from "./user/profilePages";
import MasterLayout from "./user/theme/masterLayout";
import ProductsPages from "./user/productsPages";
import ProductDetailPages from "./user/productDetailPages";

const renderUserRouter = () => {
  const userRouter = [
    {
      path: ROUTERS.USER.HOME,
      component: <HomePages />,
    },
    {
      path: ROUTERS.USER.PROFILE,
      component: <ProfilePages />,
    },
    {
      path: ROUTERS.USER.PRODUCTS,
      component: <ProductsPages/>,
    },
    {
      path: ROUTERS.USER.PRODUCT,
      component: <ProductDetailPages/>
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

const RouterCustom = () => {
  return renderUserRouter();
};

export default RouterCustom;
