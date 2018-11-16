import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  name = 'Shoyab Syed';
  designation = 'Frontend Developer';
  about = "About";
  workExperience = [
    {
      startYear: "2017",
      endYear: "2018",
      designation: " Frontend Developer",
      company: "Turpy Mobile Apps Pvt.Ltd"
    },
    {
      startYear: "2016",
      endYear: "2017",
      designation: "Website Designer",
      company: "Zakboys"
    }
  ]
  hobbies = [
    {
      icon: "computer.png",
      title: "Browsing"
    },
    {
      icon: "cricket.png",
      title: "PlayingCricket"
    },
    {
      icon: "book.png",
      title: "Reading Books"
    },
    {
      icon: "travelling.png",
      title: "Travelling"
    },
    {
      icon: "riding.png",
      title: "Riding"
    },
    {
      icon: "volunteer.jpg",
      title: "Volunteer Work's"
    }
  ]
  education = [
    {
      startYear : "2013",
      endYear : "2014",
      course: "Secondary School Education",
      collage: "GreenLand Public School"
    },
    {
      startYear : "2014",
      endYear : "2017",
      course: "Diploma in Electrical Engineering",
      collage: "St.Mary's Group Of Institutions"
    }
    
  ]
  contact = {
   
      address: "#76-5-253 Chowtra Center Sangadigunta, Guntur 522003",
      phone: "+91 888 654 2524",
      phoneLink: "tel:+918886542524",
      mailLink: "mailto:sdshoyab46@gmail.com",
      email: "sdshoyab46@gmail.com"
    }

    constructor(private db: AngularFirestore){
      console.log({db});
    }

  ngOnInit() {
  }

}
