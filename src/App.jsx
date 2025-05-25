import { useState, useEffect } from 'react'
import Loader from './components/Loader'
import { useLocation } from 'react-router-dom'
import AppRouting from './components/routes/AppRouting';
import Chatbot from './components/ChatBot';
function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="w-full">
      {loading ? (
        <div className="bg-[#42424264] flex w-full h-screen justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div key={location.pathname}> 
          <AppRouting />
          <Chatbot/>
        </div>
      )}
    </div>
  );
}

export default App
