function Popular(props: {children: JSX.Element}): JSX.Element {
  return (
    <div className="wrap-item wrap-item-popular">
      <span className="label">Popular!</span>
      {props.children}
    </div>
  )
};

export default Popular;