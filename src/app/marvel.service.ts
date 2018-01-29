import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Result } from './models/result';
import { environment } from '../environments/environment.prod';
import { Comic } from './models/comic';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MarvelService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getComics(offset: number, pageSize: number) {
    return this.http.get<Result>(`${this.apiUrl}v1/public/comics?offset=${offset}&limit=${pageSize}`);
  }

  getComicById(id: number) {
    return this.http.get<Result>(`${this.apiUrl}v1/public/comics/${id}`);
  }

}
