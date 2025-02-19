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
              width={100}
              height={100}
              loading="lazy"
              quality={100}
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
