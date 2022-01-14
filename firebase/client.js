import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAG2xKAJz0YzTz7ARYblyektE2ahz9pVZg",
  authDomain: "nextjs-tutorial-d08e0.firebaseapp.com",
  projectId: "nextjs-tutorial-d08e0",
  storageBucket: "nextjs-tutorial-d08e0.appspot.com",
  messagingSenderId: "949445784281",
  appId: "1:949445784281:web:ece2eff7f4c491214484c8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const mapUserGromFirebaseAuthToUser = (user) => {
  const { reloadUserInfo } = user;
  const { screenName, photoUrl, email } = reloadUserInfo;
  return { avatar: photoUrl, username: screenName, email };
};

export const onAuthStateChanged = (onChange) => {
  const auth = getAuth();
  return auth.onAuthStateChanged((user) => {
    const normalizeUser = user ? mapUserGromFirebaseAuthToUser(user) : null;
    onChange(normalizeUser);
  });
};
const provider = new GithubAuthProvider();

export const loginWithGithub = () => {
  const auth = getAuth();
  return signInWithPopup(auth, provider)
    .then((result) => {
      return mapUserGromFirebaseAuthToUser(result.user);
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      //const credential = GithubAuthProvider.credentialFromResult(result);
      //const token = credential.accessToken;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GithubAuthProvider.credentialFromError(error);
      console.log("ERROR LOGIN");
      // ...
    });
};
