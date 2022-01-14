import { Fragment } from "react/cjs/react.production.min";
import { colors } from "../../styles/theme";
import style from "./style";

export default function Button({ children, onClick }) {
  return (
    <Fragment>
      <button onClick={onClick}>{children}</button>
      <style jsx>{style}</style>
    </Fragment>
  );
}
