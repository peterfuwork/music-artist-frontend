import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './movie';

@Injectable()
export class HttpService {

  private _url = 'https://spotify-graphql-server.herokuapp.com/graphql?query=%7B%0A%20%20queryArtists(byName%3A%22peter%22)%20%7B%0A%20%20%20%20name%0A%20%20%20%20id%0A%20%20%20%20image%0A%20%20%7D%0A%7D%0A';

  constructor(private http: HttpClient) { }

  getData(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this._url);
  }
}
