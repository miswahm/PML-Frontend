import { Component, OnInit } from "@angular/core";
import {
  NbGlobalPhysicalPosition,
  NbToastrService,
  NbWindowControlButtonsConfig,
} from "@nebular/theme";
import { NbWindowService } from "@nebular/theme";
import { IcdCodeModalComponent } from "../icd-code-modal/icd-code-modal.component";
import { FormGroup, FormControl, FormArray, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "ngx-coverage",
  templateUrl: "./coverage.component.html",
  styleUrls: ["./coverage.component.scss"],
})
export class CoverageComponent implements OnInit {
  icdCode;

  name = "Dialysis";
  type = "Diagnosis";
  Category;

  waitingPeriodForm: FormGroup;
  coverageForm: FormGroup;

  planTypeCheck: boolean = true;
  planVariantCheck: boolean = true;
  sumInsuredCheck: boolean = true;
  applicabilityCheck: boolean = true;
  roomTypeCheck: boolean = false;

  planType = ["Individual", "Floater"];

  planVariant = ["Silver Plan", "Gold Plan", "Diamond Plan"];
  tempPlanVariant = this.planVariant;

  applicability = ["Per Person", "Pre Policy Plan"];
  tempapplicability = this.applicability;

  roomType = ["Deluxe Room", "XL Room"];

  sumInsuredIndi = ["2 Lakhs", "5 Lakhs", "10 Lakhs"];
  tempSumInsuredIndi = this.sumInsuredIndi;

  sumInsuredFloa = ["5 Lakhs", "10 Lakhs", "15 Lakhs"];
  tempSumInsuredFloa = this.sumInsuredFloa;

  positions = NbGlobalPhysicalPosition;

  constructor(
    private windowService: NbWindowService,
    private fb: FormBuilder,
    private router: Router,
    private toastrService: NbToastrService
  ) {}

  ngOnInit(): void {
    this.openWindow();

    this.waitingPeriodForm = this.fb.group({
      conditions: this.fb.array([]),
    });

    this.coverageForm = this.fb.group({
      coverage: this.fb.array([]),
    });

    this.addWaitingPeriod();
    this.addCoverage();

    this.sumInsuredIndi.shift();
    this.sumInsuredFloa.shift();
  }

  get waitingPeriod(): FormArray {
    return this.waitingPeriodForm.get("conditions") as FormArray;
  }

  get coverage(): FormArray {
    return this.coverageForm.get("coverage") as FormArray;
  }

  newWaitingPeriod(body): FormGroup {
    return this.fb.group({
      timePeriod: body.timePeriod,
      time: body.time,
      reason: body.reason,
      comparator: body.comparator,
    });
  }

  newCoverage(body): FormGroup {
    return this.fb.group({
      condition: body.condition,
      comparator: body.comparator,
      reason: body.reason,
    });
  }

  addWaitingPeriod() {
    this.waitingPeriod.push(
      this.newWaitingPeriod({
        timePeriod: "",
        time: "",
        reason: "",
        comparator: "",
      })
    );
  }

  addCoverage() {
    this.coverage.push(
      this.newCoverage({
        condition: "",
        comparator: "",
        reason: "",
      })
    );
  }

  removeWaitingPeriod(i: number) {
    this.waitingPeriod.removeAt(i);
  }

  removeCoverage(i: number) {
    this.coverage.removeAt(i);
  }

  openWindow() {
    const buttonsConfig: NbWindowControlButtonsConfig = {
      minimize: false,
      maximize: false,
      fullScreen: false,
      close: false,
    };

    const windowRef = this.windowService.open(IcdCodeModalComponent, {
      title: `Please Enter ICD CODE`,
      closeOnBackdropClick: false,
      buttons: buttonsConfig,
    });

    windowRef.onClose.subscribe((visitor) => (this.icdCode = visitor));
  }

  togglePlanType(e: boolean) {
    this.planTypeCheck = e;
  }

  togglePlanVariant(e: boolean) {
    this.planVariantCheck = e;

    if (!this.planVariantCheck) {
      this.planVariant = [""];
    } else {
      this.planVariant = this.tempPlanVariant;
    }
  }

  toggleSumInsured(e: boolean) {
    this.sumInsuredCheck = e;

    if (!this.sumInsuredCheck) {
      this.sumInsuredFloa = [];
      this.sumInsuredIndi = [];
    } else {
      this.sumInsuredFloa = this.tempSumInsuredFloa;
      this.sumInsuredIndi = this.tempSumInsuredIndi;
    }
  }

  toggleApplicability(e: boolean) {
    this.applicabilityCheck = e;

    if (!this.applicabilityCheck) {
      this.applicability = [""];
    } else {
      this.applicability = this.tempapplicability;
    }
  }

  toggleRoomType(e: boolean) {
    this.roomTypeCheck = e;
  }

  onSubmit() {
    this.router.navigate(["../create-product/product/creation-wizard"], {
      queryParams: { tabId: 3 },
    });
  }

  showToast(type: string, val: Boolean) {
    console.log("in");
    switch (type) {
      case "room":
        if (
          !val &&
          this.planTypeCheck &&
          this.planVariantCheck &&
          this.sumInsuredCheck &&
          this.applicabilityCheck
        ) {
          this.openTostr("Room Type");
        }
        break;
      case "applicability":
        if (
          !val &&
          this.planTypeCheck &&
          this.planVariantCheck &&
          this.sumInsuredCheck &&
          this.roomTypeCheck
        ) {
          this.openTostr("Applicability");
        }
        break;
      case "sum":
        if (
          !val &&
          this.planTypeCheck &&
          this.planVariantCheck &&
          this.applicabilityCheck &&
          this.roomTypeCheck
        ) {
          this.openTostr("Sum Insured");
        }
        break;
      case "variant":
        if (
          !val &&
          this.planTypeCheck &&
          this.applicabilityCheck &&
          this.sumInsuredCheck &&
          this.roomTypeCheck
        ) {
          this.openTostr("Plan Variant");
        }
        break;
      case "type":
        if (
          !val &&
          this.applicabilityCheck &&
          this.planVariantCheck &&
          this.sumInsuredCheck &&
          this.roomTypeCheck
        ) {
          this.openTostr("Plan Type");
        }
        break;
      default:
        break;
    }
  }

  openTostr(name) {
    let position = this.positions.TOP_RIGHT;
    let status = "danger";

    this.toastrService.show(
      `Please remove an element to add ${name}` || "Danger",
      `Configuration for limit table is only valid for upto 4 elements`,
      {
        position,
        status,
      }
    );
  }
}
