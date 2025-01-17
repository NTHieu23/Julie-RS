import { memo } from "react";
import "./style.scss";
import { fomater } from "./../../../utils/fomater";

const OderPageAd = () => {
  const orders = [
    {
      id: 1,
      total: 200000,
      customerName: "Sizuku",
      date: "1/6/2025",
      status: "Đang lên đơn",
    },
    {
      id: 2,
      total: 300000,
      customerName: "Mazune",
      date: "1/8/2025",
      status: "Đang lên đơn",
    },
    {
      id: 3,
      total: 400000,
      customerName: "Akashi",
      date: "01/10/2025",
      status: "Đang lên đơn",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="orders">
          <h2>Quản lý đơn hàng</h2>

          <div className="orders_content">
            <table className="orders_table">
              <thead>
                <tr>
                  <th>Mã đơn hàng</th>
                  <th>Tổng đơn</th>
                  <th>Khách hàng</th>
                  <th>Ngày đặt</th>
                  <th>Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((item, index) => (
                  <tr key={index}>
                    <td> {item.id} </td>
                    <td> {fomater(item.total)} </td>
                    <td> {item.customerName} </td>
                    <td> {new Date(item.date).toLocaleDateString()} </td>
                    <td> {item.status} </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="order_footer">
            <div className="order_pagination">
              <div className="order_page_number">
                <button className="order_page_btn">previous</button>
                <button className="order_page_btn order_page_btn_active">
                  1
                </button>
                <button className="order_page_btn">2</button>
                <button className="order_page_btn">3</button>
                <button className="order_page_btn">4</button>
                <button className="order_page_btn">5</button>
                <button className="order_page_btn">next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(OderPageAd);
