import type { themeName } from '@/stores/modulesType/themesType';
export interface themesType {
  id: themeName,
  color?: string,
  isHide?: boolean
}