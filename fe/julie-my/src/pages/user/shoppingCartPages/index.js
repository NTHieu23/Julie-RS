import { memo } from "react";
import "./style.scss";
import BreadCrumb from "../theme/breadcrumb";
import { fomater } from './../../../utils/fomater';
import Quantity from '../../../component/quantity';
import { AiOutlineClose } from "react-icons/ai";
import image_1 from '../../../assets/users/image/cart/1.jpg';
const ShoppingCartPages = () => {
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
                <td><Quantity quantity="2" hasAddToCard={false} /></td>
                <td>{fomater(100000)}</td>
                <td className="item_close">
                  <AiOutlineClose />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default memo(ShoppingCartPages);
