// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    accentColor: string;
    cardBgColor: string;
    overviewBgColor: string;
    toggleBgColor: string;
    toggleBorder: string;
    toggleHover: string;
    toggleBtnColor: string;
    toggleBtnLeft: number;
  }
}
