import {
    getAuth,
    signInWithPopup
} from 'firebase/auth';
import toast from 'react-hot-toast';
import { app } from '../../../firebase';

const auth = getAuth(app);
export default function githubSignIn() {
    toast('Not supported yet.', {
        icon: '👏',
    });
}