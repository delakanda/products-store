export type ThemeType = {
  id: string;
  name: string;
  colors: ThemeColors;
  fonts: string[];
  padding: ThemeValues;
  margin: ThemeValues;
  fontSize: ThemeValues;
}

export type ThemeColors = {
  body: string;
  text: string;
}

export type ThemeValues = {
  [size: string]: string;
}
