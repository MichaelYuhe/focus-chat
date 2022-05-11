import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth';
import toast from 'react-hot-toast';
import { app } from '../../../firebase';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export default function googleSignIn() {
    toast('Not supported yet.', { icon: '👏', });
    // signInWithPopup(auth, provider)
    //     .then((res) => {
    //         const credential = GoogleAuthProvider.credentialFromResult(res);
    //         const token = credential.accessToken;

    //         const user = res.user
    //     }).catch((err) => {
    //         alert(err)
    //     })
}
