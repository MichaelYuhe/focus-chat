// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAJRflDJVACgkyio8mEGEO-ZhowuCIaOVQ',
    authDomain: 'focus-chat-8b757.firebaseapp.com',
    projectId: 'focus-chat-8b757',
    storageBucket: 'focus-chat-8b757.appspot.com',
    messagingSenderId: '64064361123',
    appId: '1:64064361123:web:42c96fa0b70166bdc72516',
    measurementId: 'G-QNNDFGRFHD'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
