import { memo } from "react";
import "./style.scss";
import BreadCrumb from "../theme/breadcrumb";
import ProductCard from "../../../component/productCard";

import Nuoc_Cam from "../../../assets/users/image/categories/Drinks/nuoc-cam-ep.jpg";
import Nuoc_Ep_Dua from "../../../assets/users/image/categories/Drinks/nuoc-ep-dua.jpg";
import Nuoc_khoang from "../../../assets/users/image/categories/Drinks/nuoc-khoang.jpg";
import {
  AiOutlineEye,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineCopy,
} from "react-icons/ai";
import { fomater } from "../../../utils/fomater";
import { featuredProducts } from "../../../utils/common";
import { Quantity } from "../../../component";

const ProductDetailPages = () => {
  const imgs = [Nuoc_Cam, Nuoc_Ep_Dua, Nuoc_khoang];
  return (
    <>
      <BreadCrumb name="Chi tiết sản phẩm" />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xl-12 col-md-12 col-sm-12 col-xs-12 product_detail_pic">
            <img src={Nuoc_khoang} alt="product-pic" />
            <div className="main">
              {imgs.map((item, index) => (
                <img src={item} alt="product-pic" key={index} />
              ))}
            </div>
          </div>
          <div className="col-lg-6 col-xl-12 col-md-12 col-sm-12 col-xs-12 product_detail_text">
            <h2>Nước Khoáng</h2>
            <div className="seen_icon">
              <AiOutlineEye />
              {`20 (lượt đã xem)`}
            </div>
            <h3>{fomater(10000)}</h3>
            <p>Nước uống tinh khiết, giúp giải khát và cung cấp khoáng chất</p>
            <Quantity/>
            <ul>
              <li>
                <b>Tình trạng:</b> <span>còn hàng</span>
              </li>
              <li>
                <b>Số lượng:</b> <span>20</span>
              </li>
              <li>
                <b>Chia sẻ:</b>{" "}
                <span>
                  <AiOutlineFacebook />
                  <AiOutlineInstagram />
                  <AiOutlineCopy />
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="product_detail_tab">
          <h4>Thông tin chi tiết</h4>
          <div>
            <ul>
              <li>
                <p>
                  Rau củ chứa rất nhiều vitamin và chất dinh dưỡng nên mang đến
                  rất nhiều lợi ích cho sức khỏe con người.&nbsp;
                </p>

              </li>
              <li>
                <p>Hỗ trợ giảm cân</p>
              </li>
              <li>
                <p>
                  Giảm nguy cơ mắc các bệnh về tim mạch, béo phì và cả ung thư
                </p>
              </li>
              <li>
                <p>Tăng cường sức đề kháng của cơ thể</p>
              </li>
              <li>
                <p>Cải thiện thị lực</p>
              </li>
              <li>
                <p>Điều hòa đường huyết</p>
              </li>
              <li>
                <p>Giảm cholesterol trong máu</p>
              </li>
              <li>
                <p>Điều hòa huyết áp</p>
              </li>
            </ul>
            <p>
              <br />
              <strong>Cách chọn rau củ tươi ngon</strong>
            </p>
            <ul>
              <li>
                <p>
                  Dựa vào hình dáng bên ngoài: Nên ưu tiên chọn các loại rau củ
                  có phần vỏ không có các vết sâu, cuống lá không bị nhũn, thâm
                  đen. Tránh chọn những loại quả có vẻ ngoài to tròn, căng lớn,
                  bởi đây có thể là những quả đã bị tiêm thuốc, không an toàn
                  cho sức khỏe.
                </p>
              </li>
              <li>
                <p>
                  Dựa vào màu sắc: Màu sắc của các loại rau củ thường tươi mới,
                  không có các vết xước, héo hay quá đậm màu. Các loại củ có màu
                  quá xanh hoặc quá bóng sẽ không hẳn là an toàn cho sức khỏe
                  người dùng.
                </p>
              </li>
              <li>
                <p>
                  Dựa vào mùi hương: Mùi hương tự nhiên của các loại rau củ sẽ
                  là mùi đặc trưng theo từng loại chứ không phải là mùi hắc,
                  nồng khó chịu. Nếu các loại củ bạn đang chọn có mùi hóa chất
                  hãy ngưng sử dụng ngay.
                </p>
              </li>
              <li>
                <p>
                  Dựa vào cảm nhận khi cầm: Những loại củ quả cầm chắc tay, kích
                  thước vừa phải, không quá to sẽ thường ngon hơn những loại to
                  lớn nhưng khối lượng nhẹ. Một số loại rau củ bạn chỉ nên chọn
                  những quả nhỏ, đều tay sẽ ngon hơn.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="section-title">
          <h2>Sản phẩm tương tự</h2>
        </div>
        <div className="row">
          {featuredProducts.freshDrinks.products.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <ProductCard img={item.image} name={item.name} price={item.price} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default memo(ProductDetailPages);
