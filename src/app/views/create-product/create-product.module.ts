import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CreateProductComponent } from "./create-product.component";
import { ThemeModule } from "../../@theme/theme.module";
import { NbMenuModule } from "@nebular/theme";
import { MiscellaneousModule } from "../../pages/miscellaneous/miscellaneous.module";
import { RouterModule, Routes } from "@angular/router";

//routes
const routes: Routes = [
  { path: "product", component: CreateProductComponent },
];

@NgModule({
  declarations: [CreateProductComponent],
  imports: [
    CommonModule,
    ThemeModule,
    NbMenuModule,
    MiscellaneousModule,
    RouterModule.forChild(routes),
  ],
})
export class CreateProductModule {}
