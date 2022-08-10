import React from 'react'
import "./Home.css"
import ReactWhatsapp from 'react-whatsapp';
function Home() {
    return (
        <div className='container cont-width d-flex justify-content-center align-items-center'>
            <div className='row d-flex justify-content-center'>
                <div className='col-md-7  col-11'>
                    <h3 className='home-h3'>My name Is Muzammil Ramzan</h3>
                    <p className='home-p'>I am a blockchain developer. I have over 4+ Years of experience in blockchain development , building cryptocurrencies, NFT staking, minting and marketplace dapps, defi dapps, decentralized exchange and decentralized donation platform. If you have any queries , I am Available 24/7 get in touch to discuss details.</p>

                    <div class="button-container-2">
                        <span class="mas">Contact Me</span>
                        <ReactWhatsapp number="+92 303 6954689" message="Hello World!!!" style={{backgroundColor: "transparent"}}/>
                        {/* <a href='https://wa.me/+92 303 6954689'>
                            <button type="button" name="Hover">Contact Me</button>
                            </a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home