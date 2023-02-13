import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { ProductCardComponent } from "./product-card/product-card.component";
import { RouterModule, Routes } from "@angular/router";
import { ThemeModule } from "../../@theme/theme.module";
import { NbIconModule } from "@nebular/theme";
import { HomeLayoutComponent } from "./home-layout/home-layout.component";

//Routes
const routes: Routes = [
  {
    path: "products",
    component: HomeComponent,
    children: [{ path: "", component: HomeLayoutComponent }],
  },
  { path: "", redirectTo: "products", pathMatch: "full" },
];

@NgModule({
  declarations: [HomeComponent, ProductCardComponent, HomeLayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ThemeModule,
    NbIconModule,
  ],
})
export class HomeModule {}
