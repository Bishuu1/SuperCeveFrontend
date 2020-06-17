import React from 'react';
import { useField, ErrorMessage } from 'formik';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

const Input = ({ label, extra, className, max, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={className}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        className={classnames('text-input', {
          error: meta.touched && meta.error,
        })}
        maxLength={max}
        {...field}
        {...props}
      />
      <div className="error-message">
        <ErrorMessage className="error-message" name={props.id || props.name} />
      </div>
      {!meta.error && <p className="extra-message">{extra}</p>}
    </div>
  );
};

const Checkbox = ({ children, className, ...props }) => {
  const [field] = useField({ ...props, type: 'checkbox' });
  return (
    <div className={className}>
      <label className="checkbox">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      <div className="error-message">
        <ErrorMessage name={props.id || props.name} />
      </div>
    </div>
  );
};

const Select = ({ label, className, ...props }) => {
  const [field] = useField(props);
  return (
    <div className={`relative ${className}`}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      <FontAwesomeIcon icon={faSortDown} className="icon-select" />
      <div className="error-message">
        <ErrorMessage name={props.id || props.name} />
      </div>
    </div>
  );
};

const TextArea = ({ label, className, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={className}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea
        className={classnames('text-area', {
          error: meta.touched && meta.error,
        })}
        {...field}
        {...props}
      ></textarea>
      <div className="error-message">
        <ErrorMessage name={props.id || props.name} />
      </div>
    </div>
  );
};

export { Input, TextArea, Checkbox, Select };
