import AppLayout from "components/AppLayout";
import Avatar from "components/Avatar";
import logo from "public/images/logo.png";
import Status from "components/Status";
import { useState, useEffect } from "react";
import Image from "next/image";
export default function HomePage() {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    fetch("/api/statuses/home_timeline")
      .then((res) => res.json())
      .then(setTimeline);
  }, []);
  return (
    <AppLayout title="INICIO">
      <header>
        <h2>Inicio</h2>
      </header>
      <section>
        {timeline.map((tatic) => {
          return <Status key={tatic.id} {...tatic} />;
        })}
      </section>

      <nav></nav>

      <style jsx>{`
        header {
          align-items: center;
          border-bottom: 1px solid #eee;
          display: flex;
          position: sticky;
          height: 49px;
          width: 100%;
          top: 0;
          background-color: #fff;
        }
        header img {
          align-self: end;
          padding: 10px;
        }

        h2 {
          font-weight: 800;
          padding-left: 15px;
        }
        section {
          padding-top: 10px;
        }

        nav {
          bottom: 0;
          height: 49px;
          position: sticky;
          border-top: 1px solid #eee;
          width: 100%;
          background-color: #fff;
        }
      `}</style>
    </AppLayout>
  );
}
