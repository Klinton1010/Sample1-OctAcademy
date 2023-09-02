import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  datasList :Array <any>=[
    {id:1,DataTitle:"Data 1"},
    {id:2,DataTitle:"Data 2"},
  
]

}
