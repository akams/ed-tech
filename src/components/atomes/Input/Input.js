import React from 'react';
import { Input, Label } from 'reactstrap';

export default ({
  input,
  label,
  typeLabel,
  placeholder,
  type,
  meta: { touched, error, warning },
}) => (
  <div>
    {label && <Label for={typeLabel || 'id'}>{label}</Label>}
    <div>
      <Input placeholder={placeholder} type={type} {...input} />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);
