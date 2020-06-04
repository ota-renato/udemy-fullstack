import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { EventoService } from './_services/evento.service';

import { AppComponent } from './app.component';
import { EventosComponent } from './eventos/eventos.component';
import { NavComponent } from './nav/nav.component';

import { DateTimeFormatPipe } from './_helps/DateTimeFormat.pipe';

@NgModule({
   declarations: [
      AppComponent,
      EventosComponent,
      NavComponent,
      DateTimeFormatPipe
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      TooltipModule.forRoot(),
      ModalModule.forRoot()
   ],
   providers: [
      EventoService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
