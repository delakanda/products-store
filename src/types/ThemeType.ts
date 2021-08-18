export type ThemeType = {
  id: string;
  name: string;
  colors: ThemeValues;
  fonts: string[];
  padding: ThemeValues;
  margin: ThemeValues;
  fontSize: ThemeValues;
}

export type ThemeValues = {
  [size: string]: string;
}
