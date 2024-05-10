import { Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AboutmeComponent } from './cv/aboutme/aboutme.component';
import { DeveloperComponent } from './cv/developer/developer.component';
import { EducationComponent } from './cv/education/education.component';
import { ExperienceComponent } from './cv/experience/experience.component';
import { ProjectsComponent } from './cv/projects/projects.component';


export const routes: Routes = [

    {
        path: 'home', component: ViewComponent,
        children: [
            { path: 'wassel', component: AboutmeComponent },
            { path: 'tools', component: DeveloperComponent },
            { path: 'education', component: EducationComponent },
            { path: 'experience', component: ExperienceComponent },
            { path: 'projects', component: ProjectsComponent }
        ]
    },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent }
];
