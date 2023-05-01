function Goods(props) {
    return(
         <span className="goods-block">
            <span>{props.title}</span>
            <span>{props.cost}</span>
            <img src={props.image} aldt={props.title}></img>
         </span>   
    );
}

export default Goods;