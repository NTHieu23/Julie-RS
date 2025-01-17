import { memo } from "react";
import "./style.scss";
import BreadCrumb from "../theme/breadcrumb";
import { fomater } from "../../../utils/fomater";
import Quantity from "../../../component/quantity";
import { AiOutlineClose } from "react-icons/ai";
import image_1 from "../../../assets/users/image/cart/1.jpg";
import { useNavigate } from "react-router-dom";
import { ROUTERS } from "../../../utils/router";

const ShoppingCartPages = () => {
  const navigate = useNavigate();

  return (
    <>
      <BreadCrumb name="Giỏ Hàng" />
      <div className="container">
        <div className="table_cart">
          <table>
            <thead>
              <tr>
                <th>Tên</th>
                <th>Giá</th>
                <th>Số Lượng</th>
                <th>Thành Tiền</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="shopping_cart_item">
                  <img src={image_1} alt="product_pic" />
                  <h4>Tên sản phẩm 1</h4>
                </td>
                <td>{fomater(100000)}</td>
                <td>
                  <Quantity quantity="2" hasAddToCard={false} />
                </td>
                <td>{fomater(100000)}</td>
                <td className="item_close">
                  <AiOutlineClose />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="shopping_continue">
              <h3>Mã giảm giá</h3>
              <div className="shopping_discount">
                <input type="text" placeholder="Nhập mã giảm giá" />
                <button type="button" className="button-submit">
                  Áp dụng
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="shopping_checkout">
              <h2>Tổng đơn:</h2>
              <ul>
                <li>
                  Số lượng: <span>{2}</span>
                </li>
                <li>
                  Thành tiền: <span>{fomater(200000)}</span>
                </li>
              </ul>
              <button
                type="button"
                className="button-submit"
                onClick={() => navigate(ROUTERS.USER.CHECKOUT)}
              >
                Thanh toán
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(ShoppingCartPages);
