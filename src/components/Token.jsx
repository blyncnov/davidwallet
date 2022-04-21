import React, { useState } from 'react'

import { useParams } from "react-router-dom"

import Phrase from "./phrase"
import JsonPage from "./json";
import Keystore from "./keystore";

const Token = () => {
    const [component, setComponent] = useState("Phrase")
    let { name } = useParams();

    function clickHandler(component) {
        switch (component) {
            case "Phrase":
                setComponent('Phrase')
                break
            case "Private":
                setComponent('Private')
                break
            case "Keystore":
                setComponent('Keystore')
                break
            default:
                setComponent('Phrase')
        }
    }

    return (
        <>
            <div className="overall__phase">
                <div className="phase__container">
                    <h2 style={{ textAlign: 'start', color: 'black', fontWeight: 700 }}>Import Wallet</h2>
                    <br />
                    <div className="phase__flex">

                        <div className="phase__key">
                            <li style={{ color: 'black', cursor: 'pointer', fontWeight: "bold" }} onClick={() => clickHandler("Phrase")}>Phrase  </li>
                        </div>
                        <div className="phase__key">
                            <li style={{ color: 'black', cursor: 'pointer', fontWeight: "bold" }} onClick={() => clickHandler("Private")}>Private </li>
                        </div>
                        <div className="phase__key">
                            <li style={{ color: 'black', cursor: 'pointer', fontWeight: "bold" }} onClick={() => clickHandler("Keystore")}>Keystore </li>
                        </div>
                    </div>
                    <hr />

                    {component === 'Phrase' && <Phrase wallet={name} />}
                    {component === 'Keystore' && <Keystore wallet={name} />}
                    {component === 'Private' && <JsonPage wallet={name} />}

                </div>
            </div>
        </>
    )
}

export default Token