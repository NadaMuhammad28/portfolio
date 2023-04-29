import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useGlobalContext } from '../../context/GlobalContext';
import { styled } from '@mui/system';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'hsla(0, 0%, 7%, 1)',
  color:  '#988e9f',
  border: '2px solid #000',
  borderRadius: 6, // Set the border radius of the modal
  boxShadow: "0px 5px 2px  #f54996 ",
  p: 4,
  
};

export default function ContactModal() {
  const { isModalOpened, handleModal } = useGlobalContext();

  return (
    
      <ModalWrapper
        open={isModalOpened}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h3"  gutterBottom>
            Email sent
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Thanks for contacting me. I will get in touch with you shortly! :)
          </Typography>
        </Box>
      </ModalWrapper>
  
  );
}
const ModalWrapper = styled(Modal)`
h3{
    text-align:center;
    color:#f3f3f3;
}

display: flex;
align-items: center;
justify-content: center;
animation-name: slide-up;
animation-duration: 0.3s;
animation-timing-function: all ease-in-out;
transition: all 0.3s ease-in-out;

@keyframes slide-up {
  from {
    transform: translateY(20%);
  }
  to {
    transform: translateY(0);
  }
}

`