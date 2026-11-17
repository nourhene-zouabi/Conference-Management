
import { Component, signal } from '@angular/core';
import { Conference } from '../../models/conference';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { ConferenceDetails } from '../conference-details/conference-details';

@Component({
  selector: 'app-conference-list',
  imports: [DatePipe, UpperCasePipe, ConferenceDetails],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css'
})
export class ConferenceList {

  selectedConference = signal<Conference | null>(null);

  searchTerm = signal('');

  conferences = signal<Conference[]>([
    {
      id: 1,
      title: 'Angular Development Conference',
      description: 'Une conférence dédiée au développement avec Angular.',
      date: new Date('2026-12-10'),
      place: 'Tunis',
      maxParticipants: 100,
      nbParticipants: 65
    },
    {
      id: 2,
      title: 'Artificial Intelligence Summit',
      description: 'Découvrez les dernières avancées en intelligence artificielle.',
      date: new Date('2026-12-15'),
      place: 'Sousse',
      maxParticipants: 50,
      nbParticipants: 42
    },
    {
      id: 3,
      title: 'Web Technologies Forum',
      description: 'Les nouvelles technologies du développement Web.',
      date: new Date('2026-12-20'),
      place: 'Sfax',
      maxParticipants: 30,
      nbParticipants: 30
    }
  ]);

  selectConference(conference: Conference) {
    this.selectedConference.set(conference);
  }

  searchConferences() {
    return this.conferences().filter(conference =>
      conference.title
        .toLowerCase()
        .includes(this.searchTerm().toLowerCase())
    );
  }

  register(conferenceId: number) {

    this.conferences.update(conferences =>
      conferences.map(conference =>
        conference.id === conferenceId
          ? {
              ...conference,
              nbParticipants: conference.nbParticipants + 1
            }
          : conference
      )
    );

    // Synchroniser les détails avec la liste actualisée
    const updatedConference = this.conferences().find(
      conference => conference.id === conferenceId
    );

    if (updatedConference) {
      this.selectedConference.set(updatedConference);
    }
  }
}
