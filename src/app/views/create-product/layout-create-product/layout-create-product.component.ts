import { Component, OnInit, ViewChild } from "@angular/core";
import { NbStepChangeEvent, NbStepperComponent } from "@nebular/theme";

@Component({
  selector: "ngx-layout-create-product",
  templateUrl: "./layout-create-product.component.html",
  styleUrls: ["./layout-create-product.component.scss"],
})
export class LayoutCreateProductComponent implements OnInit {
  changeEvent: NbStepChangeEvent;
  selectedIndex = 3;

  @ViewChild("stepper") stepper: NbStepperComponent;

  constructor() {}

  ngOnInit(): void {}

  handleStepChange(e: NbStepChangeEvent): void {
    this.changeEvent = e;
    this.selectedIndex = e.index;
  }
}
