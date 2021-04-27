import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {changeName, customIncrement} from '../state/counter.actions';
import {getName} from '../state/counter.selector';
import {Observable} from 'rxjs';
import {AppState} from '../../store/app.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {
  value: number;
  // myName: string;
  myName$: Observable<string>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    // this.store.select('counter').subscribe(data => {
    //   this.myName = data.text;
    // });
    // this.store.select(getName).subscribe(name => {
    //   this.myName = name;
    // }); // also

    this.myName$ = this.store.select(getName);
  }

  onAdd(): void {
    this.store.dispatch(customIncrement({value: +this.value}));
    // console.log(this.value);
  }

  onChaneName(): void {
    this.store.dispatch(changeName());
  }
}
