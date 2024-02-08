import React from "react";

import Base from "./base";
import Rotator from "./rotator";
import Rewind from "./rewind";

const TP7Final: React.FC = () => {
  const [isRecording, setIsRecording] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isStopped, setIsStopped] = React.useState(false);
  const [isRewinding, setIsRewinding] = React.useState(false);
  const [rewindDirection, setRewindDirection] = React.useState<
    "up" | "down" | null
  >(null);

  const handleRewind = (direction: "up" | "down") => {
    setIsRewinding(true);
    setRewindDirection(direction);
  };

  const handleRewindStop = () => {
    setIsRewinding(false);
    setRewindDirection(null);
  };

  const handlePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleStop = () => {
    if (isRecording) {
      setIsRecording(false);
    }

    setIsPlaying(false);
    setIsStopped(true);

    setTimeout(() => {
      setIsStopped(false);
    }, 100);
  };

  const handleRecord = () => {
    setIsStopped(true);
    setTimeout(() => {
      setIsStopped(false);
    }, 200);
    setIsRecording(true);
    setIsPlaying(true);
  };

  return (
    <div
      style={{
        position: "relative",
        width: 440,
        height: 460,
      }}
    >
      <Base
        rotator={
          <Rotator
            isStopped={isStopped}
            isPlaying={isPlaying}
            isRewinding={isRewinding}
            rotateDirection={rewindDirection}
          />
        }
        rewinder={
          <Rewind isRewinding={isRewinding} rewindDirection={rewindDirection} />
        }
      />
      <button className="button-base button-control-rotator" />
      <button className="button-base button-control-knob" />
      <button
        onMouseUp={handleRewindStop}
        onMouseDown={() => handleRewind("down")}
        className="button-base button-rewind-down"
      />
      <button
        onMouseUp={handleRewindStop}
        onMouseDown={() => handleRewind("up")}
        className="button-base button-rewind-up"
      />
      <button className="button-base button-control-mode" />
      <button
        className="button-base button-control-left"
        onClick={handleRecord}
      />
      <button className="button-base button-control" onClick={handlePlay} />

      <button
        className="button-base button-control-right"
        onClick={handleStop}
      />
      <button className="button-base button-control-volume-up button-control-round" />
      <button className="button-base button-control-volume-down button-control-round" />
      <button className="button-base button-control-memo" />
      <button className="button-base button-control-user-one" />
      <button className="button-base button-control-user-two" />
      <div
        className={`indicator ${
          isPlaying && !isRecording && "indicator-normal"
        } ${isRecording && "indicator-flash"} `}
      />
    </div>
  );
};

export default TP7Final;
