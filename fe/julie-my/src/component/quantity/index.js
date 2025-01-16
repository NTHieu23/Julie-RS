import { memo } from "react";
import "./style.scss";

const Quantity = ({ hasAddToCard = true }) => {
  return (
    <div className="quantity_container">
      <div className="quantity">
        <span className="qtybtn">-</span>
        <input type="number" defaultValue={1} />
        <span className="qtybtn">+</span>
      </div>
      {hasAddToCard && (
        <button type="submit" className="button-submit">
          Thêm vào giỏ hàng
        </button>
      )}
    </div>
  );
};

export default memo(Quantity);
