import './footer.css'
import { useState, useEffect } from 'react';

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

 
  return ( 
    <>
    
    <div className='footer'>  
      <div className={`appear-animation ${isVisible ? 'visible' : ''}`}>
      <p>DiegoDev | <code>React - Vite - JS</code> | España</p>
    </div>
    </div>
    </>
  )
}

export default Footer