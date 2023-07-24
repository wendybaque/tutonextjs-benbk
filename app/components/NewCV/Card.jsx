"use client";
import React from "react";

const Card = () => {
  const datas = [
    {
      id: 1,
      title: "Card 1",
      img: "https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_1280.jpg",
      desc: "Card 1 description",
    },
    {
      id: 2,
      title: "Card 2",
      img: "https://cdn.pixabay.com/photo/2018/02/08/22/27/flower-3140492_1280.jpg",
      desc: "Card 2 description",
    },
    {
      id: 3,
      title: "Card 3",
      img: "https://cdn.pixabay.com/photo/2015/10/09/00/55/lotus-978659_1280.jpg",
      desc: "Card 3 description",
    },
  ];
  return datas.map((data) => (
    <div key={data.id} className="p-6 flex flex-col w-full md:w-1/3">
      <h4>{data.title}</h4>
      <img
        className="rounded-md shadow-md"
        src={data.img}
        alt={data.title}
        width={768}
        height={512}
      />
      <p>{data.desc}</p>
    </div>
  ));
};

export default Card;
