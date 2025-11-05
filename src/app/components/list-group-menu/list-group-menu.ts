import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-list-group-menu',
  imports: [],
  templateUrl: './list-group-menu.html',
  styleUrl: './list-group-menu.css',
})
export class ListGroupMenu {
menu = [
  {text:"Step 2 person table", link:"/person-table-example"},
  {text:"Step 3 component input", link:"/component-input-example"},
  {text:"Step 4 for directive", link:"/for-directive-example"},
  {text:"Step 5 event bind", link:"/event-bind-example"}
];  
}
