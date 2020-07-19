import React from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";
import colors from '../colors';

const NavBar = () => (
  <header
    css={css`
      background-color: ${colors.secondary};
      padding: 15px;
      position: sticky;
      top: 0;
      z-index: 10;
    `}
  >
    <Link to="/">Adopt Me!</Link>
    <span
      css={css`
        font-size: 60px;

        &:hover {
          text-decoration: underline;
        }
      `}
      role="img"
      aria-label="logo"
    >
      🐶
    </span>
  </header>
);

export default NavBar;
