import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";
// import { getAnalytics } from "firebase/analytics";

const initializeFirebaseAuthentication = () => {
  const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
  return app;
};

export default initializeFirebaseAuthentication;
