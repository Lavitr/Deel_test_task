import React from "react";

type InputProps = {
  searchValue: string;
  classNames: string;
  handleInputChange: (event: React.FormEvent<HTMLInputElement>) => void;
};

const Input: React.FunctionComponent<InputProps> = ({
  searchValue,
  classNames,
  handleInputChange,
}: InputProps) => (
  <input
    placeholder="Search name"
    className={classNames}
    value={searchValue}
    onChange={handleInputChange}
  />
);

export default Input;
