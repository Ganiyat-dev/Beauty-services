import {FaCrown} from 'react-icons/fa'
import SectionHead from './SectionHead'
import {programs} from '../data'
import Card from '../UI/Card'
import {Link} from 'react-router-dom'
import {AiFillCaretRight} from 'react-icons/ai'
import { useEffect, useState } from 'react'
import axios from "axios"



const Programs = () => {
    const [services, setServices] = useState([]);

    useEffect(async () => {
        const result = await axios.get(`http://localhost:9090/api/v1/plans`)
        setServices(result.data)
        
    }, [])
    

  return (
    <section className='programs'>
        <div className='container programs__container'>
            <SectionHead icon={<FaCrown/>} title="Plans"/>
        <div className='programs__wrapper'>
            {
                services.map(({id, icon, planName, planDescription, path}) => {
                    return (
                        services.length > 0 && 
                        <Card className="programs__program" key={id}>
                            <span>{icon}</span>
                            <h4>{planName}</h4>
                            <small>{planDescription}</small>
                            <Link to={path} className="btn sm">Learn More
                            <AiFillCaretRight/>
                            </Link>
                        </Card>
                        
                    )
                })
            }
        </div>
        </div>
    </section>
  )
}

export default Programs