import { Component, Inject } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { MarvelService } from './marvel.service';
import { PageEvent, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Comic } from './models/comic';

@Component({
    selector: 'image-root',
    templateUrl: './image.component.html'    
})
export class ImageComponent {

    comic: Comic = new Comic();

    constructor(
        public dialogRef: MatDialogRef<ImageComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private marvelService: MarvelService
    ) {
        this.comic = data.comic;
    }

    onNoClick(): void {
        this.dialogRef.close(null);
    }

}
