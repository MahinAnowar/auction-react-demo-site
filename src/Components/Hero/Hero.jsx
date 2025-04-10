import React from 'react'

const Hero = () => {
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(Banner-min.jpg)",
                }}>
                <div className="hero-overlay"></div>
                <div className="hero-content  text-neutral-content text-left ml-[-900px]">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-semibold">Bid on Unique Items from Around the World</h1>
                        <p className="mb-5 font-light">
                        Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
                        </p>
                        <button className="btn rounded-full">Explore Auctions</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero