import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent  {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;


  constructor( private spotify: SpotifyService ) {

    this.loading= true;
    this.error= false;

    this.spotify.getNewReleases().subscribe( (data: any) => {
        console.log(data);
        this.nuevasCanciones = data;
        this. loading = false;
    }, ( errorServicio ) => {
      console.log(errorServicio);
      this.mensajeError = errorServicio.error.error.message;
      this. loading = false;
      this.error = true;
    });

  }



}
