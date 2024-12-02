import React from "react";
import Product from "./Product";

function Products() {
  var products = [
    {
      title: "Arqitel",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, consequatur. Perferendis unde reprehenderit eaque ducimus, iste ut?",
      live: true,
      case: false,
    },
    {
      title: "yir 2022",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, consequatur. Perferendis unde reprehenderit eaque ducimus, iste ut?",
      live: true,
      case: true,
    },
    {
      title: "yahoo!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, consequatur. Perferendis unde reprehenderit eaque ducimus, iste ut?",
      live: true,
      case: true,
    },
    {
      title: "TTR",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, consequatur. Perferendis unde reprehenderit eaque ducimus, iste ut?",
      live: true,
      case: true,
    },
  ];

  return (
    <div className="font-[Satoshi] mt-32">
      {products.map((val,index)=><Product key={index} val={val}/>)}
    </div>
  );
}

export default Products;
