import React from "react";
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import furbyimg from '../images/furby.jpg';
import furbyimg2 from '../images/furby2.jpeg'
import furbyGIF from '../images/Furby_GIF.gif'
import furbywebp from '../images/webimg.webp'



const dataPages = ['Homepage','aboutus','categories', 'users', 'marketplace']
const length = dataPages.length

for (let i=0; i<length ;i++){
    console.log(dataPages[i]);
}

const InfoPage =()=>{


    return(
        < div className="main" >
        <div className="article1">
            <img src={furbyGIF } alt='Oumar' className='imgOumar' />
          <p className="para">Furby est un jouet robotique électronique sous forme d'
            une petite peluche animée interactive, qu'il s'agit de traiter 
            avec grand soin en tant qu'animal de compagnie virtuel. Cousin
             très éloigné du Tamagotchi, concurrent des Aibo. 
             Il est développé par la société américaine Tiger Electronics, de 1998 
            à 2001 et par la société Hasbro de 2005 à 2007 et de 2012 à maintenant.</p>
        </div>
        <div className="article2">
        <p className="para">Furby est un jouet robotique électronique sous forme d'
            une petite peluche animée interactive, qu'il s'agit de traiter 
            avec grand soin en tant qu'animal de compagnie virtuel. Cousin
             très éloigné du Tamagotchi, concurrent des Aibo. 
             Il est développé par la société américaine Tiger Electronics, de 1998 
            à 2001 et par la société Hasbro de 2005 à 2007 et de 2012 à maintenant.</p>
        <img src={furbywebp } alt='Oumar' className='imgOumar' />     
        </div>
        <div className='pagination'>
      <Stack spacing={2}>
        <Pagination
          count={5}
          renderItem={(item) => (
            <PaginationItem
              Item={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />
      </Stack>
      </div>
        </div>
    )

}
export default InfoPage