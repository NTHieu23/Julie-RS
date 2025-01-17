import { memo } from "react";
import Footer from "../../../common/footer";
import { ROUTERS } from "../../../../utils/router";
import { useLocation } from "react-router-dom";
import HeaderAdmin from "../header";

const MasterLayoutAdmin = ({ children, ...props }) => {
  const location = useLocation();
  const isAdminLoginPages = location.pathname.startsWith(ROUTERS.ADMIN.LOGIN);

  return (
    <div {...props}>
      {!isAdminLoginPages && <HeaderAdmin/> }
      {children}
      {!isAdminLoginPages && <Footer />}
    </div>
  );
};

export default memo(MasterLayoutAdmin);
