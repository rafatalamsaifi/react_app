
import React from "react";
import Button from "../Button/Button";
import "./Home.css"
const Home = ()=> {
    return(
        <>
            <h2>
                HOME PAGE
            </h2>
            <div id="bttn">
                <Button className="btn" countNumber={8} />
                <Button className="btn" countNumber={25} />
                <Button className="btn" countNumber={40} />
            </div>

        </>
    )
}

export default Home;

