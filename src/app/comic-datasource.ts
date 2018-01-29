import { DataSource } from "@angular/cdk/collections";
import { Comic } from "./models/comic";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import { MarvelService } from "./marvel.service";
import { Result } from "./models/result";


export class ComicDataSource extends DataSource<any> {
  constructor(private data: Comic[]) {
    super();
  }
  connect(): Observable<Comic[]> {
    return Observable.of(this.data);    
  }
  disconnect() {}
}