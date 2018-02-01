import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatToolbarModule, 
  MatCardModule, 
  MatGridListModule, 
  MatButtonModule, 
  MatPaginatorModule ,
    MatDialogModule ,
    MatTableModule,
    MatIconModule
 
} from '@angular/material';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MarvelService } from './marvel.service';
import { MarvelInterceptor } from './marvel.interceptor';

import { ImageComponent } from './image.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatPaginatorModule,
    MatDialogModule,
    MatTableModule,
    MatIconModule
    
  ],
  entryComponents: [
    ImageComponent
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: MarvelInterceptor,
    multi: true
  }, MarvelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
