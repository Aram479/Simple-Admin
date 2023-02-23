import { RouteRecordRaw } from "vue-router";

declare module "vue-router" {
  interface RouteRecordRaw {
    meta?: {
      title?: string;
      name?: string;
      icon?: string;
    };
  }
}
