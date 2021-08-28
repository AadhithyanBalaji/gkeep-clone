import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleMenu = new EventEmitter();

  constructor() { }
  value: string;
  inputFocus: boolean;
  ngOnInit(): void {
  }

  clearSearchInput() {
    this.value = '';
  }

  onToggleMenu() {
    this.toggleMenu.next(true);
  }

}
