import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const SignIn = () => {
      const { signInUser} = useContext(AuthContext);
      
            const handleSignIn = e =>{
                  e.preventDefault();
                  const form = e.target;
                  const email = form.email.value;
                  const password = form.password.value;
                  // create user
                  signInUser(email, password)
                  .then(result =>{
                        console.log('Sig', result.user);
                        const user ={
                          email,
                          lastLogAt : result.user?.metadata?.lastSignInTime
                        }
                        fetch(`https://coffe-store-server-beta-three.vercel.app/users`, {
                          method: 'PATCH',
                          headers:{
                            'content-type': 'application/json'
                          },
                          body: JSON.stringify(user)
                        })
                        .then(res => res.json())
                        .then(data => {
                          console.log(data)
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
            <h1 className="text-5xl font-bold">Sign In now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignIn} className="card-body">
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
                <button type="submit" className="btn btn-primary">
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
