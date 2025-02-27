import Image from "next/image";
import React from "react";

function AwardItem({ imageUrl, name, skills = [], description }) {
  return (
    <div
      className="col-md-12 scroll-animation"
      data-animation="fade_from_bottom"
    >
      <div className="portfolio-item portfolio-full">
        <div className="portfolio-item-inner">
          <a href={imageUrl} data-lightbox={name}>
            <Image
                src={imageUrl}
                alt={name}
                width={80}         // You can adjust the width to make it smaller
                height={80}         // Keep height the same to maintain aspect ratio
                loading="lazy"
                quality={100}       // Maximum quality
                style={{
                  objectFit: "contain",  // Ensures the image fits without stretching
                  borderRadius: "8px", 
              }}
            />
          </a>
          <ul className="portfolio-categories">
            {skills.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <h2>
          <div>{description}</div>
        </h2>
      </div>
    </div>
  );
}

export default AwardItem;
