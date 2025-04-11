import React from 'react'
import { GrNotification } from "react-icons/gr";


const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm px-[100px] work-sans-sora">
                <div className="navbar-start">

                    <a className="btn btn-ghost text-2xl gap-0 font-bold"><span className="text-[#0E2954]">Auction</span><span className="text-[#adcf42]">Gallery</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[19px]">
                        <li><a>Home</a></li>
                        <li><a>Auctions</a></li>
                        <li><a>Categories</a></li>
                        <li><a>How to works</a></li>
                    </ul>
                </div>
                <div className="navbar-end gap-4">



                    <div className="text-3xl text-[#0E2954] bg-[#EBF0F5] p-2.5 rounded-full"><GrNotification /> </div>
                    <span className="text-white bg-[#0E2954] px-1.5 font-bold py-0.5 text-[10px] rounded-full ml-[-42px] mt-[-27px]">9</span>



                    <div className="w-12 rounded-full">
                        <img className="w-12 rounded-full font-bold"
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar