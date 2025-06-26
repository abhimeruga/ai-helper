import React from "react";

import "./Home.styles.css";
import HomeData from "../../mocks/Home.json";
import Card from "../UiElements/Card"

const Home : React.FC = () => {

    return (
        <>
        <h3 className="home-title"> Personal AI Assitant</h3>
            <div className="home-container">
                {
                    HomeData.map((card, cardKey) => {
                        return (
                            <React.Fragment key={cardKey}>
                                <Card {...card}></Card>
                            </React.Fragment>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Home;