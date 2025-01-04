import { useContext, useEffect, useReducer, useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { Form, Link, useActionData } from "react-router";
import { toast } from "react-toastify";
import { useRegister } from "../hooks/useRegister";

// Inputdan ma'lumot qilamiz
export const action = async ({ request }) => {
  const form = await request.formData();
  const email = form.get("email");
  const password = form.get("password");
  return { email, password };
};

function Login() {
  const { signupWithGoogle } = useSignup();
  const [password, setPassword] = useState("");

  const { registerWithEmailAndPassword } = useRegister();
  const data = useActionData();
  useEffect(() => {
    if (data) {
      registerWithEmailAndPassword(data.displayName, data.email, data.password);
    }
  }, [data]);

  const handleInputValue = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  const handleButtonClick = () => {
    if (password.length < 6) {
      toast.warn("Parol 6 xonalik bo'lishi kerak");
    } else {
      toast.success("Tasdiqlandi....");
    }
  };

  return (
    <div className="h-screen grid place-items-center bg-[url('https://images5.alphacoders.com/135/thumb-1920-1350706.jpeg')] bg-cover bg-center">
      {/*  */}
      <Form
        onSubmit={handleButtonClick}
        action=""
        method="post"
        className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-lg max-w-sm w-full"
      >
        <h2 className="text-center text-4xl font-bold tracking-widest text-gray-800">
          Login
        </h2>
        <div>
          <span className="label-text text-black">Email</span>
        </div>
        <label className="input input-bordered flex items-center gap-2 mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="email"
            className="grow"
            placeholder="Email"
            name="email"
          />
        </label>

        <div>
          <span className="label-text text-black">Password</span>
        </div>
        <label className="input input-bordered flex items-center gap-2 mb-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="Password grow"
            value={password}
            onChange={handleInputValue}
            placeholder="Password"
            name="password"
          />
        </label>
        <button type="submit" className="btn btn-active w-full block z-10 mb-7">
          Log In
        </button>

        <p className="text-black">
          I don't have account /{" "}
          <Link to="/register" className="btn-link">
            Register
          </Link>
        </p>
      </Form>
      {/*  */}
    </div>
  );
}

export default Login;
