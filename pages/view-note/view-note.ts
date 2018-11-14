import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoteserviceProvider } from '../../providers/noteservice/noteservice';
import { Note } from '../../models/note.model';

/**
 * Generated class for the ViewNotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-note',
  templateUrl: 'view-note.html',
})
export class ViewNotePage {
  note:Note;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private noteService:NoteserviceProvider) {
    this.note=this.navParams.get('note');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewNotePage');
  }
  deleteNote(createDate:number){
    this.noteService.deleteNote(createDate);
    this.navCtrl.pop();
  }

}
