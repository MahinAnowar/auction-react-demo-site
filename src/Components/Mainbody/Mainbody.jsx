import React from 'react'
import { CiHeart } from "react-icons/ci";

const Mainbody = () => {
    return (

        <div className="bg-[#EBF0F5] px-[100px] py-14">
            <h1 className="text-[#0E2954] text-3xl font-medium mb-3">Active Auctions</h1>
            <p>Discover and bid on extraordinary items</p>

            <div className="grid grid-cols-3 gap-4 py-[40px]">
                <div className='col-span-2 bg-white rounded-4xl'>
                    <div className='grid grid-cols-6 gap-3 py-3 px-5'>
                        <div className='col-span-3'>Items</div>
                        <div>Current Bid</div>
                        <div>Time Left</div>
                        <div>Bid Now</div>
                    </div>
                    <div className='py-4 px-5 grid grid-cols-6 gap-3 border-t-2 border-[#DCE5F3]'>
                        <div className='flex gap-4 col-span-3'>
                            <img src="https://i.ibb.co.com/4nSFMVdn/Bid1-min.png" className='w-[100px]' alt="" />
                            <p>Vintage Leica M3 Camera
                            </p>
                        </div>
                        <div><p>$2,850</p></div>
                        <div><p>2 Days left</p></div>
                        <div><p className='text-2xl'><CiHeart /></p></div>
                    </div>


                </div>

                <div className='bg-white rounded-4xl py-4'>
                    <div className='flex text-center w-[200px] mx-[130px] pb-4'>
                        <p className='text-3xl'><CiHeart /></p>
                        <h1 className='text-2xl font-semibold'>Favorite Items</h1>
                    </div>
                    <div className='text-center py-8 justify-center place-items-center border-t-2 border-[#DCE5F3]'>
                        <p className='text-xl font-semibold'>No favorites yet</p>
                        <p className='py-4 w-[60%]'>Click the heart icon on any item to add it to your favorites</p>
                    </div>
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