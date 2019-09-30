import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  template: `
    <h1>Note Component with id: {{id}}</h1>
  `
})
export class NoteComponent implements OnInit {
  id;

  constructor(private a: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.id = this.a.snapshot.params.noteid;
  }
}
