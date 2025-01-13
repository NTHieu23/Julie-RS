import { memo } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer_about">
                <h1 className="footer_about_logo">Julie</h1>
                <ul>
                  <li>Địa Chỉ:67 Bạch Đằng,TP.HCM </li>
                  <li>Phone:0908-789-012</li>
                  <li>Email:tdahieudz23@gmail.com</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer_widget">
                <h6>Cửa Hàng</h6>
                <ul>
                  <li>
                    <Link to={""}>Liên Hệ</Link>
                  </li>
                  <li>
                    <Link to={""}>Thông tin về chúng tôi</Link>
                  </li>
                  <li>
                    <Link to={""}>Sản phẩm kinh doanh</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link to={""}>Thông tin tài khoản</Link>
                  </li>
                  <li>
                    <Link to={""}>Giỏ hàng</Link>
                  </li>
                  <li>
                    <Link to={""}>Danh sách ưa thích</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer_widget">
                <h6>Khuyến mãi & ưu đãi</h6>
                <p>Đăng ký nhận thông tin tại đây</p>
                <form action={"#"}>
                  <div>
                    <input type="text" placeholder="Nhập email" />
                    <button type="submit" className="button-submit">
                      Đăng ký
                    </button>
                  </div>
                  <div className="footer_widget_social">
                    <div>
                      <AiOutlineFacebook />
                    </div>
                    <div>
                      <AiOutlineInstagram />
                    </div>
                    <div>
                      <AiOutlineLinkedin />
                    </div>
                    <div>
                      <AiOutlineTwitter/>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default memo(Footer);
