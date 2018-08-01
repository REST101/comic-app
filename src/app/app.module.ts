import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ComicListComponent } from './comic-list/comic-list.component';
import { ComicDetailsComponent } from './comic-details/comic-details.component';
import { ComicService } from './shared/services/comic.service';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatCardModule, MatIconModule, MatDialogModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ComicListComponent,
    ComicDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [ComicDetailsComponent],
  providers: [ComicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
