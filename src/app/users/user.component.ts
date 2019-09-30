import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: `
    <h1>User Component with user id: {{id}}</h1>
    <!-- This user's notes will go in this outlet -->
    <router-outlet></router-outlet>
  `
})
export class UserComponent implements OnInit {
  id;
  constructor(private a: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.a.snapshot.params.userid;
  }
}
