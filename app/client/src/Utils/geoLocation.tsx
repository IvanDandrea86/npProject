import React, {useState, useEffect,FC} from 'react'
import axios from 'axios';







interface IGeoLoc{
    lat:number|null;
    long :number |null;
}
const FindMe:FC=()=>{
const [userPos, setUserPos] = useState({}as IGeoLoc)
const [Location,setLocation]=useState()

 useEffect(() => {
      navigator.geolocation.getCurrentPosition((pos) =>{
          console.log(pos.coords.latitude + " " + pos.coords.longitude) // display VALUE
          const newUserPos = { 
                lat: pos.coords.latitude,
                long: pos.coords.longitude,
           }
           var options:any|undefined = {
            method: 'GET',
            url: 'https://geocodeapi.p.rapidapi.com/GetTimezone',
            params: {latitude: newUserPos.lat, longitude: newUserPos.long},
            headers: {
              'x-rapidapi-host': 'geocodeapi.p.rapidapi.com',
              'x-rapidapi-key': '37b9ca1b01msha9517aa0e7e3cc3p1ec8e5jsnf87e2c8c7974'
            }
          };
          axios.request(options).then(function (response) {
            console.log(response.data.Country);
            setLocation(response.data.Country)
        }).catch(function (error) {
            console.error(error);
        });
          setUserPos(newUserPos) // store data in usestate
          console.log(newUserPos) // Display your values
     }, (err) => {
          console.log(err);
     });
    },[])

return (

 <div>
{Location}</div>

 )

}

export default FindMe;