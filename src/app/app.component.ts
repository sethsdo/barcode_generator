import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  colors = ["brown", "green", "blue", "lightblue", "grey", "purple", "black", "red", "blue"]
  randNum() {
    let random = Math.floor(Math.random() * this.colors.length);
    let current = this.colors[random]
    return current
  }
}

