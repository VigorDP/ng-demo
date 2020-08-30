import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { interval } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-app-child-out-ngzone',
  templateUrl: './app-child-out-ngzone.component.html',
  styleUrls: ['./app-child-out-ngzone.component.scss'],
})
export class AppChildOutNgzoneComponent implements OnInit {
  count: number;
  constructor(
    private cdr: ChangeDetectorRef,
    private http: HttpClient,
    private ngzone: NgZone
  ) {
    this.ngzone.runOutsideAngular(() => {
      // observable
      interval(1000).subscribe((value) => {
        this.count = value;
        // this.cdr.detectChanges();
        // this.cdr.markForCheck();
      });
      // setTimeout(() => {
      //   console.log('settimeout');
      //   this.count = 300;
      // }, 2000);
      // // promise
      // new Promise((res) => {
      //   setTimeout(() => {
      //     this.count = 200;
      //     console.log('promise resolved');
      //     res();
      //   }, 5000);
      // });
      // // xhr
      // function reqListener(data) {
      //   console.log('succeed', data);
      //   this.count = 400;
      // }
      // var oReq = new XMLHttpRequest();
      // oReq.addEventListener('load', reqListener.bind(this));
      // oReq.open('GET', 'https://cnodejs.org/api/v1/topics');
      // oReq.send();
      // // httpClient
      // this.http.get('https://cnodejs.org/api/v1/topics').subscribe((data) => {
      //   console.log('http succeed', data);
      //   this.count = 401;
      // });
    });
  }

  ngOnInit(): void {}

  click() {
    this.count = 100;
    // this.title = 'test';
    // interval(1000).subscribe((value) => {
    //   this.count = value;
    //   // this.cdr.detectChanges();
    // });
  }
}
