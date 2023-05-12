import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private http: HttpClient) { }

  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
    this.http.get('https://pokeapi.co/api/v2/pokemon/ditto').subscribe((response) => {
      console.log(response);
    }, (error) => {
      console.error(error);
    });

  }


  mouseleave() {

    console.log("AQUI");

    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

}
