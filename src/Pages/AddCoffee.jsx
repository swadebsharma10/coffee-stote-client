import Swal from "sweetalert2";

const AddCoffee = () => {

      const handleAddCoffee =e =>{
            e.preventDefault();
            const form = e.target;
            const coffeeName = form.coffeeName.value;
            const chefName = form.chefName.value;
            const supplier = form.supplier.value;
            const test = form.test.value;
            const category = form.category.value;
            const details = form.details.value;
            const photo = form.photo.value;
            
            const newCoffee ={ coffeeName, chefName, supplier, test, category ,details, photo};
            // Send Coffee to the server
            fetch(`https://coffe-store-server-beta-three.vercel.app/coffee`, {
                  method: 'POST',
                  headers:{
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(newCoffee)
            })
            .then(res => res.json())
            .then(data =>{
                  if(data.insertedId){
                        Swal.fire({
                              title: "Success",
                              text:'Coffee Added Successfully',
                              icon: "success",
                              draggable: true
                            });
                  }
            })

      }

  return (
    <div>
      <div className="md:w-1/2 mx-auto">
      <h3 className="text-3xl font-extrabold text-center">Add Coffee</h3>
      <p className="text-center mb-6">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
      </div>

      <form onSubmit={handleAddCoffee} className="max-w-3xl mx-auto">
        <div className=" md:flex mb-5">
          <div className="md:w-1/2">
            <label className="input input-bordered flex items-center gap-2">
              Coffee Name
              <input
                type="text"
                name="coffeeName"
                className="grow md:w-1/2"
                placeholder="Coffee Name"
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
              />
            </label>
          </div>
        </div>
        <input className="btn btn-primary btn-block" type="submit" value="Add Coffee" />
      </form>
    </div>
  );
};

export default AddCoffee;
