import { ChangeEvent, FC } from "react";

type OptionType = { value: string; name: string };
type Props = {
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  testId: string;
  name: string;
  options: OptionType[];
};
const Select: FC<Props> = ({ onChange, testId, name, options }) => {
  return (
    <select onChange={onChange} data-test-id={testId} name={name}>
      {options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
