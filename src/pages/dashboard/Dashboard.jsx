import './dashboard.css'
import PlanHead from '../../components/PlanHead';
import "../plans/plan.scss";
import Card from "../../UI/Card";
import {  useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    async function getPlans() {
      try {
        const result = await axios.get(`http://localhost:9090/api/v1/plans`);
        setPlans(result.data);
        console.log(plans)
      
        // setServicePlans(result.data.servicePlans);
      } catch (error) {
        console.log(error);
      }
    }
    getPlans();
  }, []);
  const navigate = useNavigate()
  const handleBook = () => {
  
    navigate(`/booking/${plans.id}`)
  }
  return (
    <div>
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
                  <div onClick={()=>( navigate(`/booking/${id}`))} className="btn sm">
                    Book Now
                  </div>
                </Card>
              );
            }
          )}
        </div>
    </div>
  )
}

export default Dashboard