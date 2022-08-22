import React from "react";
import styles from "../../styles/home.module.css";
import bg from "../../assets/home/hero-bg.png";
import car from "../../assets/home/hero-car.png";
import { useMediaQuery } from "@mui/material";

const HeroSection = () => {
  const is768 = useMediaQuery("(max-width:768px)");
  const is425 = useMediaQuery("(max-width:425px)");

  return (
    <div style={{ padding: is768 ? "2rem" : "5rem" }}>
      {/* upper section */}
      <section
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "390px",
          display: "flex",
          alignItems: "center",
          paddingLeft: is768 ? "2rem" : "5rem",
        }}
      >
        <div style={{ width: is768 ? 300 : 455, textAlign: "left" }}>
          <h1
            className={styles.title}
            style={{
              fontSize: is768 ? "2rem" : "40px",
            }}
          >
            Discover, and collect extraordinary Lorem NFTs
          </h1>
        </div>
      </section>

      {/* bottom section */}
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "5rem",
          flexDirection: is768 ? "column" : "row",
        }}
      >
        <aside
          style={{
            width: is768 ? "100%" : "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: is768 ? "center" : "flex-start",
          }}
        >
          <img src={car} alt="car" style={{ maxWidth: "100%" }} />
        </aside>
        <aside style={{ width: is768 ? "100%" : "50%" }}>
          <div style={{ textAlign: is425 ? "center" : "right" }}>
            <h1
              className={styles.title}
              style={{ fontSize: is425 ? "30px" : "40px" }}
            >
              We know what we are doing.
            </h1>
          </div>
          <p
            className={styles.desc}
            style={{
              textAlign: "justify",
              paddingRight: 0,
              paddingLeft: is768 ? 0 : "10%",
              fontSize: is425 ? "15px" : "20px",
            }}
          >
            Most of blockchain companies are already or moving into Metaverse.
            This token is just utily token, no meme. Every user needs to hold at
            least 1k MSR in their wallet to enter our entertainment race. We
            have 2 weeks of period of token presale. And we launch our token
            with 3x initial price.
          </p>
        </aside>
      </section>
    </div>
  );
};

export default HeroSection;
