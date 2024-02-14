import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarScriptsService {

  constructor() { }

  Cargar(archivos:string[]){

    console.log("aqui cargabdo") ;
    for(let archivo of archivos){

      let script= document.createElement("script");
      script.src ="./assets/js/"+archivo+".js";
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(script);

    }

  }

}
