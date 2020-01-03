import React from "react";
import styled from "styled-components";

const Controls = styled.div`
  z-index: 100;
  font-size: 2rem;
  position: fixed;
  bottom: 0.3rem;
  right: 0.5rem;
`;

export const Music = () => {
  const [mute, setMute] = React.useState(true);

  const toggleMute = () => {
    mute ? setMute(false) : setMute(true);
    mute
      ? document.getElementById("homeMusic").play()
      : document.getElementById("homeMusic").pause();
  };

  const Mute = () => {
    return <>{mute ? <div>🔇</div> : <div>🔊</div>}</>;
  };

  console.log("mute is currently ", mute);
  return (
    <>
      <Controls onClick={() => toggleMute()}>
        <Mute />
      </Controls>
      <audio id="homeMusic">
        <source
          src="https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Ziklibrenbib/Tintamare/st/Tintamare_-_04_-_Propane.mp3"
          type="audio/mpeg"
        />
      </audio>
    </>
  );
};
