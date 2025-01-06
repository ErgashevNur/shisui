import { auth } from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import { toast } from "react-hot-toast";

export const useSignout = () => {
  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("See you soon again :)");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return { logout };
};
