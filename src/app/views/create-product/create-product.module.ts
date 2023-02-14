import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CreateProductComponent } from "./create-product.component";
import { ThemeModule } from "../../@theme/theme.module";
import {
  NbButtonModule,
  NbCardModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbListModule,
  NbMenuModule,
  NbSelectModule,
  NbStepperModule,
} from "@nebular/theme";
import { MiscellaneousModule } from "../../pages/miscellaneous/miscellaneous.module";
import { RouterModule, Routes } from "@angular/router";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { TypesVariantsComponent } from "./types-variants/types-variants.component";
import { GeneralConditionsComponent } from "./general-conditions/general-conditions.component";
import { CoverageComponent } from "./coverage/coverage.component";
import { ExclusionsComponent } from "./exclusions/exclusions.component";
import { LayoutCreateProductComponent } from "./layout-create-product/layout-create-product.component";
import { ReactiveFormsModule } from "@angular/forms";
import { IcdCodeModalComponent } from './icd-code-modal/icd-code-modal.component';

//routes
const routes: Routes = [
  {
    path: "product",
    component: CreateProductComponent,
    children: [
      { path: "details", component: ProductDetailsComponent },
      { path: "types&variants", component: TypesVariantsComponent },
      { path: "general-conditions", component: GeneralConditionsComponent },
      { path: "coverage", component: CoverageComponent },
      { path: "exclusion", component: ExclusionsComponent },
      { path: "creation-wizard", component: LayoutCreateProductComponent },
    ],
  },

  { path: "", redirectTo: "product", pathMatch: "full" },
];

@NgModule({
  declarations: [
    CreateProductComponent,
    ProductDetailsComponent,
    TypesVariantsComponent,
    GeneralConditionsComponent,
    CoverageComponent,
    ExclusionsComponent,
    LayoutCreateProductComponent,
    IcdCodeModalComponent,
  ],
  imports: [
    CommonModule,
    ThemeModule,
    NbMenuModule,
    MiscellaneousModule,
    RouterModule.forChild(routes),
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbDatepickerModule,
    NbListModule,
    NbSelectModule,
    ReactiveFormsModule,
    NbIconModule
  ],
})
export class CreateProductModule {}
