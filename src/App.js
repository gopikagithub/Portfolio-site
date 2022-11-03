import { Routes,Route } from 'react-router-dom';
import './App.scss';
import AboutMe from './routes/about-me/about-me.components';
import Contact from './routes/contact/contact.component';
import Education from './routes/education/education.components';
import Home from './routes/home/home.component';
import MyPortfolio from './routes/my-portfolio/my-portfolio.component';
import Navigation from './routes/navigation/navigation.component';

const App=()=>{
  return(
    <div className='app-container'>
    <Routes>

      <Route path='/Portfolio-Website' element={<Navigation/>}>

        <Route path='Portfolio-Website/' element={<Home/>}/>
        <Route path='Portfolio-Website/aboutMe' element={<AboutMe/>}/>
        <Route path='Portfolio-Website/education' element={<Education/>}/>
        <Route path='Portfolio-Website/portfolio' element={<MyPortfolio/>}/>
        <Route path='Portfolio-Website/contact' element={<Contact/>}/>

      </Route>

    </Routes>
    </div>
  )
}

export default App;