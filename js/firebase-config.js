// Config del proyecto Firebase (MojonApp). No es información secreta: la
// seguridad real la dan las reglas de Firestore/Auth (ver firestore.rules),
// no ocultar estos valores. Para apuntar la app a otro proyecto, se cambia
// solo acá.
//
// Este deploy es la demo aislada "mojonapp-demo-trina" — un proyecto
// Firebase propio, separado del original, para mostrarle a Grupo Las
// Moreras cómo se vería MojonApp con su emprendimiento Triná (Villa
// Larca, San Luis) sin mezclar con la cartera real de otros corredores.
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD6o6KMM03y9CgzFxHN0xaP5FlVVZ99h34",
  authDomain: "mojonapp-demo-trina.firebaseapp.com",
  projectId: "mojonapp-demo-trina",
  storageBucket: "mojonapp-demo-trina.firebasestorage.app",
  messagingSenderId: "1059043073342",
  appId: "1:1059043073342:web:b86b16652eaa2561ac206f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
// Se reexporta el config para el panel de administración: dar de alta un
// corredor nuevo levanta una segunda instancia de Firebase App/Auth en
// memoria (initializeApp(firebaseConfig, "alta-...")) para que crear esa
// cuenta no pise la sesión de quien la está creando.
export { firebaseConfig };
