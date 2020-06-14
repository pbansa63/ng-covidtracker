import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Output() public stateValue = new EventEmitter<string>();
  constructor(public router: Router) { }

  public navigateToHome(): void {
    this.router.navigateByUrl('/');
  }

  public viewStateCases(state: string): void {
    this.stateValue.emit(state);
  }

}
