import { Injectable } from '@angular/core';
import { Issue } from './issue';
import { issues } from '../assets/mock-issues';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {
  //private issues: Issue[] = [];
  constructor() { }

  getPendingIssues(): Issue[] {
    return issues.filter(val => !val.completed);
  }

  createIssue(issue: Issue){
    issue.issueNo = issues.length + 1;
    issues.push(issue);
  }

  completeIssue(issue: Issue){
    const selectedIssue: Issue = {
      ...issue,
      completed: new Date()
    };
    const index = issues.findIndex(i => i === issue);
    issues[index] = selectedIssue;
  }
}
