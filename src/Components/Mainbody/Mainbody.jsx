import React, { useState } from 'react';
import { CiHeart } from "react-icons/ci";
import Auction from '../Auctions/Auction';
import { RxCross2 } from "react-icons/rx";
import { toast } from 'react-toastify';

const ToastContent = ({ message }) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '8px' }}>🦄</span> 
        {message}
    </div>
);


const Mainbody = () => {

    const [favoriteItems, setFavoriteItems] = useState([]);

    const handleAddData = (itemToAdd) => {
        const isAlreadyAdded = favoriteItems.some(item => item.id === itemToAdd.id);

        if (!isAlreadyAdded) {
            setFavoriteItems(prevItems => [...prevItems, itemToAdd]);

            toast.success(<ToastContent message="Item Added to your Favorite Lists" />, {
  
            });


            const mainDiv = document.getElementById("addedSectionPre");
            if (mainDiv) mainDiv.classList.add("hidden");

            const heartBtnContainer = document.getElementById(`heartBtnContainer-${itemToAdd.id}`);
            const heartBtnADContainer = document.getElementById(`heartBtnaD-${itemToAdd.id}`);
            if (heartBtnContainer) {
                heartBtnContainer.disabled = true;
                heartBtnContainer.classList.add("hidden");
            }
            if (heartBtnADContainer) {
                heartBtnADContainer.classList.remove("hidden");
                heartBtnADContainer.classList.add("text-red-500");
            }

        } else {
            toast.info("Item is already in your favorites!");
            console.log("Item already added to favorites.");
        }
    };

    const handleRemoveItem = (itemIdToRemove) => {
        const itemToRemove = favoriteItems.find(item => item.id === itemIdToRemove);
        const itemTitle = itemToRemove ? itemToRemove.title : 'Item'; 

        setFavoriteItems(prevItems => prevItems.filter(item => item.id !== itemIdToRemove));

        toast.info(<ToastContent message={`Item Removed from your Favorite Lists`} />, { 
        });


        const heartBtnContainer = document.getElementById(`heartBtnContainer-${itemIdToRemove}`);
        const heartBtnADContainer = document.getElementById(`heartBtnaD-${itemIdToRemove}`);
         if (heartBtnContainer) {
             heartBtnContainer.disabled = false;
             heartBtnContainer.classList.remove("hidden");
         }
         if (heartBtnADContainer) {
             heartBtnADContainer.classList.add("hidden");
             heartBtnADContainer.classList.remove("text-red-500");
         }
         if (favoriteItems.length === 1) {
            const mainDiv = document.getElementById("addedSectionPre");
            if (mainDiv) mainDiv.classList.remove("hidden");
        }
    };

    const totalPrice = favoriteItems.reduce((sum, item) => {
        const price = Number(item.currentBidPrice) || 0;
        return sum + price;
    }, 0);

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
                    <Auction handleAddData={handleAddData} favoriteItems={favoriteItems}></Auction>
                </div>

                <div className='bg-white rounded-4xl py-4'>
                    <div className='flex text-center w-[200px] mx-auto pb-4 items-center justify-center'>
                        <p className='text-3xl mr-2 mb-[-4px]'><CiHeart /></p>
                        <h1 className='text-2xl font-semibold'>Favorite Items</h1>
                    </div>

                    {favoriteItems.length === 0 && (
                        <div className='text-center py-8 justify-center place-items-center border-t-2 border-[#DCE5F3] border-b-2' id="addedSectionPre">
                            <p className='text-xl font-semibold'>No favorites yet</p>
                            <p className='py-4 w-[60%] mx-auto'>Click the heart icon on any item to add it to your favorites</p>
                        </div>
                    )}

                    <div id='addedContainer'>
                        {favoriteItems.map((item) => (
                             <div key={item.id} className='border-t-2 border-[#DCE5F3] p-4'>
                                <div className='flex gap-4 border-black border-1 p-[20px] rounded-3xl'>
                                    <div className='flex-shrink-0'>
                                        <img src={item.image} className='w-16 h-12 object-cover overflow-hidden border-black border-1 rounded-2xl' alt={item.title} />
                                    </div>
                                    <div className='flex-grow'>
                                        <h1 className='text-sm'>{item.title}</h1>
                                        <div className='flex justify-between items-center mt-1'>
                                            <p>
                                                <span className='font-semibold'>${item.currentBidPrice}</span>
                                                <span className='ml-[14px] text-sm text-gray-600 font-semibold'>Bids: {item.bidsCount}</span>
                                            </p>
                                            <button
                                                onClick={() => handleRemoveItem(item.id)}
                                                className='btn btn-ghost p-0 hover:bg-red-100 rounded-full mt-[-20px]'
                                                aria-label={`Remove ${item.title} from favorites`}
                                            >
                                                <RxCross2 size="20" className="text-gray-500 hover:text-red-500"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {favoriteItems.length > 0 && <div className='border-t-2 border-[#DCE5F3]'></div>}

                    <div className='flex justify-between px-5 pt-4 mt-2 '>
                        <p className='text-xl font-semibold'>Total favorites Value</p>
                        <p id="totalBids" className='text-xl font-semibold'>
                           ${totalPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </p>
                    </div>
                </div>
            </div>
         
        </div>
    );
}

export default Mainbody;