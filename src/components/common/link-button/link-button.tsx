import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  to: string;
  testId: string;
  aditionClassNames?: string;
  children: string | ReactNode;
  state?: object;
  onClick?: () => void;
};

const LinkButton: FC<Props> = ({
  to,
  state,
  testId,
  aditionClassNames,
  children,
  onClick,
}) => {
  return (
    <Link
      onClick={onClick}
      to={to}
      data-test-id={testId}
      className={aditionClassNames ? `button ${aditionClassNames}` : "button"}
      state={state}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
