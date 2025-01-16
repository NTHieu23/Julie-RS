/*{ Meat image Begin }*/
import Thit_Ga from "../assets/users/image/categories/Meat/thit-ga.jpg";
import Thit_Lon from "../assets/users/image/categories/Meat/thit-lon.jpg";
import Thit_Vit from "../assets/users/image/categories/Meat/thit-vit.jpg";
import Thit_Cuu from "../assets/users/image/categories/Meat/thit-cuu.jpg";
import Thit_Nai from "../assets/users/image/categories/Meat/thit-nai.jpg";
import Suon_Heo from "../assets/users/image/categories/Meat/suon-heo.jpg";
import Thit_Ga_Rut_Xuong from "../assets/users/image/categories/Meat/thit-ga-rut-xuong.jpg";
import Thit_Xong_Khoi from "../assets/users/image/categories/Meat/thit-xong-khoi.jpg";
import Thit_Chan_Gio from "../assets/users/image/categories/Meat/thit-chan-gio.jpg";
import Thit_Bo from "../assets/users/image/categories/Meat/thit-bo-nhap-khau.jpg";
/*{ Meat image End }*/

/*{ Vegetable image Begin }*/
import Bi_Do from "../assets/users/image/categories/Vegetable/bi-do.jpg";
import Ca_Chua from "../assets/users/image/categories/Vegetable/ca-chua.jpg";
import Ca_Rot from "../assets/users/image/categories/Vegetable/ca-rot.jpg";
import Cai_Thao from "../assets/users/image/categories/Vegetable/cai-thao.jpg";
import Khoai_Tay from "../assets/users/image/categories/Vegetable/khoai-tay.jpg";
import Ot_Chuong from "../assets/users/image/categories/Vegetable/ot-chuong.jpg";
import Rau_Muong from "../assets/users/image/categories/Vegetable/rau-muong.jpg";
import Sup_Lo from "../assets/users/image/categories/Vegetable/sup-lo.jpg";
import Xa_Lach from "../assets/users/image/categories/Vegetable/xa-lach.jpg";
import Cai_Xoan from "../assets/users/image/categories/Vegetable/cai-xoan.jpg";
/*{ Vegetable image End }*/

/*{ Drinks image Begin }*/
import Bia from "../assets/users/image/categories/Drinks/bia.jpg";
import Caffee from "../assets/users/image/categories/Drinks/caffe.jpg";
import Nuoc_Cam from "../assets/users/image/categories/Drinks/nuoc-cam-ep.jpg";
import Nuoc_Ep_Dua from "../assets/users/image/categories/Drinks/nuoc-ep-dua.jpg";
import Nuoc_khoang from "../assets/users/image/categories/Drinks/nuoc-khoang.jpg";
import Sinh_To_Dau from "../assets/users/image/categories/Drinks/sinh-to-dau.jpg";
import Soda_Chanh from "../assets/users/image/categories/Drinks/soda-chanh.jpg";
import Tra_Sua from "../assets/users/image/categories/Drinks/tra-sua.jpg";
import Tra_Xanh from "../assets/users/image/categories/Drinks/tra-xanh.jpg";
import Nuoc_Ngot_Co_Gas from "../assets/users/image/categories/Drinks/nuoc-ngot-co-ga.jpg";
/*{ Drinks image End }*/

/*{ Fruit image Begin }*/
import Bo from "../assets/users/image/categories/Fruit/bo.jpg";
import Cam_Vang from "../assets/users/image/categories/Fruit/cam-vang.jpg";
import Chuoi_Chin from "../assets/users/image/categories/Fruit/chuoi-chin.jpg";
import Dau_Tay from "../assets/users/image/categories/Fruit/dau-tay.jpg";
import Dua_Hau from "../assets/users/image/categories/Fruit/dua-hau.jpg";
import Nho_Den from "../assets/users/image/categories/Fruit/nho-den.jpg";
import Oi_Xanh from "../assets/users/image/categories/Fruit/oi-xanh.jpg";
import Tao_Do from "../assets/users/image/categories/Fruit/tao-do.jpg";
import Xoai_Chin from "../assets/users/image/categories/Fruit/xoai-chin.jpg";
import Quyt_Ngot from "../assets/users/image/categories/Fruit/quyt-ngot.jpg";
/*{ Fruit image End }*/

/*{ Fast Food image Begin }*/
import Banh_Bao_Chien from "../assets/users/image/categories/Fast-Food/banh-bao-chien.jpeg";
import Banh_Mi_Kep_Thit from "../assets/users/image/categories/Fast-Food/banh-mi-kep-thit.jpg";
import Banh_Ngot from "../assets/users/image/categories/Fast-Food/banh-ngot.jpg";
import Ga_Ran from "../assets/users/image/categories/Fast-Food/ga-ran.jpg";
import Hamburger from "../assets/users/image/categories/Fast-Food/hamburger-bo.jpg";
import HotDog from "../assets/users/image/categories/Fast-Food/HotDog.jpg";
import Khoai_Tay_Chien from "../assets/users/image/categories/Fast-Food/khoai-tay-chien.jpg";
import Mi_Xao_Bo from "../assets/users/image/categories/Fast-Food/mi-xao-bo.jpg";
import Pizza_Hai_San from "../assets/users/image/categories/Fast-Food/pizza-hai-san.jpg";
import Xuc_Xich_Nuong from "../assets/users/image/categories/Fast-Food/xuc-xich-nuong.jpg";

export const featuredProducts = {
  all: {
    title: "Toàn bộ",
    products: [
      /*{product 1 begin}*/
      { name: "Thịt gà", price: 120000, image: Thit_Ga },
      { name: "Cà rốt", price: 30000, image: Ca_Rot },
      { name: "Nước ngọt có gas", price: 15000, image: Nuoc_Ngot_Co_Gas },
      { name: "Táo đỏ", price: 50000, image: Tao_Do },
      { name: "Pizza hải sản", price: 150000, image: Pizza_Hai_San },
      /*{product 1 end}*/

      /*{product 2 begin}*/
      { name: "Thịt bò", price: 250000, image: Thit_Bo },
      { name: "Khoai tây", price: 25000, image: Khoai_Tay },
      { name: "Nước cam ép", price: 35000, image: Nuoc_Cam },
      { name: "Chuối chín", price: 40000, image: Chuoi_Chin },
      { name: "Gà rán", price: 90000, image: Ga_Ran },
      /*{product 2 end}*/

      /*{product 3 begin}*/
      { name: "Thịt lợn", price: 100000, image: Thit_Lon },
      { name: "Bí đỏ", price: 20000, image: Bi_Do },
      { name: "Bia lon", price: 20000, image: Bia },
      { name: "Cam vàng", price: 60000, image: Cam_Vang },
      { name: "Hamburger bò", price: 75000, image: Hamburger },
      /*{product 3 end}*/

      /*{product 4 begin}*/
      { name: "Thịt vịt", price: 150000, image: Thit_Vit },
      { name: "Cải thảo", price: 40000, image: Cai_Thao },
      { name: "Cà phê", price: 45000, image: Caffee },
      { name: "Dưa hấu", price: 70000, image: Dua_Hau },
      { name: "Khoai tây chiên", price: 40000, image: Khoai_Tay_Chien },
      /*{product 4 end}*/

      /*{product 5 begin}*/
      { name: "Thịt cừu", price: 300000, image: Thit_Cuu },
      { name: "Cải xoăn", price: 45000, image: Cai_Xoan },
      { name: "Trà sữa", price: 50000, image: Tra_Sua },
      { name: "Dâu tây", price: 90000, image: Dau_Tay },
      { name: "Xúc xích nướng", price: 60000, image: Xuc_Xich_Nuong },
      /*{product 5 end}*/

      /*{product 6 begin}*/
      { name: "Thịt nai", price: 350000, image: Thit_Nai },
      { name: "Rau muống", price: 15000, image: Rau_Muong },
      { name: "Trà xanh", price: 20000, image: Tra_Xanh },
      { name: "Nho đen", price: 85000, image: Nho_Den },
      { name: "Bánh mì kẹp thịt", price: 70000, image: Banh_Mi_Kep_Thit },
      /*{product 6 end}*/

      /*{product 7 begin}*/
      { name: "Sườn heo", price: 220000, image: Suon_Heo },
      { name: "Xà lách", price: 35000, image: Xa_Lach },
      { name: "Nước khoáng", price: 10000, image: Nuoc_khoang },
      { name: "Xoài chín", price: 60000, image: Xoai_Chin },
      { name: "Bánh ngọt", price: 50000, image: Banh_Ngot },
      /*{product 7 end}*/

      /*{product 8 begin}*/
      { name: "Thịt gà rút xương", price: 130000, image: Thit_Ga_Rut_Xuong },
      { name: "Cà chua", price: 25000, image: Ca_Chua },
      { name: "Nước ép dứa", price: 30000, image: Nuoc_Ep_Dua },
      { name: "Ổi xanh", price: 45000, image: Oi_Xanh },
      { name: "Bánh bao chiên", price: 45000, image: Banh_Bao_Chien },
      /*{product 8 end}*/

      /*{product 9 begin}*/
      { name: "Thịt xông khói", price: 180000, image: Thit_Xong_Khoi },
      { name: "Ớt chuông", price: 50000, image: Ot_Chuong },
      { name: "Soda chanh", price: 40000, image: Soda_Chanh },
      { name: "Bơ sáp", price: 75000, image: Bo },
      { name: "Hotdog", price: 60000, image: HotDog },
      /*{product 9 end}*/

      /*{product 10 begin}*/
      { name: "Thịt chân giò", price: 160000, image: Thit_Chan_Gio },
      { name: "Súp lơ", price: 20000, image: Sup_Lo },
      { name: "Sinh tố dâu", price: 45000, image: Sinh_To_Dau },
      { name: "Quýt ngọt", price: 65000, image: Quyt_Ngot },
      { name: "Mỳ xào bò", price: 80000, image: Mi_Xao_Bo },
      /*{product 10 end}*/
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
  freshVegetable: {
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
  freshDrinks: {
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
  freshFruit: {
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
  freshFast_Food: {
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

export const sliderItem = [
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

export const sorts = [
    "Giá thấp đến cao",
    "Giá cao đến thấp",
    "Hàng mới nhất",
    "Hàng cũ nhất",
    "Bán chạy nhất",
    "Đang giảm giá",
  ];
