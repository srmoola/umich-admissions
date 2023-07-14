import { signInWithPopup, signOut, signInAnonymously } from "firebase/auth";
import { auth, googleprovider } from "../firebase";

export const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleprovider);
  } catch (err) {
    console.error(err);
  }
  window.location.reload();
};

export const signInGuest = async () => {
  try {
    await signInAnonymously(auth);
  } catch (err) {
    console.error(err);
  }
  window.location.reload();
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.error(err);
  }

  window.location.reload();
};
