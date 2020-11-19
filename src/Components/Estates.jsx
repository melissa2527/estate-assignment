import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../scss/estates.scss';


const Estates = () => {
  
    const [compareEstates, setCompareEstates] = useState([]);
    const [estateA, setEstateA] = useState('');
    const [estateB, setEstateB] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
          const response = await axios(
            'https://estate-comparison.codeboot.cz/list.php',
          );
            const compareEstates = response.data.slice(4,6);
          
            setCompareEstates(compareEstates);
            console.log('array', compareEstates);
            const estateA = compareEstates[0];
            setEstateA(estateA);
            const estateB = compareEstates[1];
            setEstateB(estateB);
            console.log('A', estateA);
            console.log('B', estateB);
            setIsLoading(false);
        }
        fetchData();
      }, []); 
      
    return (
        <div>
           {isLoading ? <h1>Loading...</h1> :
             <div className="estates">
                         {compareEstates.map(i => (
                        <div key={i.id} className="estate-card">
                    <img className="estate__img" src={i.images[0]} alt={i.name}/>

                    <div className="estate__description">
                        <p className="estate__name">{i.name}</p>
                        <p style={{backgroundColor: (estateA.prize_czk > estateB.prize_czk) ? '#aa3e3e' : 'rgb(80, 155, 96)'}}>Price<span className="textalign--right">{i.prize_czk}</span></p>
                        <p>Locality<span className="textalign--right">{i.locality}</span></p>
                        <p style={{backgroundColor: (estateA.building_area < estateB.building_area) ? '#aa3e3e' : 'rgb(80, 155, 96)'}}>Floor area<span className="textalign--right">{i.building_area}</span></p>
                        <p style={{backgroundColor: (estateA.land_area < estateB.land_area) ? '#aa3e3e' : 'rgb(80, 155, 96)'}}><strong>Land area</strong> <span className="textalign--right">{i.land_area}</span></p>

                        <div>{i.company_name !== null ? 
                            <div className="estate__company"><img src={i.company_logo} alt={i.company_logo}/> 
                            <span className="estate__company__name">{i.company_name}</span></div> 
                            : <div></div> }</div>
                    </div>
                </div>
                ))}
                
            </div>
              }
        </div>
    )
}

export default Estates