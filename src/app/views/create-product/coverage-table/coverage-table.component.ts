import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "ngx-coverage-table",
  templateUrl: "./coverage-table.component.html",
  styleUrls: ["./coverage-table.component.scss"],
})
export class CoverageTableComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
