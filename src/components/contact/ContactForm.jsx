import emailjs from "@emailjs/browser";
import TextField from "@mui/material/TextField";
import Grid2 from "@mui/material/Unstable_Grid2";
import CTAButton from "../subComponents/CTAButton";
import React, { useRef, useState } from "react";
import { styled } from "@mui/system";

export default function ContactForm() {
  const form = useRef();
  // const [err, setErrMsg] = useState({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // });
  const sendEmail = async (e) => {
    try {
      await emailjs.sendForm(
        "service_h3gpw6w",
        "template_y6aqqfr",
        form.current,
        "urDqjkfYH-loLwCSf"
      );
    } catch (e) {
      console.log(error.text);
    }
  };

  // const setHelperText = (fieldName) => {
  //   console.log(fieldName);
  //   setErrMsg({
  //     ...err,
  //     name: `${fieldName} is required`,
  //   });
  //   console.log(err);
  // };

  // const validateInputs = (name, email, subject, message) => {
  //   if (!name) setHelperText("name");
  //   if (!email) setHelperText("email");
  //   if (!subject) setHelperText("subject");
  //   if (!message) setHelperText("message");
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");
    // validateInputs(name, email, subject, message);
    const isFormFilled = name && email && subject && message;
    if (isFormFilled) {
      console.log("Form submitted:", formData);
      sendEmail();
    } else {
      // setErrMsg("");
      console.log("Please fill in all fields");
    }
  };

  return (
    <form onSubmit={handleSubmit} ref={form}>
      <Grid2 container spacing={4}>
        <Grid2 item xs={12} sm={6}>
          <Text
            id="name"
            label="Full Name"
            type="text"
            variant="standard"
            name="name"
            fullWidth
          />
        </Grid2>
        <Grid2 item xs={12} sm={6}>
          <Text
            id="email"
            label="Email
            "
            fullWidth
            type="text"
            variant="standard"
            size="small"
            name="email"
          />
        </Grid2>

        <Grid2 item xs={12}>
          <Text
            id="subject"
            label="Subject"
            type="text"
            variant="standard"
            size="small"
            name="subject"
            fullWidth
          />
        </Grid2>
        <Grid2 item xs={12}>
          <Text
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            variant="standard"
            rows={4}
            name="message"
            fullWidth
          />
        </Grid2>
        <Grid2
          item
          xs={12}
          alignSelf="center"
          spacing={2}
          container
          justifyContent="center"
        >
          <CTAButton text="Send" />
        </Grid2>
      </Grid2>
    </form>
  );
}

const Text = styled(TextField)`
  label {
    color: #d1d5db !important;
    z-index: 1;
  }
  .css-l4u8b9-MuiInputBase-root-MuiInput-root:after,
  .css-1rcvvn7-MuiInputBase-root-MuiInput-root:after {
    border-bottom: 3px solid #f54996;
  }
  .css-l4u8b9-MuiInputBase-root-MuiInput-root:hover:before,
  .css-1rcvvn7-MuiInputBase-root-MuiInput-root:hover:before {
    border-bottom: 3px solid #cf23cf !important;
  }
  .css-l4u8b9-MuiInputBase-root-MuiInput-root:before,
  .css-1rcvvn7-MuiInputBase-root-MuiInput-root:before {
    border-bottom: 3px solid #d1d5db;
  }

  input,
  textarea {
    color: #f3f3f3;
    padding: 0.2rem 0;
  }
`;
