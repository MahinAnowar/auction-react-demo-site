import React, { useRef, useEffect } from 'react';
import { showToast } from '../../utils/toastService';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";




const Mydata = ({ mydata, handleAddData }) => {
    //console.log(handleAddData);

    
    const targetButtonRef = useRef(null);

    useEffect(() => {
        // Find the single global follower element
        const followerElement = document.getElementById('cursor-follower-icon');
        // Get the current button element from the ref
        const buttonElement = targetButtonRef.current;

        // Only proceed if both the button and the follower exist
        if (!buttonElement || !followerElement) {
            return; // Exit if elements aren't found
        }

        // --- Define Event Handlers directly inside useEffect ---
        const handleMouseEnter = () => {
            followerElement.style.display = 'block'; // Show follower
        };

        const handleMouseMove = (event) => {
            // Position the follower based on mouse coordinates
            followerElement.style.left = `${event.clientX}px`;
            followerElement.style.top = `${event.clientY}px`;
        };

        const handleMouseLeave = () => {
            followerElement.style.display = 'none'; // Hide follower
        };

        // --- Attach Event Listeners directly to the button element ---
        buttonElement.addEventListener('mouseenter', handleMouseEnter);
        buttonElement.addEventListener('mousemove', handleMouseMove);
        buttonElement.addEventListener('mouseleave', handleMouseLeave);

        // --- Cleanup Function ---
        // This is CRUCIAL to prevent memory leaks when the component unmounts
        return () => {
            buttonElement.removeEventListener('mouseenter', handleMouseEnter);
            buttonElement.removeEventListener('mousemove', handleMouseMove);
            buttonElement.removeEventListener('mouseleave', handleMouseLeave);
            // Optional: Ensure follower is hidden if mouse leaves while component unmounts
            // followerElement.style.display = 'none';
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
                <i id={`heartBtn-${mydata.id}`} className="fa-regular hover:text-red-500 fa-heart"></i>
            </button>

            <button ref={targetButtonRef} className='hidden show-ban-on-hover' id={`heartBtnaD-${mydata.id}`} aria-label="Favorite status indicator"><i className="fa-solid fa-heart text-red-500 hidden text-2xl border-none"></i>
            
            </button>
  

 
            
        </div>
    )
}

export default Mydata