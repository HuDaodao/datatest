import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from "./user";

// const HEROES = [
//   {id: 1, name:'Superman'},
//   {id: 2, name:'Batman'},
//   {id: 5, name:'BatGirl'},
//   {id: 3, name:'Robin'},
//   {id: 4, name:'Flash'}
// ];



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  heros= [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
  ];
  users:User[];
  constructor(public navCtrl: NavController) {
this.users=[
  {name:'zs',pass:'qwqeqe'},
  {name:'ls',pass:'132'},
  {name:'wwzs',pass:'456'},
  {name:'zl',pass:'798'},
]
  }

}


