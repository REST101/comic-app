import { Component, OnInit } from '@angular/core';
import { ComicService } from '../shared/services/comic.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ComicDetailsComponent } from '../comic-details/comic-details.component';

@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.css']
})
export class ComicListComponent implements OnInit {

  public dataList: any;

  constructor(private comicService: ComicService, private dialog: MatDialog) { }

  comicDialogDetails(selectedComic) {
    console.log(selectedComic);
    const dialogRef = this.dialog.open(ComicDetailsComponent, {
      width: '1000px',
      data: selectedComic
    });
  }

  ngOnInit() {
    this.comicService.getComicList().subscribe(data => {
      this.dataList = data;
    },err =>{
      console.log('Something else went wrong ====>',err);
    });
  }

}
