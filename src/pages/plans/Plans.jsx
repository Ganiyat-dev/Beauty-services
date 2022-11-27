import { TbBusinessplan } from "react-icons/tb";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../UI/Card";
import { Link } from "react-router-dom";
import PlanHead from "../../components/PlanHead";

const Plan = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    async function getPlans() {
      try {
        const result = await axios.get(`http://localhost:9090/api/v1/plans`);
        console.log("The result is ", result);
        setPlans(result.data);
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
          {plans.map(
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
                  <small>No of Session: {planSession}</small>
                  <small> {servicePlans} </small>
                  <Link to="/booking" className="btn sm">
                    Book Now
                    <TbBusinessplan />
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
