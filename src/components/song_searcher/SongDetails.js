import React from "react";
import { Message } from "../Loader/Message";
import { SongArtist } from "./SongArtist";
import { SongLyric } from "./SongLyric";

export const SongDetails = ({ search, lyric, bio }) => {
  if (!lyric || !bio) return null;

  return (
    <>
      {lyric.error || lyric.err ||lyric.name === "AbortError" ? (
        <Message
          msg={`Error: Your music, called "<em>${search.song}</em>" , doesn´t exit`}
          bgColor="#dc3545"
        />
      ) : (
        <SongLyric title={search.song} lyrics = {lyric.lyrics} />
      )}
      {bio.artists ? (
        <SongArtist artist={bio.artists[0]} />
      ) : (
        <Message
          msg={`Error: Your interpreter, called "<em>${search.artist}</em>" , doesn´t exit`}
          bgColor="#dc3545"
        />
      )}
    </>
  );
};
