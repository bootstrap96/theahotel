import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() SideNavigationToggle = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  // tslint:disable-next-line: typedef
  onToggleOpenSidenav(){
      // tslint:disable-next-line: no-unused-expression
      this.SideNavigationToggle.emit();
  }

}
