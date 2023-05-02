const inputs = [
  {
    id: "name",
    label: "Full Name",
    type: "text",
    variant: "standard",
    name: "name",
    err: "Name is required",
    pattern: /^[a-zA-Z ]+$/,
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    variant: "standard",
    name: "email",
    err: "Enter a Valid e-mail",
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  {
    id: "subject",
    label: "Subject",
    type: "text",
    variant: "standard",
    name: "subject",
    err: "Subject is required",
    pattern: /^.{1,100}$/,
  },
  {
    id: "message",
    label: "Message",
    // multiline
    variant: "standard",
    rows: 4,
    name: "message",
    err: "Message is required",

    pattern: /^[\s\S]{1,10000}$/,
  },
];
export default inputs;
