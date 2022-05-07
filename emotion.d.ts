import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    font: {
      size16: string;
      size18: string;
      size22: string;
      size80: string;
    };
    color: {
      primary: string;
      white: string;
      black: string;
      darkgrey: string;
    };
    gutter: {
      size8: string;
      size12: string;
      size16: string;
      size20: string;
      size24: string;
      size28: string;
      size32: string;
      size36: string;
      size40: string;
      size56: string;
      size64: string;
      size84: string;
      size88: string;
      size136: string;
    };
  }
}
