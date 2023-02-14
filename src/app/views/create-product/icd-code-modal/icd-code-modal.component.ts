import { Component, OnInit } from "@angular/core";
import { NbWindowRef } from "@nebular/theme";


@Component({
  selector: "ngx-icd-code-modal",
  templateUrl: "./icd-code-modal.component.html",
  styleUrls: ["./icd-code-modal.component.scss"],
})
export class IcdCodeModalComponent implements OnInit {
  title: String;

  constructor(private windowService: NbWindowRef) {}

  ngOnInit(): void {
   
  }

  onSubmit(code) {
    this.windowService.close(code);
  }
}
