import { Fragment } from "react/cjs/react.production.min";

export default function Avatar({
  alt,
  src = "https://avatars.githubusercontent.com/u/28931847?v=4",
  text,
}) {
  return (
    <Fragment>
      <container>
        <img alt={alt} src={src} title={alt} />
        {text && <strong>{text}</strong>}
      </container>

      <style jsx>{`
        container {
          display: flex;
          align-items: center;
        }
        img + strong {
          margin-left: 0.5em;
        }
        img {
          border-radius: 10em;
          width: 49px;
          height: 49px;
        }
      `}</style>
    </Fragment>
  );
}
