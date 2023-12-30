import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

const SlidingCard = () => {
  const cardData = [
    {
      id: 1,
      videoUrl:
        "https://static.cuttingroomfl.com/assets/webmvids/pict_s1_sizzle.webm",
      color: "bg-gray-300",
    },
    {
      id: 2,
      videoUrl:
        "https://static.cuttingroomfl.com/assets/webmvids/making_of_women.webm",
      color: "bg-gray-300",
    },
    {
      id: 3,
      videoUrl:
        "https://static.cuttingroomfl.com/assets/webmvids/ybyl_launch.webm",
      color: "bg-gray-300",
    },
    {
      id: 4,
      videoUrl:
        "https://static.cuttingroomfl.com/assets/webmvids/nov_sweeps_the_vote.webm",
      color: "bg-gray-300",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevCard = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length
    );
  };

  const goToNextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  const handleMouseEnter = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="">
      <section id="section2">
      <div className="">
        <div className="row">
          <Carousel>
            {[...cardData, ...cardData].map((card, index) => (
              <Carousel.Item key={card.id}>
                <div
                
                >
                  <div
                    className="video-container"
                    onMouseEnter={() => handleMouseEnter(index)}
                  >
                    <video className="w-50%" controls autoPlay={false}>
                      <source src={card.videoUrl} type="video/mp4" />
                      
                    </video>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        
      </div>
      </section>
    </div>
  );
};

export default SlidingCard;
