import React from 'react';

const aStyles = {
  textAlign: "center", 
  textDecoration: "none",
  color: "grey",
  pointerEvents: "none",
  padding: "0 16px",
}

const menu = ['COLLECTION GOALS', 'ABOUT', 'TEAM'];

const Header = () => {
  return (
    <div style={{ overflow: "hidden", maxHeight: "80px" }}>
      <div style={{ float: "left" }}>
        <svg width="80" height="80" viewBox="-20 0 433 423" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M216.355 402.331C320.424 402.331 404.788 317.927 404.788 213.811C404.788 109.694 320.424 25.291 216.355 25.291C112.286 25.291 27.9209 109.694 27.9209 213.811C27.9209 317.927 112.286 402.331 216.355 402.331Z" fill="#FFA200" />
          <path d="M216.355 409.508C108.516 409.508 20.7705 321.731 20.7705 213.844C20.7705 105.956 108.516 18.1699 216.355 18.1699C324.193 18.1699 411.939 105.946 411.939 213.844C411.939 321.741 324.202 409.508 216.355 409.508ZM216.355 32.4681C116.388 32.4681 35.0621 113.832 35.0621 213.844C35.0621 313.856 116.388 395.21 216.355 395.21C316.321 395.21 397.647 313.846 397.647 213.844C397.647 113.841 316.321 32.4681 216.355 32.4681Z" fill="black" />
          <path d="M143.078 192.074H91.7036V229.831H143.078V192.074Z" fill="black" />
          <path d="M215.174 192.074H163.799V229.831H215.174V192.074Z" fill="black" />
          <path d="M143.078 262.355H91.7036V300.112H143.078V262.355Z" fill="black" />
          <path d="M215.174 262.355H163.799V300.112H215.174V262.355Z" fill="black" />
          <path d="M264.637 137.656L242.782 153.445C266.792 197.577 263.4 230.777 263.4 230.777C263.4 230.777 267.045 261.277 242.782 308.109L264.637 323.898C264.637 323.898 294.176 285.841 294.176 230.777C294.176 175.713 264.637 137.656 264.637 137.656Z" fill="black" />
        </svg>
      </div>
      <div style={{ float: "right", padding: "30px" }}>
        {menu.map((item, index) => {
          return <a href="/" style={aStyles} key={index}>{item}</a>
        })}
      </div>
    </div>
  );
};

export default Header;