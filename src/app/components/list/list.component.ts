import { Component, OnInit } from '@angular/core';
import { PageEvent, MatDialog, MatDialogRef } from '@angular/material';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import { Comic } from '../../models/comic';
import { ComicDataSource } from '../../util/comic-datasource';
import { MarvelService } from '../../services/marvel.service';
import { ImageComponent } from '../image/image.component';
import { NotificationService } from '../../services/notification.service';


@Component({
    selector: 'app-list',
    templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

    isLoading: boolean = false;

    comics: Array<Comic> = new Array<Comic>();
    pageEvent: PageEvent;
    offset: number = 0
    pageIndex: number;
    pageSize: number = 20;
    length: number;

    dataSource: ComicDataSource;
    displayedColumns = ['id', 'title', 'details'];

    constructor(private marvelService: MarvelService, private dialog: MatDialog, private notificationService: NotificationService) {
    }

    ngOnInit() {
        this.notificationService.isLoading.subscribe(
            (isLoading: boolean) => this.isLoading = isLoading
        );

        this.getComics();
    }

    getComics(event?: PageEvent) {
        this.notificationService.setIsLoading(true);
        if (event !== undefined) {
            this.offset = event.pageIndex;
            this.pageSize = event.pageSize;
        }

        this.marvelService.getComics(this.offset, this.pageSize).subscribe(
            x => {
                this.comics = x.data.results;
                this.pageSize = x.data.limit;
                this.length = x.data.total;
                this.dataSource = new ComicDataSource(this.comics);
                this.notificationService.setIsLoading(false);
            }
        )

    }

    openDetails(comic: Comic) {
        let dialogRef = this.dialog.open(ImageComponent, {
            height: '90%',
            width: '400px',
            data: { comic: comic }
        });

        dialogRef.afterClosed().subscribe(result => {
        });
    }

    
}
