import { DataSource } from "@angular/cdk/collections";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import { Comic } from "../models/comic";

export class ComicDataSource extends DataSource<any> {
  constructor(private data: Comic[]) {
    super();
  }
  connect(): Observable<Comic[]> {
    return Observable.of(this.data);    
  }
  disconnect() {}
}