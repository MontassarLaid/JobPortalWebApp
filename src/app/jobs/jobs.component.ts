import { Component, OnInit } from '@angular/core';
import { JobService } from '../job.service';
import { AppComponent } from '../app.component';
declare var jQuery:any;


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobsListing = [];
  jobsCount:number = 0;

  constructor(private jobService:JobService) {
    jobService.getJobs()
        .subscribe(
            data => {
              this.jobsListing = data;
              this.jobsCount = this.jobsListing.length;
            },
            error => console.error('Error: ' + error),
            () => console.log('Completed!')
        );
  }

  ngOnInit() {
  }

  deleteJob(Id:any) {
    this.jobService.deleteJob(Id).subscribe(
      data => {
        jQuery('#'+Id).css("display","none");
      },
      error => console.error('Error: ' + error),
      () => console.log('Completed!')
    );
  };

}
