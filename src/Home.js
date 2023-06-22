import React from "react";
import styles from './Home.module.css';

const Home = () => {
  const videoLink = 'https://www.aadeshmasale.com/home/home-video.mp4';
  return (
    <>
      <div className={styles['video-background']}>
        <div className={styles['video-overlay']}>

        </div>
        <video
          className={styles['video-frame']}
          src={"https://www.aadeshmasale.com/home/home-video.mp4"}
          title="Background Video"
          autoPlay
          loop
          muted
        ></video>
      </div>


      <div className={styles["box-container"]}>
        <div style={{ backgroundColor: "#ed1c24" }} className={styles["box"]}>
          <img src={"https://www.aadeshmasale.com/_next/image?url=%2Fhome%2FNatural-logo.png&w=1920&q=75"} alt="Box 1" className={styles["box-image"]} />
          <h2 className={styles["box-heading"]}>Natural</h2>
          <p className={styles["box-paragraph"]}>
            Our spices are made from the finest natural ingredients, ensuring that you get the best flavors without any harmful additives.
          </p>
        </div>
        <div style={{ backgroundColor: "#fa4047" }} className={styles["box"]}>
          <img src={"https://www.aadeshmasale.com/_next/image?url=%2Fhome%2FHeart-logo.png&w=1920&q=75"} alt="Box 1" className={styles["box-image"]} />
          <h2 className={styles["box-heading"]}>Healthy</h2>
          <p className={styles["box-paragraph"]}>
            Our spices are not only delicious but also packed with health benefits, helping you lead a healthier lifestyle.
          </p>
        </div>
        <div style={{ backgroundColor: "#ed1c24" }} className={styles["box"]}>
          <img src={"https://www.aadeshmasale.com/_next/image?url=%2Fhome%2FFL-logo.png&w=1920&q=75"} alt="Box 1" className={styles["box-image"]} />
          <h2 className={styles["box-heading"]}>Flavor lock</h2>
          <p className={styles["box-paragraph"]}>
            We use the latest techniques to lock in the flavor and aroma of our spices, so you can enjoy their freshness and goodness for longer.
          </p>
        </div>
        <div style={{ backgroundColor: "#fa4047" }} className={styles["box"]}>
          <img src={"https://www.aadeshmasale.com/_next/image?url=%2Fhome%2FVeg-logo.png&w=1920&q=75"} alt="Box 1" className={styles["box-image"]} />
          <h2 className={styles["box-heading"]}>Pure Veg</h2>
          <p className={styles["box-paragraph"]}>
            Our spices are 100% pure and vegetarian, making them the perfect choice for anyone looking for a healthy and ethical food option.

          </p>
        </div>
      </div>


      <div className={styles["myhd"]}>
        <h1 className={styles["hd"]}>The Essence of Indian Spices</h1>
        <p className={styles["pgh"]}>
          Welcome to Aadesh Masala, an Indian spices brand that is dedicated to bringing the flavors of traditional Indian cuisine to every household in India. Our mission is to provide the best quality spices to our customers, ensuring that every meal is full of flavor and packed with nutrition. Over the years, we have grown from a small local business to a national brand, serving customers across India. We take pride in our commitment to quality, sourcing the freshest and finest ingredients to make our spices. Our products are free from any harmful additives, ensuring that our customers can enjoy healthy and delicious meals.
        </p>
      </div>

      <h1 style={{ marginTop: "5rem" }} className={styles["hd"]}>Our Products</h1>


      <h2 style={{ textAlign: "center" }}>All <span>blended</span> <span>Grounded</span> <spen>Other</spen></h2>



      <div className={styles["imag-container"]}>
        <div className={styles["imag"]}>
          <img src="https://www.aadeshmasale.com/_next/image?url=%2Fhome%2Fproducts%2F1.%20Navabi%20Meat%20Masala%20-%20%E0%A4%A8%E0%A4%B5%E0%A4%BE%E0%A4%AC%E0%A5%80%20%E0%A4%AE%E0%A5%80%E0%A4%9F%20%E0%A4%AE%E0%A4%B8%E0%A4%BE%E0%A4%B2%E0%A4%BE.png&w=1920&q=75" alt="imag 1" />
        </div>
        <div className={styles["imag"]}>
          <img src="https://www.aadeshmasale.com/_next/image?url=%2Fhome%2Fproducts%2F2.%20Chicken%20Masala%20-%20%E0%A4%AE%E0%A5%81%E0%A4%B0%E0%A5%8D%E0%A4%97%E0%A4%BE%20%E0%A4%AE%E0%A4%B8%E0%A4%BE%E0%A4%B2%E0%A4%BE.png&w=1920&q=75" alt="imag 2" />
        </div>
        <div className={styles["imag"]}>
          <img src="https://www.aadeshmasale.com/_next/image?url=%2Fhome%2Fproducts%2F3.%20Fish%20Curry%20-%20%E0%A4%AE%E0%A4%9B%E0%A4%B2%E0%A5%80%20%E0%A4%95%E0%A4%B0%E0%A5%80.png&w=1920&q=75" alt="imag 3" />
        </div>
        <div className={styles["imag"]}>
          <img src="https://www.aadeshmasale.com/_next/image?url=%2Fhome%2Fproducts%2F4.%20Sabji%20Masala%20-%20%E0%A4%B8%E0%A4%AC%E0%A5%8D%E0%A4%9C%E0%A5%80%20%E0%A4%AE%E0%A4%B8%E0%A4%BE%E0%A4%B2%E0%A4%BE%205Rs.png&w=1920&q=75" alt="imag 4" />
        </div>
        <div className={styles["imag"]}>
          <img src="https://www.aadeshmasale.com/_next/image?url=%2Fhome%2Fproducts%2F5.%20Special%20Garam%20Masala%20-%20%E0%A4%B8%E0%A5%8D%E0%A4%AA%E0%A5%87%E0%A4%B6%E0%A4%B2%20%E0%A4%97%E0%A4%B0%E0%A4%AE%20%E0%A4%AE%E0%A4%B8%E0%A4%BE%E0%A4%B2%E0%A4%BE.png&w=1920&q=75" alt="imag 5" />
        </div>
        <div className={styles["imag"]}>
          <img src="https://www.aadeshmasale.com/_next/image?url=%2Fhome%2Fproducts%2F6.%20Mishran%20Garam%20Masala%20-%20%E0%A4%AE%E0%A4%BF%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A4%A3%20%E0%A4%97%E0%A4%B0%E0%A4%AE%20%E0%A4%AE%E0%A4%B8%E0%A4%BE%E0%A4%B2%E0%A4%BE.png&w=1920&q=75" alt="imag 6" />
        </div>
        <div className={styles["imag"]}>
          <img src="https://www.aadeshmasale.com/_next/image?url=%2Fhome%2Fproducts%2F7.%20Shahi%20Paneer%20Masala%20-%20%E0%A4%B6%E0%A4%BE%E0%A4%B9%E0%A5%80%20%E0%A4%AA%E0%A4%A8%E0%A5%80%E0%A4%B0%20%E0%A4%AE%E0%A4%B8%E0%A4%BE%E0%A4%B2%E0%A4%BE.png&w=1920&q=75" alt="imag 7" />
        </div>
        <div className={styles["imag"]}>
          <img src="https://www.aadeshmasale.com/_next/image?url=%2Fhome%2Fproducts%2F8.%20Chhola%20Masale%20-%20%E0%A4%9B%E0%A5%8B%E0%A4%B2%E0%A5%87%20%E0%A4%AE%E0%A4%B8%E0%A4%BE%E0%A4%B2%E0%A5%87.png&w=1920&q=75" alt="imag 8" />
        </div>

        <div className={styles["imag"]}>
          <img src="https://www.aadeshmasale.com/_next/image?url=%2Fhome%2Fproducts%2F1.%20Navabi%20Meat%20Masala%20-%20%E0%A4%A8%E0%A4%B5%E0%A4%BE%E0%A4%AC%E0%A5%80%20%E0%A4%AE%E0%A5%80%E0%A4%9F%20%E0%A4%AE%E0%A4%B8%E0%A4%BE%E0%A4%B2%E0%A4%BE.png&w=1920&q=75" alt="imag 1" />
        </div>
        <div className={styles["imag"]}>
          <img src="https://www.aadeshmasale.com/_next/image?url=%2Fhome%2Fproducts%2F2.%20Chicken%20Masala%20-%20%E0%A4%AE%E0%A5%81%E0%A4%B0%E0%A5%8D%E0%A4%97%E0%A4%BE%20%E0%A4%AE%E0%A4%B8%E0%A4%BE%E0%A4%B2%E0%A4%BE.png&w=1920&q=75" alt="imag 2" />
        </div>
        <div className={styles["imag"]}>
          <img src="https://www.aadeshmasale.com/_next/image?url=%2Fhome%2Fproducts%2F3.%20Fish%20Curry%20-%20%E0%A4%AE%E0%A4%9B%E0%A4%B2%E0%A5%80%20%E0%A4%95%E0%A4%B0%E0%A5%80.png&w=1920&q=75" alt="imag 3" />
        </div>
        <div className={styles["imag"]}>
          <img src="https://www.aadeshmasale.com/_next/image?url=%2Fhome%2Fproducts%2F4.%20Sabji%20Masala%20-%20%E0%A4%B8%E0%A4%AC%E0%A5%8D%E0%A4%9C%E0%A5%80%20%E0%A4%AE%E0%A4%B8%E0%A4%BE%E0%A4%B2%E0%A4%BE%205Rs.png&w=1920&q=75" alt="imag 4" />
        </div>
        <div className={styles["imag"]}>
          <img src="https://www.aadeshmasale.com/_next/image?url=%2Fhome%2Fproducts%2F5.%20Special%20Garam%20Masala%20-%20%E0%A4%B8%E0%A5%8D%E0%A4%AA%E0%A5%87%E0%A4%B6%E0%A4%B2%20%E0%A4%97%E0%A4%B0%E0%A4%AE%20%E0%A4%AE%E0%A4%B8%E0%A4%BE%E0%A4%B2%E0%A4%BE.png&w=1920&q=75" alt="imag 5" />
        </div>
        <div className={styles["imag"]}>
          <img src="https://www.aadeshmasale.com/_next/image?url=%2Fhome%2Fproducts%2F6.%20Mishran%20Garam%20Masala%20-%20%E0%A4%AE%E0%A4%BF%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A4%A3%20%E0%A4%97%E0%A4%B0%E0%A4%AE%20%E0%A4%AE%E0%A4%B8%E0%A4%BE%E0%A4%B2%E0%A4%BE.png&w=1920&q=75" alt="imag 6" />
        </div>
        <div className={styles["imag"]}>
          <img src="https://www.aadeshmasale.com/_next/image?url=%2Fhome%2Fproducts%2F7.%20Shahi%20Paneer%20Masala%20-%20%E0%A4%B6%E0%A4%BE%E0%A4%B9%E0%A5%80%20%E0%A4%AA%E0%A4%A8%E0%A5%80%E0%A4%B0%20%E0%A4%AE%E0%A4%B8%E0%A4%BE%E0%A4%B2%E0%A4%BE.png&w=1920&q=75" alt="imag 7" />
        </div>
        <div className={styles["imag"]}>
          <img src="https://www.aadeshmasale.com/_next/image?url=%2Fhome%2Fproducts%2F8.%20Chhola%20Masale%20-%20%E0%A4%9B%E0%A5%8B%E0%A4%B2%E0%A5%87%20%E0%A4%AE%E0%A4%B8%E0%A4%BE%E0%A4%B2%E0%A5%87.png&w=1920&q=75" alt="imag 8" />
        </div>

        <div className={styles["imag"]}>
          <img src="https://www.aadeshmasale.com/_next/image?url=%2Fhome%2Fproducts%2F1.%20Navabi%20Meat%20Masala%20-%20%E0%A4%A8%E0%A4%B5%E0%A4%BE%E0%A4%AC%E0%A5%80%20%E0%A4%AE%E0%A5%80%E0%A4%9F%20%E0%A4%AE%E0%A4%B8%E0%A4%BE%E0%A4%B2%E0%A4%BE.png&w=1920&q=75" alt="imag 1" />
        </div>
        <div className={styles["imag"]}>
          <img src="https://www.aadeshmasale.com/_next/image?url=%2Fhome%2Fproducts%2F2.%20Chicken%20Masala%20-%20%E0%A4%AE%E0%A5%81%E0%A4%B0%E0%A5%8D%E0%A4%97%E0%A4%BE%20%E0%A4%AE%E0%A4%B8%E0%A4%BE%E0%A4%B2%E0%A4%BE.png&w=1920&q=75" alt="imag 2" />
        </div>
        <div className={styles["imag"]}>
          <img src="https://www.aadeshmasale.com/_next/image?url=%2Fhome%2Fproducts%2F3.%20Fish%20Curry%20-%20%E0%A4%AE%E0%A4%9B%E0%A4%B2%E0%A5%80%20%E0%A4%95%E0%A4%B0%E0%A5%80.png&w=1920&q=75" alt="imag 3" />
        </div>
        <div className={styles["imag"]}>
          <img src="https://www.aadeshmasale.com/_next/image?url=%2Fhome%2Fproducts%2F4.%20Sabji%20Masala%20-%20%E0%A4%B8%E0%A4%AC%E0%A5%8D%E0%A4%9C%E0%A5%80%20%E0%A4%AE%E0%A4%B8%E0%A4%BE%E0%A4%B2%E0%A4%BE%205Rs.png&w=1920&q=75" alt="imag 4" />
        </div>
        <div className={styles["imag"]}>
          <img src="https://www.aadeshmasale.com/_next/image?url=%2Fhome%2Fproducts%2F5.%20Special%20Garam%20Masala%20-%20%E0%A4%B8%E0%A5%8D%E0%A4%AA%E0%A5%87%E0%A4%B6%E0%A4%B2%20%E0%A4%97%E0%A4%B0%E0%A4%AE%20%E0%A4%AE%E0%A4%B8%E0%A4%BE%E0%A4%B2%E0%A4%BE.png&w=1920&q=75" alt="imag 5" />
        </div>
        <div className={styles["imag"]}>
          <img src="https://www.aadeshmasale.com/_next/image?url=%2Fhome%2Fproducts%2F6.%20Mishran%20Garam%20Masala%20-%20%E0%A4%AE%E0%A4%BF%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A4%A3%20%E0%A4%97%E0%A4%B0%E0%A4%AE%20%E0%A4%AE%E0%A4%B8%E0%A4%BE%E0%A4%B2%E0%A4%BE.png&w=1920&q=75" alt="imag 6" />
        </div>
        <div className={styles["imag"]}>
          <img src="https://www.aadeshmasale.com/_next/image?url=%2Fhome%2Fproducts%2F7.%20Shahi%20Paneer%20Masala%20-%20%E0%A4%B6%E0%A4%BE%E0%A4%B9%E0%A5%80%20%E0%A4%AA%E0%A4%A8%E0%A5%80%E0%A4%B0%20%E0%A4%AE%E0%A4%B8%E0%A4%BE%E0%A4%B2%E0%A4%BE.png&w=1920&q=75" alt="imag 7" />
        </div>
        <div className={styles["imag"]}>
          <img src="https://www.aadeshmasale.com/_next/image?url=%2Fhome%2Fproducts%2F8.%20Chhola%20Masale%20-%20%E0%A4%9B%E0%A5%8B%E0%A4%B2%E0%A5%87%20%E0%A4%AE%E0%A4%B8%E0%A4%BE%E0%A4%B2%E0%A5%87.png&w=1920&q=75" alt="imag 8" />
        </div>
      </div>



    </>
  );
};

export default Home;
