import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ngx-no-sidebar",
  template: `<nb-layout windowMode>
    <nb-layout-header fixed>
      <ngx-header></ngx-header>
    </nb-layout-header>

    <nb-layout-column>
      <ng-content select="router-outlet"></ng-content>
    </nb-layout-column>

    <nb-layout-footer fixed>
      <ngx-footer></ngx-footer>
    </nb-layout-footer>
  </nb-layout>`,
  styleUrls: ["./no-sidebar.component.scss"],
})
export class NoSidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
