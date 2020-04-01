import { auth, providers } from "./firebase-service";

const methods = {
  googleAuth() {
    return new Promise((resolve, reject) => {
      auth
        .signInWithPopup(providers.google)
        .then(result => {
          if (result) {
            let user = {
              email: result.user.email,
              displayName: result.user.displayName,
              photoURL: result.user.photoURL,
              emailVerified: result.user.emailVerified
            };
            resolve(user);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  userAuth(email, password) {
    return new Promise((resolve, reject) => {
      auth
        .signInWithEmailAndPassword(email, password)
        .catch(error => {
          console.log(error);
          reject(error);
        })
        .then(() => {
          auth.onAuthStateChanged(result => {
            if (result) {
              let user = {
                email: result.email,
                displayName: result.displayName,
                photoURL: result.photoURL,
                emailVerified: result.emailVerified
              };
              resolve(user);
            }
          });
        });
    });
  },
  signUp(email, password) {
    return new Promise((resolve, reject) => {
      auth
        .createUserWithEmailAndPassword(email, password)
        .catch(error => {
          reject(error);
        })
        .then(() => {
          auth.onAuthStateChanged(result => {
            if (result) {
              auth.currentUser
                .sendEmailVerification()
                .then(() => {
                  resolve(true);
                })
                .catch(error => {
                  reject(error);
                });
            }
          });
        });
    });
  }
};

export default methods;
