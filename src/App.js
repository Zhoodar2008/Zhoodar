
import './App.css';
import Header from "./components/Header/Hero"
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated"
import NowPlaying from "./pages/NowPlaying";
import UpComing from "./pages/upComing";



function App() {
  return (
   <>
   <Header/>
   <Routes>
    <Route path='/' element ={<Home/>} />
    <Route path='/popular' element ={<Popular/>} />
    <Route path='/TopRated' element ={<TopRated/>} />
    <Route path='/nowPlaying' element ={<NowPlaying/>} />
    <Route path='/UpComing' element ={<UpComing/>} />
   </Routes>
   </>
  );
}

export default App;
