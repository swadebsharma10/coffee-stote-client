import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDelete = id =>{
      Swal.fire({
            title: "Do you want to Delete this?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Yes, I Delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/users/${id}`, {
                method: "DELETE",
              })
                .then((res) => res.json())
                .then((data) => {
                  if (data.deletedCount > 0) {
                    Swal.fire("Deleted!", "Your File has been deleted", "success");
                    const remaining = users.filter(user => user._id !== id);
                    setUsers(remaining)
                  }
                });
            }
          });
  }


  return (
    <div>
      <h2>Users : {loadedUsers.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Sl</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user._id} className=" hover:bg-base-200">
                <th>{idx + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button  className="btn btn-sm btn-primary mr-3">Edit</button>
                  <button onClick={()=>handleDelete(user._id)} className="btn btn-sm btn-secondary">X</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
