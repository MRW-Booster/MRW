import React from "react";
import styles from "../../styles/home.module.css";
// import bg from "../../assets/home/roadmap-bg.png";
import { roadmap } from "../../data";
import { useMediaQuery } from "@mui/material";

const Roadmap = () => {
  const is1230 = useMediaQuery("(max-width:1230px)");
  const is768 = useMediaQuery("(max-width:768px)");
  const is425 = useMediaQuery("(max-width:425px)");
  const is510 = useMediaQuery("(max-width:510px)");

  let gridColumns = "repeat(5, 1fr)";

  if (is510) {
    gridColumns = "repeat(1, 1fr)";
  } else if (is768) {
    gridColumns = "repeat(2, 1fr)";
  } else if (is1230) {
    gridColumns = "repeat(3, 1fr)";
  } 

  return (
    <div
      className={styles.section}
      style={{
        marginTop: is768 ? 100 : -100,
        // marginBottom: 300,
      }}
    >
      <div style={{ width: 250, textAlign: "center" }}>
        <h1 className={styles.title}>Roadmap</h1>
      </div>

      {/* <section style={{ marginTop: 100, position: "relative", width: '100%', height: "400px", }}>
        <Item id={0} left="0%" color="#44C4FF" />
        <Item id={1} left="21%" color="#5044FF" />
        <Item id={2} left="41%" color="#852DEE" />
        <Item id={3} left="62%" color="#FF44A0" />
        <Item id={4} left="82%" color="#FF445B" />
      </section> */}

      <section
        style={{
          width: "100%",
          // height: "400px",
          // height: "250px",
          display: "grid",
          gridTemplateColumns: gridColumns,
          // gap: "20px",
          margin: "100px 0",
          // padding: "0 46px",
          // position: "relative",
          // justifyContent: "center",
        }}
      >
        {Array.from({ length: 5 }, (_, k) => k + 1)?.map((i) => (
          <Item key={i} id={i - 1} color="#44C4FF" />
        ))}
      </section>
    </div>
  );
};

const Item = ({ id, left, color }: any) => {
  // let _left = 0;

  // if (id === 0) {
  //   _left = 0;
  // } else if (id === 1) {
  //   _left = 21;
  // } else if (id === 2) {
  //   _left = 41;
  // } else if (id === 3) {
  //   _left = 62;
  // } else if (id === 4) {
  //   _left = 82;
  // }

  return (
    <div
      style={{
        // position: "absolute",
        // top: id % 2 === 0 ? "50%" : "90%",
        // left: `${_left}%`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // padding: "25px 10px",
        marginTop: '80px'
      }}
    >
      <img src={`/images/roadmap/roadmap${id + 1}.png`} alt="bg" height={180} />
      <div className={styles.itemTitle} style={{ color }}>
        {roadmap[id].title}
      </div>
      <div className={styles.itemContent}>{roadmap[id].content}</div>
    </div>
  );
};

export default Roadmap;
