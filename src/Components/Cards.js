import React from "react";
import Card from "./Card";
import "./cards.css";
import img1 from "../assets/c++.png";
import img2 from "../assets/Capture.png";
import img3 from "../assets/Frontend.png";
import img4 from "../assets/py.png";
import img5 from "../assets/redux.png";
import img6 from "../assets/kaggle.png";
import cap from '../assets/Capture1.JPG'

const Cards = () => {
  const cards = [
    {
      title: "Supervised Machine Learning: Regression and Classification",
      description:
        "authorized by DeepLearning.AI and Stanford University and offered through Coursera.",
      image: img2,
    },
    {
      title: "Front-End Web Development with React",
      description:
        "authorized by The Hong Kong University  of Science and Technology and offered through Coursera.",
      image: img3,
    },
    {
      title: "Intro to Machine Learning",
      description: "Authorized by Kaggle",
      image: img6,
    },
  ];

  return (
    <div className="fxit h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div
        className="all mx-auto flex flex-col justify-center w-full h-full"
        style={{ fontFamily: "Source Code Pro" }}
      >
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-4 border-gray-500 text-white"
            style={{ marginLeft: "70px" }}
          >
            {"Certificats/>"}
          </p>
        </div>

        <div className="card-container" style={{ width: "80%", margin: "0 auto" }}>
          {cards.map((card, index) => (
            <div key={index} className="card" style={{ width: "100%", margin: "10 auto" ,marginRight:'25px' ,marginTop:'50px'}}>
              <div className="card-image" style={{ width: "100%" }}>
                <img src={card.image} alt={card.title} style={{ width: "100%" }} />
                <div className="card-description">{card.description}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{marginTop:'250px'}}>
        <h1 className="project-heading" style={{textAlign:'center',justifyContent:'center',margin:'auto',marginBottom:'50px' ,color:'white'}}>
        Days I <strong style={{color:'violet',fontWeight:'1000'}}>Code </strong> in <span style={{color:'violet',fontWeight:'1000'}}>CodeForces</span>
      </h1>
      <a href="https://codeforces.com/profile/Ouarghui">
  <img
    src={cap}
    alt="Ouarghui's profile on Codeforces"
    style={{
      alignItems: 'center',
      justifyContent: 'center',
      margin: 'auto',
      borderRadius: '10px',
      position: 'cover',
    }}
  />
</a>        </div>
      </div>
      
    </div>
  );
};

export default Cards;