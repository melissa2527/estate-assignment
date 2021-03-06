import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Estates from './Estates.jsx';
import '../scss/estate-list.scss';


const EstateListing = () => {

    const [estates, setEstates] = useState([]);
    

    useEffect(() => {
    async function fetchData() {
      const response = await axios(
        'https://estate-comparison.codeboot.cz/list.php',
      );
        const result10 = response.data.slice(0, 10);
        console.log(result10)
        setEstates(result10);
    }
    fetchData();
  }, []); 

    return (
        <div className="container">
                
            <div className="estate-list">
                {estates.map(estate  => (
                    <div className="list-item" key={estate.id}>
                        <img src={estate.images[0]} alt={estate.name}/>
                        <p>{estate.name}</p>
                    </div>
                ))}
            </div>
            
            
            <Estates />
        </div>
            
        )
    }
            
export default EstateListing