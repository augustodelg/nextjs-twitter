import AppLayout from "components/AppLayout";
import Button from "components/Button";
import { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";

export default function ComposeTatic() {
  const [user, setUser] = useState();
  return (
    <AppLayout>
      <form>
        <textarea placeholder="¿Qué esta pasando?"></textarea>
        <div>
          <Button>Tatictear</Button>
        </div>
      </form>

      <style jsx>{`
        div {
          padding: 10px;
        }
        textarea {
          width: 100%;
          font-size: 21px;
          border: 0;
          resize: none;
          outline: 0;
          height: 149px;
          padding: 15px;
        }
      `}</style>
    </AppLayout>
  );
}
