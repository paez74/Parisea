import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Product } from '../models/product';
import { AppConfig } from '../util/AppConfig';
import { ServiceUtil } from '../util/ServiceUtil';
import { HttpResponse } from '../models/httpResponse';

@Injectable()

export class ProductService {
    private url = AppConfig.apiUrl() + '/products';
    private headers;
    private options;

    constructor(private http: Http) {
        this.headers = new Headers({'Authorization': 'Bearer ' + localStorage.getItem('token')});
        this.headers.append('UserName', localStorage.getItem('CurrentUser'));
        this.options = new RequestOptions({headers: this.headers});
    }

    public getProducts(): Observable<HttpResponse> {
        return this.http.get(this.url, this.options)
            .map(ServiceUtil.extractData)
            .catch(ServiceUtil.handleError);
    }

    public getProductsBySubGroup(subId: number,cityId:number): Observable<HttpResponse> {
        return this.http.get(this.url + "/" + subId+ "/" + cityId, this.options)
            .map(ServiceUtil.extractData)
            .catch(ServiceUtil.handleError);
    }

}