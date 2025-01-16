import { memo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../../pages/user/homePages/style.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

/*{ Banner Begin }*/
import banner from "../../../assets/users/image/banner/banner_trai_cay.png";
import sua_trai_cay from "../../../assets/users/image/banner/banner_sua_trai_cay.png";
/*{ Banner End }*/

import ProductCard from "../../../component/productCard";
import { featuredProducts, sliderItem } from "../../../utils/common";

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

  const renderFeaturedProducts = (data) => {
    const tabLists = [];
    const tabPanels = [];

    Object.keys(data).forEach((key, index) => {
      tabLists.push(<Tab key={index}>{data[key].title}</Tab>);

      const tabPanel = [];
      data[key].products.forEach((item, index_2) => {
        tabPanel.push(
          // <div className="col-lg-3" key={index_2}>
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={index_2}>
            <ProductCard name={item.name} img={item.image} price={item.price} />
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
          </div>
          <div className="banner_pic">
            <img src={sua_trai_cay} alt="banner" />
          </div>
        </div>
      </div>
      {/*Banner End*/}
    </>
  );
};

export default memo(HomePage);
