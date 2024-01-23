import { FC, ReactNode } from "react";

type Props = {
  name: string;
  children: ReactNode;
  isInputError?: boolean;
  headingClass?: string;
  errorMessage?: string;
  className: string;
};

const Label: FC<Props> = ({
  name,
  children,
  headingClass,
  className,
  isInputError,
  errorMessage,
}) => {
  return (
    <label className={className}>
      <span
        className={
          headingClass ? `input__heading ${headingClass}` : "input__heading"
        }
      >
        {name}
      </span>
      {children}
      {isInputError && <div>{errorMessage}</div>}
    </label>
  );
};

export default Label;
