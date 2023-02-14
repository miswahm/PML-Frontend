import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormArray, FormBuilder } from "@angular/forms";

@Component({
  selector: "ngx-general-conditions",
  templateUrl: "./general-conditions.component.html",
  styleUrls: ["./general-conditions.component.scss"],
})
export class GeneralConditionsComponent implements OnInit {
  conditionsForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.conditionsForm = this.fb.group({
      conditions: this.fb.array([]),
    });

    this.addCondition();
  }

  get conditions(): FormArray {
    return this.conditionsForm.get("conditions") as FormArray;
  }

  newCondition(body): FormGroup {
    return this.fb.group({
      reason: body.reason,
      comparator: body.comparator,
      cause: body.cause,
    });
  }

  addCondition() {
    this.conditions.push(
      this.newCondition({ reason: "", comparator: "", cause: "" })
    );
  }

  removeCondition(i: number) {
    this.conditions.removeAt(i);
  }

  onSubmit() {
    console.log(this.conditionsForm.value);
  }
}
