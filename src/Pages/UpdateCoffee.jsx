import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
      const coffee = useLoaderData();
      const {
            _id,
            coffeeName,
            chefName,
            supplier,
            test,
            category,
            details,
            photo,
          } = coffee;
      const handleUpdateCoffee =e =>{
                  e.preventDefault();
                  const form = e.target;
                  const coffeeName = form.coffeeName.value;
                  const chefName = form.chefName.value;
                  const supplier = form.supplier.value;
                  const test = form.test.value;
                  const category = form.category.value;
                  const details = form.details.value;
                  const photo = form.photo.value;
                  
                  const updateCoffee ={ coffeeName, chefName, supplier, test, category ,details, photo};
                  // Send Coffee to the server
                  fetch(`https://coffe-store-server-beta-three.vercel.app/coffee/${_id}`, {
                        method: 'PUT',
                        headers:{
                              'content-type': 'application/json'
                        },
                        body: JSON.stringify(updateCoffee)
                  })
                  .then(res => res.json())
                  .then(data =>{
                        if(data.modifiedCount > 0){
                              Swal.fire({
                                    title: "Success",
                                    text:'Coffee Updated Successfully',
                                    icon: "success",
                                    draggable: true
                                  });
                        }
                  })
      
            }
  return (
    <>
      <div>
        <div className="md:w-1/2 mx-auto">
          <h3 className="text-3xl font-extrabold text-center">Update Coffee</h3>
          <p className="text-center mb-6">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>

        <form onSubmit={handleUpdateCoffee} className="max-w-3xl mx-auto">
          <div className=" md:flex mb-5">
            <div className="md:w-1/2">
              <label className="input input-bordered flex items-center gap-2">
                Coffee Name
                <input
                  type="text"
                  name="coffeeName"
                  className="grow md:w-1/2"
                  placeholder="Coffee Name"
                  defaultValue={coffeeName}
                />
              </label>
            </div>
            <div className="md:w-1/2 md:ml-3">
              <label className="input input-bordered flex items-center gap-2">
                Chef Name
                <input
                  type="text"
                  name="chefName"
                  className="grow md:w-1/2"
                  placeholder="Chef name"
                  defaultValue={chefName}
                />
              </label>
            </div>
          </div>
          {/* from row */}
          <div className=" md:flex mb-5">
            <div className="md:w-1/2">
              <label className="input input-bordered flex items-center gap-2">
                Supplier
                <input
                  type="text"
                  name="supplier"
                  className="grow md:w-1/2"
                  placeholder="Supplier"
                  defaultValue={supplier}
                />
              </label>
            </div>
            <div className="md:w-1/2 md:ml-3">
              <label className="input input-bordered flex items-center gap-2">
                Test
                <input
                  type="text"
                  name="test"
                  className="grow md:w-1/2"
                  placeholder="Test"
                  defaultValue={test}
                />
              </label>
            </div>
          </div>
          {/* from row */}
          <div className=" md:flex mb-5">
            <div className="md:w-1/2">
              <label className="input input-bordered flex items-center gap-2">
                Category
                <input
                  type="text"
                  name="category"
                  className="grow md:w-1/2"
                  placeholder="Category"
                  defaultValue={category}
                />
              </label>
            </div>
            <div className="md:w-1/2 md:ml-3">
              <label className="input input-bordered flex items-center gap-2">
                Details
                <input
                  type="text"
                  name="details"
                  className="grow md:w-1/2"
                  placeholder="Details"
                  defaultValue={details}
                />
              </label>
            </div>
          </div>
          {/* from row */}
          <div className=" md:flex mb-5">
            <div className="md:w-full">
              <label className="input input-bordered flex items-center gap-2">
                PhotoURL
                <input
                  type="text"
                  name="photo"
                  className="grow md:w-full"
                  placeholder="PhotoURL"
                  defaultValue={photo}
                />
              </label>
            </div>
          </div>
          <input
            className="btn btn-primary btn-block"
            type="submit"
            value="Update Coffee"
          />
        </form>
      </div>
    </>
  );
};

export default UpdateCoffee;
