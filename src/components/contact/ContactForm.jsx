import emailjs from "@emailjs/browser";
import Grid2 from "@mui/material/Unstable_Grid2";
import CTAButton from "../subComponents/CTAButton";
import React, { useRef } from "react";
import Field from "./Field";
import inputs from "../../utils/Cotactform";
import { useGlobalContext } from "../../context/GlobalContext";
import Modal from "./Modal";

export default function ContactForm() {
  const { fieldState, handleModal } = useGlobalContext();
  const form = useRef();
  const sendEmail = async () => {
    try {
      await emailjs.sendForm(
        VITE_REACT_APP_EMAIL_SERVICE_ID,
        VITE_REACT_APP_EMAIL_TEMPLATE_ID,
        form.current,
        VITE_REACT_APP_EMAIL_PUBLIC_KEY
      );
    } catch (e) {
      console.log(error.text);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail();
    handleModal();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        ref={form}
        autoComplete="off"
        // style={{ overflow: "hidden" }}
      >
        <Grid2 container spacing={3}>
          {inputs.map((el) => {
            return (
              <Grid2
                key={el.id}
                item
                xs={12}
                sm={el.id == "name" || el.id == "email" ? 6 : 12}
              >
                <Field props={{ ...el }} />
              </Grid2>
            );
          })}

          <Grid2
            item
            xs={12}
            alignSelf="center"
            container
            justifyContent="center"
            paddingY={4}
          >
            <CTAButton
              text="Send"
              disabled={
                !(
                  fieldState.name &&
                  fieldState.email &&
                  fieldState.subject &&
                  fieldState.message
                )
              }
            />
          </Grid2>
        </Grid2>
      </form>
      <Modal />
    </>
  );
}
