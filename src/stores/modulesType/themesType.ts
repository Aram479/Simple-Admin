export type themeName = keyof themeType
export interface themesState extends themeType{
  themeColor?: string,
  themeName?: themeName,
  menuMode?: string
}
export interface themeType {
  darkBlue?: string,
  whiteTheme?: string,
  purpleTheme?: string,
  matta?: string,
}
