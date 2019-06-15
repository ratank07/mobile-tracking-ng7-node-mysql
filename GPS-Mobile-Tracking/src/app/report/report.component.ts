import { Component, OnInit, OnDestroy } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit, OnDestroy {
  error: boolean = false;
  errorMessage: String = "";
  dataLoading: boolean = false;
  private querySubscription;
  myDocData;

  constructor(private backendService: BackendService) { }

  ngOnInit() {
    this.getUserLoc();
  }
  getUserLoc() {
    this.dataLoading = true;
    this.querySubscription = this.backendService.getUserLocation().subscribe((res) => {
      if (res["errorCode"] > 0) {
          this.error = false;
          this.errorMessage = "";
          this.dataLoading = false;
          this.myDocData = res["data"];
      } else {
          this.error = true;
          this.errorMessage = res["errorMessage"];
          this.dataLoading = false;
      }
  },
      (error) => {
          this.error = true;
          this.errorMessage = error.message;
          this.dataLoading = false;
      },
      () => {
          this.dataLoading = false;
});
  }
  ngOnDestroy(){
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
}
  }

}
