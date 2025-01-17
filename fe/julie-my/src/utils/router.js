export const ADMIN_PATH = "/admin";

export const ROUTERS = {
    USER: {
        HOME: "/",
        PROFILE: "/profile",
        PRODUCTS: "/san-pham",
        PRODUCT: "/chi-tiet/:id",
        SHOPPING_CART: "/gio-hang",
        CHECKOUT: "/thanh-toan",
    },
    ADMIN: {
        LOGIN: `${ADMIN_PATH}/dang-nhap`,
        ORDERS: `${ADMIN_PATH}/dat-hang`,
        LOGOUT: `${ADMIN_PATH}/dang-xuat`,
    }
}