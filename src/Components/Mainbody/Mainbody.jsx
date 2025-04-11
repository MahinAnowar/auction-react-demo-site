import React, { useState } from 'react';
import { CiHeart } from "react-icons/ci";
import Auction from '../Auctions/Auction'; // Assuming Auction component exists and receives handleAddData and favoriteItems
import { RxCross2 } from "react-icons/rx";
// import Mydata from '../Mydata/Mydata'; // Removed if not used directly here

const Mainbody = () => {

    const [favoriteItems, setFavoriteItems] = useState([]);

    const handleAddData = (itemToAdd) => {
        // Check if item is already in favorites
        const isAlreadyAdded = favoriteItems.some(item => item.id === itemToAdd.id);

        if (!isAlreadyAdded) {
            // Update state with the new item
            setFavoriteItems(prevItems => [...prevItems, itemToAdd]);

            // --- DOM Manipulation (kept for visual feedback on original list/empty message) ---
            const mainDiv = document.getElementById("addedSectionPre");
            if (mainDiv) {
                mainDiv.classList.add("hidden");
            }

            // Update heart button appearance on the original item in Auction component
            // Ideally, Auction component should handle this based on favoriteItems prop
            const heartBtnContainer = document.getElementById(`heartBtnContainer-${itemToAdd.id}`);
            const heartBtnADContainer = document.getElementById(`heartBtnaD-${itemToAdd.id}`);

            if (heartBtnContainer) {
                heartBtnContainer.disabled = true;
                heartBtnContainer.classList.add("hidden");
            }
            if (heartBtnADContainer) {
                heartBtnADContainer.classList.remove("hidden");
                heartBtnADContainer.classList.add("text-red-500"); // Make added heart red
            }
            // --- End DOM Manipulation ---

        } else {
            console.log("Item already added to favorites.");
        }
    };

    const handleRemoveItem = (itemIdToRemove) => {
        setFavoriteItems(prevItems => prevItems.filter(item => item.id !== itemIdToRemove));

         // --- DOM Manipulation (to revert heart button state on original item) ---
         // Ideally, Auction component should handle this based on favoriteItems prop
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
         // Check if the list becomes empty to show the placeholder message
         if (favoriteItems.length === 1) { // If this was the last item
            const mainDiv = document.getElementById("addedSectionPre");
            if (mainDiv) {
                mainDiv.classList.remove("hidden");
            }
        }
         // --- End DOM Manipulation ---
    };

    // Calculate total price
    const totalPrice = favoriteItems.reduce((sum, item) => {
        // Ensure currentBidPrice is treated as a number
        const price = Number(item.currentBidPrice) || 0; // Use Number() or parseFloat()
        return sum + price;
    }, 0); // Start sum from 0

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
                    {/* Pass handler and favorite items list to Auction component */}
                    {/* Auction needs to be adapted to potentially use favoriteItems to show heart status */}
                    <Auction handleAddData={handleAddData} favoriteItems={favoriteItems}></Auction>
                </div>

                <div className='bg-white rounded-4xl py-4'>
                    <div className='flex text-center w-[200px] mx-[130px] pb-4 items-center justify-center'> {/* Centered items */}
                        <p className='text-3xl mr-2'><CiHeart /></p> {/* Added margin */}
                        <h1 className='text-2xl font-semibold'>Favorite Items</h1>
                    </div>

                    {/* Conditional rendering for "No favorites yet" message */}
                    {favoriteItems.length === 0 && (
                        <div className='text-center py-8 justify-center place-items-center border-t-2 border-[#DCE5F3]' id="addedSectionPre">
                            <p className='text-xl font-semibold'>No favorites yet</p>
                            <p className='py-4 w-[60%] mx-auto'>Click the heart icon on any item to add it to your favorites</p> {/* Centered paragraph */}
                        </div>
                    )}

                    {/* Container for dynamically rendered favorite items */}
                    <div id='addedContainer'>
                        {favoriteItems.map((item) => (
                            <div key={item.id} className='border-t-2 border-[#DCE5F3] p-4'>
                                <div className='flex gap-4'>
                                    <div className='flex-shrink-0'> {/* Prevent image squishing */}
                                        <img src={item.image} className='w-16 h-12 object-cover overflow-hidden' alt={item.title} /> {/* Added object-cover & alt */}
                                    </div>

                                    <div className='flex-grow'> {/* Allow text content to grow */}
                                        <h1>{item.title}</h1>
                                        <div className='flex justify-between items-center mt-1'> {/* Adjusted layout */}
                                            <p>
                                                <span className='font-semibold'>${item.currentBidPrice}</span> {/* Made price bold */}
                                                <span className='ml-[14px] text-sm text-gray-600'>Bids: {item.bidsCount}</span> {/* Adjusted bids text */}
                                            </p>
                                            <button
                                                onClick={() => handleRemoveItem(item.id)}
                                                className='btn btn-ghost p-0 hover:bg-red-100 rounded-full' /* Adjusted styling */
                                                aria-label={`Remove ${item.title} from favorites`} // Accessibility
                                            >
                                                <RxCross2 size="20" className="text-gray-500 hover:text-red-500"/> {/* Adjusted size/color */}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Separator only if there are items */}
                    {favoriteItems.length > 0 && <div className='border-t-2 border-[#DCE5F3]'></div>}

                    {/* Total Bids Section */}
                    <div className='flex justify-between px-5 pt-4 mt-2'> {/* Added small top margin */}
                        <p className='text-xl font-semibold'>Total favorites Value</p> {/* Changed text slightly */}
                        <p id="totalBids" className='text-xl font-semibold'>
                           ${totalPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {/* Format price */}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mainbody;