import { Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {roomDataForm} from "../../models/Intarface";
import {HttpService} from "../../services/http.service";
import {RoomType} from "../../models/RoomType";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-reservation',
    templateUrl: './reservation.component.html',
    providers: [HttpService]
})
export class ReservationComponent implements OnInit {
    rooms: RoomType[]=[];
    error: any

    ngOnInit(): void {
        this.httpService.getRoom().subscribe((data: RoomType[]) => this.rooms=data);
    }

    constructor(private http: HttpClient, private httpService: HttpService, private formBuilder: FormBuilder) {}

    dataForm = this.formBuilder.group({
        roomTypeId: [0, Validators.required],
        countOfGuests: [1, Validators.required],
        startDate: ['', Validators.required],
        endDate: ['', Validators.required],
        withAnimal: [{value: false, disabled: false}],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        patronymicName: '',
        birthday: ''
    })

    dataFormReceived: roomDataForm =
            {
            roomTypeId: 0,
            countOfGuests: 0,
            startDate: '',
            endDate: '',
            withAnimal: false,
            user: {
                firstName: '',
                lastName: '',
                patronymicName: '',
                birthday: ''
            }
        }

    public getDataForm(data: FormGroup) {
        if (data.valid) {
            this.dataFormReceived = {
                roomTypeId: Number(data.controls.roomTypeId.value),
                countOfGuests: Number(data.controls.countOfGuests.value),
                startDate: data.controls.startDate.value,
                endDate: data.controls.endDate.value,
                withAnimal: data.controls.withAnimal.value,
                user: {
                    firstName: data.controls.firstName.value,
                    lastName: data.controls.lastName.value,
                    patronymicName: data.controls.patronymicName.value,
                    birthday: data.controls.birthday.value
                }
            }
        }
    }

    guestSelected() {
        let optionGuest = document.querySelectorAll<HTMLElement>('.reservation__guest-item')
        const roomTypeId = this.dataForm.controls.roomTypeId.value;
        const guest = this.dataForm.controls.countOfGuests;

        switch (roomTypeId) {
            case '0':
                guest.setValue(roomTypeId)
                optionGuest.forEach(element => (<HTMLInputElement>element).value != roomTypeId ? element.setAttribute('disabled', '') : element.removeAttribute('disabled'))
                break
            case '1':
                optionGuest.forEach(element => (<HTMLInputElement>element).value > roomTypeId ? element.setAttribute('disabled', '') : element.removeAttribute('disabled'))
                guest.value > roomTypeId ? guest.setValue(roomTypeId) : guest.value
                break
            case '2':
                optionGuest.forEach(element => (<HTMLInputElement>element).value > '3' ? element.setAttribute('disabled', '') : element.removeAttribute('disabled'))
                guest.value > '3' ? guest.setValue(3) : guest.value
                break
            case '3':
                optionGuest.forEach(element => (<HTMLInputElement>element).value > '5' ? element.setAttribute('disabled', '') : element.removeAttribute('disabled'))
                guest.value > '5' ? guest.setValue(5) : guest.value
                break
            case '4':
                optionGuest.forEach(element => (<HTMLInputElement>element).value > '1' ? element.setAttribute('disabled', '') : element.removeAttribute('disabled'))
                guest.value > '1' ? guest.setValue(1) : guest.value
                break
        }
    }

    formValidate(): void {
        const forms = document.querySelectorAll('.needs-validation')
        const validateGroup = document.getElementsByClassName('validate-me');

        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event): void {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }
                    for (let i = 0; i < validateGroup.length; i++) {
                        validateGroup[i].classList.add('was-validated');
                    }
                }, false)
            })
    }

    textInput(element: Element) {
        element.addEventListener('keydown', keyPattern)
        function keyPattern(event) {if (+event.key || event.key === '0') event.preventDefault()}
    }
}
