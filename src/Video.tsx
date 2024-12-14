type ItemProps = {
  type: string,
  url?: string,
  views: number
}

function Video(props: ItemProps): JSX.Element {
  return (
    <div className="item item-video">
      <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      <p className="views">Просмотров: {props.views}</p>
    </div>
  )
};

export default Video;