import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const {
    _id,
    coffeeName,
    chefName,
    category,
    photo,
  } = coffee;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Do you want to Delete this?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes, I Delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffe-store-server-beta-three.vercel.app/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your File has been deleted", "success");
              const remaining = coffees.filter(coffee => coffee._id !== id);
              setCoffees(remaining)
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-2xl">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className="flex justify-between items-center w-full p-4">
          <div>
            <h2 className="card-title">Name:{coffeeName}</h2>
            <p>Chef:{chefName}</p>
            <p>Category: {category}</p>
          </div>
          <div className="card-actions justify-end">
            <div className="join join-vertical space-y-3">
              <button className="btn btn-sm btn-primary join-item">View</button>
              <button className="btn btn-sm btn-secondary join-item">
               <Link to={`/updateCoffee/${_id}`}>Edit</Link>
              </button>
              <button
                onClick={() => handleDelete(_id)}
                className="btn btn-sm btn-warning join-item"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
