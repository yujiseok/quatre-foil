import type { CSSProperties } from "react";
import type { CSSObject } from "styled-components";
import { css } from "styled-components";

export const desktop = (props: CSSObject) => {
  return css`
    @media screen and (min-width: 1024px) {
      ${props}
    }
  `;
};

export const tablet = (props: CSSObject) => {
  return css`
    @media screen and (min-width: 768px) {
      ${props}
    }
  `;
};

export const mobile = (props: CSSObject) => {
  return css`
    @media screen and (min-width: 576px) {
      ${props}
    }
  `;
};
