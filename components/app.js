import Banner from "./banner";
import HouseList from "./houseList";
import { useState } from "react";
import House from "./house";

const App = () => {
  const [selectedHouse, setSelectedHouse] = useState();
  const setSelectedHouseWrapper = (house) => {
    //do checks on house
    setSelectedHouse(house)
  }
  return (
    <>
      <Banner>Providing houses all over the world!</Banner>
      {selectedHouse ? <House house={selectedHouse}/> : <HouseList selectHouse={setSelectedHouseWrapper}/>}
    </>
  );
};

export default App;
