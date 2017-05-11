import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	rForm: FormGroup;
	post:any;
	description: string = "";
	name: string = "";
	titleAlert:string = "This field is required";

	constructor(private _fb: FormBuilder){
		this.rForm = _fb.group({
			"name": [null, Validators.required],
			"description": [null, Validators.compose([
				Validators.required, 
				Validators.minLength(30), 
				Validators.maxLength(500)
			])],
			"validate": ""
		})
	}

	ngOnInit() {
		this.rForm.get("validate").valueChanges.subscribe(
			(validate) => {
				if(validate == "1"){
					//Change the validator check and update the new message
					this.rForm.get("name").setValidators([Validators.required, Validators.minLength(3)])
					this.titleAlert = "You need to specify at least 3 characters";

				}else{
					//Set the validator to required state
					this.rForm.get("name").setValidators(Validators.required);
				}
				//update the form name value
				this.rForm.get("name").updateValueAndValidity();

			}
		)
	}

	addPost(post){
		this.name = post.name;
		this.description = post.description;
	}
}
