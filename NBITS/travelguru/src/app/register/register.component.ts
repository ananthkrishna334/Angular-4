import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { HotelDataService } from '../services/hoteldata.servcie';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerUser: any;
  countries: Array<any>;
  showError:boolean;
  regexAlphabets:any;
  regexNumbers:any;
  countryDropDown:any;
  stateDropDown:any;
  maritalStatusDropDown:any;
  constructor(private datasvc: DataService, private hotelSvc: HotelDataService) {
    this.registerUser = {
      firstName: "",
      lastName: "",
      userName: "",
      password: "",
      email: "",
      gender: "",
      country: "",
      agree: false

    };
    this.regexAlphabets=/^[a-zA-Z ]*$/;
    this.regexNumbers=/^\d+$/;
    this.countryDropDown = {
      label:"Country",
      data:[],
      selectedValue:""
    }
    // this.countries= [{name:"India",code:"IN"},
    // {name:"Australia",code:"AUS"},
    // {name:"United States",code:"USA"}];
    this.hotelSvc.getCountryList()
      .subscribe(x => {
        this.countries = x.json().Countries;
        let newCountriesList =x.json().Countries.map(y=>{
          let z={
            value:y.code,
            text:y.name
          };
          return z;
        });
        this.countryDropDown = {
          label:"Country",
          data:newCountriesList,
          selectedValue:""
        }
      },
      err => {
        this.showError=true;
      });
  this.maritalStatusDropDown = {
   label:"Relationship Status",
   selectedValue:"",
   data:[{text:"Single",value:"S"},{text:"Married",value:"M"},{text:"Not Interested",value:"N/A"}]
  };


  }
  register() {
    console.log(this.registerUser);
    this.hotelSvc.registerUserWithApi(this.registerUser)
      .subscribe((x) => {
        console.log(x)
      },
      (err) => {
        console.log(err);
      })
  }
  countryChange(val){
    console.log(val);
  }
}
