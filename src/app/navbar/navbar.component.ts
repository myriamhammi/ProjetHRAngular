import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showIframe1 = true; // Initially display the first iframe
  toggleIframeVisibility() {
    this.showIframe1 = !this.showIframe1;
  }
  
}
