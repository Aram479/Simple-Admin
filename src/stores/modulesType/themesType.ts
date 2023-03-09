export type themeName = keyof themeType
export interface themesState extends themeType{
  themeColor?: string,
  themeName?: themeName,
  dark?: boolean,
  menuMode?: string,
  grey: boolean,
  weakness: boolean,
  showLogo: boolean,
  unique: boolean,
}
export interface themeType {
  darkBlue?: string,
  whiteTheme?: string,
  purpleTheme?: string,
  matta?: string,
}
