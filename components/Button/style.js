import css from "styled-jsx/css";
import { colors } from "../../styles/theme";

export default css`
  button {
    background: ${colors.black};
    color: #fff;
    border-radius: 10em;
    padding: 8px 24px;
    font-weight: bold;
    border: 0;
    cursor: pointer;
    transition: opacity 0.3s ease;
    display: flex;
    align-items: center;
  }
  button > :global(svg) {
    margin-right: 1em;
  }
  button:hover {
    opacity: 0.5;
    background: ${colors.secundary};
  }
`;
