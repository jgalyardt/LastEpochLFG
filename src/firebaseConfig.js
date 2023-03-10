import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    databaseURL: "https://lastepochlfg-default-rtdb.firebaseio.com",
  };
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { app, db }