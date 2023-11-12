import React, { useContext, useState, useEffect } from "react";
import {
  auth,
  signInWithEmailAndPassword,
  signInWithGoogle,
  db,
  storage,
} from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import PropTypes from "prop-types";
import { ref, getDownloadURL } from "firebase/storage";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  // Function to login with email and password
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Function to login with Google
  function loginWithGoogle() {
    return signInWithGoogle();
  }

  // Function to logout
  function logout() {
    return auth.signOut();
  }

  // Function to get the profile picture URL
  const getProfilePictureUrl = async (userId) => {
    const imagePath = `profilePictures/${userId}.jpeg`;
    const imageRef = ref(storage, imagePath);

    console.log(imageRef);

    try {
      const url = await getDownloadURL(imageRef);
      return url;
    } catch (error) {
      console.error("Erreur lors de la récupération de l'image: ", error);
      // Default profile picture if user picture not found
      return "https://firebasestorage.googleapis.com/v0/b/checkflow---dev.appspot.com/o/profilePictures%2Fdefault_profile_picture.png?alt=media&token=422f57cb-d819-4aae-add7-70619c0dda9e";
    }
  };

  useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        // get user data from firestore
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);
        const userData = userDoc.exists() ? userDoc.data() : null;
        const profilePictureUrl = await getProfilePictureUrl(user.uid);
        setCurrentUser({ ...user, ...userData, profilePictureUrl });
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    loginWithGoogle,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
