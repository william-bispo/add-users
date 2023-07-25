import ReactDOM from "react-dom";

import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const Backdrop = ({ onClickHandler }) => {
  return <div className={classes.backdrop} onClick={onClickHandler}></div>;
};

const ModalOverlay = ({ title, message, onClickHandler }) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{title}</h2>
      </header>
      <div className={classes.content}>
        <p>{message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={onClickHandler}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = ({ title, message, onClick }) => {
  const onClickHandler = () => {
    onClick();
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClickHandler={onClickHandler} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={title}
          message={message}
          onClickHandler={onClickHandler}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
