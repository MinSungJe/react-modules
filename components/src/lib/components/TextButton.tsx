import styled from '@emotion/styled';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color?: string;
  backgroundColor?: string;
}

/**
 * Renders a styled button with customizable text, text color, and background color.
 *
 * @param text - The label displayed on the button.
 * @param color - The text color. Defaults to white (`#fff`) if not specified.
 * @param backgroundColor - The button's background color. Defaults to dark gray (`#333`) if not specified.
 *
 * @returns A React element representing the styled button.
 */
function TextButton({ text, color = '#fff', backgroundColor = '#333', ...props }: ButtonProps) {
  return (
    <StyleButton color={color} backgroundColor={backgroundColor} {...props}>
      {text}
    </StyleButton>
  );
}

export default TextButton;

const StyleButton = styled.button<{ color: string; backgroundColor: string }>`
  cursor: pointer;

  width: 100%;
  height: 44px;
  border-radius: 5px;
  border: 1px solid rgba(51, 51, 51, 0.25);
  font-size: 15px;
  font-weight: 700;
  padding: 5px 20px;

  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
