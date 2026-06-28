import "./PackageSection.css";
import { Link } from "react-router-dom";
import { PackageCard } from "./PackageCard";
import karnataka from "../media/kerala/keralabg.jpg";
import dubai from "../media/dubai.jpg";
import europe from "../media/europebg.jpg";
import kerala from "../media/chennai/chennaibg.jpg";
import maldives from "../media/maldivesbg.jpg";
import rajasthan from "../media/rajasthan.jpg";
import thailand from "../media/thailandbg.jpg";
import goa from "../media/goa.jpg";

export const PackageSection = () => {
  const packageInfoRow1 = [
    {
      place: "Karnataka",
      info: "Located in the southern part of India, Karnataka is known for its rich cultural heritage, vibrant cities, and stunning natural landscapes. ",
      img: karnataka,
      price: "5000-7000 INR",
    },
    {
      place: "Goa",
      info: "Famous for its stunning beaches, vibrant nightlife, and Portuguese heritage, Goa is India's top beach destination.",
      img: goa,
      price: "6000-8000 INR",
    },
    {
      place: "Chennai",
      info: "Known as 'God’s Own Country,'  boasts beautiful backwaters, lush greenery, and serene houseboat experiences.",
      img: kerala,
      price: "7000-9000 INR",
    },
    {
      place: "Rajasthan",
      info: "Home to grand palaces, golden deserts, and historic forts, Rajasthan offers a royal experience with its rich cultural heritage.",
      img: rajasthan,
      price: "8000-10000 INR",
    },
  ];

  const packageInfoRow2 = [
    {
      place: "Dubai",
      info: "A futuristic city known for its towering skyscrapers, luxury shopping, desert safaris, and vibrant nightlife.",
      img: dubai,
      price: "20000-30000 INR",
    },
    {
      place: "Europe",
      info: "Europe offers a mix of historical landmarks, picturesque landscapes, and iconic cities like Paris, Rome, and London.",
      img: europe,
      price: "50000-70000 INR",
    },
    {
      place: "Thailand",
      info: "Thailand is famous for its tropical beaches, rich culture, street food, and bustling nightlife in cities like Bangkok and Phuket.",
      img: thailand,
      price: "15000-25000 INR",
    },
    {
      place: "Maldives",
      info: "A paradise of crystal-clear waters, overwater bungalows, and coral reefs, the Maldives is perfect for a luxury island getaway.",
      img: maldives,
      price: "40000-60000 INR",
    },
  ];

  return (
    <>
      <div className="container3">
        <section className="packages" id="packages">
          <h1>Best Selling Destinations!</h1>
          <div className="outerbox">
            <h2>
              Domestic
              <hr />
            </h2>
            <div className="row1">
              {packageInfoRow1.map((element) => (
                <PackageCard
                  placeName={element.place}
                  img={element.img}
                  info={element.info}
                  price={element.price}
                  location={element.place}
                />
              ))}
            </div>
            <h2>
              International
              <hr />
            </h2>
            <div className="row2">
              {packageInfoRow2.map((element) => (
                <PackageCard
                  placeName={element.place}
                  img={element.img}
                  info={element.info}
                  price={element.price}
                  location={element.place}
                />
              ))}
            </div>
            <div className="morebtn">
              <Link to="/locations">
                <button className="more-btn">Explore all</button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
