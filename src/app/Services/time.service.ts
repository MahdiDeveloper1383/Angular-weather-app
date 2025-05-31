import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TimeData } from '../Shared/Interfaces/Time';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor() { }
  //Get City time
  getTimeForCity(timezone: string, city: string, country: string): TimeData {
    const date = new Date();
    const formatter = new Intl.DateTimeFormat('en-GB', {
      timeZone: timezone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  
    const parts: { [key: string]: string } = {};
    for (const part of formatter.formatToParts(date)) {
      if (part.type !== 'literal') {
        parts[part.type] = part.value;
      }
    }
  
    return {
      city,
      country,
      hour: parts['hour'],
      minute: parts['minute'],
      second: parts['second'],
      day: parts['day'],
      month: parts['month'],
      year: parts['year'],
    };
    
  }
  //Get day by Names
  getDayName(dateString: string): string {
    const date = new Date(dateString);
    const formatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' });
    return formatter.format(date);
  }
  
}
