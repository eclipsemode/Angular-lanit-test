import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {roomDataForm} from "../../models/Intarface.model";
import {HttpService} from "../../services/http.service";
import {RoomTypeModel} from "../../models/RoomType.model";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-reservation',
    templateUrl: './reservation.component.html',
    providers: [HttpService]
})
export class ReservationComponent implements OnInit {
    rooms: RoomTypeModel[]=[];
    error: any

    ngOnInit(): void {
        this.httpService.getRoom().subscribe((data: RoomTypeModel[]) => this.rooms=data);
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

    public getDataForm(data: FormGroup) {
        if (data.valid) {
            const dataForm: roomDataForm = {
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
            this.httpService.getDataForm(dataForm).subscribe(() => console.log(dataForm))
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

    textInput(event: any) {
        const inp = String.fromCharCode(event.keyCode);

        if (/[^a-zа-яё\s]/gi.test(inp)) event.preventDefault()
        else return true
    }

}
