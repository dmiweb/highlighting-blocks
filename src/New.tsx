function New(props: {children: JSX.Element}): JSX.Element {
  return (
    <div className="wrap-item wrap-item-new">
      <span className="label">New!</span>
      {props.children}
    </div>
  )
};

export default New;