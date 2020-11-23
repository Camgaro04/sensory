import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sensory-project';

  constructor(private db: AngularFirestore) {}


 ngOnInit(): void {

  const things = this.db.collection('touch').snapshotChanges();
  things.subscribe((data)=>{
    data.forEach(element=>{
      console.log(element.payload.doc.data());
    })   
  });
   
 }
}
