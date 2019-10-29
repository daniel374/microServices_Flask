import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import {Conexiones} from './conexiones';
import { Observable, forkJoin } from 'rxjs';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()

export class calculadoraService {
    
    constructor(private http: HttpClient){
    } 
    sumar(operador1:number,operador2:number)
    {
        const url=Conexiones.sumar;
        return this.http.post(url,httpOptions);
    }

    restar(operador1:number,operador2:number)
    {
        const url=Conexiones.restar;
        return this.http.post(url,httpOptions);
    }
    multiplicar(operador1:number,operador2:number)
    {
        const url=Conexiones.multiplicar;
        return this.http.post(url,httpOptions);
    }
    
    dividir(operador1:number,operador2:number)
    {
        const url=Conexiones.dividir;
        return this.http.get(url,httpOptions);
    }


    /*localvar: any;

const headers = new HttpHeaders().set('Content-Type', 'application/json');

const myObject: any = { this: 'thisThing', that: 'thatThing', other: 'otherThing'};
const httpParams: HttpParamsOptions = { fromObject: myObject } as HttpParamsOptions;

const options = { params: new HttpParams(httpParams), headers: headers };

this.httpClient.get<any>('https://server:port/api/endpoint', options)
  .subscribe((data: any) => {
      this.localvar = data;
});*/


}