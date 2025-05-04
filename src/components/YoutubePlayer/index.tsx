import YouTube, { YouTubeProps } from "react-youtube";
import { CSSProperties } from "styled-components";

type Props = {
  videoId: string;
  loading?: "eager" | "lazy";
  id?: string;
  style?: CSSProperties;
  className?: string;
  iFrameClassName?: string;
  title?: string;
};

const YoutubePlayer = ({
  videoId = "",
  loading,
  id = "youtube-player",
  style,
  className,
  iFrameClassName,
  title,
}: Props) => {
  const opts = {
    height: "800",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const onPlay: YouTubeProps["onPlay"] = (e) => {
    e.target.playVideo();
  };

  return (
    <YouTube
      videoId={videoId} // defaults -> ''
      id={id} // defaults -> ''
      className={className} // defaults -> ''
      iframeClassName={iFrameClassName} // defaults -> ''
      style={style} // defaults -> {}
      title={title} // defaults -> ''
      loading={loading} // defaults -> undefined
      opts={opts} // defaults -> {}
      onPlay={onPlay} // defaults -> noop
    />
  );
};

export default YoutubePlayer;
