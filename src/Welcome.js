import './Welcome.css';
import Goods from './Goods';


const goods = [
  {"title": "apple", "cost" : 330, "image": "https://cdn0.iconfinder.com/data/icons/fruity-3/512/Apple-64.png"},
  {"title": "grape", "cost" : 220, "image": "https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C229-64.png"},
  {"title": "mango", "cost" : 410, "image": "https://cdn0.iconfinder.com/data/icons/fruity-3/512/Mango-64.png"}
]

function Welcome(props) {
    return (
    <div className='welcome'>
        <h1>NEEKIT Landing</h1>
        <h2>Interactive slogan</h2>
        <h3>{props.data.site_name}</h3>
        {goods.map(item => <Goods key={item.title} title={item.title} cost={item.cost} image={item.image} />)}
        <Nav nav={props.data.nav} />      
    </div>
    );
  }

function Nav(props){
  let navigation = props.nav;
  const listItem = navigation.map(item => <li key={item.link}><a href={item.link}>{item.text}</a></li>)
  return(
    <nav>
      <ul>
        {listItem}
      </ul>
    </nav>
  );
}

export default Welcome;