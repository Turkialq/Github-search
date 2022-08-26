import { Navigate } from "react-router-dom";

const GITHUB_UL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_KEY;

export const getUsers = async (name: string) => {
  const user = await fetch(`${GITHUB_UL}/search/users?q=${name}`, {
    headers: {
      Authorization: `token${GITHUB_TOKEN}`,
    },
  });

  const { items } = await user.json();
  return items;
};

export const getUser = async (name: string) => {
  const user = await fetch(`${GITHUB_UL}/users/${name}`, {
    headers: {
      Authorization: `token${GITHUB_TOKEN}`,
    },
  });
  if (user.status === 404) {
    <Navigate to="/notfound" />;
  } else {
    const data = await user.json();
    return data;
  }
};

export const getRepos = async (name: string) => {
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
  return data;
};
