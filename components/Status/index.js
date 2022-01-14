import Avatar from "components/Avatar";
import { colors } from "styles/theme";
import { addOpacityToColor } from "../../styles/utils";

import { Fragment } from "react";

const deviderColor = addOpacityToColor(colors.black, 0.1);

export default function Status({ avatar, username, message, id }) {
  return (
    <Fragment>
      <article>
        <div>
          <Avatar src={avatar} alt={username} />
        </div>

        <section>
          <strong>{username}</strong>
          <p>{message}</p>
        </section>
      </article>
      <style jsx>{`
        article {
          border-bottom: 0.2px solid ${deviderColor};
          display: flex;
          padding: 10px 15px;
        }
        strong {
          font-size: 15px;
        }
        div {
          padding-right: 10px;
        }
        p {
          line-height: 1.3125;
          margin: 0;
        }
      `}</style>
    </Fragment>
  );
}
