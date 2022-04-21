import React from 'react';

import { BsFillChatFill } from 'react-icons/bs'

import { Link } from "react-router-dom"

import LogoUse from "../img/shared/logouse.png"

import { HomeData } from "../homedata.js"

import Hammar from "../../src/img/shared/hammer.png"

const HomePage = () => {
    return (
        <>
            <div className="tawk">
                <div className="tawk__inner">
                    <a href="https://tawk.to/chat/5faac1070a68960861bda6c4/default">
                        <BsFillChatFill style={{ fontSize: "2em" }} />
                    </a>
                </div>
            </div>
            <div className="Home__header">
                <div className="dicline">
                    <div className="liner"></div>
                    <div className="mis">
                        <div className="Home__logo">
                            <img className="logooo" src={LogoUse} alt="logo" />
                        </div>
                        <div className="Home__hero">
                            <div className="Home__hero__con">
                                <h2 style={{ fontSize: "2rem", fontWeight: 600 }}>DATA MIGRATE</h2>

                                <h3 style={{ fontWeight: 400 }}>AUTHENTICATION</h3>
                                <Link className="HlinkH" to="/connect">

                                    <button className="btn__Home" >
                                        RESOLVE
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <br />
            <br />

            <div className="next">
                <div className="next__guide">
                    <p>Data migrate are basic sets of rules that allow data to be shared between computers. For cryptocurrencies, they establish the structure of the blockchain — the distributed database that allows digital money to be securely exchanged on the internet.</p>
                </div>
            </div>

            <br />
            <br />

            <div className="containnerrr">
                <div className="next__guide flexHome">

                    {HomeData.map((data) => {
                        return (
                            <div className="cardHome" key={data.id}>
                                <img className="img__data" src={data.image} alt="icon" />
                                <br />
                                <h3>{data.description}</h3>

                                <Link style={{ color: "black" }} to="/connect">

                                    <button className="btn_home btn__home__full">
                                        {data.button}
                                    </button>
                                </Link>

                            </div>
                        )
                    })}

                </div>
            </div>

            <br />
            <br />

            <div className="lastSection">
                <div className="next__guide flexx">
                    <img src={Hammar} alt="bannershow" />
                    <div className="text__home">
                        <h1>
                            Everything You Need
                        </h1>
                        <br />
                        <p>
                            The best and secured way to Integrate all decentralized wallet Protocols from a single app to resolve all transaction error, missing token and other wallet related glitches. With our highly secure verification and integration system with top wallet providers, you can efficiently manage all your wallets in one app
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage