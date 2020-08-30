import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnChanges, OnDestroy {
  title = 'angular-learn';
  count = 0;
  constructor(private cdr: ChangeDetectorRef, private http: HttpClient) {
    console.log('parent constructor');
    // observable
    // interval(1000).subscribe((value) => {
    //   // this.count = value;
    //   // this.cdr.detectChanges();
    // });
    // setTimeout(() => {
    //   console.log('settimeout');
    //   this.count = 300;
    // }, 2000);
    // promise
    // new Promise((res) => {
    //   setTimeout(() => {
    //     this.count = 200;
    //     console.log('promise resolved');
    //     res();
    //   }, 5000);
    // });
    // xhr
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
  }
  ngOnInit() {
    console.log('parent ngOnInit');
  }
  ngOnChanges() {
    console.log('parent ngOnChanges');
  }
  ngAfterContentInit() {
    console.log('parent ngAfterContentInit');
  }
  ngAfterContentCheck() {
    console.log('parent ngAfterContentCheck');
  }
  ngAfterViewInit() {
    console.log('parent ngAfterViewInit');
  }
  ngAfterViewCheck() {
    console.log('parent ngAfterViewCheck');
  }
  ngOnDestroy() {
    console.log('parent ngOnDestroy');
  }

  click() {
    // this.count = 100;
    this.title = 'test';
    // interval(1000).subscribe((value) => {
    //   this.count = value;
    //   // this.cdr.detectChanges();
    // });
  }
}
