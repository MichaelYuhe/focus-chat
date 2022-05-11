import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';
import toast from 'react-hot-toast';
import { app } from '../../../firebase';
import system from '../../../store/system';

const auth = getAuth(app);

export function register(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            toast.success('Sign up successfully!');
            system.session = { user };
        })
        .catch((error) => {
            const errorMessage = error.message;
            toast.error(errorMessage);
        });
}

export function login(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            toast.success('Sign in successfully!');
            system.session = { user };
        })
        .catch((error) => {
            const errorMessage = error.message;
            toast.error(errorMessage);
        });
}
