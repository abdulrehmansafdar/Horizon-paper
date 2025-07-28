import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TeamMember } from '../../Interfaces/Model';


@Component({
  selector: 'app-team',
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
  // Executive Leadership (Top Row - 3 cards)
  executiveTeam: TeamMember[] = [
    {
      name: "Malik Altaf Hussain",
      role: "CEO & Director",
      experience: "35 Years' experience in Paper Industry with strategic vision and operational excellence",
      
    },
    {
      name: "Fatima Bushra",
      role: "Director",
      experience: "Strategic Leadership & Operations specialist with proven track record in business growth",
      
    },
    {
      name: "Irfan Aziz",
      role: "Secretary",
      experience: "ACMA, Islamabad. Working in this group since 1999, ensuring fiscal responsibility and company secretary duties",
    },
  ];

  // Management Team (Bottom Row - 4 cards)
  managementTeam: TeamMember[] = [
    {
      name: "Irfan Aziz",
      role: "Finance Manager",
      experience: "ACMA qualified, ensuring fiscal responsibility and financial operations",
    },
    {
      name: "Mudassir Husnain",
      role: "General Manager",
      experience: "CA Inter, optimizing operations and productivity since 2002",
    },
    {
      name: "Ahmed Ali Malik",
      role: "Chief Production Manager",
      experience: "Production operations specialist ensuring quality and efficiency",
    },
    {
      name: "Ishfaq Ahmed Jan",
      role: "Marketing Manager",
      experience: "MBA, driving market expansion in paper industry since 1995",
    },
  ];
}
