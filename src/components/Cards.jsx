
import axios from "axios"
import { useEffect, useState } from "react"


export default function Cards() {

  const [cards, setCards] = useState([]) 
  const borrar = (index) => {
    const copyCard = [...cards] 
    copyCard.splice(index, 1)
    setCards(copyCard)

  }
  const [filtro, setFiltro] = useState([])
  
   const clickeame = () =>  {
     const filteredCards = cards.filter((card) => card.id.toString() === filtro);
    setCards(filteredCards);
   
     
  }
   

  const getCards = async () => {

    

    const res = await axios("https://jsonplaceholder.typicode.com/posts")
    setCards(res.data)
    // console.log(res.data)
  }
  useEffect(() => {
    getCards()
  }, [filtro]);
  
  return (


    <div>
      <input
        type="search"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)} placeholder="Busca por Id" />
       <button onClick={clickeame} >Buscar</button>
        {/* {console.log(click)} */}
      {cards.map((card, index) =>
      <div key={index}>
        <h2> {card.id} | {card.title}</h2>
        <p>{card.body}</p>
        <p>{card.userId}</p>
        <button onClick={()=>{borrar(index)} }>Eliminar</button>
      </div>
     )} </div>
    
  )
}
