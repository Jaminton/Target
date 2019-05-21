import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore"
import { map } from "rxjs/operators";

export interface cudata {
  estado: string
  fecha: string
  titulo: string
  id: string;

}

@Injectable({
  providedIn: 'root'
})
export class CuponesService {

  constructor(private db : AngularFirestore) { }

getCupones(){
return this.db.collection('cupones').snapshotChanges().pipe(map(rooms =>{
  return rooms.map( a=>{

      const data = a.payload.doc.data() as cudata;
      data.id= a.payload.doc.id;
      return data;

  })



}))
}

}
