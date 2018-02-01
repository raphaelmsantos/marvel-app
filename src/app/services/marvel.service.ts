import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { Result } from '../models/result';

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
