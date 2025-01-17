import { memo } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { ROUTERS } from "../../../utils/router";

const LoginPages = () => {
  const navigate = useNavigate();
  const hanldeSubmit = (e) => {
    e.preventDefault();
    navigate(ROUTERS.ADMIN.ORDERS);
  };
  return (
    <>
      <div className="login">
        <div className="login_container">
          <h2 className="login_title">Đăng nhập</h2>
          <form className="login_form" onSubmit={hanldeSubmit}>
            <div className="login_form_group">
              <label htmlFor="username" className="login_label">
                Tên đăng nhập
              </label>
              <input type="text" placeholder="Username" required />
            </div>
            <div className="login_form_group">
              <label htmlFor="password" className="login_label">
                Mật khẩu
              </label>
              <input type="password" placeholder="Password" required />
            </div>
            <button type="submit" className="button-submit">
              Đăng Nhập
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default memo(LoginPages);
