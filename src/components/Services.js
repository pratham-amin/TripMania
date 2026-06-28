import "./Services.css";
import { ServiceCard } from "./ServiceCard";

export const Services = () => {
  const serviceInfoRow1 = [
    {
      header: "Best Flights",
      info: "Get the best flight deals with competitive pricing and seamless booking experience.",
      icon: "fas fa-plane-departure",
    },
    {
      header: "Best Deals",
      info: "Exclusive travel deals and discounts to make your trips budget-friendly and enjoyable.",
      icon: "fas fa-rupee-sign",
    },
    {
      header: "Railway Bookings",
      info: "Hassle-free railway ticket booking with real-time seat availability and instant confirmation.",
      icon: "fas fa-subway",
    },
  ];
  
  const serviceInfoRow2 = [
    {
      header: "Food And Drinks",
      info: "Enjoy delicious meals and refreshing drinks during your travels with our curated dining options.",
      icon: "fas fa-utensils",
    },
    {
      header: "Hotels",
      info: "Find the perfect stay with our extensive hotel listings, ranging from budget to luxury accommodations.",
      icon: "fas fa-hotel",
    },
    {
      header: "Safe Travels",
      info: "Your safety is our priority! Travel with comprehensive insurance and 24/7 support.",
      icon: "fas fa-clinic-medical",
    },
  ];

  return (
    <>
      <div className="container4">
        <section className="service" id="services">
          <h1>Have a look at our services!</h1>
          <div className="row2">
            {serviceInfoRow1.map((element) => {
              return (
                <ServiceCard
                  header={element.header}
                  info={element.info}
                  icon={element.icon}
                />
              );
            })}
          </div>
          <div className="row1">
            {serviceInfoRow2.map((element) => {
              return (
                <ServiceCard
                  header={element.header}
                  info={element.info}
                  icon={element.icon}
                />
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};
