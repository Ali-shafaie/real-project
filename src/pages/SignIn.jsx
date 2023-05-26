import React, { useState } from "react";
import { BiShow ,BiHide} from "react-icons/bi";
export default function SignIn() {
  const [showpassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  function onchange(e) {
    setFormData((pervState) => ({
      ...pervState,
      [e.target.id]: e.target.value,
    }));
  }
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Sign in</h1>
      <div className="flex justify-center flex-warp items-center">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mt-6">
          <img
            className="w-full"
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%]">
          <form className="space-y-5 mx-3">
            <div>
              <input
                className="w-full py-2 border-gray-300 text-gray-700 bg-white rounded transition ease-in-out "
                type="email"
                name="email"
                placeholder="Email address"
                value={email}
                id="email"
                onChange={onchange}
              />
            </div>
            <div className="relative">
              <input
                className="w-full py-2 border-gray-300 text-gray-700 bg-white rounded transition ease-in-out "
                type={showpassword ? "text" : "password"}
                name="password"
                placeholder="Password..."
                value={password}
                id="password"
                onChange={onchange}
              />
              {showpassword?
            (<BiShow className="cursor-pointer absolute top-3 right-2 text-xl" />):(<BiHide className="cursor-pointer absolute top-3 right-2 text-xl"/> ) 
              }
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
