import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostersService } from '../../core/services/posters.service';
import { CommonModule } from '@angular/common';
import { Poster } from '../../core/model/poster';
@Component({
  selector: 'app-posters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posters.component.html',
  styleUrl: './posters.component.scss'
})
export class PostersComponent implements OnInit, OnDestroy {

  posters: Poster[] = [];
  currentIndex: number = 0;
  timer: any;
  readonly interval = 7000;
  backgroundColors: string[] = ['#f3f4f6', '#e0f7fa', '#fff8e1', '#fce4ec'];

constructor(private posterService: PostersService){

}

ngOnInit(): void {
    this.getPosters()
}

ngOnDestroy() : void{
clearInterval(this.timer)
}

getPosters(){
  this.posterService.getAllPosters().subscribe((value)=>{
    this.posters = value.data;
    console.log("data from server", value);
  })

  this.startAutoSlide();

}

startAutoSlide() {
  this.timer = setInterval(()=>{
    this.currentIndex = (this.currentIndex+1) % this.posters.length
  }, this.interval)
}

changeSlide(index: number){
  this.currentIndex = index;
  this.resetTimer()
  }
  
  previousSlide() {
    this.currentIndex = (this.currentIndex - 1) % this.posters.length;
    this.resetTimer();
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.posters.length;
    this.resetTimer()
  }

  resetTimer() {
    clearInterval(this.timer);
    this.startAutoSlide();
  }



}
