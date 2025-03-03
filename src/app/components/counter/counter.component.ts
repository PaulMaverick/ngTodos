import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  count = signal(0);
  addMinusNum = 1

  incrementHandler = () => {
    this.count.update(val => val + this.addMinusNum)
  }

  decrementHandler = () => {
    this.count.update(val => val - this.addMinusNum)
  }
}
