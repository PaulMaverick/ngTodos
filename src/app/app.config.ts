import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp({
      projectId: "startup-e84fd",
      appId: "1:830679690152:web:3517acea4ec8b20d6c8b9d",
      storageBucket: "startup-e84fd.firebasestorage.app",
      apiKey: "AIzaSyDhVy55cyJ3wQ9x1efZO6qHG5M8HgY2bq8",
      authDomain: "startup-e84fd.firebaseapp.com",
      messagingSenderId: "830679690152",
      measurementId: "G-L42CMFTRFL" })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())]
};
