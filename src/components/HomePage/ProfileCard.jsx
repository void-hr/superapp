import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ProfileCard = () => {


    const navigate = useNavigate();
    const [profileData, setProfileData] = useState({});
    const [ movieCat, setMovieCat ] = useState([]);
    useEffect(()=> {
   
     if(!localStorage.getItem('fornData')) {
         navigate('/registration')
     }else{
         setProfileData(JSON.parse(localStorage.getItem('fornData')));
         setMovieCat(localStorage.getItem('categories').split(','))
     }
 
 
   
     },[navigate])


  return (
    <div className="profile_card">
    <div className='profile_img'> </div>
    <div className="profile_data">
        <div className="biodata">
            <p className='p_name'>{profileData?.["name"]}</p>
            <p className='p_email'>{profileData?.["email"]}</p>
            <p className='p_uname'>{profileData?.["username"]}</p>
        </div>
        <div className="profile_cat">
            {movieCat.map((elem,id)=> <div key={id} className='movies_cat'>{elem}</div>)}
        </div>
    </div>
</div>
  )
}

export default ProfileCard