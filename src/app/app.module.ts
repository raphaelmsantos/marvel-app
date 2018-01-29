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
import { DetailsComponent } from './details.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent
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
    DetailsComponent
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: MarvelInterceptor,
    multi: true
  }, MarvelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
