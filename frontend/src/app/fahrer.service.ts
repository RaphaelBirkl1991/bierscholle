import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FahrerService {

   // Erster Platz im Container "Angestellt!" , Platzhalter
  names = [];
  texts = [];
  images = [];


  constructor() { }

  // Fahrer adden (z.B Hubert, Hallo du toller Fahrer, + bilder Pfad

  addFahrer(name:string,text:string,image:string){
    // @ts-ignore
    this.names.push(name);
    // @ts-ignore
    this.texts.push(text);
    // @ts-ignore
    this.images.push(image);
  }

}
