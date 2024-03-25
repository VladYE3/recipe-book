import { Component } from '@angular/core';

@Component({
   selector: 'username',
   templateUrl: './username.component.html',
   styleUrl: './username.component.css'
})

export class UsernameComponent {
   username = '';
   status = false;

   onUpdateUsername(event: Event) {
      this.username = (<HTMLInputElement>event.target).value
      if ((<HTMLInputElement>event.target).value !== '') {
         this.status = true;
      } else {
         this.status = false;
      } 
   }
   onReset(event: Event) {
      if ((<HTMLInputElement>event.target).value !== '') {
         (<HTMLInputElement>event.target).value = '';
      }
   }

}

