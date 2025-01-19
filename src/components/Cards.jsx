import React from "react";
import Card from "./Card";

function Cards() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-32 flex gap-4">
        <Card width="basis-1/3" start={false} para={true} title="Up Next : Culture" heading="Who we are" hoverBg={false} />
        <Card width="basis-2/3" start={true} para={false} hoverBg={true} title="Get in Touch" heading={["Let's get to it,", "together."]} />
      </div>
    </div>
  );
}

export default Cards;
