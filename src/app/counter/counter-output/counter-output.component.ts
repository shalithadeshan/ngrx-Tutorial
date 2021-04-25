import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {CounterState} from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {
//  @Input() counter;
//   counter: number;
  counter$: Observable<{ counter: number }>;
  // counterSubscription: Subscription;
  // constructor(private store: Store<{ counter: {counter: number}}>) {
  // }
  constructor(private store: Store<{ counter: CounterState }>) { }

  ngOnInit(): void {
    // this.counterSubscription = this.store.select('counter').subscribe(data => {
    //   this.counter = data.counter;
    // });
    this.counter$ = this.store.select('counter');
  }
  // ngOnDestroy(): void {
  //   if (this.counterSubscription) {
  //     this.counterSubscription.unsubscribe();
  //   }
  // }
}
