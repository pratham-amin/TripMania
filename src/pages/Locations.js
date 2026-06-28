import "./Locations.css";
import himachal from "../media/himachalbg.jpg";
import chennai from "../media/chennai/chennaibg.jpg";
import dubai from "../media/dubai.jpg";
import europe from "../media/europebg.jpg";
import russia from "../media/russia/russiabg.jpg";
import delhi from "../media/delhi/delhibg.jpg";
import maldives from "../media/maldivesbg.jpg";
import rajasthan from "../media/rajasthan.jpg";
import srilanka from "../media/srilanka/srilankabg.jpg";
import thailand from "../media/thailandbg.jpg";
import goa from "../media/goa.jpg";
import { PackageCard } from "../components/PackageCard";
import { Searchbox } from "../components/Searchbox";
import { useState, useEffect } from "react";
import  gujarat from "../media/gujrat/gujratbg.jpg";
import uttarakhand from "../media/uttarakhand/ukbg.jpg";
import jammu from "../media/jammu/jkbg.jpg";
import karnataka from "../media/kerala/keralabg.jpg";


export const Locations = () => {
  const packageInfoRow1 = [
    {
      place: "Chennai",
      info: "Explore Chennai’s rich heritage with its ancient temples, Marina Beach, and vibrant Tamil culture. Don’t miss the delicious South Indian cuisine!",
      img: chennai,
      price: "5000-7000 INR",
    },
    {
      place: "Delhi",
      info: "Experience the historic grandeur of Delhi, home to iconic landmarks like the Red Fort, India Gate, and bustling markets of Chandni Chowk!",
      img: delhi,
      price: "6000-8000 INR",
    },
    {
      place: "Goa",
      info: "Relax on the sun-kissed beaches of Goa, enjoy thrilling water sports, and experience the lively nightlife and Portuguese heritage!",
      img: goa,
      price: "7000-9000 INR",
    },
    {
      place: "Gujarat",
      info: "Discover the cultural vibrancy of Gujarat with the stunning Rann of Kutch, Gir National Park, and historic sites like Somnath Temple!",
      img: gujarat,
      price: "5500-7500 INR",
    },
    {
      place: "Himachal",
      info: "Breathe in the fresh mountain air of Himachal Pradesh while exploring scenic hill stations like Shimla, Manali, and Dalhousie!",
      img: himachal,
      price: "8000-10000 INR",
    },
    {
      place: "Jammu",
      info: "Embrace the spiritual essence of Jammu, home to Vaishno Devi Temple, picturesque landscapes, and serene monasteries!",
      img: jammu,
      price: "5000-7000 INR",
    },
    {
      place: "Karnataka",
      info: "From the royal palaces of Mysore to the tech city of Bangalore and the lush coffee plantations of Coorg, Karnataka has it all!",
      img: karnataka,
      price: "6500-8500 INR",
    },
    {
      place: "Rajasthan",
      info: "Experience the regal charm of Rajasthan with its majestic forts, golden deserts, and vibrant culture in Jaipur, Udaipur, and Jaisalmer!",
      img: rajasthan,
      price: "7000-9500 INR",
    },
    {
      place: "Uttarakhand",
      info: "Rejuvenate in the pristine landscapes of Uttarakhand with spiritual retreats in Rishikesh and scenic views in Nainital and Mussoorie!",
      img: uttarakhand,
      price: "7500-10000 INR",
    },
    {
      place: "Dubai",
      info: "Witness the futuristic skyline of Dubai, shop in luxury malls, and enjoy thrilling desert safaris and stunning beaches!",
      img: dubai,
      price: "20000-30000 INR",
    },
    {
      place: "Europe",
      info: "Explore Europe’s breathtaking landscapes, historic cities, and rich culture, from Paris and Rome to Amsterdam and Barcelona!",
      img: europe,
      price: "50000-70000 INR",
    },
    {
      place: "Thailand",
      info: "Immerse yourself in Thailand’s exotic beaches, vibrant nightlife, historic temples, and delicious street food!",
      img: thailand,
      price: "15000-25000 INR",
    },
    {
      place: "Maldives",
      info: "Indulge in luxury in the Maldives, where crystal-clear waters, overwater bungalows, and vibrant marine life await!",
      img: maldives,
      price: "25000-40000 INR",
    },
    {
      place: "Srilanka",
      info: "From the bustling streets of New York to the natural wonders of the Grand Canyon, America offers endless adventures!",
      img:srilanka,
      price: "60000-90000 INR",
    },
    {
      place: "Russia",
      info: "Discover Australia’s stunning beaches, vibrant cities like Sydney and Melbourne, and the Great Barrier Reef!",
      img: russia,
      price: "70000-100000 INR",
    },
  ];

  const [searchField, setSearchField] = useState("");
  const [places, setPlaces] = useState(packageInfoRow1);
  const [filteredPlaces, setFilteredPlaces] = useState(places);

  useEffect(() => {
    const newfilteredPlaces = places.filter((place) => {
      return place.place.toLocaleLowerCase().includes(searchField);
    });

    setFilteredPlaces(newfilteredPlaces);
  }, [places, searchField]);

  const handleOnChange = (e) => {
    const search = e.target.value.toLocaleLowerCase();
    setSearchField(search);
  };

  return (
    <>
      <section className="packages">
        <div className="package-container">
          <h2>
            All Locations
            <hr />
          </h2>
          <Searchbox handleOnChange={handleOnChange} />
          <div className="p-row">
            {filteredPlaces.map((element) => {
              return (
                <PackageCard
                  placeName={element.place}
                  img={element.img}
                  info={element.info}
                  price={element.price}
                  location={element.place}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
