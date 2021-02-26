import '../App.css';

const Card = (props) => {


  const clickHandler = () => {
    props.handler(props.index);
  }
  
  return (
    <div className={props.active ? "panel active" : "panel"} style={{ backgroundImage: `url(${props.url})` }} onClick={clickHandler}>
      <h3>{props.caption}</h3>
    </div>
  )
}

export default Card