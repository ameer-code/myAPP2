
import { About } from './About';
import './App.css';
import { Nav } from './Nav';
import { Shop } from './Shop';
import { Item} from './ItemDetail'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MovieList from './MovieList';
import Bela from './Leadership/Bela';
import Reed from './Leadership/Reed';
import David from './Leadership/David';
import Spiderman from './MovieInfo/Spiderman';
import email from './components/ContactForm';
import Footer from './Footer';




function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
       {/* <Route path="/" exact   component={Home}/> */}
       <Route path="/movieList" component={MovieList}/>
       <Route path="/about" component={About}/>
       <Route path="/bela" component={Bela}/>
       <Route path="/reed" component={Reed}/>
       <Route path="/david" component={David}/>
       <Route path="/email" component={email}/>
       <Route path="/spiderman" component={Spiderman}/>
       <Route path="/shop" exact component={Shop}/>
       <Route path="/shop/:id" component={Item}/>

       </Switch>
      </div>
      <Footer />
    </Router>
   
  );
}
// const Home = ()=>(

//   <div>
//     <h1>Home Page</h1>
//   </div>
// )

export default App;















//=========================================================
//this work
// import './App.css';
// import MovieList from './MovieList';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//     <MovieList />
//       </header>
//     </div>
//   );
// }

// export default App;
