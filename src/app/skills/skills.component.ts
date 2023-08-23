import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Fetch skills data from the server or other source
    this.http.get<any[]>('/assets/skills.json').subscribe(data => {
      // Update the skills data with your desired information
      this.skills = data; // Update this line with your new skills data
    });
  }
}
