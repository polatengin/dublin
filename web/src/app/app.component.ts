import { Component, OnInit } from '@angular/core';

import { MeetUpService } from './services/meetup-service';

import { Employee } from './models/employee';
import { Project } from './models/project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = '.Net Core & Angular 4 Etkinliğine Hoşgeldiniz!';

  employeeList: Array<Employee>;
  selectedEmployee: Employee;

  projectList: Array<Project>;
  selectedProject: Project;

  constructor(private service: MeetUpService) { }

  public ngOnInit() {
    this.service.GetEmployeeList().subscribe(result => {
      this.employeeList = result
    },
      err => console.log(err),
      () => {
        console.log("Employee List Loaded");
        //this.selectedEmployee = this.employeeList.length > 2 ? this.employeeList[2] : null;
      }
    )

    this.service.GetProjectList().subscribe(result => {
      this.projectList = result,
        err => console.log(err),
        () => {
          console.log("Project List Loaded");
        }
    })
  }

  public SetCurrentProject() {
    this.selectedProject = this.projectList.filter(prj => prj.Id == this.selectedEmployee.ProjectId)[0];
  }

  public UpdateEmployee() {
    this.service.UpdateEmployee(this.selectedEmployee);
  }
}
