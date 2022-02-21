import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [{path: 'about', component: AboutComponent},
                        {path: 'skills', component: SkillsComponent},
                        {path: 'portfolio', component: PortfolioComponent},
                        {path: 'contact', component: ContactComponent},
                        {path: 'education', component: EducationComponent},
                        {path: '**', component: PagenotfoundComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
    //CommonModule
})
export class AppRoutingModule { }
