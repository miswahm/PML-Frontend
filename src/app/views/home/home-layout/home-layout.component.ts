import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ngx-home-layout",
  templateUrl: "./home-layout.component.html",
  styleUrls: ["./home-layout.component.scss"],
})
export class HomeLayoutComponent implements OnInit {
  public products = [
    {
      title: "Reassure",
      status: "Active Product",
      version: "V.2",
      officialName: "BCAS",
      approvedBy: "Sunil Singh",
      createdBy: "Kevin",
      img: "../../../assets/images/kitten-dark.png",
    },
    {
      title: "Health Companion",
      status: "Waiting",
      version: "V.1",
      officialName: "CAS",
      approvedBy: "Sunil Singh",
      createdBy: "Kevin",
      img: "../../../assets/images/kitten-cosmic.png",
    },
    {
      title: "Heartbeat",
      status: "Created",
      version: "V.0",
      officialName: "SCV",
      approvedBy: "Sunil Singh",
      createdBy: "Kevin",
      img: "../../../assets/images/kitten-default.png",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
