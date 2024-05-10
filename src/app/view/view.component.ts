import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgStyle } from '@angular/common';
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { ExperienceComponent } from '../cv/experience/experience.component';
import { Router, provideRouter } from '@angular/router';
import { EducationComponent } from '../cv/education/education.component';
import { DeveloperComponent } from '../cv/developer/developer.component';
import { AboutmeComponent } from '../cv/aboutme/aboutme.component';
import { ProjectsComponent } from '../cv/projects/projects.component';
@Component({
  selector: 'app-view',
  standalone: true,
  imports: [FontAwesomeModule, NgStyle, ExperienceComponent, EducationComponent, DeveloperComponent, AboutmeComponent, ProjectsComponent],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css',
})
export class ViewComponent {
  constructor(private router: Router) { }
  word = "Experience";
  faArrowRightLong = faArrowRightLong;
  faArrowLeftLong = faArrowLeftLong;
  faSquarePlus = faSquarePlus;
  fumble() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let original = `${this.word}`
    let interval: any = undefined;
    let iteration = 0;
    clearInterval(interval);
    interval = setInterval(() => {
      this.word = this.word
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return original[index];
          }
          return letters[Math.floor(Math.random() * 26)]
        }

        )
        .join("");
      if (iteration >= this.word.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 30)
  }
  hello() {
    console.log("Hello");
  }
}
