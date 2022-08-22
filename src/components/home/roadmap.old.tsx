import React from "react";
import styles from "../../styles/home.module.css";
import bg from "../../assets/home/roadmap-bg.png";
import { roadmap } from "../../data";

const Roadmap = () => {
  return (
    <div className={styles.section} style={{ marginTop: -100, marginBottom: 300 }}>
      <div style={{ width: 250, textAlign: "center" }}>
        <h1 className={styles.title}>Roadmap</h1>
      </div>

      <section style={{ marginTop: 100, position: "relative" }}>
        <img src={bg} alt="bg" />
        <Item id={0} left="0%" color="#44C4FF" />
        <Item id={1} left="21%" color="#5044FF" />
        <Item id={2} left="41%" color="#852DEE" />
        <Item id={3} left="62%" color="#FF44A0" />
        <Item id={4} left="82%" color="#FF445B" />
      </section>
    </div>
  );
};

const Item = ({ id, left, color }: any) => {
  return (
    <div
      style={{
        position: "absolute",
        top: id % 2 === 0 ? "50%" : "90%",
        left,
      }}
    >
      <div className={styles.itemTitle} style={{ color }}>
        {roadmap[id].title}
      </div>
      <div className={styles.itemContent}>{roadmap[id].content}</div>
    </div>
  );
};

export default Roadmap;
