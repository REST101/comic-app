import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ComicService {

  constructor(private httpClient:HttpClient) { }
  
  getComicList(){
    return this.httpClient.get('https://gateway.marvel.com:443/v1/public/comics?apikey=8b70c7aa3f9a263329e5eeeabbe788c2');
  }
}
