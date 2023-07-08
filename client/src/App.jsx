import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router } from 'react-router-dom';
import  AllRoutes  from './AllRoutes';
import { useDispatch } from 'react-redux';
import { fetchAllQuestions } from "./actions/question";
import { fetchAllUsers } from './actions/users';
import { useEffect,useState } from 'react';
function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllQuestions());
    dispatch(fetchAllUsers());

  }, [dispatch]);


  const [slideIn, setSlideIn] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 760) {
      setSlideIn(false);
    }
  }, []);

  const handleSlideIn = () => {
    if (window.innerWidth <= 760) {
      setSlideIn((state) => !state);
    } 
  };
  
  return (
    <div>
       <Router>
          <Navbar handleSlideIn={handleSlideIn}/>
          <AllRoutes slideIn={slideIn} handleSlideIn={handleSlideIn} />
       </Router>
    </div>
  );
}

export default App;
  