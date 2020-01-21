import { Observable, Subject } from "rxjs";
import { LoremIpsum } from "lorem-ipsum";

export interface ChatMessage {
  readonly title: string;
  readonly content: string;
}

const MESSAGES: string[] = [
  `#workplacebullyingaffects my mental health. 
I've been called horrible names by my colleagues and patients because of where I come from. No matter what I do or say, I feel like nothing ever changes. `,

  `#workplacebullyingaffects my happiness.
There is a group of people at work who make it very clear that they don't like me around. I've been a target for the past 3 years but I haven't been able to speak up. `,

  `#workplacebullyingaffects my family. My son has been under a lot of stress at work recently. He always complains about how his boss yells and swears at him. I can see it's taking a big toll on his mental health and I worry about him everyday.`
];

const loopThrough = (values: any[]) => {
  let count = 0;

  return () => values[count++ % values.length];
};

const TITLES: string[] = [
  "Teacher",
  "Nurse",
  "Mining Engineer",
  "Doctor",
  "Lawyer",
  "Trainee",
  "Civil Engineer"
];

export class ChatDataService {
  private static singleton: ChatDataService;

  readonly message$ = new Subject<ChatMessage>();

  private offset = 0;

  readonly getTitle = loopThrough(TITLES);
  readonly getMessage = loopThrough(MESSAGES);

  private constructor() {
    setInterval(() => {
      // only update 80% of the time
      // if (100 * Math.random() > 80) {
      //   return;
      // }
      const lorem = new LoremIpsum({
        wordsPerSentence: {
          max: 10,
          min: 4
        }
      });

      this.message$.next({
        title: this.getTitle(),
        content: this.getMessage()
      });
    }, 3000);
  }

  static get instance() {
    if (!ChatDataService.singleton) {
      ChatDataService.singleton = new ChatDataService();
    }

    return ChatDataService.singleton;
  }
}
