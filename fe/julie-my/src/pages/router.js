import { Routes, Route } from "react-router-dom";
import { ROUTERS } from "../utils/router";
import HomePages from "./user/homePages";
import ProfilePages from "./user/profilePages";
import MasterLayout from "./user/theme/masterLayout";

const renderUserRouter = () => {
  const userRouter = [
    {
      path: ROUTERS.USER.HOME,
      component: <HomePages></HomePages>,
    },
    {
      path: ROUTERS.USER.PROFILE,
      component: <ProfilePages></ProfilePages>
    }
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
