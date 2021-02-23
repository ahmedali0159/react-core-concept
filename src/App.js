import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const artists = ['Vinci','Van','Bob','Vexx','Tom','Boris','Minty' ]
  const products = [
    {name:'Photoshop', price:'$90.99'},
    {name:'Illustrator', price:'$60.99'},
    {name:'PDF Reader', price:'$6.99'},
    {name:'Premier Pro', price:'$99.99'},
  ]

  return (
    <div className="App">
      <header className="App-header">
        <p>I am React Person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            artists.map(artist => <li>{artist}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }         
        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }
       <Person></Person>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () =>  setCount(count + 1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onMouseMove={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic users: {users.length}</h3>
      <ul>
        {
          console.log(users)
        }
        {
          users.map(user => <li>{user.phone}</li>)
        }
      </ul>
    </div>
  )
}

function  Product(props) {
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
  const {name, price} =  props.product; 
  
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
}

function Person(Props){
  return(
    <div style={{border:'2px solid pink', width:'500px'}}>
      <h3> Name: {Props.name}</h3>
      <p> Profession: {Props.job}</p>
    </div>
    )
}


export default App;
