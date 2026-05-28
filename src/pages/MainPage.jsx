import { useState } from "react";

import dev1 from "../assets/dev1.jpeg";
import dev2 from "../assets/dev2.jpeg";
import dev3 from "../assets/dev3.jpeg";
import dev4 from "../assets/dev4.jpeg";
import dev5 from "../assets/dev5.jpeg";

import video1 from "../assets/video1.mp4";

export default function MainPage() {

  const [selectedImage, setSelectedImage] = useState(null);

  const photos = [
    dev1,
    dev2,
    dev3,
    dev4,
    dev5
  ];

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
                alt=""
                className="photoImg"
              />

            </div>

          ))}

        </div>

      </section>

      {/* FULLSCREEN IMAGE */}

      {selectedImage && (

        <div
          className="fullscreen"
          onClick={() => setSelectedImage(null)}
        >

          <img
            src={selectedImage}
            alt=""
            className="fullscreenImg"
          />

        </div>

      )}

      {/* VIDEOS */}

      <section className="video">

        <h2>🎥 Edit nalla Irundhaa Enaku Rose Milk Vaangithaa... 🎥</h2>

        <div className="videoGrid">

          {/* VIDEO 1 */}

          <div className="videoBox">

            <video
              className="realVideo"
              controls
              autoPlay
              muted
              loop
            >

              <source
                src={video1}
                type="video/mp4"
              />

            </video>

          </div>

          {/* VIDEO 2 */}

          <div className="videoBox">

            <video
              className="realVideo"
              controls
              autoPlay
              muted
              loop
            >

              <source
                src={video1}
                type="video/mp4"
              />

            </video>

          </div>

        </div>

      </section>

      {/* FINAL */}

      <section className="final">

        <h1>
          Happieee Birthdayyy To my Bestest test test test testttt testtt test tessttt Thozhii...💖🎂✨

          Dedicated To my Paarthaa.... 💖✨
        </h1>

        

      </section>

    </div>
  );
}