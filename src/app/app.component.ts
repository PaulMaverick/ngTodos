import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  authService = inject(AuthService);

  ngOnInit(): void {
      this.authService.user$.subscribe(user => {
        if(user) {
          this.authService.currentUserSignal.set({
            email: user.email!,
            username: user.displayName!,
          })
        } else {
          this.authService.currentUserSignal.set(null)
        }

        console.log(this.authService.currentUserSignal())
      })
  }

  title = 'startup';
}
