import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ngx-create-product",
  templateUrl: "./create-product.component.html",
  styleUrls: ["./create-product.component.scss"],
})
export class CreateProductComponent implements OnInit {
  menu = [];

  ngOnInit(): void {
    const el = document.getElementById("nb-global-spinner");
    if (el) {
      el.style["display"] = "none";
    }

    console.log("hi");
  }
}
