import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormArray, FormBuilder } from "@angular/forms";
import { NbWindowControlButtonsConfig, NbWindowService } from "@nebular/theme";
import { IcdCodeModalComponent } from "../icd-code-modal/icd-code-modal.component";
import { Router } from "@angular/router";
@Component({
  selector: "ngx-exclusions",
  templateUrl: "./exclusions.component.html",
  styleUrls: ["./exclusions.component.scss"],
})
export class ExclusionsComponent implements OnInit {
  icdCode;

  name = "Dialysis";
  type = "Diagnosis";
  Category;

  waitingPeriodForm: FormGroup;
  coverageForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private windowService: NbWindowService,
    private router: Router
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

  onSubmit() {
    this.router.navigate(["../create-product/product/creation-wizard"], {
      queryParams: { tabId: 4 },
    });
  }
}
