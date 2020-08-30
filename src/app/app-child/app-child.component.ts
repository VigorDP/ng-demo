import { HttpClient } from '@angular/common/http';
import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-app-child',
  templateUrl: './app-child.component.html',
  styleUrls: ['./app-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppChildComponent implements OnInit, OnChanges, OnDestroy {
  constructor(private cdr: ChangeDetectorRef, private http: HttpClient) {
    // observable
    interval(1000).subscribe((value) => {
      this.count = value;
      this.cdr.detectChanges();
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
    console.log('child constructor');
  }

  @Input() title: string;
  count: number;

  ngOnInit() {
    console.log('child ngOnInit');
  }
  ngOnChanges(c) {
    console.log('child ngOnChanges', c);
  }
  ngAfterContentInit() {
    console.log('child ngAfterContentInit');
  }
  ngAfterContentCheck() {
    console.log('child ngAfterContentCheck');
  }
  ngAfterViewInit() {
    console.log('child ngAfterViewInit');
  }
  ngAfterViewCheck() {
    console.log('child ngAfterViewCheck');
  }
  ngOnDestroy() {
    console.log('child ngOnDestroy');
  }
  click() {
    this.count = 100;
    this.title = 'test';
    // interval(1000).subscribe((value) => {
    //   this.count = value;
    //   // this.cdr.detectChanges();
    // });
  }
}
