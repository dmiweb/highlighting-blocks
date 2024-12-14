type ItemProps = {
  type: string,
  title?: string,
  views: number
}

function Article(props: ItemProps): JSX.Element {
  return (
    <div className="item item-article">
      <h3><a href="#">{props.title}</a></h3>
      <p className="views">Прочтений: {props.views}</p>
    </div>
  )
};

export default Article;