import React from 'react'
import './App.css'
function Footer(){
    return(
        <footer>
        <div className="download">
            <div className="buttons">
                <button className="apple">
                    <div className="icon"></div>
                    <div className="text">Apple store</div>
                </button>
                <button className="google">
                    <div className="icon1"></div>
                    <div className="text">google Play</div>
                </button>
            </div>
        </div>
        <div className="arrow"></div>
        <div className="policy">Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
            See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.</div>
            <div className="connect">
                <div className="chat"></div>
                <div className="tweet"></div>
                <div className="insta"></div>
            </div>
    </footer>
    )
}
export default Footer