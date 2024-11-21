import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Request.css"


function Request({ Ref }) {
  const [FKStore, setFKStore] = useState([]);
  const [json, setjson] = useState([]);

  const getFKS = ()=>{
    setFKStore([])
    axios.get(
        `https://fakestoreapi.com/products/category/electronics?limit=${Ref}`)
      .then((res) => Ref<0 || Ref==0 ?0:setFKStore(res.data));
  }

    useEffect(() => {
        axios.get("http://localhost:3000/lista").then((res) => setjson(res.data));
      },[]) 

  const check = () => {
    const jsonIds = json.map((product) => product.id);

    const newProducts = FKStore.filter(
      (product) => jsonIds.indexOf(product.id) === -1
    );

    Upload(newProducts);      
  };

  const Upload = (products) => {
    products.map((product) =>
      axios
        .post("http://localhost:3000/lista", product)
        .then((res) => {
          console.log("Producto añadido:", res.data);
          setjson((prevJson) => [...prevJson, product]);
        })
    );
  };
  console.log(json)

  return (
    <>
      <button onClick={getFKS}>pedir</button>
      <p>-------------------</p>
      <ul>
        {json.map((product) => (<li key={product.id}>{product.title}</li>, <img key={product.id} src={product.image}></img>))}
      </ul>
      <p>-------------------</p>
      <ul>
        {FKStore.map((product) => (<li key={product.id}>{product.title}</li>))}
      </ul>
      <button onClick={check}>check</button>
    </>
  );
}
export default Request;
