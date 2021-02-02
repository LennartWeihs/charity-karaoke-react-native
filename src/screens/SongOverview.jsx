import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import Loading from "./Loading";
import BaseView from "./BaseView";
import TitledCard from "../components/TitledCard";
import SongVoting from "../components/SongVoting";
import { getSongsForKaraoke } from "../charity-karaoke-api/karaokeInfo";

function SongOverview({ route }) {
  const [songInfo, setSongInfo] = useState(null);

  useEffect(() => {
    getSongsForKaraoke(route.params.token, route.params.karaokeId).then(
      (songArr) => {
        if (!songArr) {
          setSongInfo([]);
          return;
        }
        setSongInfo(songArr);
      }
    );
  }, []);

  if (!songInfo) {
    return <Loading />;
  }

  let content;
  const songInfoLen = songInfo.length;
  if (!songInfoLen) {
    content = <Text>No Songs found!</Text>;
  } else {
    content = songInfo.map(({ id, title, artist, user: { username } }, i) => {
      return (
        <SongVoting
          styles={i === songInfoLen - 1 ? {} : { marginBottom: 10 }}
          key={id}
          artist={artist}
          title={title}
          singer={username}
        />
      );
    });
  }

  return (
    <BaseView>
      <TitledCard title="Abstimmung">
        <View>{content}</View>
      </TitledCard>
    </BaseView>
  );
}

export default SongOverview;
