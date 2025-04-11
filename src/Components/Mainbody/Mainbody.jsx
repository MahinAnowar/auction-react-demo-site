import React, { useState } from 'react'
import { CiHeart } from "react-icons/ci";
import Auction from '../Auctions/Auction';
import { RxCross2 } from "react-icons/rx";
import Mydata from '../Mydata/Mydata';

const Mainbody = () => {

    const [addedItem, setAdded] = useState([]);

    const handleAddData = (mydata) => {
        // setAdded(...addedItem, mydata)
        //console.log(mydata.title);

       
        const mainDiv = document.getElementById("addedSectionPre");
        mainDiv.classList.add("hidden");
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
            

                        <div class='border-t-2 border-[#DCE5F3] p-4'>
                            <div class='flex gap-4'>
                                <div class=''>
                                    <img src=${mydata.image} class='w-16 h-12 overflow-hidden' alt="" />
                                </div>

                                <div>
                            
                                    
                                    <h1>${mydata.title}</h1>
                                    
                                    

                                <div class='flex '>
                                <p class=''><span class=''>$${mydata.currentBidPrice}</span> <span class='ml-[14px]'>Bids: ${mydata.bidsCount}</span></p>
                                <button class='ml-[160px] mt-[-17px] btn btn-ghost'><i class="fa-solid fa-xmark"></i></button>

                                </div>
                                </div>
                                
                                
                            </div>

                            

                           
                        </div>

                        

                    
        
        `;




        document.querySelector('#addedContainer').appendChild(newDiv);
        const heartBtn = document.getElementById(`heartBtn-${mydata.id}`);
        const heartBtnContainer = document.getElementById(`heartBtnContainer-${mydata.id}`);
        const heartBtnADContainer = document.getElementById(`heartBtnaD-${mydata.id}`);
        
        heartBtnContainer.disabled=true;
        heartBtnContainer.classList.add("hidden");
        heartBtnADContainer.classList.remove("hidden");
        // heartBtn.classList.add("text-red-500");
        heartBtnContainer.classList.add("bg-white");
        //heartBtnContainer.classList.add("disabled:cursor-not-allowed");
        // heartBtn.classList.remove("fa-regular");
    }

    return (

        

        <div className="bg-[#EBF0F5] px-[100px] py-14">

  
            <h1 className="text-[#0E2954] text-3xl font-medium mb-3">Active Auctions</h1>
            <p>Discover and bid on extraordinary items</p>

            <div className="grid grid-cols-3 gap-4 py-[40px] items-start">
                <div className='col-span-2 bg-white rounded-4xl'>
                    <div className='grid grid-cols-6 gap-3 py-3 px-5'>
                        <div className='col-span-3'>Items</div>
                        <div>Current Bid</div>
                        <div>Time Left</div>
                        <div>Bid Now</div>
                    </div>
                    {/* <div className='py-4 px-5 grid grid-cols-6 gap-3 border-t-2 border-[#DCE5F3]'>
                        <div className='flex gap-4 col-span-3'>
                            <img src="https://i.ibb.co.com/4nSFMVdn/Bid1-min.png" className='w-[100px]' alt="" />
                            <p>Vintage Leica M3 Camera
                            </p>
                        </div>
                        <div><p className='font-semibold'>$2,850</p></div>
                        <div><p className='font-semibold'>2 Days left</p></div>
                        <div><p className='text-2xl'><CiHeart /></p></div>
                    </div> */}

                    <Auction handleAddData={handleAddData}></Auction>



                </div>

                <div className='bg-white rounded-4xl py-4'>
                    <div className='flex text-center w-[200px] mx-[130px] pb-4'>
                        <p className='text-3xl'><CiHeart /></p>
                        <h1 className='text-2xl font-semibold'>Favorite Items</h1>
                    </div>
                    <div className='text-center py-8 justify-center place-items-center border-t-2 border-[#DCE5F3]' id="addedSectionPre">
                        <p className='text-xl font-semibold'>No favorites yet</p>
                        <p className='py-4 w-[60%]'>Click the heart icon on any item to add it to your favorites</p>
                    </div>

                    <div id='addedContainer'>

                    </div>

                    {/* <div className=''>

                        <div className='border-t-2 border-[#DCE5F3] p-4'>
                            <div className='flex gap-4'>
                                <div className=''>
                                    <img src="https://i.ibb.co.com/4nSFMVdn/Bid1-min.png" className='w-[80px]' alt="" />
                                </div>
                                <div className='flex '>
                                    <h1>Vintage Leica M3 Camera</h1>
                                    <button className='ml-[45px] mt-[-7px] btn btn-ghost'><RxCross2 size="25" /></button>
                                </div>
                                
                                
                            </div>

                            <p className='ml-[100px] mt-[-22px]'><span className=''>$2,650</span> <span className='ml-[14px]'>Bids: 12</span></p>

                           
                        </div>

                        

                    </div> */}
                    <div className='flex justify-between px-5 border-t-2 border-[#DCE5F3] pt-4'>
                        <p className='text-xl font-semibold'>Total bids Amount</p>
                        <p className='text-xl font-semibold'>$0000</p>
                    </div>
                </div>
            </div>



        </div>



    )
}

export default Mainbody