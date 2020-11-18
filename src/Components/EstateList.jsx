import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Estates from './Estates.jsx';
import '../scss/estate-list.scss';


const EstateListing = () => {

    const [estates, setEstates] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    

    useEffect(() => {
    async function fetchData() {
      const response = await axios(
        'https://estate-comparison.codeboot.cz/list.php',
      );
        const result10 = response.data.slice(0, 10);
        console.log(result10)
        setEstates(result10);
        setIsLoading(false);
    }
    fetchData();
  }, []); 

    return (
        <div className="container">
            <div>
            {isLoading ? <h1>Loading...</h1> :
                
            <div className="estate-list">
                {estates.map(estate  => (
                    <div key={estate.id}>
                        <img className="estate-list__img" src={estate.images[0]} alt={estate.name}/>
                        <p className="estate-list__name">{estate.name}</p>
                    </div>
                ))}
            </div>
            }
            
            <Estates />
            </div>
            
        </div>
        )
    }
            
export default EstateListing