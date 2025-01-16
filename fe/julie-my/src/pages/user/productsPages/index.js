import { memo } from "react";
import "../productsPages/style.scss";
import Breadcrumb from "../theme/breadcrumb";
import { Link } from "react-router-dom";
import { categories } from "./../theme/header/index";
import { ROUTERS } from "./../../../utils/router";

import ProductCard from "../../../component/productCard";
import { sorts, featuredProducts } from './../../../utils/common';

const ProductsPages = () => {
  return (
    <>
      <Breadcrumb name="Danh sách sản phẩm" />
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
            <div className="sidebar">
              <div className="sidebar_item">
                <h2>Tìm kiếm</h2>
                <input type="text" />
              </div>
              <div className="sidebar_item">
                <h2>Mức giá</h2>
                <div className="price-range-wrap">
                  <div>
                    <p>Từ:</p>
                    <input type="number" min={0} />
                  </div>
                  <div>
                    <p>Đến:</p>
                    <input type="number" min={0} />
                  </div>
                </div>
              </div>
              <div className="sidebar_item">
                <h2>Sắp xếp</h2>
                <div className="tags">
                  {sorts.map((item, key) => (
                    <div
                      key={key}
                      className={`tag ${key === 0 ? "active" : ""}`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="sidebar_item">
                <h2>Thể loại khác</h2>
                <ul>
                  {categories.map((item, key) => (
                    <li key={key}>
                      <Link to={ROUTERS.USER.HOME}>{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
            <div className="row">
              {featuredProducts.all.products.map((item, key) => (
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12" key={key}>
                  <ProductCard
                    name={item.name}
                    img={item.image}
                    price={item.price}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(ProductsPages);
