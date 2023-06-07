import { useEffect, useState } from "react";
import axios from "axios";
import Characters from "../components/Characters";
import Pagination from "../components/Pagination";
import Navbar from "../components/Navbar";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({})

  const initialurl = "https://rickandmortyapi.com/api/character"

  const callAxios = (url) =>{
    axios
    .get(url)
    .then((response) => {
      setCharacters(response.data.results);
      setInfo(response.data.info);
      })
      .catch((error) => alert('Error al cargar'))
  }
    
  useEffect(() => {
    callAxios(initialurl)
  }, []);
  
//  console.log(characters);

  const onNext = () =>{
    callAxios(info.next);
  }
  const onPrevious = () =>{
    callAxios(info.prev);
  }

  return (
    <>
        <Navbar/>
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
        <Characters characters={characters}/>
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>     
    </>
  );
};

export default Home;
