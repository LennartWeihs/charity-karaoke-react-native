export async function postCharityKaraokeAuth({ username, password }) {
  let res = await fetch("https://charity-karaoke.fanya.dev/api/auth/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
  if (res.status === 200) {
    res = await res.json();
    return res;
  }
  return null;
}
