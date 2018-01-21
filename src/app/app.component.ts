import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { MarvelService } from './marvel.service';
import { Comic } from './models/comic';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private comics: Array<Comic> = new Array<Comic>();
  private pageEvent: PageEvent;
  private offset: number = 0
  private pageIndex:number;
  private pageSize:number = 20;
  private length:number;


  constructor(private marvelService: MarvelService) {
  }

  ngOnInit() {
    this.getComics();
  }

  getComics(event?:PageEvent) {
    if(event !== undefined){
      this.offset = event.pageIndex;
      this.pageSize = event.pageSize;
    }

    this.marvelService.getComics(this.offset, this.pageSize).subscribe(
      x => {
        this.comics = x.data.results;
        this.pageSize = x.data.limit;
        this.length = x.data.total;        
      }
    )
  }  
}
