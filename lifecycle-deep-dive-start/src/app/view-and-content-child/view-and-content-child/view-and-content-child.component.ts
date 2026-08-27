import {AfterViewInit, Component, ContentChild, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-view-and-content-child',
  standalone: true,
  imports: [],
  templateUrl: './view-and-content-child.component.html',
  styleUrl: './view-and-content-child.component.css'
})
export class ViewAndContentChildComponent implements AfterViewInit, OnInit{
  // own by this component
  @ViewChild('heading') heading?: ElementRef< HTMLHeadingElement>;

  @ContentChild('nav') navbar ?: ElementRef<HTMLElement>

  ngOnInit() {
    console.log('On Init');
    console.log(this.heading?.nativeElement);
    console.log("content child navbar: "+this.navbar?.nativeElement);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    console.log(this.heading?.nativeElement);
  }

}
