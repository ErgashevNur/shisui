import { useDispatch } from "react-redux";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { login } from "../app/features/userSlice";
import toast from "react-hot-toast";

export function useLogin() {
  const dispatch = useDispatch();
  const loginWithEmailAndPassword = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((profile) => {
        console.log(1);
        dispatch(login(profile.user));
        toast.success(`Welcome back ${profile.user.displayName}`);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Bunday akkauntdan ro'yhatdan o'tilmagan!");
        console.log(error.message);
      });
  };
  return { loginWithEmailAndPassword };
}
