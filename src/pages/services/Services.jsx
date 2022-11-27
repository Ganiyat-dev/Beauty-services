import { FaCrown } from "react-icons/fa";
import SectionHead from "../../components/SectionHead";
import Card from "../../UI/Card";
import { useEffect, useState } from "react";
import axios from "axios";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function getServices() {
      try {
        const result = await axios.get(`http://localhost:9090/api/v1/services`);
        console.log("The result is ", result);
        setServices(result.data);
      } catch (error) {
        console.log(error);
      }
    }

    getServices();
  }, []);

  return (
    <section className="programs">
      <div className="container programs__container">
        <SectionHead icon={<FaCrown />} title="Services" />
        <div className="programs__wrapper">
          {services.map(({ id, icon, serviceName, serviceDetails }) => {
            return (
              services.length > 0 && (
                <Card className="programs__program" key={id}>
                  <span>{icon}</span>
                  <h4>{serviceName}</h4>
                  <small>{serviceDetails}</small>
                </Card>
              )
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
