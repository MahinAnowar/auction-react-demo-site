import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center p-10">
                <aside>

                    <a className="text-2xl gap-0 font-bold"><span className="text-[#0E2954]">Auction</span><span className="text-[#adcf42]">Gallery</span></a>
                    <p className="text-[16px]">Bid. Win. Own.</p>

                    <ul className="menu menu-horizontal px-1 text-[19px]">
                        <li><a>Home</a></li>
                        <li><a>Auctions</a></li>
                        <li><a>Categories</a></li>
                        <li><a>How to works</a></li>
                    </ul>

                    <p>© 2025 AuctionHub. All rights reserved.</p>
                </aside>

            </footer>
        </div>
    )
}

export default Footer