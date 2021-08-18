import React, { InputHTMLAttributes, TextareaHTMLAttributes, useState } from 'react';

import { StyledInput, StyledInputWrapper, StyledTextArea, TagifiedInput } from './styles';

interface InputProps {
  textarea?: boolean;
  tagify?: boolean;
  badged?: boolean;
  limit?: number;
  value?: string;
}

const Input: React.FC<InputProps & (InputHTMLAttributes<unknown> | TextareaHTMLAttributes<unknown>)> = ({ badged = false, limit = 32, value = '', tagify = false, textarea = false, ...props }) => {
  const [maxRemaining, setMaxRemaining] = useState(limit - value.length);

  const tick = (e: Event) => {
    const elem = e.target as HTMLInputElement;

    if (!elem) return;

    const { parentElement: parent, value: valued } = elem;
    const { length } = valued;

    setMaxRemaining(limit - length);

    parent?.classList.remove('warning', 'critical');

    if (length / limit >= 0.9)
      // We've reached 90% of the limit.
      parent?.classList.add('critical');
    else if (length / limit >= 0.75)
      // Reached 75% of the limit.
      parent?.classList.add('warning');
  };

  const ComponentToRender: React.FC = textarea ? StyledTextArea : tagify ? TagifiedInput : StyledInput;

  return !badged ? (
    <ComponentToRender maxLength={limit} {...props} />
  ) : (
    <StyledInputWrapper data-limit={limit} data-remaining={maxRemaining}>
      <ComponentToRender onKeyUp={tick} maxLength={limit} {...props} />
    </StyledInputWrapper>
  );
};

export default Input;
