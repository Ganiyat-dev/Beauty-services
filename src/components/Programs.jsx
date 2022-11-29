import { FaCrown } from "react-icons/fa";
import SectionHead from "./SectionHead";
import Card from "../UI/Card";
import { useEffect, useState } from "react";
import axios from "axios";

const Programs = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function getServices() {
      try {
        const result = await axios.get(`http://localhost:9090/api/v1/services`);
        console.log("The result is ", result.data);
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
          {services.length > 0 ? (
            <>
              {services.map(({ id, icon, serviceName, serviceDetails }) => (
                <Card className="programs__program" key={id}>
                  <span>{icon}</span>
                  <h4>{serviceName}</h4>
                  <small>{serviceDetails}</small>
                </Card>
              ))}
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Programs;
