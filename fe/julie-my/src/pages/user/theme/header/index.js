import { memo, useEffect, useState } from "react";
import "../header/style.scss";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineShoppingCart,
  AiOutlinePhone,
  AiOutlineMenu,
  AiOutlineDownCircle,
  AiOutlineUpCircle,
} from "react-icons/ai";
import { MdOutlineMenu, MdEmail } from "react-icons/md";
import { LiaTwitterSquare } from "react-icons/lia";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ROUTERS } from "../../../../utils/router";
import { fomater } from "../../../../utils/fomater";

export const categories = [
  "Thịt",
  "Rau củ",
  "Đồ uống",
  "Hoa quả",
  "Thức ăn nhanh",
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isShowHumberger, setShowHumberger] = useState(false);
  const [isHome, setIsHome] = useState(location.pathname.length <= 1);
  const [isShowCategories, setShowCategories] = useState(isHome);
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
          name: "Đồ Uống",
          path: "",
        },
        {
          name: "Hoa Quả",
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

  useEffect(() => {
    const isHome = location.pathname.length <= 1;
    setIsHome(isHome);
    setShowCategories(isHome);
  }, [location]);

  return (
    <>
      <div
        className={`humberger_menu_overlay
      ${isShowHumberger ? "active" : ""}`}
        onClick={() => setShowHumberger(false)}
      />
      <div
        className={`humberger_menu_wrapper
      ${isShowHumberger ? "show" : ""}`}
      >
        <div className="header_logo">
          <h1>Julie</h1>
        </div>
        <div className="humberger_menu_cart">
          <ul>
            <li>
              <Link to={""}>
                <AiOutlineShoppingCart /> <span>1</span>
              </Link>
            </li>
          </ul>
          <div className="header_cart_price">
            Giỏ hàng: <span>{fomater(1001230)}</span>
          </div>
        </div>
        <div className="humberger_menu_widget">
          <div className="header_top_right_auth">
            <Link to={""}>
              <AiOutlineUser /> Đăng nhập
            </Link>
          </div>
        </div>
        <div className="humberger_menu_nav">
          <ul>
            {menus.map((menu, menuKey) => (
              <li key={menuKey} to={menu.path}>
                <Link
                  to={menu.path}
                  onClick={() => {
                    const newMenu = [...menus];
                    newMenu[menuKey].isShowSubMenu =
                      !newMenu[menuKey].isShowSubMenu;
                    setMenus(newMenu);
                  }}
                >
                  {menu.name}
                  {menu.child &&
                    (menu.isShowSubMenu ? (
                      <AiOutlineDownCircle />
                    ) : (
                      <AiOutlineUpCircle />
                    ))}
                </Link>
                {menu.child && (
                  <ul
                    className={`header_menu_dropdown 
                  ${menu.isShowSubMenu ? "show_submenu" : ""}`}
                  >
                    {menu.child.map((childItem, childKey) => (
                      <li key={`${menuKey}-${childKey}`}>
                        <Link to={childItem.path}>{childItem.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="header_top_right_social">
          <Link to={""}>
            <AiOutlineFacebook />
          </Link>

          <Link to={""}>
            <AiOutlineInstagram />
          </Link>

          <Link to={""}>
            <AiOutlineLinkedin />
          </Link>

          <Link to={""}>
            <LiaTwitterSquare />
          </Link>
        </div>
        <div className="humberger_menu_contact">
          <ul>
            <li>
              <MdEmail /> Julie@gmail.com
            </li>
            <li>Miễn phí đơn từ {fomater(200000)}</li>
          </ul>
        </div>
      </div>

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
                    <LiaTwitterSquare />
                  </Link>
                </li>
                <li onClick={() => navigate(ROUTERS.ADMIN.LOGIN)}>
                  <span>Đăng Nhập</span>
                </li>
              </ul>
              {/* <div></div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="header_logo">
              <h1>JULIE</h1>
            </div>
          </div>
          <div className="col-lg-6">
            <nav className="header_menu">
              <ul>
                {menus?.map((menu, menuKey) => (
                  <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                    <Link to={menu?.path}>{menu?.name}</Link>
                    {menu.child && (
                      <ul className="header_menu_dropdown">
                        {menu.child.map((childItem, childKey) => (
                          <li key={`${menuKey}-${childKey}`}>
                            <Link to={childItem.path}>{childItem.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-lg-3">
            <div className="header_cart">
              <div className="header_cart_price">
                <span>{fomater(1001230)}</span>
              </div>
              <ul>
                <li>
                  <Link to={ROUTERS.USER.SHOPPING_CART}>
                    <AiOutlineShoppingCart /> <span>4</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="humberger_open">
              <AiOutlineMenu onClick={() => setShowHumberger(true)} />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row hero_categories_container">
          <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 hero_categories">
            <div
              className="hero_categories_all"
              onClick={() => setShowCategories(!isShowCategories)}
            >
              <MdOutlineMenu />
              Danh Sách Sản Phẩm
            </div>
            <ul className={isShowCategories ? "" : "hidden"}>
              {categories.map((cate, key) => (
                <li key={key}>
                  <Link to={ROUTERS.USER.PRODUCTS}>{cate}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12 hero_shearch_container">
            <div className="hero_shearch">
              <div className="hero_shearch_form">
                <form>
                  <input type="text" placeholder="Bạn đang tìm gì?" />
                  <button type="submit" className="">
                    Tìm kiếm
                  </button>
                </form>
              </div>
              <div className="hero_shearch_phone">
                <div className="hero_shearch_phone_icon">
                  <AiOutlinePhone />
                </div>
                <div className="hero_shearch_phone_text">
                  <p>0987.123.789</p>
                  <span>Hỗ trợ 24/7</span>
                </div>
              </div>
            </div>
            {isHome && (
              <div className="hero_item">
                <div className="hero_text">
                  <span>Trái cây tươi</span>
                  <h2>
                    Rau quả <br />
                    sạch 100%
                  </h2>
                  <p>Miễn phí giao hàng tận nơi</p>
                  <Link to={""} className="primary-btn">
                    Mua ngay
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
