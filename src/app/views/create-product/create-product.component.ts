import { Component, OnInit } from "@angular/core";

import { MENU_ITEMS } from "./product-create-menu";

@Component({
  selector: "ngx-create-product",
  templateUrl: "./create-product.component.html",
  styleUrls: ["./create-product.component.scss"],
})
export class CreateProductComponent implements OnInit {
  menu = MENU_ITEMS;

  ngOnInit(): void {
    const el = document.getElementById("nb-global-spinner");
    if (el) {
      el.style["display"] = "none";
    }

    console.log("hi");
  }
}
