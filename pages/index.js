import AppLayout from "components/AppLayout";
import { colors } from "styles/theme";

import Button from "components/Button";
import GitHub from "components/Icons/Github";
import Logo from "components/Icons/Logo";
import { loginWithGithub } from "../firebase/client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "../firebase/client";
import Avatar from "components/Avatar";

const USER_STATE = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined,
};

export default function Home() {
  const [user, setUser] = useState(USER_STATE.NOT_KNOWN);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(setUser);
  }, []);
  useEffect(() => {
    user && router.replace("/home");
  });

  const handleClick = () => {
    loginWithGithub().catch((err) => {
      console.log(err);
    });
  };
  return (
    <AppLayout title="INICIO">
      <section>
        <Logo backgoudColor="#90f" lettersColor="#fff" />

        <h2>
          Talk about development
          <br /> whit developers 👩‍💻 👨‍💻
        </h2>
        {user === USER_STATE.NOT_LOGGED && (
          <Button onClick={handleClick}>
            <GitHub fill="#fff" width={24} height={24} />
            Login with GitHub
          </Button>
        )}
        {user === USER_STATE.NOT_KNOWN && (
          <div>
            <h1>Loading...</h1>
          </div>
        )}
      </section>

      <style jsx>{`
        .logo {
          color: red;
        }
        section {
          display: grid;
          height: 100%;
          place-items: center;
          place-content: center;
        }
        h1 {
          color: ${colors.black};

          margin-bottom: 10px;
        }
        h2 {
          color: ${colors.secundary};
        }
      `}</style>
    </AppLayout>
  );
}
