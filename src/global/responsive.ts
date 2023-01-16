import type { CSSProperties } from "react";
import { css } from "styled-components";

export const desktop = (props: React.CSSProperties) => {
  return css`
    @media screen and (min-width: 1024px) {
      ${props}
    }
  `;
};

export const tablet = (props) => {
  return css`
    @media screen and (min-width: 768px) {
      ${props}
    }
  `;
};

export const mobile = (props) => {
  return css`
    @media screen and (min-width: 576px) {
      ${props}
    }
  `;
};
