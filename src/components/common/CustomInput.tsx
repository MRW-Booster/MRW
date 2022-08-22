import * as React from "react";
// import TextField from "@mui/material/TextField";
import styles from "../../styles/contact.module.css";

const CustomInput = ({ name, label, value, onChange, required }: any) => {
  return (
    <div
      style={{
        // display: "flex",
        // flexDirection: "column",
        // alignItems: "flex-start",
        // width: "100%",
        marginBottom: "20px",
      }}
    >
      {/* <TextField
      name={name}
      required={required}
      fullWidth
      id={name}
      label={label}
      style={{
        color: "#fff",
        // border: "1px solid #fff",
      }}
    /> */}
      <label className={styles.input_label} htmlFor="firstName">
        {label}
      </label>
      <input
        id={name}
        name={name}
        className={styles.input}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomInput;
