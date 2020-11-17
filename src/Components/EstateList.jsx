import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../scss/listing.scss';
import '../scss/estates.scss';
// import Estates from './Estates.jsx';

// const red = {
//     backgroundColor: 'red'
// }
// const green = {
//     backgroundColor: 'green'
// }


const EstateListing = () => {

    const [estates, setEstates] = useState([]);
    const [compareEstates, setCompareEstates] = useState([]);
    const {prize_czk: price} = compareEstates;
    const estateA = compareEstates[0];
    const estateB = compareEstates[1];

    // const largestNumber = (compareEstates) => {
    //     let highest = 0;
    //     for (let i=0; i < compareEstates.length; i++) {
    //         if (compareEstates[i] > highest) {
    //             highest = compareEstates[i];
    //             console.log(highest)
    //         }
    //     }
    //     return highest
    // }

    // const higherNumber = (estateA, estateB) => {
    //     if (estateA.price > estateB.price) {
           
    //     } else {
            
    //     }
    // }

    useEffect(() => {
    async function fetchData() {
      const response = await axios(
        'https://estate-comparison.codeboot.cz/list.php',
      );
        const result10 = response.data.slice(0, 10);
        const compareEstates = response.data.slice(4,6);
        setCompareEstates(compareEstates);
        // higherValue(compareEstates);
        // higherNumber(compareEstates);
        setEstates(result10);
    }
    fetchData();
  }, []); 

//   const higherValue = (compareEstates) => {
//     const estateA = compareEstates[0];
//     const estateB = compareEstates[1];
//     console.log(Math.max(estateA.prize_czk, estateB.prize_czk))
//     // (estateA.prize_czk > estateB.prize_czk) ? true : false
//     // (estateA.prize_czk > estateB.prize_czk) ? red : green
//     (estateA.prize_czk > estateB.prize_czk) ? console.log('A is higher') : console.log('B is higher')
// }
   
    return (
        <div className="container">

            <div className="estate-list">
                {estates.map(estate  => (
                    <div key={estate.id}>
                        <img className="estate-list-img" src={estate.images[0]} alt={estate.name}/>
                        <p className="estate-list-name">{estate.name}</p>
                    </div>
                ))}
            </div>

            <div className="estates">
                        {compareEstates.map((i, index) => (
                        <div key={index} className="estate-card">
                    <img className="estate-img" src={i.images[0]} alt={i.name}/>

                    <div className="estate-description">
                        <p>{i.name}</p>
                        {/* {{ backgroundColor: true ? "red" : "green" }} */}
                        {/* estateA.prize_czk > estateB.prize_czk */}
                        <p style={{backgroundColor: (estateA.prize_czk > estateB.prize_czk) ? "red" : "green" }}><strong>Price</strong><span className="textalign-right">{i.prize_czk}</span></p>
                        <p><strong>Locality</strong><span className="textalign-right">{i.locality}</span></p>
                        <p style={{backgroundColor: (estateA.building_area > estateB.building_area) ? "green" : "red" }}><strong>Floor area</strong><span className="textalign-right">{i.building_area}</span></p>
                        <p style={{backgroundColor: (estateA.land_area > estateB.land_area) ? "green" : "red" }}><strong>Land area</strong> <span className="textalign-right">{i.land_area}</span></p>
                        <div>{i.company_name !== null ? 
                            <div className="estate-company"><img src={i.company_logo} alt={i.company_logo}/> 
                            <span>{i.company_name}</span></div> 
                            : <div></div> }</div>
                    </div>
                </div>
                ))}
            </div>
            </div>
        )
    }
            
export default EstateListing