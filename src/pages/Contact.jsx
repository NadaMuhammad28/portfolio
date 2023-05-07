import { styled } from "@mui/system";
import ContactForm from "../components/contact/ContactForm";
import ContactTitle from "../components/contact/ContactTitle";

const Contact = () => {
  return (
    <Wrapper className="section">
      <ContactTitle />
      <ContactForm />
    </Wrapper>
  );
};

const Wrapper = styled("main")`
  overflow: hidden;
  flex-direction: column;
  gap: 2rem;
`;

export default Contact;
