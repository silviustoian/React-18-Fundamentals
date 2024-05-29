import currencyFormater from "@/helpers/currencyFormater";
import React from "react";

const HouseRow = ({ house, selectHouse }) => {
  let priceTd;

  return (
    <tr onClick={() => selectHouse(house)}>
      <td>{house.address}</td>
      <td>{house.country}</td>
      {house.price && (
        <td className={`${house.price >= 500000 ? "text-primary" : ""}`}>
          {currencyFormater.format(house.price)}
        </td>
      )}
    </tr>
  );
};

const HouseRowMem = React.memo(HouseRow);

export default HouseRow;
export { HouseRowMem };
