import { memo, useState } from "react";
import "../header/style.scss";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ROUTERS } from "../../../../utils/router";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { fomater } from "../../../../utils/fomater";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  const [menus, setMenus] = useState([
    {
      name: "Trang Chủ",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "Cửa Hàng",
      path: ROUTERS.USER.PRODUCTS,
    },
    {
      name: "Sản Phẩm",
      path: "",
      isShowSubMenu: false,
      child: [
        {
          name: "Thịt",
          path: "",
        },
        {
          name: "Rau Củ",
          path: "",
        },
        {
          name: "Thức Ăn Nhanh",
          path: "",
        },
      ],
    },
    {
      name: "Bài Viết",
      path: "",
    },
    {
      name: "Liên Hệ",
      path: "",
    },
  ]);

  return (
    <>
      <div className="header_top">
        <div className="container">
          <div className="row">
            <div className="col-6 header_top_left">
              <ul>
                <li>
                  <AiOutlineMail />
                  hello@gmail.com
                </li>
                <li>miễn phí ship đơn từ {fomater(200000)}</li>
              </ul>
            </div>
            <div className="col-6 header_top_right">
              <ul>
                <li>
                  <Link to={""}>
                    <AiOutlineFacebook />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <AiOutlineInstagram />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <AiOutlineLinkedin />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <AiOutlineTwitter />
                  </Link>
                  <span>
                    <Link to={""}>
                      <AiOutlineUser />
                    </Link>
                    Đăng Nhập
                  </span>
                </li>
              </ul>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <div className="header_logo">
              <h1>JULIE</h1>
            </div>
          </div>
          <div className="col-xl-6">
            <nav className="header_menu">
              <ul>
                {menus?.map((menu, menuKey) => (
                  <li key={menuKey} className={menuKey === 0 ? 'active' : '' }>
                    <Link to={menu?.path}>{menu?.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-xl-3">
            <div className="header_cart">
              <div className="header_cart_price">
                <span>{fomater(1001230)}</span>
              </div>
              <ul>
                <li>
                  <Link to={"#"}>
                    <AiOutlineShoppingCart /> <span>3</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
