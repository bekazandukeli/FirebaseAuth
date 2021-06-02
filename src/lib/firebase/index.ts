import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export function logIn(email: string, password: string) {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('Successfull login');
    })
    .catch(error => {
      console.error(error);
    });
}

export function logOut() {
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));
}

export function signUp(email: string, password: string, userName: string) {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(data => {
      console.log('User account created & signed in!');
      setUserName(data.user.uid, userName);
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
}

function setUserName(uid: string, userName: string) {
  firestore()
    .collection('users')
    .doc(uid)
    .set({
      userName: userName,
    })
    .then(() => {
      console.log('User name added to firestore!');
    });
}

export async function getUserName(uid: string) {
  try {
    const document = await firestore().collection('users').doc(uid).get();
    if (!!document.data()) {
      return document.data()?.userName;
    }
  } catch (error) {
    console.log(error);
  }
}
