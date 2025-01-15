import { memo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../../pages/user/homePages/style.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { fomater } from "./../../../utils/fomater";

/*{ Banner Begin }*/
import banner from "../../../assets/users/image/banner/banner-trai-cay.jpg";
import sua_trai_cay from "../../../assets/users/image/banner/sua-trai-cay.jpg";
/*{ Banner End }*/

/*{ Meat image Begin }*/
import Thit_Ga from "../../../assets/users/image/categories/Meat/thit-ga.jpg";
import Thit_Lon from "../../../assets/users/image/categories/Meat/thit-lon.jpg";
import Thit_Vit from "../../../assets/users/image/categories/Meat/thit-vit.jpg";
import Thit_Cuu from "../../../assets/users/image/categories/Meat/thit-cuu.jpg";
import Thit_Nai from "../../../assets/users/image/categories/Meat/thit-nai.jpg";
import Suon_Heo from "../../../assets/users/image/categories/Meat/suon-heo.jpg";
import Thit_Ga_Rut_Xuong from "../../../assets/users/image/categories/Meat/thit-ga-rut-xuong.jpg";
import Thit_Xong_Khoi from "../../../assets/users/image/categories/Meat/thit-xong-khoi.jpg";
import Thit_Chan_Gio from "../../../assets/users/image/categories/Meat/thit-chan-gio.jpg";
import Thit_Bo from "../../../assets/users/image/categories/Meat/thit-bo-nhap-khau.jpg";
/*{ Meat image End }*/

/*{ Vegetable image Begin }*/
import Bi_Do from "../../../assets/users/image/categories/Vegetable/bi-do.jpg";
import Ca_Chua from "../../../assets/users/image/categories/Vegetable/ca-chua.jpg";
import Ca_Rot from "../../../assets/users/image/categories/Vegetable/ca-rot.jpg";
import Cai_Thao from "../../../assets/users/image/categories/Vegetable/cai-thao.jpg";
import Khoai_Tay from "../../../assets/users/image/categories/Vegetable/khoai-tay.jpg";
import Ot_Chuong from "../../../assets/users/image/categories/Vegetable/ot-chuong.jpg";
import Rau_Muong from "../../../assets/users/image/categories/Vegetable/rau-muong.jpg";
import Sup_Lo from "../../../assets/users/image/categories/Vegetable/sup-lo.jpg";
import Xa_Lach from "../../../assets/users/image/categories/Vegetable/xa-lach.jpg";
import Cai_Xoan from "../../../assets/users/image/categories/Vegetable/cai-xoan.jpg";
/*{ Vegetable image End }*/

/*{ Drinks image Begin }*/
import Bia from "../../../assets/users/image/categories/Drinks/bia.jpg";
import Caffee from "../../../assets/users/image/categories/Drinks/caffe.jpg";
import Nuoc_Cam from "../../../assets/users/image/categories/Drinks/nuoc-cam-ep.jpg";
import Nuoc_Ep_Dua from "../../../assets/users/image/categories/Drinks/nuoc-ep-dua.jpg";
import Nuoc_khoang from "../../../assets/users/image/categories/Drinks/nuoc-khoang.jpg";
import Sinh_To_Dau from "../../../assets/users/image/categories/Drinks/sinh-to-dau.jpg";
import Soda_Chanh from "../../../assets/users/image/categories/Drinks/soda-chanh.jpg";
import Tra_Sua from "../../../assets/users/image/categories/Drinks/tra-sua.jpg";
import Tra_Xanh from "../../../assets/users/image/categories/Drinks/tra-xanh.jpg";
import Nuoc_Ngot_Co_Gas from "../../../assets/users/image/categories/Drinks/nuoc-ngot-co-ga.jpg";
/*{ Drinks image End }*/

/*{ Fruit image Begin }*/
import Bo from "../../../assets/users/image/categories/Fruit/bo.jpg";
import Cam_Vang from "../../../assets/users/image/categories/Fruit/cam-vang.jpg";
import Chuoi_Chin from "../../../assets/users/image/categories/Fruit/chuoi-chin.jpg";
import Dau_Tay from "../../../assets/users/image/categories/Fruit/dau-tay.jpg";
import Dua_Hau from "../../../assets/users/image/categories/Fruit/dua-hau.jpg";
import Nho_Den from "../../../assets/users/image/categories/Fruit/nho-den.jpg";
import Oi_Xanh from "../../../assets/users/image/categories/Fruit/oi-xanh.jpg";
import Tao_Do from "../../../assets/users/image/categories/Fruit/tao-do.jpg";
import Xoai_Chin from "../../../assets/users/image/categories/Fruit/xoai-chin.jpg";
import Quyt_Ngot from "../../../assets/users/image/categories/Fruit/quyt-ngot.jpg";
/*{ Fruit image End }*/

/*{ Fast Food image Begin }*/
import Banh_Bao_Chien from "../../../assets/users/image/categories/Fast-Food/banh-bao-chien.jpeg";
import Banh_Mi_Kep_Thit from "../../../assets/users/image/categories/Fast-Food/banh-mi-kep-thit.jpg";
import Banh_Ngot from "../../../assets/users/image/categories/Fast-Food/banh-ngot.jpg";
import Ga_Ran from "../../../assets/users/image/categories/Fast-Food/ga-ran.jpg";
import Hamburger from "../../../assets/users/image/categories/Fast-Food/hamburger-bo.jpg";
import HotDog from "../../../assets/users/image/categories/Fast-Food/HotDog.jpg";
import Khoai_Tay_Chien from "../../../assets/users/image/categories/Fast-Food/khoai-tay-chien.jpg";
import Mi_Xao_Bo from "../../../assets/users/image/categories/Fast-Food/mi-xao-bo.jpg";
import Pizza_Hai_San from "../../../assets/users/image/categories/Fast-Food/pizza-hai-san.jpg";
import Xuc_Xich_Nuong from "../../../assets/users/image/categories/Fast-Food/xuc-xich-nuong.jpg";

/*{ Fast Food image End }*/

const HomePage = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const sliderItem = [
    {
      imageBG: Thit_Ga,
      name: "Thịt",
    },
    {
      imageBG: Khoai_Tay,
      name: "Rau Củ",
    },
    {
      imageBG: Nuoc_Cam,
      name: "Đồ Uống",
    },
    {
      imageBG: Dau_Tay,
      name: "Hoa Quả",
    },
    {
      imageBG: Hamburger,
      name: "Đồ Ăn Nhanh",
    },
  ];

  const featuredProducts = {
    all: {
      title: "Toàn bộ",
      products: [
        { name: "Thịt gà", price: 120000, image: Thit_Ga },
        { name: "Thịt bò", price: 250000, image: Thit_Bo },
        { name: "Thịt lợn", price: 100000, image: Thit_Lon },
        { name: "Thịt vịt", price: 150000, image: Thit_Vit },
        { name: "Thịt cừu", price: 300000, image: Thit_Cuu },
        { name: "Thịt nai", price: 350000, image: Thit_Nai },
        { name: "Sườn heo", price: 220000, image: Suon_Heo },
        { name: "Thịt gà rút xương", price: 130000, image: Thit_Ga_Rut_Xuong },
        { name: "Thịt xông khói", price: 180000, image: Thit_Xong_Khoi },
        { name: "Thịt chân giò", price: 160000, image: Thit_Chan_Gio },

        { name: "Cà rốt", price: 30000, image: Ca_Rot },
        { name: "Khoai tây", price: 25000, image: Khoai_Tay },
        { name: "Bí đỏ", price: 20000, image: Bi_Do },
        { name: "Cải thảo", price: 40000, image: Cai_Thao },
        { name: "Cải xoăn", price: 45000, image: Cai_Xoan },
        { name: "Rau muống", price: 15000, image: Rau_Muong },
        { name: "Xà lách", price: 35000, image: Xa_Lach },
        { name: "Súp lơ", price: 20000, image: Sup_Lo },
        { name: "Cà chua", price: 25000, image: Ca_Chua },
        { name: "Ớt chuông", price: 50000, image: Ot_Chuong },

        { name: "Nước ngọt có gas", price: 15000, image: Nuoc_Ngot_Co_Gas },
        { name: "Nước cam ép", price: 35000, image: Nuoc_Cam },
        { name: "Cà phê", price: 45000, image: Caffee },
        { name: "Trà sữa", price: 50000, image: Tra_Sua },
        { name: "Trà xanh", price: 20000, image: Tra_Xanh },
        { name: "Nước khoáng", price: 10000, image: Nuoc_khoang },
        { name: "Nước ép dứa", price: 30000, image: Nuoc_Ep_Dua },
        { name: "Soda chanh", price: 40000, image: Soda_Chanh },
        { name: "Sinh tố dâu", price: 45000, image: Sinh_To_Dau },
        { name: "Bia lon", price: 20000, image: Bia },

        { name: "Táo đỏ", price: 50000, image: Tao_Do },
        { name: "Cam vàng", price: 60000, image: Cam_Vang },
        { name: "Chuối chín", price: 40000, image: Chuoi_Chin },
        { name: "Dưa hấu", price: 70000, image: Dua_Hau },
        { name: "Dâu tây", price: 90000, image: Dau_Tay },
        { name: "Nho đen", price: 85000, image: Nho_Den },
        { name: "Xoài chín", price: 60000, image: Xoai_Chin },
        { name: "Ổi xanh", price: 45000, image: Oi_Xanh },
        { name: "Bơ sáp", price: 75000, image: Bo },
        { name: "Quýt ngọt", price: 65000, image: Quyt_Ngot },

        { name: "Pizza hải sản", price: 150000, image: Pizza_Hai_San },
        { name: "Gà rán", price: 90000, image: Ga_Ran },
        { name: "Hamburger bò", price: 75000, image: Hamburger },
        { name: "Khoai tây chiên", price: 40000, image: Khoai_Tay_Chien },
        { name: "Xúc xích nướng", price: 60000, image: Xuc_Xich_Nuong },
        { name: "Bánh mì kẹp thịt", price: 70000, image: Banh_Mi_Kep_Thit },
        { name: "Bánh ngọt", price: 50000, image: Banh_Ngot },
        { name: "Bánh bao chiên", price: 45000, image: Banh_Bao_Chien },
        { name: "Hotdog", price: 60000, image: HotDog },
        { name: "Mỳ xào bò", price: 80000, image: Mi_Xao_Bo },
      ],
    },
    freshMeat: {
      title: "Thịt",
      products: [
        { name: "Thịt gà", price: 120000, image: Thit_Ga },
        { name: "Thịt bò", price: 250000, image: Thit_Bo },
        { name: "Thịt lợn", price: 100000, image: Thit_Lon },
        { name: "Thịt vịt", price: 150000, image: Thit_Vit },
        { name: "Thịt cừu", price: 300000, image: Thit_Cuu },
        { name: "Thịt nai", price: 350000, image: Thit_Nai },
        { name: "Sườn heo", price: 220000, image: Suon_Heo },
        { name: "Thịt gà rút xương", price: 130000, image: Thit_Ga_Rut_Xuong },
        { name: "Thịt xông khói", price: 180000, image: Thit_Xong_Khoi },
        { name: "Thịt chân giò", price: 160000, image: Thit_Chan_Gio },
      ],
    },
    freshMeat_RC: {
      title: "Rau Củ",
      products: [
        { name: "Cà rốt", price: 30000, image: Ca_Rot },
        { name: "Khoai tây", price: 25000, image: Khoai_Tay },
        { name: "Bí đỏ", price: 20000, image: Bi_Do },
        { name: "Cải thảo", price: 40000, image: Cai_Thao },
        { name: "Cải xoăn", price: 45000, image: Cai_Xoan },
        { name: "Rau muống", price: 15000, image: Rau_Muong },
        { name: "Xà lách", price: 35000, image: Xa_Lach },
        { name: "Súp lơ", price: 20000, image: Sup_Lo },
        { name: "Cà chua", price: 25000, image: Ca_Chua },
        { name: "Ớt chuông", price: 50000, image: Ot_Chuong },
      ],
    },
    freshMeat_DU: {
      title: "Đồ Uống",
      products: [
        { name: "Nước ngọt có gas", price: 15000, image: Nuoc_Ngot_Co_Gas },
        { name: "Nước cam ép", price: 35000, image: Nuoc_Cam },
        { name: "Cà phê", price: 45000, image: Caffee },
        { name: "Trà sữa", price: 50000, image: Tra_Sua },
        { name: "Trà xanh", price: 20000, image: Tra_Xanh },
        { name: "Nước khoáng", price: 10000, image: Nuoc_khoang },
        { name: "Nước ép dứa", price: 30000, image: Nuoc_Ep_Dua },
        { name: "Soda chanh", price: 40000, image: Soda_Chanh },
        { name: "Sinh tố dâu", price: 45000, image: Sinh_To_Dau },
        { name: "Bia lon", price: 20000, image: Bia },
      ],
    },
    freshMeat_HQ: {
      title: "Hoa Quả",
      products: [
        { name: "Táo đỏ", price: 50000, image: Tao_Do },
        { name: "Cam vàng", price: 60000, image: Cam_Vang },
        { name: "Chuối chín", price: 40000, image: Chuoi_Chin },
        { name: "Dưa hấu", price: 70000, image: Dua_Hau },
        { name: "Dâu tây", price: 90000, image: Dau_Tay },
        { name: "Nho đen", price: 85000, image: Nho_Den },
        { name: "Xoài chín", price: 60000, image: Xoai_Chin },
        { name: "Ổi xanh", price: 45000, image: Oi_Xanh },
        { name: "Bơ sáp", price: 75000, image: Bo },
        { name: "Quýt ngọt", price: 65000, image: Quyt_Ngot },
      ],
    },
    freshMeat_TAN: {
      title: "Thức Ăn Nhanh",
      products: [
        { name: "Pizza hải sản", price: 150000, image: Pizza_Hai_San },
        { name: "Gà rán", price: 90000, image: Ga_Ran },
        { name: "Hamburger bò", price: 75000, image: Hamburger },
        { name: "Khoai tây chiên", price: 40000, image: Khoai_Tay_Chien },
        { name: "Xúc xích nướng", price: 60000, image: Xuc_Xich_Nuong },
        { name: "Bánh mì kẹp thịt", price: 70000, image: Banh_Mi_Kep_Thit },
        { name: "Bánh ngọt", price: 50000, image: Banh_Ngot },
        { name: "Bánh bao chiên", price: 45000, image: Banh_Bao_Chien },
        { name: "Hotdog", price: 60000, image: HotDog },
        { name: "Mỳ xào bò", price: 80000, image: Mi_Xao_Bo },
      ],
    },
  };

  const renderFeaturedProducts = (data) => {
    const tabLists = [];
    const tabPanels = [];

    Object.keys(data).forEach((key, index) => {
      tabLists.push(<Tab key={index}>{data[key].title}</Tab>);

      const tabPanel = [];
      data[key].products.forEach((item, index_2) => {
        tabPanel.push(
          <div className="col-lg-3" key={index_2}>
            <div className="featured_item">
              <div
                className="featured_item-pic"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              >
                <ul className="featured_item-pic_hover">
                  <li>
                    <AiOutlineEye />
                  </li>
                  <li>
                    <AiOutlineShoppingCart />
                  </li>
                </ul>
              </div>
              <div className="featured_item-text">
                <h6>
                  <Link to={""}>{item.name}</Link>
                </h6>
                <h5>{fomater(item.price)}</h5>
              </div>
            </div>
          </div>
        );
      });
      tabPanels.push(tabPanel);
    });

    return (
      <Tabs>
        <TabList>{tabLists}</TabList>

        {tabPanels.map((item, key) => (
          <TabPanel key={key}>
            <div className="row">{item}</div>
          </TabPanel>
        ))}
      </Tabs>
    );
  };

  return (
    <>
      {/*Categories Begin*/}
      <div className="container container_categories_slider">
        <Carousel
          responsive={responsive}
          className="categories_slider"
          infinite={true}
        >
          {sliderItem.map((item, key) => (
            <div
              className="categories_slider_item"
              style={{ backgroundImage: `url(${item.imageBG})` }}
              key={key}
            >
              <p>{item.name}</p>
            </div>
          ))}
        </Carousel>
      </div>
      {/*Categories End*/}

      {/*Featured Begin*/}
      <div className="container">
        <div className="featured">
          <div className="section-title">
            <h2>Sản phẩm nổi bật</h2>
          </div>
          {renderFeaturedProducts(featuredProducts)}
        </div>
      </div>
      {/*Featured End*/}
      {/*Banner Begin*/}
      <div className="container">
        <div className="banner">
          <div className="banner_pic">
            <img src={banner} alt="banner" />
            <span>Trái Cây Tươi</span>
            <h5>
              100% tự nhiên <br />
              Không chất bảo quản
            </h5>
            <div>
              <Link to={""}>
                <AiOutlineShoppingCart />
                Mua Ngay
              </Link>
            </div>
          </div>
          <div className="banner_pic">
            <img src={sua_trai_cay} alt="banner" />
            <span>Sữa Trái Cây</span>
            <h5>
              Hàng nhập khẩu <br />
              Chứng nhận an toàn thực phẩm
            </h5>
            <div>
              <Link to={""}>
                <AiOutlineShoppingCart />
                Mua Ngay
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*Banner End*/}
    </>
  );
};

export default memo(HomePage);
