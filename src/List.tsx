import Article from "./Article";
import Video from "./Video";
import withStyleContent from "./withStyleContent";


type ListProps = {
  list: ({
    type: string;
    url: string;
    views: number;
    title?: undefined;
  } | {
    type: string;
    title: string;
    views: number;
    url?: undefined;
  })[]
}


function List(props: ListProps): JSX.Element {
  const StyleArticle = withStyleContent(Article);
  const StyleVideo = withStyleContent(Video);

  return (
    <>
      {props.list.map((item, index) => {
        switch (item.type) {
          case 'video':
            return (
              <StyleVideo key={index} {...item} />
            );

          case 'article':
            return (
              <StyleArticle key={index} {...item} />
            );
        }
      })}
    </>
  )
};

export default List;