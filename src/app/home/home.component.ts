import { Component, signal } from '@angular/core';
import { GreetingsComponent } from '../components/greetings/greetings.component';
import { CounterComponent } from '../components/counter/counter.component';

@Component({
  selector: 'app-home',
  imports: [GreetingsComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  homeMessage = signal("This is from home");

  inputHandler = (e: KeyboardEvent) => {
    console.log(e)
  }
}
