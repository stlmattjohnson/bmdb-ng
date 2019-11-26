import { Component, OnInit } from "@angular/core";
import { Credit } from "src/app/model/credit.class";
import { JsonResponse } from "src/app/model/json-response.class";
import { CreditService } from "src/app/service/credit.service";

@Component({
  selector: "app-credit-list",
  templateUrl: "./credit-list.component.html",
  styleUrls: ["./credit-list.component.css"]
})
export class CreditListComponent implements OnInit {
  credits: Credit[] = [];
  jr: JsonResponse;
  title: string = "Credit List";
  constructor(private creditSvc: CreditService) {}

  ngOnInit() {
    console.log("Calling Credit List Service...");
    this.creditSvc.list().subscribe(jresp => {
      this.jr = jresp;
      this.credits = this.jr.data as Credit[];
      console.log(this.credits);
    });
  }
}
