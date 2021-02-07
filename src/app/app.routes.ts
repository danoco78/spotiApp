import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { Component } from '@angular/core';
import { ArtistaComponent } from './components/artista/artista.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'search', component: SearchComponent},
    { path: 'artista/:id', component: ArtistaComponent},
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];
