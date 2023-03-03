import { getImportMetaRoute } from "@/utils/map-menus";
export default {
  path: "/analysis",
  name: "analysis",
  children: getImportMetaRoute(
    import.meta.glob("./analysis/*.ts", { import: "default", eager: true })
  ),
  meta: { name: '系统总览', icon: 'Monitor', zhCN: '系统总览', en: 'System Overview' },
};
