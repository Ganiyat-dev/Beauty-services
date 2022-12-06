import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../UI/Card";
import { Link } from "react-router-dom";
import { TbBusinessplan } from "react-icons/tb";
import PlanHead from "./PlanHead";

const Plan = () => {
  const [plans, setPlans] = useState([]);

  // const [servicePlans, setServicePlans] = useState([]);

  useEffect(() => {
    async function getPlans() {
      try {
        const result = await axios.get(`http://localhost:9090/api/v1/plans`);
        setPlans(result.data);
        // setServicePlans(result.data.servicePlans);
      } catch (error) {
        console.log(error);
      }
    }
    getPlans();
  }, []);

  return (
    <section className="programs">
      <div className="container programs__container">
        <PlanHead icon={<TbBusinessplan />} title="Plans" />
        <div className="programs__wrapper">
          {plans?.map(
            ({
              id,
              planName,
              planDescription,
              planPrice,
              planSession,
              servicePlans,

              path,
            }) => {
              return (
                <Card className="programs__program" key={id}>
                  {/* <span>{name}</span> */}
                  <h4>{planName}</h4>
                  <small>{planDescription}</small>
                  <small>&#8358; {planPrice}</small>
                  <small> No of Session: {planSession}</small>
                  <small>
                    {servicePlans.map((item, index) => (
                      <>
                        <p key={index}>
                          <span key={index}> {item.serviceName}</span>
                        </p>
                      </>
                    ))}
                  </small>
                  <Link to="/register" className="btn sm">
                    Book Now
                  </Link>
                </Card>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Plan;
