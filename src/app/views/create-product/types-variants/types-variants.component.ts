import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "ngx-types-variants",
  templateUrl: "./types-variants.component.html",
  styleUrls: ["./types-variants.component.scss"],
})
export class TypesVariantsComponent implements OnInit {
  variantName: FormGroup;
  baseSum: FormGroup;
  addonsForm: FormGroup;

  selectedRoomType = new FormControl();

  constructor(private fb: FormBuilder) {
    this.selectedRoomType.setValue(["Option 1"]);
  }

  ngOnInit(): void {
    this.variantName = this.fb.group({
      variants: this.fb.array([]),
    });

    this.baseSum = this.fb.group({
      sum: this.fb.array([]),
    });

    this.addonsForm = this.fb.group({
      addons: this.fb.array([]),
    });

    this.addVariantName();
    this.addBaseSum();
    this.addAddon();
  }

  compareById(v1, v2): boolean {
    return v1 == v2;
  }

  get variants(): FormArray {
    return this.variantName.get("variants") as FormArray;
  }

  get sum(): FormArray {
    return this.baseSum.get("sum") as FormArray;
  }

  get addons(): FormArray {
    return this.addonsForm.get("addons") as FormArray;
  }

  newVariant(body): FormGroup {
    return this.fb.group({
      name: body.name,
    });
  }

  newBaseSum(body): FormGroup {
    return this.fb.group({
      title: body.title,
      variantName: body.variantName,
    });
  }

  newAddOn(name): FormGroup {
    return this.fb.group({
      name: name,
    });
  }

  addVariantName() {
    this.variants.push(this.newVariant({ name: "" }));
  }

  addBaseSum() {
    this.sum.push(this.newBaseSum({ title: null, variantId: null }));
  }

  addAddon() {
    this.addons.push(this.newAddOn(null));
  }

  removeVariant(i: number) {
    this.variants.removeAt(i);
  }

  removeSum(i: number) {
    this.sum.removeAt(i);
  }

  removeAddOn(i: number) {
    this.addons.removeAt(i);
  }
}
