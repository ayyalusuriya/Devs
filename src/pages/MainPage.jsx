import { useState } from "react";

import dev1 from "../assets/dev1.jpeg";
import dev2 from "../assets/dev2.jpeg";
import dev3 from "../assets/dev3.jpeg";
import dev4 from "../assets/dev4.jpeg";
import dev5 from "../assets/dev5.jpeg";

import video1 from "../assets/video1.mp4";
import video2 from "../assets/videos2.mp4";

export default function MainPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const photos = [dev1, dev2, dev3, dev4, dev5];

  const videos = [video1, video2];

  return (
    <div className="mainPage">

      {/* BUTTERFLIES */}
      <div className="butterfly b1">🦋</div>
      <div className="butterfly b2">🦋</div>
      <div className="butterfly b3">🦋</div>

      {/* HERO */}
      <section className="hero">
        <h1>🎉 Happy Birthday 🎉</h1>

        <p>
          My Dear Nanbiii.... DEVSSSS 💖✨
        </p>
      </section>

      {/* PHOTOS */}
      <section className="photos">

        <h2>📸 Ennodaa All Time Fav 📸</h2>

        <div className="grid">
          {photos.map((photo, index) => (
            <div
              className="card"
              key={index}
              onDoubleClick={() => setSelectedImage(photo)}
            >
              <img
                src={photo}
                alt={`Photo ${index + 1}`}
                className="photoImg"
              />
            </div>
          ))}
        </div>

      </section>

      {/* FULL SCREEN IMAGE */}
      {selectedImage && (
        <div
          className="fullscreen"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Selected"
            className="fullscreenImg"
          />
        </div>
      )}

      {/* VIDEO SECTION */}
      <section className="video">

        <h2>
          🎥 Edit nalla Irundhaa Enaku Rose Milk Vaangithaa... 🎥
        </h2>

        <div className="videoGrid">

          {videos.map((video, index) => (
            <div className="videoBox" key={index}>
              <video
                className="realVideo"
                controls
                autoPlay
                muted
                loop
              >
                <source src={video} type="video/mp4" />
              </video>
            </div>
          ))}

        </div>

      </section>

      {/* MESSAGE SECTION */}
      <section className="messageSection">

        <div className="messageCard">

          <h2>💖 A Special Message For You 💖</h2>

          <p>
            Happy Birthday to the most wonderful person! 🎂✨
            <br /><br />

            May your day be filled with endless happiness,
            beautiful memories, laughter, success and all
            the things that make your heart smile.
            <br /><br />

             En Life la vandhadhuku rombaa rombaa thankss la
             Deva illamaa Ayyalu onumeyy illaa... Odanjii poi
             Irundhaa Ayyalu Thiruppi Sirikka Vachadhu Ennoda 
             DEVA... Nee Sirichitey Irukkanum Adhuku indha Frdd
             Epovum Unkoodaveyy Iruppennn... Indha naal Ahh happy
             ahh Enjoy Pannuu unaku pudichavungaa Koodaa... 

              Lovee Youu Sooo muchhhhh Bestttt Friend ehhh......
            <br /><br />

            Stay happy, stay blessed and keep shining
            like the beautiful star you are. 🌸🦋💕
          </p>

        </div>

      </section>

      {/* FINAL */}
      <section className="final">

        <h1>
          Happieee Birthdayyy To my Bestest test test test
          testttt testtt test tessttt Thozhii... 💖🎂✨

          <br />
          <br />

          Dedicated To my Paarthaa.... 💖✨
        </h1>

      </section>

    </div>
  );
}
