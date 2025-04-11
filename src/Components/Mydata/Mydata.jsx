import React, { useRef, useEffect } from 'react';

import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";




const Mydata = ({ mydata, handleAddData }) => {
    //console.log(handleAddData);

    
    const targetButtonRef = useRef(null);

    useEffect(() => {
        const followerElement = document.getElementById('cursor-follower-icon');
        const buttonElement = targetButtonRef.current;

        if (!buttonElement || !followerElement) {
            return; 
        }

        const handleMouseEnter = () => {
            followerElement.style.display = 'block'; 
        };

        const handleMouseMove = (event) => {
            followerElement.style.left = `${event.clientX}px`;
            followerElement.style.top = `${event.clientY}px`;
        };

        const handleMouseLeave = () => {
            followerElement.style.display = 'none'; 
        };

        buttonElement.addEventListener('mouseenter', handleMouseEnter);
        buttonElement.addEventListener('mousemove', handleMouseMove);
        buttonElement.addEventListener('mouseleave', handleMouseLeave);


        return () => {
            buttonElement.removeEventListener('mouseenter', handleMouseEnter);
            buttonElement.removeEventListener('mousemove', handleMouseMove);
            buttonElement.removeEventListener('mouseleave', handleMouseLeave);
      
        };

    }, []);


 



    return (
        <div className='py-4 px-5 grid grid-cols-6 gap-3 border-t-2 border-[#DCE5F3]'>

            
            
            <div className='flex gap-4 col-span-3'>
                <img src={mydata.image} className='w-16 h-12 overflow-hidden' alt="" />
                <p>{mydata.title}
                </p>
            </div>
            <div><p className='font-semibold'>${mydata.currentBidPrice}</p></div>
            <div><p className='font-semibold'>{mydata.timeLeft} Days left</p></div>
            <button id={`heartBtnContainer-${mydata.id}`}  className=' text-2xl cursor-pointer' onClick={() => handleAddData(mydata)}>
                <i id={`heartBtn-${mydata.id}`} className="fa-regular hover:text-red-500 fa-heart ml-[-71px]"></i>
            </button>

            <button ref={targetButtonRef} className='hidden show-ban-on-hover' id={`heartBtnaD-${mydata.id}`} aria-label="Favorite status indicator"><i className="fa-solid fa-heart text-red-500 hidden text-2xl border-none ml-[-71px]"></i>
            
            </button>
  

 
            
        </div>
    )
}

export default Mydata