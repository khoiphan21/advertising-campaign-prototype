import { Observable, Subject } from "rxjs";
import { LoremIpsum } from "lorem-ipsum";

export interface ChatMessage {
  readonly title: string;
  readonly content: string;
}

const TITLES: string[] = [
      "Teacher",
      "Nurse",
      "Mining Engineer",
      "Doctor",
      "Lawyer",
      "Trainee",
      "Civil Engineer",
  ];

export class ChatDataService {
  private static singleton: ChatDataService;

  readonly message$ = new Subject<ChatMessage>();

private offset = 0;

  private constructor() {
    setInterval(() => {
      // only update 80% of the time
      // if (100 * Math.random() < 50) {
      //   return;
      // }
      const lorem = new LoremIpsum({
        wordsPerSentence: {
          max: 10,
          min: 4
        }
      });

      this.message$.next({
        title: TITLES[this.offset++ % (TITLES.length - 1)],
        content: lorem.generateSentences(
          (Math.round(Math.random() * 10) % 4) + 1
        )
      })
      
    }, 2000);
  }

  static get instance() {
    if (!ChatDataService.singleton) {
      ChatDataService.singleton = new ChatDataService();
    }

    return ChatDataService.singleton;
  }
}
