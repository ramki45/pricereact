import logo from './logo.svg';
import './App.css';
import Shopping from './Shopping';
import { useState } from 'react';

function App() {

  const[product,setProduct] = useState(

   [{
              id : '1',
              image: `https://img.joomcdn.net/66558f9a24b5e9188bf14577e19b42c52301bbbb_original.jpeg`,
              productName: 'Samsung',
              productPrice: 20000,

  },
  {
    id :'2',
    image: "https://image01.realme.net/general/20211129/1638173862664.png",
    productName: 'Iphone',
    productPrice: 40000,

},
{
  id:'3',
  image: "https://image01.realme.net/general/20211129/1638173862664.png",
  productName: 'Redmi',
  productPrice: 10000,

},
{
  id:'4',
  image: "https://image01.realme.net/general/20211129/1638173862664.png",
  productName: 'Realme',
  productPrice: 25000,

},
{
  id:'5',
  image: "https://image01.realme.net/general/20211129/1638173862664.png",
  productName: 'OnePlus',
  productPrice: 45000,

},
{
  id:'6',
  image: "https://image01.realme.net/general/20211129/1638173862664.png",
  productName: 'sony',
  productPrice: 20000,

},





]


)
const [total,settotal] = useState(0);
const [cart,setcart] = useState([]);
const [visible,setvisible] = useState([]);


let handleClick = (obj)=>{

  setcart([...cart,obj])

  settotal(total + obj.productPrice)

}
let removeclick =(obj) => { 
  settotal(total - obj.productPrice)
let index = cart.findIndex(obj => obj.id == product.id )
  let removeData = cart.splice(index, 1)
  setvisible([...removeData])

}



  return ( <div className = "container">
          <h1 className = 'heading'>SHOPPING CART</h1>
          <div className = 'row'>
            <div className = 'col-lg-8'>
              <div className='row'>
            {
              product.map(obj =>
                <Shopping handleClick={handleClick} name = {obj}></Shopping>
              )
            }
            </div>
            </div>
          <div className = 'col-lg-4'>
            {
              cart.map(obj => <div >{obj.productName} <span>{obj.productPrice}</span> 
                <button style = {{marginLeft: '20px', alignItems: 'right'}}class = 'btn btn-danger' onClick={()=> removeclick(obj)}>X</button>
                </div>)



                

            }
            <div className='total'>Total {total}   </div>
          </div>

          </div>








  </div>
  );}

export default App;
