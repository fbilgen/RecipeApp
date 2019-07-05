import {
  Component,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() btnClicked = new EventEmitter<boolean>();
  recipeClicked() {
    this.btnClicked.emit(true);
  }

  shoppingListClicked() {
    this.btnClicked.emit(false);
  }

}
