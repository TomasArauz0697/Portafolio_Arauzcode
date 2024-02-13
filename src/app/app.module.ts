import {NavbarComponent} from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { FormsModule, NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JobsComponent} from './jobs/jobs.component';
import { MainEductaionsComponent } from './main-eductaions/main-eductaions.component';
import { CertificadosComponent } from './certificados/certificados.component';
import{ContactanosComponent} from './contactanos/contactanos.component';


@NgModule({
    imports:[BrowserModule,FormsModule],
    declarations: [AppComponent,NavbarComponent,JobsComponent,MainEductaionsComponent,CertificadosComponent,ContactanosComponent],
    bootstrap: [AppComponent]
})

export class AppModule{ }
