import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = environment.WebApi;
  constructor(private _service: HttpClient) { }

  getData(): Observable<any> {
    return this._service.get(`${this.apiUrl}/data`); //.pipe(map((res: any) => res.split(' ')));
  }
}
