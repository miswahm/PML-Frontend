import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NbStepChangeEvent, NbStepperComponent } from "@nebular/theme";

@Component({
  selector: "ngx-layout-create-product",
  templateUrl: "./layout-create-product.component.html",
  styleUrls: ["./layout-create-product.component.scss"],
})
export class LayoutCreateProductComponent implements OnInit {
  changeEvent: NbStepChangeEvent;
  selectedIndex = 0;

  @ViewChild("stepper") stepper: NbStepperComponent;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.selectedIndex = +this.route.snapshot.queryParamMap.get("tabId");
  }

  handleStepChange(e: NbStepChangeEvent): void {
    this.changeEvent = e;
    this.selectedIndex = e.index;
  }
}
