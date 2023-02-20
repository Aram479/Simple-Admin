export type themeName = keyof themeType
export interface themesState extends themeType{
  themeColor?: string,
  themeName?: themeName,
}
export interface themeType {
  darkBlue?: string,
  whiteTheme?: string,
  purpleTheme?: string,
}
