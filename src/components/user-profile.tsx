"use client"; // Certifique-se de adicionar isso

import { type GitHubUser, getGitHubUser } from "@/api/get-user-github";
import { useEffect, useState } from "react";

const token = "SEU_TOKEN_AQUI";

export function GitHubProfile() {
  const [user, setUser] = useState<GitHubUser | null>(null);

  useEffect(() => {
    async function fetchUserData() {
      const userData = await getGitHubUser(token);
      setUser(userData);
    }
    fetchUserData();
  }, []);

  if (!user) return <p>Carregando...</p>;

  return (
    <div>
      <img src={user.avatarUrl} alt={user.name} width={100} />
      <h2>{user.name}</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}
