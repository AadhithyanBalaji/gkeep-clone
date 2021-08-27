import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  value: string;
  inputFocus: boolean;
  ngOnInit(): void {
  }

  clearSearchInput() {
    this.value = '';
  }

}
