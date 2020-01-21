import { trigger, style, animate, transition } from "@angular/animations";

import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ChatDataService } from "../services";

@Component({
  selector: "app-chat-simulation",
  templateUrl: "./chat-simulation.component.html",
  styleUrls: ["./chat-simulation.component.scss"],
  animations: [
    trigger("messageAnimation", [
      transition(":enter", [
        style({ transform: "translateX(30%)", opacity: 0 }),
        animate(
          "1000ms ease-out",
          style({ transform: "translateX(0)", opacity: 1 })
        )
      ])
    ])
  ]
})
export class ChatSimulationComponent implements OnInit {
  readonly service = ChatDataService.instance;

  data = [
    // {
    //   title: "Teacher",
    //   content:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    // },
    // {
    //   title: "Nurse",
    //   content:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    // },
    // {
    //   title: "Mining Engineer",
    //   content:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    // },
    // {
    //   title: "Doctor",
    //   content:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    // },
    // {
    //   title: "Lawyer",
    //   content:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    // },
    // {
    //   title: "Trainee",
    //   content:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    // },
    // {
    //   title: "Civil Engineer",
    //   content:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    // }
  ];

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngOnInit() {
    Array.from(Array(5)).forEach(() => {
      this.data.push({
        title: this.service.getTitle(),
        content: this.service.getMessage(),
      })
    })
    
    this.service.message$.subscribe(message => {
      this.data.push(message);
      this.changeDetector.detectChanges();
      
      setTimeout(() => {
        const objDiv = document.getElementById(
          "chat-content"
        ) as HTMLDivElement;
        objDiv.scrollTop = objDiv.scrollHeight;
      });
    });

  }

  trackMessage(index, item: any) {
    return item.content;
  }
}
