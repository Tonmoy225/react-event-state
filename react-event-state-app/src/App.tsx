// import { useState } from 'react'

// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     function handleClick (){
//       alert('button clicked')
//     }  

//       <button onclick = "handleClick ()">Click Me</button> //Here is line is Javascript 


      // {/* <button onClick ={handleClick}>Click Me 2</button> */}

//       <button>Click Me 3</button>

      
//     </>

//   )
// }

// export default App



import { Suspense } from 'react'
import { useState } from 'react'
import './App.css'
import Cart from './Cart'
import Counter from './Counter'
import Batter from './Batter'
import Users from './Users'
import Todos from './Todos'


const usersDataPromise = async() =>{
  const res = await fetch ('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return data;
}


function App() {


  // const handleClick = () => {  // Arrow function used to call 
  //   alert('click me 3')
  // }

  // function handlesClick() {
  //   alert('button clicked 2') // Tradional function use to call 
  // }

  // const addToCart = (tk) => {  // Using arrow function perameter
  //   alert('Buy now = '+ tk)
  //}



  return (
    <>
    {/* // Example for State Matter and Re-rendering works: */}

     {/* <Cart></Cart> */}

    {/* // useState React elemnet use : 

    <Counter></Counter>

    <p>______________________________________________________</p>

    // Another Example of useState :

    <Batter></Batter> */}

    <p>______________________________________________________</p>

    //Here we see the async and await methods 

    {/* *
    *1. Suspense fallback 
     * 2. create a promise function to load data
     * 3.send to promise to the component to load data
     */}


    <Suspense fallback ={<p>Loading...</p>}>
      <Users usersDataPromise = {usersDataPromise()}></Users>
    </Suspense>


    // Using Todos methods 

    <Todos></Todos>






   





      {/* <button onClick={handleClick}>Click Me</button> // simple button create 

      <button onClick={handlesClick}>Click Me 2</button> // button with traditional function call 

      <button onClick={handleClick}>Click Me 3</button>  // button with arrow function call 

      <button onClick={() => alert('Click 4')}> Click Me 4</button> // Attach a function inside the link property

       <button onClick={() => addToCart(56)}> Click Me 5</button>  // call arrow function using Function Argument */}
    </>
  )
}

export default App