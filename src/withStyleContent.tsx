import New from "./New";
import Popular from "./Popular";

type Item = {
  type: string,
  url?: string,
  title?: string,
  views: number
}

const withStyleContent = (Component: React.ComponentType<Item>): React.ComponentType<Item> => {
  const Wrapper = (props: Item) => {
    return (
      <>
        {props.views <= 100 && <New><Component {...props} /></New>}
        {props.views >= 1000 && <Popular><Component {...props} /></Popular>}
        {props.views > 100 && props.views < 1000 && <Component {...props} />}
      </>
    );
  }

  return Wrapper;
}

export default withStyleContent;