import { getImportMetaRoute } from "@/utils/map-menus";
import { RouteRecordRaw } from "vue-router";
export default {
  path: "/product",
  name: "product",
  children: getImportMetaRoute(
    import.meta.glob("./product/*.ts", { eager: true, import: "default" })
  ),
  meta: { name: '商品中心', icon: 'ShoppingBag' },
};
