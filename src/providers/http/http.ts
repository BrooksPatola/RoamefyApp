import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpProvider {
  api: string = 'http://app.toronto.ca/cc_sr_v1_app/data/edc_eventcal_APR';

  constructor(public http: HttpClient) {
    console.log('Hello HttpProvider Provider');
  }

  getJsonData(){
    return new Promise(resolve => {
      this.http.get(this.api).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
