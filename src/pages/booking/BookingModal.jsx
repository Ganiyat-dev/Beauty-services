import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog({openmodal, handleClose }) {
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

 

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={openmodal}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={{color: "#2195EC"}}>
        Personalized Makeup Training
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You have successfully booked an appointment with us. Please wait while one of our agents contacts you.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Disagree</Button> */}
          <Button onClick={handleClose} autoFocus>
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}