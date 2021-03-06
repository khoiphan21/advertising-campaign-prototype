import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { TopicSummaryComponent } from "./topic-summary/topic-summary.component";
import { HeaderComponent } from "./header/header.component";
import { ContentComponent } from "./content/content.component";
import { FooterComponent } from "./footer/footer.component";
import { ChatSimulationComponent } from "./chat-simulation/chat-simulation.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocialMediaComponent } from './social-media/social-media.component';
import { HelpChatComponent } from './help-chat/help-chat.component';

@NgModule({
  imports: [BrowserModule, FormsModule,BrowserAnimationsModule ],
  declarations: [
    AppComponent,
    HelloComponent,
    TopicSummaryComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ChatSimulationComponent,
    SocialMediaComponent,
    HelpChatComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
