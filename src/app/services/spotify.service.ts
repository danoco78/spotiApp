import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { }

  getNewReleases(){

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQAlEagpKKFmKdDn-PU_NHbFapoSRHcGkA89mlBve1NX9mttwDNND1r61c7Plo2SOin6EhV4UsPJSJb5A2Q'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=25', {headers});

      }

}


