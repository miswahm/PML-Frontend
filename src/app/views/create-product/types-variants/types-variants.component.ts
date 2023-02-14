import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ngx-types-variants",
  templateUrl: "./types-variants.component.html",
  styleUrls: ["./types-variants.component.scss"],
})
export class TypesVariantsComponent implements OnInit {
  selectedItem = "2";
  constructor() {}

  ngOnInit(): void {}
}
