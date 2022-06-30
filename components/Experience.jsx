import React, {useEffect} from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'
import Sanj from '../images/sanjorge1.png'
import Lindo from '../images/lindosoft.jpg'


export const Experience = () => {
    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])

  return (
    <div className="container-animation-experience">
        <p className="p-title-experience" data-aos='fade-up'>Experience</p>
        <div className="grids">
            <div className="container-card-experience" data-aos='fade-left'>
                <img src={Sanj} style={{width: '180px'}} alt='sanjorge'/>
                <div className="div-titles-experience">
                    <p className="title-cards-experience">Automóviles San Jorge</p>
                    <p style={{color:'#fff', marginTop:'-20px'}}><span className="span-roll">Roll:</span> Front-End developer</p>
                </div>
            </div>
            <div className="container-card-experience" data-aos='fade-right'>
                <img src={Lindo} style={{width: '180px'}} alt='lindosoftware'/>
                <div className="div-titles-experience">
                    <p className="title-cards-experience">Lindo.la Software</p>
                    <p style={{color:'#fff', marginTop:'-20px'}}><span className="span-roll">Roll:</span> Front-End developer</p>
                </div>
            </div>
        </div>
    </div>
  );
};
