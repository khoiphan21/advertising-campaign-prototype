import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ChatDataService } from "../services";

@Component({
  selector: "app-topic-summary",
  templateUrl: "./topic-summary.component.html",
  styleUrls: ["./topic-summary.component.scss"]
})
export class TopicSummaryComponent implements OnInit {
  readonly service = ChatDataService.instance;

  voicesCount = 25100;

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngOnInit() {
    this.service.message$.subscribe(() => {
      this.voicesCount++;
      this.changeDetector.detectChanges();
    });
  }
}
