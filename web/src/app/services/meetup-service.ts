import { Injectable } from '@angular/core';

import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Employee } from '../models/employee';

const employeeListUrl: string = "http://meetup22eylulapi.azurewebsites.net/employee/list";
const projectListUrl: string = "http://meetup22eylulapi.azurewebsites.net/project/list";
const employeeUpdateUrl: string = "http://meetup22eylulapi.azurewebsites.net/employee/update";

@Injectable()
export class MeetUpService {
    constructor(private http: Http) { }

    public GetEmployeeList() {
        return this.http.get(employeeListUrl)
            .map(result => result.json());
    }

    public GetProjectList() {
        return this.http.get(projectListUrl)
            .map(result => result.json());
    }

    public UpdateEmployee(data: Employee) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(data);
        console.log(body);
        return this.http.post(employeeUpdateUrl, body, options)
            .map(result => result.text())
            .subscribe(result => alert(result),
            err => console.log("Err:" + err),
            () => console.log("All Data Post")
            );
    }
}