import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  constructor(private _http: HttpClient) { }

  isLoginObserve: EventEmitter<Boolean> = new EventEmitter();
  loginNameObserve: EventEmitter<String> = new EventEmitter();
  
  getCarousel() : Promise<any> {
    let _url = 'http://localhost:8080/';
    
    let carouselData = [
        {imgName: "First Slide", imgSrc: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201807/coaching-647.jpeg?GGlj5Q.tgeSNZAdFATZYr7hRY3Q6rwNG"},
        {imgName: "Second Slide", imgSrc: "https://images.theconversation.com/files/288759/original/file-20190820-170931-10c1x47.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"},
        {imgName: "Third Slide", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREprJ2mQJ-2WgGXxq_fojTR7nlXHG5V6ggwcN2HI0PbW7Wh5Fw&usqp=CAU"}
    ];
    return Promise.resolve(carouselData);
    // return Promise.resolve(this._http.get(_url));
  }

  getNews() : Promise<any> {
    let _url = 'http://localhost:8080/';
    
    let newsData = [
        {newsHeading: "Online Coaching info", newsDescription: "", newsUrl: ""},
        {newsHeading: "Covid19 - Offline Coaching closed", newsDescription: "", newsUrl: ""},
        {newsHeading: "CSAT TestId - OPTCSAT7298 Result are out", newsDescription: "", newsUrl: ""},
        {newsHeading: "Geography test to be held on 9th March.", newsDescription: "", newsUrl: ""},
        {newsHeading: "CSAT TestId - OPTCSAT4236 Result are out", newsDescription: "", newsUrl: ""}
    ];
    return Promise.resolve(newsData);
    // return Promise.resolve(this._http.get(_url));
  }

}
