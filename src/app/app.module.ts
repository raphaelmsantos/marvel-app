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
    MatIconModule,
    MatProgressSpinnerModule
 
} from '@angular/material';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ListComponent } from './components/list/list.component';

import { MarvelInterceptor } from './util/marvel.interceptor';
import { MarvelService } from './services/marvel.service';
import { ImageComponent } from './components/image/image.component';
import { NotificationService } from './services/notification.service';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    ListComponent,
    ImageComponent,
    LoadingComponent
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
    MatIconModule,
    MatProgressSpinnerModule
    
  ],
  entryComponents: [
    ImageComponent
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: MarvelInterceptor,
    multi: true
  }, MarvelService, NotificationService],
  bootstrap: [ListComponent]
})
export class AppModule { }
