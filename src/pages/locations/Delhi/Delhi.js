import './Delhi.css';
import { TravelCard } from "../../../components/locations/TravelCard";
import { DelhiImages } from "../../../media/delhi/DelhiImages";

import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Delhi = () => {
    const placeInfo = [
        {
            placeName: "Delhi",
            tagline: "Dildaar Dilli",
            desc: "Explore Delhi, the capital of India, known for its rich history, vibrant culture, and bustling markets. From the grandeur of India Gate to the spiritual serenity of Akshardham Temple, Delhi is a perfect blend of heritage and modernity."
        }
    ];


    return (
        <>
            <div className="de-container">
                {placeInfo.map((place) => (
                    <TravelCard
                        name={place.placeName}
                        tagline={place.tagline}
                        desc={place.desc}
                    />
                ))}
            </div>

            <div className="t-info">
                <h2>
                    <span id="diff">E</span>verything you need to know
                    <hr />
                </h2>
                <div className="t-row">
                    <div className="infobox module">
                        <div className="box">
                            <div className="title">
                                <h2>
                                    <span id="diff">S</span>tart Planning Your Trip!
                                    <hr />
                                </h2>
                                <p>
                                    Experience the grandeur of Delhi! From Mughal-era forts and colonial architecture to vibrant street markets and modern attractions, the capital has something for everyone!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="images module">
                        <div className="img1">
                            <img src={DelhiImages.d1} alt="Historical Site" id="port1" />
                        </div>
                        <div className="img2">
                            <img src={DelhiImages.d2} alt="Cityscape" id="port2" />
                        </div>
                    </div>
                </div>
                <hr id="line" />
                <h2 className="heading" id="heritage">
                    <span id="fdiff">H</span>eritage & Landmarks
                    <hr />
                </h2>

                <div className="t-row">
                    <div className="images module">
                        <div className="img1">
                            <img src={DelhiImages.dc1} alt="Red Fort" id="port1" />
                        </div>
                        <div className="img2">
                            <img src={DelhiImages.dc2} alt="India Gate" id="port2" />
                        </div>
                    </div>
                    <div className="infobox module">
                        <div className="box">
                            <div className="title">
                                <h2>
                                    <span id="fdiff">E</span>xplore Historic Delhi
                                    <hr />
                                </h2>
                                <p>
                                    Walk through history as you visit Red Fort, India Gate, and Jama Masjid. Witness the architectural marvels that tell tales of India's glorious past.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr id="line" />

                <div className="container5" id="contact">
                    <section className="t-contact">
                        <h1>Book Your Tickets</h1>
                        <div className="rowlast">
                            <div className="contimg">
                                <img src={contactimg} alt="Contact us" id="contimg" />
                            </div>
                            <div className="box">
                                <h2>
                                    Book Your Delhi Trip
                                    <hr />
                                </h2>
                                <p>
                                    One step away from exploring Delhi's heritage and vibrant culture! Don't miss out—reserve your spot today!
                                </p>
                                <Link to="/book">
                                    <div className="btn">
                                        <button className="book-btn">Book now</button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};
