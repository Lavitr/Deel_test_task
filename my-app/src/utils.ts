import { Dispatch } from "react";

const apiUrl = "https://jsonplaceholder.typicode.com/users";

export const getUserData = async (
  hooks: Dispatch<string[]>[]
): Promise<void> => {
  try {
    const fetchUsers = await fetch(apiUrl);
    const users = await fetchUsers.json();
    const userArray = users.map((i: any) => i.name);
    hooks[0](userArray);
    hooks[1](userArray);
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Backend responded with ${error.message} error`);
    }
  }
};

export const highlightSearchPattern = (
  userName: string,
  searchValue: string
): string => {
  const regex = new RegExp(searchValue, "gi");
  const userNameWithHighlight = (userName as any as string).replace(
    regex,
    (str) => {
      return "<span style='background-color: yellow;'>" + str + "</span>";
    }
  );
  return userNameWithHighlight;
};
