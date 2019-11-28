import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
    templateUrl: './forms.component.html'
})

export class FormsComponent implements OnInit {
    employeForm: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.employeForm = this.fb.group({
            firstName: ['', [Validators.required, Validators.minLength(3)]],
            lastName: ['', [Validators.required, Validators.maxLength(10)]],
            email: [''],
            password: [ '']
        });
    }

}
