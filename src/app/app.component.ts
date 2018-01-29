import { Component, OnInit } from '@angular/core';
import { MarvelService } from './marvel.service';
import { Comic } from './models/comic';
import { PageEvent, MatDialog, MatDialogRef } from '@angular/material';
import { DetailsComponent } from './details.component';
import { ComicDataSource } from './comic-datasource';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';

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

  private dataSource: ComicDataSource;
  private displayedColumns = ['id','title','details'];

  constructor(private marvelService: MarvelService, private dialog: MatDialog) {
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
        this.dataSource = new ComicDataSource(this.comics);
      }
    )
  }

  openDetails(comic: Comic){
    let dialogRef = this.dialog.open(DetailsComponent, {
      height: '100%',
      width: '600px',
      data: { comic:  comic}
    });

    dialogRef.afterClosed().subscribe(result => {      
    });
  }
}
