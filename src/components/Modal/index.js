import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import "./style.css"



function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  
  export default function SimpleModal(props) {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const body = (
      <div style={modalStyle} className={classes.paper} id="center-modal">
        <h1 id="simple-modal-title" style={{color: "black", fontSize: "20px", textAlign: "center"}}>{props.projects}</h1>
        {/* <p id="simple-modal-description" style={{color: "black", fontSize: "12px"}}>
          Github Url: {props.github}
        </p> */}
        <p style={{color: "black", fontSize: "12px"}}>{props.description}</p>
        <p id="simple-modal-description" style={{color: "black", fontSize: "12px"}} href={props.github}>
        Github Url: <a href={props.github}>{props.github}</a>
        </p>
        <p style={{color: "black", fontSize: "12px"}}>Deployed App:<a href={props.deployed}>{props.deployed}</a></p>
        <button  id="close-button"type="button" onClick={handleClose} style={{display: "block", margin: "0 auto", marginTop: "20px"}}>
          Close
        </button>
      </div>
    );
  

    return (
      <div>
        <button type="button" onClick={handleOpen}  className="project-button" style={{display: "block", margin: "0 auto", fontSize: "16px"}}>
          {props.projects}
        </button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
    );
  }

