import { memo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../../pages/user/homePages/style.scss"
import bgImage1 from "../../../assets/users/image/cart/2.jpg"

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
      bgIMG: bgImage1,
      name: "Cam tươi",
    },
    {
      bgIMG: bgImage1,
      name: "Hoa quả khô",
    },
    {
      bgIMG: bgImage1,
      name: "Rau củ tươi",
    },
    {
      bgIMG: bgImage1,
      name: "Sữa hộp",
    },
    {
      bgIMG: bgImage1,
      name: "Thịt bò",
    },
  ];

  return (
    <>
      {/*Categories Begin*/}
      <div className="container container_categories_slider">
        <Carousel responsive={responsive} className="categories_slider">
          {sliderItem.map((item, key) => (
            <div
              className="categories_slider_item"
              style={{ backgroundImage: `url(${item.bgIMG})` }}
              key={key}
            >
              <p>{item.name}</p>
            </div>
          ))}
        </Carousel>
      </div>
      {/*Categories End*/}
    </>
  );
};

export default memo(HomePage);
