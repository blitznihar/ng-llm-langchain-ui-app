import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UploadDocumentsComponent } from './upload-documents/upload-documents.component';
import { ChatComponent } from './chat/chat.component';
import { AskquestionsComponent } from './askquestions/askquestions.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home App'
  },
  {
    path: 'upload-documents',
    component: UploadDocumentsComponent,
    title: 'Upload Documents'
  },
  {
    path: 'chat',
    component: ChatComponent,
    title: 'Chat'
  },
  {
    path: 'ask-questions',
    component: AskquestionsComponent,
    title: 'Ask Questions'
  }
];
