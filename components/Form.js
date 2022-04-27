import React, { useEffect, useState } from 'react'
import styles from '../styles/Form.module.css'
import Map, { Marker } from 'react-map-gl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
import axios from 'axios'




function Form ({user})  {
  const [data,setData] = useState({
    latitude:'-37.3159',
    longitude:'81.1496',
  });
  const [viewPort,setViewPort]=useState({
    latitude:-37.3159,
    longitude:81.1496,
    zoom:1
  })
  
   const [form,setForm] = useState({
     title:'',
     body:'',
     userId:1
   })

   const changeHandler = (e)=>{
     const newData = {...form};
     newData[e.target.name]=e.target.value;
     setForm(newData);
     console.log(newData);
   }
  
  const handleChange = (e)=>{
    const name = user.find(t => t.name === e.target.value);
    
    const latitude = name.address.geo.lat;
    const longitude = name.address.geo.lng;
      setData({
        latitude:latitude,
        longitude:longitude
      })
      
    
  }
  const showData = ()=>{
    const {latitude,longitude} = data;
    setViewPort({
      latitude:latitude,
      longitude:longitude,
      zoom:3,
    })

  }

  
  return (
    <>
   

    <div className={styles.loginbox}>
  <h2>Find & Register User</h2>
  <form method='POST' action='https://jsonplaceholder.typicode.com/posts'>
    <div className={styles.userbox}>
      <select defaultValue='Leanne Graham' onChange={handleChange}>
        {user.map((info)=>(
          <option key={info.id} value={info.name}>{info.name}</option>
        ))}
      </select>
      <label>Select a User</label>
    </div>
    <div className={styles.userbox}>
      <input type="text" value={form.title} onChange={(e)=>changeHandler(e)} name="title" required/>
      <label>Title</label>
    </div>
    <div className={styles.userbox}>
      <input type="text" value={form.body} onChange={(e)=>changeHandler(e)} name="body" required/>
      <label>Body</label>
      <button type='submit'>Submit</button>
    </div>
    
   
    <a href="#" onClick={showData}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Locate
    </a>

    
    
   
    
    
  </form>
</div>
<Map
     style={{width:1000,height:350,marginTop:'370px',marginLeft:'300px'}}
     {...viewPort}
     mapboxAccessToken='pk.eyJ1IjoiYWRhcnNoMjEyMiIsImEiOiJjbDF6NmU3OTAwamxlM2Rxb2Y1NHYybTEzIn0.K0HcH6ZrZUL9TUTf_Imvsw'
     mapStyle="mapbox://styles/mapbox/streets-v9"
     onMove={evt => setViewPort(evt.viewPort)}
    >
      <Marker latitude={viewPort.latitude} longitude={viewPort.longitude}>
        <div style={{fontSize:'20px'}}><FontAwesomeIcon icon={faLocationDot} size='2x' />User</div>
      </Marker>
    </Map>
    </>
  )
}

export default Form

