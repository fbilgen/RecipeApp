import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   showRecipe = true;
  onMenuClicked(showRecipe: boolean) {

    this.showRecipe = showRecipe;

  }
}
