import React, { useState, useEffect } from "react"
import Layout, { siteTitle } from '../components/layout';


export default function CV() {
  const [scrollposition, setScrollposition] = useState(0);
  const [firstposition, setFirstposition] = useState(0);
  const [secondposition, setSecondposition] = useState(0);
  const handleScroll = () => {
    let position = (window.pageYOffset);
    if (position > 100){
      firstposition = 1;
    }
    if (position > 300){
      secondposition = 1
    }
  }
  setFirstposition(firstposition)
  setSecondposition(secondposition)
}

useEffect(() => {
   window.addEventListener('scroll', handleScroll, { passive: true });
 });

return(
  <div>
    <div style={{opacity: ${(secondposition)}}}>First</div>
    <div style={{opacity: ${(firstposition)}}}>Second</div>
  </div>
)
