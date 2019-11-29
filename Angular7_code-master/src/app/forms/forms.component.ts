import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormService } from './form.service';


@Component({
    templateUrl: './forms.component.html',
    styleUrls: ['./form.component.css']
})

export class FormsComponent implements OnInit {
    employeForm: FormGroup;

    constructor(private fb: FormBuilder,
                private formService: FormService) {}

    ngOnInit() {
        this.employeForm = this.fb.group({
            firstName: ['john', [Validators.required, Validators.minLength(3)]],
            lastName: ['eeva', [Validators.required, Validators.maxLength(10)]],
            email: ['a@a.c', [Validators.required, Validators.pattern('^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]$')]],
            password: [ ''],
            phone: [''],
            notification: ''
        });
    }

    setNotification(notifyvia: string): void {
        const phoneControl = this.employeForm.get('phone');
        if (notifyvia === 'phone') {
            phoneControl.setValidators(Validators.required);
        } else {
            phoneControl.clearValidators();
        }

        phoneControl.updateValueAndValidity();
    }

    save() {
        console.log(this.employeForm.value);
        this.formService.postUser(this.employeForm.value)
            .subscribe((res) => console.log('form Submitted'));
    }

}
