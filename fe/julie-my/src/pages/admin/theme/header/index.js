import { memo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTERS } from "../../../../utils/router";
import { AiOutlineLogout, AiOutlineShoppingCart } from "react-icons/ai";
import "./style.scss";

const HeaderAdmin = ({ children, ...props }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItem = [
    {
      path: ROUTERS.ADMIN.ORDERS,
      onClick: () => navigate(ROUTERS.ADMIN.ORDERS),
      label: "Order",
      icon: <AiOutlineShoppingCart />,
    },
    {
      path: ROUTERS.ADMIN.LOGOUT,
      onClick: () => {},
      label: "Logout",
      icon: <AiOutlineLogout />,
    },
  ];

  return (
    <div className="container admin_header" {...props}>
      <nav className="admin_header_nav">
        {navItem.map(({ path, onClick, label, icon }) => (
          <div
            key={path}
            className={`admin_header_nav_item ${
              location.pathname.includes(path) ? "admin_header_nav_item_active" : ""
            }`}
            onClick={onClick}
          >
            <span className="admin_header_nav_icon"> {icon} </span>
            <span> {label} </span>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default memo(HeaderAdmin);
