import {db, auth} from './firebase'

export const writeUserData = (user) => {
    db.collection('users').doc(user.uid).set(user).catch(error => {
        console.log(error.message)
    });
}

// external function to be used to write user data




