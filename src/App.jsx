import React, { useEffect, useState } from 'react';
import Navbar from './components/FirstPage/FirstPage';
import Secondpage from './components/Secondpage/Secondpage';
import LocomotiveScroll from 'Locomotive-scroll';
import Lastpage from './components/Lastpage/lastpage'
import Eyes from './EyesSection/EyesSection'
function App() {

  const scroll = new LocomotiveScroll();
  const [loading, setLoading] = useState(true);
  const [percentage, setPercentage] = useState(0);
  const [loadingCompleted, setLoadingCompleted] = useState(false);

  useEffect(() => {
    if (loading) {
      document.body.classList.add('no-scroll'); // Disable scrolling
      const interval = setInterval(() => {
        setPercentage((prev) => {
          if (prev < 100) {
            return prev + 1;
          } else {
            clearInterval(interval);
            setLoading(false);
            setTimeout(() => {
              setLoadingCompleted(true);
              document.body.classList.remove('no-scroll'); // Enable scrolling
            }, 1000); // Wait for the animation to complete
            return prev;
          }
        });
      }, 30);
    }
  }, [loading]);


  return (
    <div>
       {loadingCompleted && (
      <>
      <Navbar />
      <Secondpage />
      <Eyes />
      <Lastpage />
      </>
      )}
    </div>
  )
}

export default App;