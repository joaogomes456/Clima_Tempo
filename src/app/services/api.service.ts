import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'https://api.hgbrasil.com/weather?woeid=438947';

  constructor(private http: HttpClient) { }

  buscarPrevisao() {
    return this.http.get(this.url);
  }

}
