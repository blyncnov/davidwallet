import React from 'react'
import { Route, Routes } from "react-router-dom";

import PhaseKey from "./phrase"
import Keystore from "./keystore"
import Json from "./json"


const Portal = ({ clickHandler }) => {

    return (
        <div>
            <div className="close">
                <h3 style={{ color: "#626262" }}>Connect Wallet</h3>
                <h1 onClick={clickHandler} style={{ cursor: 'pointer' }}>&#215;</h1>
            </div>

            <hr style={{ color: "#F0F0F0" }} />
            <br />
            {/* <Keystore /> */}
            <Routes>
                <Route exact path="/phrase" component={PhaseKey} />
                <Route exact path="/keystore" component={Keystore} />
                <Route exact path="/private" component={Json} />
            </Routes>

        </div>
    )
}

export default Portal;
