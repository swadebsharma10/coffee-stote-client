import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
      const { signUpUser} = useContext(AuthContext);

      const handleSignup = e =>{
            e.preventDefault();
            const form = e.target;
            const name = form.name.value;
            const email = form.email.value;
            const password = form.password.value;
            // create user
            signUpUser(email, password)
            .then(result =>{
                  console.log('Cr', result.user);
                  const creationTime = result.user?.metadata.creationTime;
                  const user ={name, email, password, creationTime}
                  fetch(`https://coffe-store-server-beta-three.vercel.app/users`, {
                        method: 'POST',
                        headers: {
                              'content-type': 'application/json'
                        },
                        body: JSON.stringify(user)
                  })
                  .then(res =>res.json())
                  .then(data =>{
                       if(data.insertedId){
                        Swal.fire({
                              title: "User Create Successfully",
                              icon: "success",
                              draggable: true
                            });
                       }
                  })
            })
            .catch(error =>{
                  console.log(error.message)
            })
      }

  return (
    <>
      <div className="hero bg-base-200 min-h-[750px]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignup} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
