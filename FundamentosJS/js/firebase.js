import { app } from "./modulos/firebase-config.js";
import { firebaseCRUD } from "./modulos/firebase-db.js";
import { authEmail } from "./modulos/firebase-auth-email.js";
import { authGitHub } from "./modulos/firebase-auth-github.js";
import { authGoogle } from "./modulos/firebase-auth-google.js";
import { firebaseStorage } from "./modulos/firebase-storage.js";

//console.log(app);
firebaseCRUD(app);
authEmail(app);
authGitHub(app);
authGoogle(app);
firebaseStorage(app);
