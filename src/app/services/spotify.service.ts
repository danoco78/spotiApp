import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { }

  getQuery( query: string ) {
    
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer QDrLO8zew7m_th4BaIK3sXX_ChVGN_5EB5XF1w92EkxGwRZSJLE0L1TBipYQg1nVvbrPO34nFgki87jUXg'
    });

    return this.http.get(url, {headers});

  };


  getNewReleases(){

    // versión larga
    // return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=25', {headers})
    //   .pipe( map( data => {
    //                 return data['albums'].items;
    //               } ) );

    // Versión flecha
    //return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=25', {headers}).pipe( map( data => data['albums'].items ) );

    // versión optimizada con la función para no repetir el token y que la base de la url no quede duplicada cuantas peticiones hayan.
    return this.getQuery('browse/new-releases?limit=25').pipe( map( data => data['albums'].items ) );

  }

  getArtistas( termino: string) {
    
    // return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=20`, {headers}).pipe( map( data => data['artists'].items ) );

    return this.getQuery(`search?q=${termino}&type=artist&limit=20`).pipe( map( data => data['artists'].items ) );
  }
  
  getArtista( id: string) {
    return this.getQuery(`artists/${id}`); //.pipe( map( data => data['artists'].items ) );
  }

  getTopTracks( id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe( map( data => data['tracks'] ) );
  }

}