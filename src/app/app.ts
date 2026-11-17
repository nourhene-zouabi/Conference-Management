import { Component } from '@angular/core';

import { Header } from './components/header/header';
import { Navbar } from './components/navbar/navbar';
import { ProfileUser } from './components/profile-user/profile-user';
import { FriendsList } from './components/friends-list/friends-list';
import { NotificationList } from './components/notification-list/notification-list';
import { Footer } from './components/footer/footer';
import { ConferenceList } from './components/conference-list/conference-list';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Navbar,
    ProfileUser,
    FriendsList,
    NotificationList,
    Footer,
    ConferenceList
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
