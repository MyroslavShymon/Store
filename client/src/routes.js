import AdminPanelPage from "./pages/AdminPanelPage";
import AuthPage from "./pages/AuthPage";
import BascketPage from "./pages/BascketPage";
import DevicePage from "./pages/DevicePage";
import ShopPage from "./pages/ShopPage";
import {
  ADMIN_ROUTE,
  BASCKET_ROUTE,
  DEVICE_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "./utils/constants";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: AdminPanelPage,
  },
  {
    path: BASCKET_ROUTE,
    Component: BascketPage,
  },
];
export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: AuthPage,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: AuthPage,
  },
  {
    path: SHOP_ROUTE,
    Component: ShopPage,
  },
  {
    path: DEVICE_ROUTE + "/:id",
    Component: DevicePage,
  },
];
