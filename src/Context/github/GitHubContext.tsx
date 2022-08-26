import { useReducer, createContext, ReactNode } from "react";
import githubReducer from "./GithubReducer";

type GithubProviderProps = {
  children: ReactNode;
};

type GithubContextProps = {
  users: [];
  user: {};
  repos: [];
  clearUser: () => void;
};
const GithubContext = createContext({} as GithubContextProps);

const GITHUB_UL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_KEY;

export const GithubProvider = ({ children }: GithubProviderProps) => {
  const intialState = {
    users: [],
    user: {},
    repos: [],
    loader: false,
  };

  const [state, dispatch] = useReducer(githubReducer, intialState);

  const getRepos = async (name: string) => {
    const params = new URLSearchParams({
      sort: "created",
      per_page: "10",
    });

    const repos = await fetch(`${GITHUB_UL}/users/${name}/repos?${params}`, {
      headers: {
        Authorization: `token${GITHUB_TOKEN}`,
      },
    });

    const data = await repos.json();
    dispatch({
      type: "GET_REPOS",
      payload: data,
    });
  };

  const clearUser = () => {
    dispatch({
      type: "CLEAR_USERS",
    });
  };

  return (
    <GithubContext.Provider value={{ ...state, dispatch, clearUser }}>
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;
