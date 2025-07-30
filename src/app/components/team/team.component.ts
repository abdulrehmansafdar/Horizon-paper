import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TeamMember } from '../../Interfaces/Model';

interface TeamMemberWithReports extends TeamMember {
  reportsTo?: string;
}

@Component({
  selector: 'app-team',
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
  // CEO
  CEO: TeamMember = {
    name: "Malik Altaf Hussain",
    role: "Chief Executive Officer",
    experience: "Seasoned leader with extensive experience in paper manufacturing industry, driving strategic vision and operational excellence",
  };

  // Board of Directors
  directors: TeamMember[] = [
    {
      name: "Ms Fatima Bushra",
      role: "Director",
      experience: "Strategic leadership and governance expertise, providing oversight and direction for organizational growth",
    },
    {
      name: "Ahmed Ali Malik",
      role: "Director",
      experience: "Experienced director with deep industry knowledge and strategic decision-making capabilities",
    },
    {
      name: "Muhammad Ali Malik",
      role: "Director",
      experience: "Board member with strong business acumen and commitment to organizational excellence",
    },
  ];

  // Senior Management (Reports to CEO & Ahmed Ali)
  seniorManagement: TeamMemberWithReports[] = [
    {
      name: "Mudassir Husnain",
      role: "General Manager",
      experience: "Comprehensive management experience overseeing daily operations and strategic initiatives",
      reportsTo: "CEO & Ahmed Ali",
    },
    {
      name: "Irfan Aziz",
      role: "Company Secretary",
      experience: "ACMA qualified professional managing corporate governance and compliance matters",
      reportsTo: "CEO & Ahmed Ali",
    },
    {
      name: "Ishfaq Ahmed Jan",
      role: "Manager Marketing",
      experience: "MBA with expertise in market development and customer relationship management",
      reportsTo: "CEO & Ahmed Ali",
    },
    {
      name: "Shahzad Muhammad",
      role: "Fund Manager",
      experience: "Financial expertise in fund management and investment strategies",
      reportsTo: "CEO & Ahmed Ali",
    },
  ];

  // Operational Management (Various reporting structures)
  operationalTeam: TeamMemberWithReports[] = [
    {
      name: "Amjad Mehmood",
      role: "Admin Manager",
      experience: "Administrative operations specialist ensuring smooth organizational functioning",
      reportsTo: "CEO, Ahmed Ali, Muhammad Ali, Fatima Bushra",
    },
    {
      name: "Imran",
      role: "Internal Audit",
      experience: "Internal audit professional ensuring compliance and risk management",
      reportsTo: "CEO & Ahmed Ali",
    },
    {
      name: "Adil Mehmood",
      role: "Supply Chain & Treasury",
      experience: "Supply chain optimization and treasury management specialist",
      reportsTo: "CEO, Ahmed Ali, Muhammad Ali",
    },
  ];
}