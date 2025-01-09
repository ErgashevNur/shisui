import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

import { v4 as uuid } from "uuid";

import { useDispatch } from "react-redux";
import { login } from "../app/features/userSlice";
import toast from "react-hot-toast";

export function useRegister() {
  const dispatch = useDispatch();
  const registerWithEmailAndPassword = (displayName, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((profile) => {
        updateProfile(auth.currentUser, {
          displayName: displayName,
          photoURL:
            "https://api.dicebear.com/9.x/adventurer/svg?seed=" + uuid(),
        });
        dispatch(login(profile.user));
        toast.success(`Welcome ${profile.user}`);
      })
      .catch((error) => {
        console.log(error);

        toast.error("Bu email allaqachon ishlatilgan");
        console.log(error.message);
      });
  };
  return { registerWithEmailAndPassword };
}
