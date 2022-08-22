import React from "react";
import styles from "../../styles/home.module.css";
import bg from "../../assets/home/team-bg.png";

const OurTeam = () => {
  return (
    <div
      className={styles.section}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "800px",
        position: "relative",
      }}
    >
      <div
        style={{
          width: 250,
          textAlign: "center",
          position: "absolute",
          top: "8%",
        }}
      >
        <h1 className={styles.title}>Our Team</h1>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "20px",
          margin: "46px 0",
          padding: "0 46px",
          position: "absolute",
          top: "22%",
        }}
      >
        {Array.from({ length: 5 }, (_, k) => k + 1).map((i) => (
          <img
            key={i}
            src={`/images/person/person${i}.png`}
            alt={`person${i}`}
            width="100%"
            height="100%"
            style={{
              filter: "drop-shadow(0px 0px 5px #FF0000)",
              borderRadius: "10px",
              maxHeight: "200px",
              maxWidth: "200px",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
