import React from 'react';
import MintBTN from './mintBTN';
import storyIMG from '../resources/story.png';

const txt = "The Smilesss Collection consists of 8,888 generative full-body 3D characters, hand designed by artist Waheed Zai. This is more than just art, this is your ticket into the Smilesssvrs. One that's focused on culture, fashion, hip-hop, and smilesss. By joining us you're not investing into a project, you're helping build the universe ::)";
const txtFooter = "We don't believe in a standard project roadmap that makes lofty promises that are often unkept. We won't promise a video game, a comic, ETH giveaways or floor buy-ups. What we do promise is that we will continue to innovate on different utilities, deliver the most authentic art to hit the metaverse, and provide experiences to our community that will stick with you forever. We promise this, along with our commitment to giving back to those in need. That being said, we do think it is important to share with you a few things we have in mind.";

const Body = () => {
  return (
    <>
      <div style={{ backgroundColor: "orange", height: "700px" }}>

        <div style={{ float: "right", width: "40%" }}>
          <h4 style={{}}>Release Date</h4>
          <h1>SEPTEMBER 2021</h1>
          <img src={storyIMG} alt="story" style={{ height: "700px", float: "right", padding: "10px" }} />
        </div>

        <div style={{ width: "60%", color: "white" }}>
          <h1 style={{ fontSize: "70px" }}>WELCOME TO THE SMILESSSVRS</h1>
          <p style={{ padding: "15px" }}>{txt}</p>
          <MintBTN />
        </div>

      </div>

      <div style={{ backgroundColor: "deepskyblue", height: "200px" }}>
        <h1 style={{ marginBlockStart: "0em", marginBlockEnd: "0em" }}>TO INFINITY, AND BEYOND!</h1>
        <p>{txtFooter}</p>
      </div>
    </>
  );
};

export default Body;