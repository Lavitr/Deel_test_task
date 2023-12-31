import React, { FC, useState, useEffect } from "react";
import { getUserData, highlightSearchPattern } from "./utils";
import Input from "./Input";
import "./App.css";

const App: FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [allUserNames, setAllUserNames] = useState<string[]>([]);
  const [filteredNames, setFilteredNames] = useState<string[]>([]);

  useEffect(() => {
    getUserData([setAllUserNames, setFilteredNames]);
  }, []);

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const value: string = e.currentTarget.value;
    setSearchValue(value);
    setFilteredNames(
      value
        ? allUserNames
            .filter(
              (userName) =>
                value && userName.toLowerCase().includes(value.toLowerCase())
            )
            .map((userName) => highlightSearchPattern(userName, value))
        : allUserNames
    );
  };

  const handleItemClick = (name: string): void => {
    const userName = name
      .replaceAll("</span>", "")
      .replaceAll(`<span style="background-color: yellow;">`, "");
    setSearchValue(userName);
    setFilteredNames([]);
  };

  return (
    <div className="app">
      <h3>Names of users</h3>
      <Input
        searchValue={searchValue}
        handleInputChange={handleInputChange}
        classNames={filteredNames.length!! ? "input" : "input selected"}
      />
      <ul className="users-list-wrapper">
        {filteredNames.map((name) => (
          <li
            className="user-item"
            key={name}
            onClick={() => handleItemClick(name)}
            dangerouslySetInnerHTML={{ __html: name }}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default App;
