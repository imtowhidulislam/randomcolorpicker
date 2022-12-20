import React, { useEffect, useRef, useState } from 'react'

const Home = () => {
    const refHeight = useRef(null);
    const [calHeight, setCalHeight] = useState(0);
    const [color1, setColor1] = useState("");
    const [color2, setColor2] = useState("");
    const [color3, setColor3] = useState("");
    const [color4, setColor4] = useState("");
    const [color5, setColor5] = useState("");
    const [btnBg, setBtnBg] = useState("");
   

    const randomNumberGenerator = (min,max) => {
        return Math.floor(Math.random() * (max - min) + min) 
    }
 

    const randomColors = () => {
            const num1 = randomNumberGenerator(0,9);
            const num2 = randomNumberGenerator(0,9);
            const num3 = randomNumberGenerator(0,9);
            const num4 = randomNumberGenerator(0,9);
            const num5 = randomNumberGenerator(0,9);
            const num6 = randomNumberGenerator(0,9);
    
            const randomClr1 = `${num1}${num2}${num3}${num4}${num5}${num6}`;
            const randomClr2 = `${num5}${num2}${num1}${num5}${num3}${num6}`;
            const randomClr3 = `${num2}${num6}${num1}${num3}${num4}${num5}`;
            const randomClr4 = `${num6}${num4}${num5}${num1}${num5}${num3}`;
            const randomClr5 = `${num4}${num1}${num6}${num3}${num5}${num2}`;
            const randomClr6 = `${num3}${num2}${num1}${num6}${num5}${num5}`;
    
            setColor1(randomClr1);
            setColor2(randomClr2);
            setColor3(randomClr3);
            setColor4(randomClr4);
            setColor5(randomClr5);
            setBtnBg(randomClr6);
    }
    useEffect(() => {randomColors()},[]);


    useEffect(() => {
        const height = refHeight.current.getBoundingClientRect().height;
        setCalHeight(height);
        console.log(height);
    },[])
  return (
    <>
    <div ref={refHeight} className='w-full' style={{backgroundColor: `#${btnBg}`}}><button onClick={ randomColors} className='py-4 capitalize font-bold text-xl cursor-pointer text-gray-200'>Generate Color</button></div>

    <div className='grid grid-cols-random-clr place-
    content-center ' >
        <div className={`col-style`} style={{backgroundColor: `#${color1}`}} >
            <p className='code-style'>#{color1}</p>
        </div>
        <div className={`col-style`} style={{backgroundColor: `#${color2}`}} >
            <p className='code-style'>#{color2}</p>
        </div>
        <div className={`col-style`} style={{backgroundColor: `#${color3}`}} >
            <p className='code-style'>#{color3}</p>
        </div>
        <div className={`col-style`} style={{backgroundColor: `#${color4}`}} >
            <p className='code-style'>#{color4}</p>
        </div>
        <div className={`col-style`} style={{backgroundColor: `#${color5}`}} >
            <p className='code-style'>#{color5}</p>
        </div>
    </div>
    
    </>
  )
}

export default Home