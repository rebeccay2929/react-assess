import "./styles/App.css"
import React from "react";
import data from "./models/data.json";
import Header from "./components/Header"
import ProductList from "./components/ProductList";
import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import About from "./pages/About";
import Basket from "./components/Basket";
import BasketTotal from "./components/BasketTotal";
import BasketCount from "./components/BasketCount";


function App() {
  const [products, setProducts]= useState(data);
  const [term, setTerm] = useState("");
  const [basket, setBasket]= useState([]);
  const [count, setCount]= useState(0);
  const [total, setTotal] = useState(0);


  // async function Search(value)  {
  //   const url = 'https://www.googleapis.com/books/vI/volumes?g=${value}&filter=paid-ebooks&print-type=books&projection=lite';
    
  //   const results = await fetch(url).them((res)=> res.json());
  //   if(!results.error){
  //     setProducts(results.items)
  //   }
  //     }


// useEffect(() => {
//   document.title = basket.length > 0 ? `Media Store (${basket.length})` : "Media Store"
// }, [basket])


const addToBasket = (id) => {
  const basketTemp = basket.concat (products.filter((item) => item.trackId == id))
  setBasket (basketTemp);
setProducts ([
  ...products.map((item) => {
    if (item.trackId == id) {
      item.inBasket = true;
      console.log("products added")
      setTotal(total + item.trackPrice)
    }
    return item;
  })
])
setCount(count +1)

};

const removeFromBasket = (id) => {
  setBasket (basket.filter((item) => item.trackId !== id));
setProducts ([
  ...products.map((item) => {
    if (item.trackId == id) {
      item.inBasket = false;
      console.log("products removed")
      setTotal(total - item.trackPrice)
    }
    return item;
  })
])
setCount(count - 1)
};


  async function search(value) {
    const url = `https://itunes.apple.com/search?term=${value}&limit=30&explicit=no`;

    const results = await fetch(url).then((res) => res.json());
    if (!results.error) { 
    setProducts(results.results);
    }
  };


  
  return(
    <Router>
      <div className="page"> 
      <h1 className="Store"> iTunes Media Store</h1>

      <Header itemCount={count}/>
      <Routes>
        
        <Route path ="/" element ={<Home/>}></Route>
        <Route path ="/about" element ={<About/>}></Route>
        <Route path ="/basket" element ={<BasketItems/>}></Route>

      </Routes>
      </div>
    </Router>
  );

  function Home() {
    return (
      <>
      <Search term={term} setTerm={setTerm} search={search}></Search>
      <ProductList
      items={products}
      addToBasket={addToBasket}
      removeFromBasket={removeFromBasket}
      itemCount={data.length}
      />
      
      </>
    );
  }

  function BasketItems(){
    return (
      <div>
        <BasketCount basketCount={basket.length}/>
        {
          <Basket 
          basket={basket}
          removeFromBasket={removeFromBasket}
          basketCount={count}
          // basketTotal={basketTotal}
          />
        }
        <div>
          {/* Total: <BasketTotal basketTotal={basketTotal}/> */}
        </div>
      </div>
    )
  }
}
export default App;
