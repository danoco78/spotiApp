import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { }

  getNewReleases(){

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDzWw4gtCIrLQ9KiD1qkkB7nOtM5BKrRkCRYdlpuTy5_hberIqJE2aVpM58aYDvOSmoP-RLB5n1o-XJc3Y'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=25', {headers});

  }

  getArtista( termino: string) {
    
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDzWw4gtCIrLQ9KiD1qkkB7nOtM5BKrRkCRYdlpuTy5_hberIqJE2aVpM58aYDvOSmoP-RLB5n1o-XJc3Y'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=20`, {headers});

  }
  
}


