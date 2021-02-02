export async function getKaraokeEvents() {
  const res = await fetch("https://charity-karaoke.fanya.dev/api/karaoke", {
    method: "GET",
  });
  if (res.status === 200) {
    return await res.json();
  }
  return null;
}

export async function getSongsForKaraoke(bearerToken, karaokeId) {
  const bearer = `Bearer ${bearerToken}`;
  const res = await fetch(
    `https://charity-karaoke.fanya.dev/api/song/${karaokeId}`,
    {
      method: "GET",
      withCredentials: true,
      credentials: "include",
      headers: {
        Authorization: bearer,
        "Content-Type": "application/json",
      },
    }
  );
  if (res.status === 200) {
    return await res.json();
  }
  return null;
}
