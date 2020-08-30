import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-onpush-mode',
  templateUrl: './onpush-mode.component.html',
  styleUrls: ['./onpush-mode.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnpushModeComponent implements OnInit {
  count = 0;
  constructor(private cdr: ChangeDetectorRef) {
    interval(1000).subscribe((value) => {
      this.count = value;
      this.cdr.detectChanges();
    });
  }

  ngOnInit(): void {}
}
