import { Tool } from './tools';
import { altTool } from './tools';


export const TOOLS: Tool[] = [
  {
    id: 1,
    name: 'GitLab',
    description: 'Git Repository and Management and Code Review', 
    logoUrl: '../assets/img/gitlab.png',
    status: ''
  },
  {
    id: 2,
    name: 'Jenkins',
    description: 'CI Automation and Server', 
    logoUrl: '../assets/img/jenkins.png'
  },
  {
    id: 3,
    name: 'SonarQube',
    description: 'Static Code Analysis', 
    logoUrl: '../assets/img/sonar.png'
  },
  {
    id: 4,
    name: 'Gerrit',
    description: 'Code Review', 
    logoUrl: '../assets/img/gerrit.jpg'
  },
  {
    id: 5,
    name: 'Sensu',
    description: 'Monitoring', 
    logoUrl: '../assets/img/sensu.png'
  },
  {
    id: 6,
    name: 'Nexus',
    description: 'Software Repository Manager', 
    logoUrl: '../assets/img/nexus.png'
  },
  {
    id: 7,
    name: 'ELK Stack',
    description: 'Logging and Data Visualization', 
    logoUrl: '../assets/img/kibana.png'
  },
  {
    id: 8,
    name: 'Selenium',
    description: 'Selenium Grid for Automated Testing', 
    logoUrl: '../assets/img/selenium.png'
  },
];

export const ALTTOOL: altTool[] = [
  // {
  //   id: 0,
  //   name: 'The tool of choice',
  //   description: 'will be shown here.', 
  //   logoUrl: '../assets/img/altTool.png'
  // },
  ];