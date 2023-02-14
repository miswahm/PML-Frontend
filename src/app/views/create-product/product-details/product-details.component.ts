import { Component, OnInit } from "@angular/core";
import { NbDateService } from "@nebular/theme";

@Component({
  selector: "ngx-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"],
})
export class ProductDetailsComponent implements OnInit {
  min: Date;
  max: Date;

  constructor(protected dateService: NbDateService<Date>) {
    this.min = this.dateService.addMonth(this.dateService.today(), -1);
    this.max = this.dateService.addMonth(this.dateService.today(), 1);
  }

  ngOnInit(): void {}
}
