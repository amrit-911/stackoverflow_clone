import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router } from 'react-router-dom';
import  AllRoutes  from './AllRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllQuestions } from "./actions/question";
import { fetchAllUsers } from './actions/users';
import { fetchChat } from './actions/chat';
import { useEffect,useState } from 'react';
import Chatbot from './Components/Chatbot/Chatbot';
import { setCurrentUser } from './actions/setCurrentUser';

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
          <Chatbot/>
       </Router>
    </div>
  );
}

export default App;
  