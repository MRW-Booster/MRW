import React from "react";
import styles from "../styles/contact.module.css";
import mailIcon from "../assets/contact/mail-icon.png";
import CustomInput from "../components/common/CustomInput";
import { useMediaQuery } from "@mui/material";

const Contact = () => {
  const is768 = useMediaQuery("(max-width:768px)");
  const is425 = useMediaQuery("(max-width:425px)");

  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    content: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(JSON.stringify(formData));

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      content: "",
    });
  };

  return (
    <div
      className={`${styles.section} ${styles.gradient_box}`}
      style={{ margin: "5rem auto" }}
    >
      <div style={{ width: 250, textAlign: "center" }}>
        <h1 className={styles.title}>Contact US</h1>
        <hr className={styles.border_bottom} />
      </div>

      <section
        style={{
          display: "flex",
          flexDirection: is768 ? "column" : "row",
          justifyContent: "center",
          width: "100%",
          padding: "40px 0",
        }}
      >
        <aside
          style={{
            width: is768 ? "100%" : "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: is768 ? "100px" : 0,
          }}
        >
          <img src={mailIcon} alt="mailIcon" />
        </aside>

        <aside style={{ width: is768 ? "100%" : "50%", }}>
          {/* <Form /> */}
          <form onSubmit={handleSubmit}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <CustomInput
                label="First name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              <CustomInput
                label="Last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <CustomInput
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <CustomInput
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <CustomInput
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />

            <div style={{ marginBottom: "20px" }}>
              <label className={styles.input_label} htmlFor="content">
                Content
              </label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                className={styles.input}
                style={{ height: 100 }}
              />
            </div>

            <button type="submit" className={styles.submit_btn}>
              SUBMIT
            </button>
          </form>
        </aside>
      </section>
    </div>
  );
};

export default Contact;
