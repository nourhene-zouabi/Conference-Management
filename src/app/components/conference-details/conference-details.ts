import { Component, input } from '@angular/core';
import { Conference } from '../../models/conference';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-conference-details',
  imports: [DatePipe],
  templateUrl: './conference-details.html',
  styleUrl: './conference-details.css'
})
export class ConferenceDetails {

  conference = input<Conference | null>(null);

}
