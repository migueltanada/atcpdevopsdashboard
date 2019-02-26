/* This is a mock storage of tools in the catalogue */

import { Tool } from './tools';
import { altTool } from './tools';


export const TOOLS: Tool[] = [
  {
    id: 1,
    name: 'GitLab',
    description: 'Git Repository and Management and Code Review', 
    logoUrl: '../assets/img/gitlab.png',
    status: 'created'
  },
  {
    id: 2,
    name: 'Jenkins',
    description: 'CI Automation and Server', 
    logoUrl: '../assets/img/jenkins.png',
    status: 'created'

  },
  {
    id: 3,
    name: 'SonarQube',
    description: 'Static Code Analysis', 
    logoUrl: '../assets/img/sonar.png',
    status: 'created'
  },
  {
    id: 4,
    name: 'Gerrit',
    description: 'Code Review', 
    logoUrl: '../assets/img/gerrit.jpg',
    status: 'created'
  },
  {
    id: 5,
    name: 'Sensu',
    description: 'Monitoring', 
    logoUrl: '../assets/img/sensu.png',
    status: 'created'
  },
  {
    id: 6,
    name: 'Nexus',
    description: 'Software Repository Manager', 
    logoUrl: '../assets/img/nexus.png',
    status: 'created'
  },
  {
    id: 7,
    name: 'ELK Stack',
    description: 'Logging and Data Visualization', 
    logoUrl: '../assets/img/kibana.png',
    status: 'created'
  },
  {
    id: 8,
    name: 'Selenium',
    description: 'Selenium Grid for Automated Testing', 
    logoUrl: '../assets/img/selenium.png',
    status: 'created'
  },
];

/* This is a placeholder object required for the associated drop list */

export const ALTTOOL: altTool[] = [
  // {
  //   id: 0,
  //   name: "",
  //   description: "Click 'Edit' on the top right hand corner and drag tools into this space.", 
  //   logoUrl: '../assets/img/altTool.png',
  //   status: 'created'
  // },
  // {
  //   id: 0,
  //   name: 'gitlab',
  //   description: 'will be shown here.', 
  //   logoUrl: '../assets/img/gitlab.png',
  //   status: 'created'
  // },
  ];