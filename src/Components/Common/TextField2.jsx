import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StylePropType from 'react-style-proptype';
import { cx } from 'emotion';
import { useMemoizedId, deprecatedProp as deprecated } from './utils';

const isTextTruthy = val => val !== undefined && val !== null && val.toString() !== '';

const TextField = React.forwardRef(
  (
    {
      autoFocus,
      bsStyle,
      className,
      disabled,
      helpText,
      id,
      inputStyle,
      label,
      name,
      onBlur,
      onChange,
      onClick,
      onFocus,
      onKeyDown,
      placeholder,
      required,
      rightAddon,
      status,
      style,
      type,
      value,
      pattern,
      ...rest
    },
    ref,
  ) => {
    const [float, setFloat] = useState(isTextTruthy(value));

    const uniqueId = useMemoizedId({ label: `${name}-${placeholder}-${label}` });

    useEffect(() => {
      setFloat(isTextTruthy(value));
    }, [setFloat, value]);

    const handleBlur = e => {
      setFloat(isTextTruthy(value));
      onBlur && onBlur(e);
    };

    const handleFocus = e => {
      setFloat(true);
      onFocus && onFocus(e);
    };

    const handleChange = e => {
      const isValid = !pattern || !!e.target.value.match(new RegExp(`^${pattern}$`));
      onChange && onChange({ ...e, isValid });
    };

    const inputId = id || uniqueId;
    const isTextArea = type === 'textarea';

    const wrapperClassNames = cx(
      'form-group', className, { 'form-group-active': label && float, [`has-${status || bsStyle}`]: status || bsStyle, required, disabled },
    );

    const inputProps = {
      ...rest,
      autoFocus,
      className: 'form-control',
      disabled,
      id: inputId,
      name,
      onBlur: handleBlur,
      onChange: handleChange,
      onClick,
      onFocus: handleFocus,
      onKeyDown,
      placeholder,
      ref,
      required,
      style: inputStyle,
      value,
      pattern,
    };

    if (!isTextArea) {
      inputProps.type = type;
    }

    const inputElement = isTextArea ? (
      <textarea {...inputProps} />
    ) : (
      <input {...inputProps} />
    );

    const labelElement = label ? (
      <label
        className={cx('control-label', { 'textarea-label': isTextArea })}
        htmlFor={inputId}
        title={label}
      >
        {label}
      </label>
    ) : null;

    return (
      <div className={wrapperClassNames} style={style}>
        <div className="input-group" style={{ width: '100%', zIndex: 0 }}>
          {inputElement}
          {labelElement}
          {rightAddon && <span className="input-group-btn">{rightAddon}</span>}
        </div>
        {helpText ? <small className="help-block">{helpText}</small> : null}
      </div>
    );
  },
);

TextField.displayName = 'TextField';

TextField.defaultProps = {
  autoFocus: false,
  className: '',
  disabled: false,
  required: false,
  type: 'text',
  value: '',
};

TextField.propTypes = {
  name: PropTypes.string,
  type: PropTypes.oneOf(['text', 'number', 'password', 'url', 'search', 'email', 'tel', 'textarea']),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.node,
  placeholder: PropTypes.string,
  helpText: PropTypes.node,
  id: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
  status: PropTypes.oneOf(['success', 'warning', 'error', '']),
  className: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  style: StylePropType,
  inputStyle: StylePropType,
  rightAddon: PropTypes.element,
  pattern: PropTypes.string,
  bsStyle: deprecated(PropTypes.oneOf(['success', 'warning', 'error', '']), 'Use `status` instead.'),
};

export default TextField;
