import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  @Input() isExpanded: boolean;
  @Input() showSubMenu: boolean;
  @Input() showSubSubMenu: boolean;

  constructor() { }

  ngOnInit() {
  }

}
