import React from 'react';
import { toast } from 'react-toastify';

export const showToast = (props) => {
  const {
    type,
    text,
    position,
    autoClose,
    hideProgressBar,
    closeOnClick,
    pauseOnHover,
    draggable,
  } = props;

  toast(<p>{text}</p>, {
    position: position || 'top-right',
    autoClose: autoClose || 5000,
    hideProgressBar: hideProgressBar || false,
    closeOnClick: closeOnClick || true,
    pauseOnHover: pauseOnHover || true,
    draggable: draggable || false,
    progressClassName: `Toastify__progress-bar--${type}`,
    type: type || 'default',
  });
};
