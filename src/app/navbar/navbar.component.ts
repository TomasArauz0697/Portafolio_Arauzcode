import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  bars=false;
  ngOnInit() {   
  }
  MenuClick(){
    if(this.bars==true){
     this.bars= false;
    }else{
      this.bars=true;
    }
   /* this.bars?true:false;*/
   }

}
