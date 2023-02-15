import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "ngx-types-variants",
  templateUrl: "./types-variants.component.html",
  styleUrls: ["./types-variants.component.scss"],
})
export class TypesVariantsComponent implements OnInit {
  selectedItem = [1, 2];

  variantName: FormGroup;
  baseSum: FormGroup;

  variantsName = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.variantName = this.fb.group({
      variants: this.fb.array([]),
    });

    this.baseSum = this.fb.group({
      sum: this.fb.array([]),
    });

    this.addVariantName();
    this.addBaseSum();
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

  newVariant(body): FormGroup {
    return this.fb.group({
      name: body.name,
      id: this.variantName.value.variants.length,
    });
  }

  newBaseSum(body): FormGroup {
    return this.fb.group({
      title: body.title,
      variantId: body.variantId,
    });
  }

  addVariantName() {
    this.variants.push(this.newVariant({ name: "" }));
  }

  addBaseSum() {
    this.sum.push(this.newBaseSum({ title: null, variantId: null }));
  }

  removeVariant(i: number) {
    this.variants.removeAt(i);
  }

  removeSum(i: number) {
    this.sum.removeAt(i);
  }
}
