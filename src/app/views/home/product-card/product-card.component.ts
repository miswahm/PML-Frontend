import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "ngx-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss"],
})
export class ProductCardComponent implements OnInit {
  @Input() product;
  constructor() {}

  ngOnInit(): void {}
}
