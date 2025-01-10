import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../components/CoffeeCard";
import { useState } from "react";


const Home = () => {

      const loadedCoffees = useLoaderData();
      const [coffees, setCoffees] = useState(loadedCoffees);



      return (
            <div> 
                <div className="grid md:grid-cols-2 gap-6">
                  {
                        coffees.map(coffee => <CoffeeCard
                               key={coffee._id}
                               coffee={coffee}
                               coffees={coffees}
                               setCoffees={setCoffees}
                               ></CoffeeCard>)
                  }
                </div>
            </div>
      );
};

export default Home;