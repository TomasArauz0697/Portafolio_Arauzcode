import { Component, OnInit } from '@angular/core';
import {CargarScriptsService} from "./../cargar-scripts.service";

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrl: './certificados.component.css'
})
export class CertificadosComponent implements OnInit {

  constructor(private _UpScript: CargarScriptsService){
    _UpScript.Cargar(["main"]);
    _UpScript.Cargar(["lightbox2/dist/js/lightbox.min"]);

  }

  public Imagenes : GridImg[] = [
    {/*Bot master */
      Title:"Mastering Bots",
      srcUrl: 'https://onedrive.live.com/embed?resid=AB3AF34BFE317593%2116373&authkey=%21ADGfZsTIuKUQ8To&width=552&height=720',
      previewUrl: 'https://onedrive.live.com/embed?resid=AB3AF34BFE317593%2116373&authkey=%21ADGfZsTIuKUQ8To&width=552&height=720'
    },
    {/*power bi */
    Title:"Power BI Data Analytics",
      srcUrl: 'https://onedrive.live.com/embed?resid=AB3AF34BFE317593%2116374&authkey=%21AFfUZ9MHLClDQWY&width=1461&height=733',
      previewUrl: 'https://onedrive.live.com/embed?resid=AB3AF34BFE317593%2116374&authkey=%21AFfUZ9MHLClDQWY&width=1461&height=733'
    },
    {/**Chile */
    Title:"Análisis predictivo",
    srcUrl: 'https://onedrive.live.com/embed?resid=AB3AF34BFE317593%2116394&authkey=%21AFNEENqeDSR36oM&width=985&height=732',
    previewUrl: 'https://onedrive.live.com/embed?resid=AB3AF34BFE317593%2116394&authkey=%21AFNEENqeDSR36oM&width=985&height=732'
    },
    {/*licenciatura*/
      Title:"Lic en desarrollo de software",
      srcUrl: 'https://onedrive.live.com/embed?resid=AB3AF34BFE317593%2116375&authkey=%21AHw6peQoFY-9Ts0&width=2340&height=1783',
      previewUrl: 'https://onedrive.live.com/embed?resid=AB3AF34BFE317593%2116375&authkey=%21AHw6peQoFY-9Ts0&width=2340&height=1783'
    },
    {/**android */
    Title:"Programación Android",
      srcUrl: 'https://onedrive.live.com/embed?resid=AB3AF34BFE317593%2116388&authkey=%21AOhg6KCqN3ervXo&width=1071&height=691',
      previewUrl: 'https://onedrive.live.com/embed?resid=AB3AF34BFE317593%2116388&authkey=%21AOhg6KCqN3ervXo&width=1071&height=691'
    },{/**hash */
    Title:"Incriptación de datos",
      srcUrl: 'https://onedrive.live.com/embed?resid=AB3AF34BFE317593%2116389&authkey=%21AHSZZBj8T548VNE&width=948&height=672',
      previewUrl: 'https://onedrive.live.com/embed?resid=AB3AF34BFE317593%2116389&authkey=%21AHSZZBj8T548VNE&width=948&height=672'
    },
    
    {/**prototipo */
    Title:"Prototipo Universitario",
    srcUrl: 'https://onedrive.live.com/embed?resid=AB3AF34BFE317593%2116390&authkey=%21AGnvUfj7j2cLiDU&width=907&height=691',
    previewUrl: 'https://onedrive.live.com/embed?resid=AB3AF34BFE317593%2116390&authkey=%21AGnvUfj7j2cLiDU&width=907&height=691'
    },

    {/**Mercadeo */
    Title:"Bachiller en comercio ",
    srcUrl: 'https://onedrive.live.com/embed?resid=AB3AF34BFE317593%2116392&authkey=%21AFwcvgp9_N3ANzs&width=870&height=741',
    previewUrl: 'https://onedrive.live.com/embed?resid=AB3AF34BFE317593%2116392&authkey=%21AFwcvgp9_N3ANzs&width=870&height=741'
    },
    {/**Cap honor 2019 */
    Title:"Capitulo de honor 2019",
    srcUrl: 'https://onedrive.live.com/embed?resid=AB3AF34BFE317593%2116393&authkey=%21AIpb7xHSEpav-zs&width=936&height=710',
    previewUrl: 'https://onedrive.live.com/embed?resid=AB3AF34BFE317593%2116393&authkey=%21AIpb7xHSEpav-zs&width=936&height=710'
    },
    {/**usabilidad */
    Title:"Usabilidad y Accesibilidad",
    srcUrl: 'https://onedrive.live.com/embed?resid=AB3AF34BFE317593%2116396&authkey=%21AMeTKPsuH1E4U4o&width=1020&height=691',
    previewUrl: 'https://onedrive.live.com/embed?resid=AB3AF34BFE317593%2116396&authkey=%21AMeTKPsuH1E4U4o&width=1020&height=691'
    },
    {/**Cap honor 2018 */
    Title:"Capitulo de honor 2018",
    srcUrl: 'https://onedrive.live.com/embed?resid=AB3AF34BFE317593%2116395&authkey=%21AJXeF-058IIs_LM&width=926&height=735',
    previewUrl: 'https://onedrive.live.com/embed?resid=AB3AF34BFE317593%2116395&authkey=%21AJXeF-058IIs_LM&width=926&height=735'
    },
    {/**Tecnico */
    Title:"Tecn. Ing desarrollo de software",
    srcUrl: 'https://onedrive.live.com/embed?resid=AB3AF34BFE317593%2116391&authkey=%21ABz-tCRBswntQf8&width=1066&height=747',
    previewUrl: 'https://onedrive.live.com/embed?resid=AB3AF34BFE317593%2116391&authkey=%21ABz-tCRBswntQf8&width=1066&height=747'
    },
    {/**Diocesis */
    Title:"Portal web",
    srcUrl: 'https://onedrive.live.com/embed?resid=AB3AF34BFE317593%2116397&authkey=%21AGdcupgQ1ntAuds&width=967&height=730',
    previewUrl: 'https://onedrive.live.com/embed?resid=AB3AF34BFE317593%2116397&authkey=%21AGdcupgQ1ntAuds&width=967&height=730'
    },

];
 
  
 
ngOnInit() {
  
}

}



 interface GridImg{
  Title:String,
  srcUrl: string,
  previewUrl: string
  }


  
