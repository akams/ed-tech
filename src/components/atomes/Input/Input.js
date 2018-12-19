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

export const renderSelectInputReduxForm = ({
  input,
  label,
  typeLabel,
  placeholder,
  child,
  meta: { touched, error, warning },
}) => (
  <div>
    {label && <Label for={typeLabel || 'id'}>{label}</Label>}
    <div>
      <Input placeholder={placeholder} type="select" {...input}>
        {child.map((c, i) => {
          if (typeof c === 'object') {
            return <option key={c.value + '_' + i}>{c.value}</option>;
          }
          return <option key={c + '_' + i}>{c}</option>;
        })}
      </Input>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);
