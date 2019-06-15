import { Component, OnInit, OnDestroy } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  lat: number;
  lng: number;
  data;
  stopCondition = false;
  private querySubscription;
  constructor(private backendService: BackendService) { }

  ngOnInit() {
const secondCounter = interval(2000);
this.querySubscription = secondCounter.subscribe(n=>{
  console.log(`its been ${n} seconds since subscribingg!`);
  this.getLocation();
})
  }
  getLocation(){
    var positionOption = { enableHighAccuracy: false, maximumAge: Infinity, timeout: 6000 }
    var gpsSuccess = function(currentPosition){
      // use gps position
    }
    var gpsFailed = function(){
      // use third party position solution(get position by ur device ip)
      //getpositionBy3rdParty();
    };
    //locating user
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.data = {"lat":position.coords.latitude, "long": position.coords.longitude}
        this.backendService.setLocations(this.data).subscribe((res)=> console.log('success'))
      })
    }

  }
  ngOnDestroy(){
    if(this.querySubscription){
      this.querySubscription.unsubscribe();
    }

  }

}
