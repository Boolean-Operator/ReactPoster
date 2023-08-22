import { useNavigate } from 'react-router-dom';

import classes from './Modal.module.css';

export default function Modal({ children }) {
  const navigate = useNavigate();

  function closeHandler() {
    navigate('..'); //up one level
  }
  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler} />
      <dialog open={true} className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}
