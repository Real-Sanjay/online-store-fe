import { Component, OnInit } from '@angular/core';
import { PostersService } from '../../core/services/posters.service';
import { CommonModule } from '@angular/common';
import { Poster } from '../../core/model/poster';
@Component({
  selector: 'app-posters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posters.component.html',
  styleUrl: './posters.component.css'
})
export class PostersComponent implements OnInit {

  posters: Poster[] = [];

constructor(private posterService: PostersService){

}

ngOnInit(): void {
    this.getPosters()
}

getPosters(){
  this.posterService.getAllPosters().subscribe((value)=>{
    this.posters = value.data;
    console.log("data from server", value);
  })
}

}
