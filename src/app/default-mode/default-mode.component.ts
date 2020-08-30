import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-default-mode',
  templateUrl: './default-mode.component.html',
  styleUrls: ['./default-mode.component.scss'],
})
export class DefaultModeComponent implements OnInit {
  count = 0;
  constructor(private cdr: ChangeDetectorRef) {
    interval(1000).subscribe((value) => {
      this.count = value;
    });
  }

  ngOnInit(): void {}
}
