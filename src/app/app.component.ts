import { Component, ViewChild } from '@angular/core';
import { SideBarComponent } from './side-bar/side-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo';

  @ViewChild('sideBar') sideBar: SideBarComponent;

  onToggleMenu() {
    this.sideBar.toggleMenu();
  }
}
