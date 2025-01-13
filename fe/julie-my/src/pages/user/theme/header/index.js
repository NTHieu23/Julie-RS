import { memo, useState } from "react";
import "../header/style.scss";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineShoppingCart,
  AiOutlinePhone,
} from "react-icons/ai";
import { MdOutlineMenu } from "react-icons/md";
import { LiaTwitterSquare } from "react-icons/lia";
import { Link } from "react-router-dom";
import { ROUTERS } from "../../../../utils/router";
import { fomater } from "../../../../utils/fomater";

const Header = () => {
  const [isShowCategories, setShowCategories] = useState(true);
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
                    <LiaTwitterSquare />
                  </Link>
                </li>
                <li>
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
      <div className="container">
        <div className="row hero_categories_container">
          <div className="col-lg-3 hero_categories">
            <div
              className="hero_categories_all"
              onClick={() => setShowCategories(!isShowCategories)}
            >
              <MdOutlineMenu />
              Danh Sách Sản Phẩm
            </div>
            <ul className={isShowCategories ? "" : "hidden"}>
              <li>
                <Link to={"#"}>Thịt tươi</Link>
              </li>
              <li>
                <Link to={"#"}>Rau củ</Link>
              </li>
              <li>
                <Link to={"#"}>Nước trái cây</Link>
              </li>
              <li>
                <Link to={"#"}>Trái cây</Link>
              </li>
              <li>
                <Link to={"#"}>Hải Sản</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-9 hero_shearch_container">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
