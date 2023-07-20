import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

const ErrorModal = ({ title, message, onClick }) => {
  const onClickHandler = () => {
    onClick();
  };

  return (
    <div onClick={onClickHandler}>
      <div className={classes.backdrop}></div>
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
    </div>
  );
};

export default ErrorModal;
