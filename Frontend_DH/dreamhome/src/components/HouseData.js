import React from "react"
import RentalCard from "./RentalCard";
import casa3 from '../images/casa7.jpg'

const HousesData = ({houses}) => {
    return(
        <div>
            {houses.map((house)  => (
                <li key={house.Id}>
                    <RentalCard 
                image={casa3}
                neighborhood={house.Neighborhood}
                rooms={house.TotRmsAbvGrd}
                fullbath={house.FullBath}
                halfbath={house.HalfBath}
                area={house.LotArea}
                price={house.SalePrice}
                />
                </li>

                ))}
        </div>

    );
};

export default HousesData;
