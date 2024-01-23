import { FC, ReactNode } from "react";

type Props = {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  children: ReactNode | string;
  onClick?: () => void;
  title?: string;
  aditionClassNames?: string;
  testId: string;
};

const Button: FC<Props> = ({
  children,
  type,
  title,
  disabled,
  testId,
  aditionClassNames,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      data-test-id={testId}
      className={aditionClassNames ? `button ${aditionClassNames}` : "button"}
      type={type}
      title={title}
    >
      {children}
    </button>
  );
};

export default Button;
