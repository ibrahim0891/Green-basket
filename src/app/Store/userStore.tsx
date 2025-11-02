'use client'

import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, User } from 'firebase/auth'
import { create } from 'zustand'
import { auth } from '../lib/firebaseClient';

export type NewUser = {
    email: string;
    password: string;
    photoUrl: string;
    displayName: string;
};

const provider = new GoogleAuthProvider();

const userStore = create((set) => {
    return {
        user: null,
        error : null,
        setUser: (user: User) => set({ user }),
        setError : (error : any) => set({ error }),
        register: (user: NewUser) => {
            createUserWithEmailAndPassword(auth, user.email, user.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: user.displayName,
                        photoURL: user.photoURL,
                    }).then(() => {
                        console.log({user});
                      set({ user })
                    }).catch((error) => {
                            set({ error })
                    })
                })
                .catch((error) => {
                    set({ error })
                });
        } , 
        login : (user : Partial<NewUser>) => {
                if (!user.email || !user.password) return;
                signInWithEmailAndPassword(auth, user.email, user.password)
                    .then((userCredential) => {
                        set({ user: userCredential.user });
                        console.log('logged in ')
                    })
                    .catch((error) => {
                        set({ error });
                        console.log(error)
                    });
        } , 
        logout : () => {
            signOut(auth).then(() => {
                set({ user: null });
            });
        }, 
        googleSignIn : () => {
            signInWithPopup(auth, provider).then((result) => {
                const user = result.user;
                set({ user })

            }).catch((error) => {
                set({ error })
            });
        }
    }
})

export default userStore













