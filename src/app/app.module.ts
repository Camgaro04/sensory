import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

var firebaseConfig = {
  apiKey: "AIzaSyALSeydNqgfOfaKPYzoZF-RqMJ4hfwoJCg",
  authDomain: "sensory-e62e2.firebaseapp.com",
  databaseURL: "https://sensory-e62e2.firebaseio.com",
  projectId: "sensory-e62e2",
  storageBucket: "sensory-e62e2.appspot.com",
  messagingSenderId: "221052498738",
  appId: "1:221052498738:web:d2d66f56f7e0ab4da81d2b",
  measurementId: "G-CYYXKRQBR0"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
