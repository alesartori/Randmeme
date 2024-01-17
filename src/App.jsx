import { useEffect, useState } from 'react';
const meme_endpoint = "https://api.imgflip.com/get_memes"

export function App () {

  const [allMemes, setAllMemes] = useState([])
  const [meme, setMeme] = useState({url:"http://i.imgflip.com/1bij.jpg"})//meme arranca con esta img

  useEffect(() =>{
    fetch(meme_endpoint)
      .then(res => res.json())
      .then(response => {
        const {data} = response
        setAllMemes(data.memes)//en AllMemes queda todo el json como un dict (todos los memes)
      })
  }, [])
  
  const getMeme= (event) =>{
    const randomIndex = Math.floor(Math.random() *allMemes.length)//consigo un index random
    const {url} = allMemes[randomIndex]//del randindex busco un meme y tomo la prop 'url'
    setMeme(prevState =>({
      ...prevState, url: url}))
    //Guardo en meme, el url del meme[random] y le digo a set meme que es igual al valor antiguo de meme
    //pero con la url de valor 'url' adquirido con el index
  }

  
  
  return (
    <div>
      <h1>This is a random meme generator:</h1>
      <section className="memeSection">
        {meme && <img className="memeImg"
        src={ meme.url } 
        alt={''}/>}
        
        <button className="newMeme-btn" onClick={getMeme}>Nuevo meme</button>
      </section>
    </div>
  )
} 