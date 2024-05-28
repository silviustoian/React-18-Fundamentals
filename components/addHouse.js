

const AddHouse = ({setHouses}) => {
    
  //POST request to add house

  const addHouse = async () => {
    const newHouse = {
      id: 6,
      address: "32 Valley Way, New York",
      country: "USA",
      price: 1000000,
    };

    try {
      const response = await fetch("/api/houses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newHouse),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const addedHouse = await response.json();

      setHouses((prevHouses) => [...prevHouses, addedHouse]);
    } catch (error) {
      console.error("Error adding house:", error);
    }
  };
  return (
    <button className="btn btn-primary" onClick={addHouse}>
      Add{" "}
    </button>
  );
};

export default AddHouse;
