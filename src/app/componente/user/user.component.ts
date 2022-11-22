import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { UsersService } from 'src/app/service/user.service';
import { Persona } from 'src/model/persona';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  personas: Persona[] = [];

  constructor( private userService: UsersService ) {

  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (result: any) => {
        console.log(result)
      },
      error => {
        console.log(error)
      }

    )
  }

}
