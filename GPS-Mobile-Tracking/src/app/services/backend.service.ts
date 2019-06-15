import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private _http:HttpClient) { }
  login(formData){
    let fakeresponse_1 = {
      "errorCode": "1",
      "errorMessage": "UserDIID is invalid",
      "rowCount" : "30",
      "data":{
        "token": "abcd"
      }
    }
    let fakeresponse_2 = {
      "errorCode": "0",
      "errorMessage": "password is invalid",
      "rowCount" : "30",
      "data":{
        "token": "abcd"
      }
    }
    let fakeresponse_3 = {
      "errorCode": "0",
      "errorMessage": "Authontication succsessful",
      "rowCount" : "30",
      "data":{
        "token": "abcd"
      }
    }
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeresponse_1)
        }, 2000);
      }
    )
  };

  
  updateUser(formData){
  
    console.log(formData)
    let fakeResponse_3 = {
      "errorCode" : "1",
      "errorMessage" : "",
      "rowCount" : "30",
      "data": {
        "token" : "abcd"
      }
    };
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeResponse_3)
        }
        ,2000)
      });

  // let token = localStorage.getItem('token') ? localStorage.getItem('token') : "abcd";
  // let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': token }) };
  // return this._http.post("http://localhost:3000/updateuser", formData, httpOptions);
  
}

  setUser(formData){
  
    let fakeResponse_3 = {
      "errorCode" : "1",
      "errorMessage" : "User Created.",
      "rowCount" : "30",
      "data": {
        "token" : "abcd"
      }
    };
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeResponse_3)
        }
        ,2000)
      });
 
  // let token = localStorage.getItem('token') ? localStorage.getItem('token') : "abcd";
  // let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': token }) };
  // return this._http.post("http://localhost:3000/signup", formData, httpOptions);
 
}

  getUser(){
  
    let fakeResponse_3 = {
      "errorCode" : "1",
      "errorMessage" : "",
      "rowCount" : "30",
      "data": {
        "name" : "Amit",
        "inputEmail": "amit@amit.la",
        "inputPassword": "password",
        "question": "Question",
        "answer": "Answer"
      }
    };
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeResponse_3)
        }
        ,2000)
      });
       
  // let token = localStorage.getItem('token') ? localStorage.getItem('token') : "abcd";
  // let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': token }) };
  // return this._http.get("http://localhost:3000/user",httpOptions);
  // }
  // setLocations(formData){
  // let token = localStorage.getItem('token') ? localStorage.getItem('token') : "abcd";
  // let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': token }) };
  // return this._http.post("http://localhost:3000/setlocation", formData, httpOptions);
  
}

  setLocations(formData){
    console.log(`locaationdata lat ${formData.lat} long is ${formData.long}` )
     let token = localStorage.getItem('token') ? localStorage.getItem('token') : "abcd";
     let httpOptions = {headers: new HttpHeaders({'content-Type':'application/json', 'token':token})};
     return this._http.post("http://localhost:3000/login", formData, httpOptions);
  }
  getUserLocation(){
  
    let fakeResponse_3 = {
      "errorCode" : "1",
      "errorMessage" : "",
      "rowCount" : "30",
      "data": [{
        "email" : "Amit",
        "lat": "amit@amit.la",
        "long": "password",
        "createdAt": "Sep 24 10:00:00 pm"
      },
      {
        "email" : "Amit",
        "lat": "amit@amit.la",
        "long": "password",
        "createdAt": "Sep 24 10:05:00 pm"
      },
    ]
    };
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeResponse_3)
        }
        ,2000)
      });


//  let token = localStorage.getItem('token') ? localStorage.getItem('token') : "abcd";
//   let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': token }) };
//   return this._http.get("http://localhost:3000/getlocation", httpOptions);


}



}

