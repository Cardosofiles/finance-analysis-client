export interface GitHubUser {
  username: string;
  name: string;
  email: string;
  avatarUrl: string;
}

export async function getGitHubUser(token: string): Promise<GitHubUser | null> {
  try {
    const response = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `token ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Erro ao buscar dados: ${response.status}`);
    }

    const data = await response.json();
    return {
      username: data.login,
      name: data.name,
      email: data.email || "Email privado",
      avatarUrl: data.avatar_url,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
}
