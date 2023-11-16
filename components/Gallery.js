import Image from "next/image";
import React from "react";

import img1 from "../public/1.jpg";
import img10 from "../public/10.jpg";
import img11 from "../public/11.jpeg";
import img2 from "../public/2.jpg";
import img3 from "../public/3.jpg";
import img4 from "../public/4.JPG";
import img5 from "../public/5.jpg";
import img6 from "../public/6.jpg";
import img7 from "../public/7.jpg";
import img8 from "../public/8.jpg";
import img9 from "../public/9.jpg";

const DATA = [
  {
    id: Math.floor(Math.random() * 1000),
    imgUrl: img1,
    title: "Life is just what you believe it is, suit yourself",
  },
  {
    id: Math.floor(Math.random() * 1000),
    imgUrl: img2,
    title: "Brother From Another Mother",
  },
  {
    id: Math.floor(Math.random() * 1000),
    imgUrl: img3,
    title: "Another Shot From Brother",
  },

  {
    id: Math.floor(Math.random() * 1000),
    imgUrl: img4,
    title: "CryptoKing On The Flow",
  },
  {
    id: Math.floor(Math.random() * 1000),
    imgUrl: img5,
    title: "CryptoKing On The Flow",
  },
  {
    id: Math.floor(Math.random() * 1000),
    imgUrl: img6,
    title: "CryptoKing On The Flow",
  },
  {
    id: Math.floor(Math.random() * 1000),
    imgUrl: img7,
    title: "CryptoKing On The Flow",
  },
  {
    id: Math.floor(Math.random() * 1000),
    imgUrl: img8,
    title: "CryptoKing On The Flow",
  },
  {
    id: Math.floor(Math.random() * 1000),
    imgUrl: img9,
    title: "CryptoKing On The Flow",
  },
  {
    id: Math.floor(Math.random() * 1000),
    imgUrl: img10,
    title: "CryptoKing On The Flow",
  },
  {
    id: Math.floor(Math.random() * 1000),
    imgUrl: img11,
    title: "CryptoKing On The Flow",
  },
];

const Gallery = () => {
  return (
    <>
      {/* <div className=''> */}
      {DATA.map((item, index) => (
        <div key={item.id} className="col-lg-3 gallery-image">
          <Image
            src={item.imgUrl}
            alt={item.title}
            title={item.title}
            // objectFit='cover'
            // width={2400}
            // height={1598}
            layout="fill"
            quality={100}
            priority
          />
        </div>
      ))}
      {/* </div> */}
    </>
  );
};

export default Gallery;
