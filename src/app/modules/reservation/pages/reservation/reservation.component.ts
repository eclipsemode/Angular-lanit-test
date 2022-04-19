import {AfterContentInit, Component, OnInit} from '@angular/core';


@Component({
    selector: 'app-reservation',
    templateUrl: './reservation.component.html'
})
export class ReservationComponent implements OnInit, AfterContentInit {
    ngOnInit(): void {
    }

    formValidate(): void {
        const forms = document.querySelectorAll('.needs-validation')
        const validateGroup = document.getElementsByClassName('validate-me');

        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
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

    textInput(element: Element): void {
        element.addEventListener('keydown', keyPattern)

        function keyPattern(event) {
            if (parseInt(event.key) || event.key === '0') {
                event.preventDefault();
                return false;
            }
        }
    }

    ngAfterContentInit() {
    document.querySelectorAll('.pattern').forEach(element => {
        this.textInput(element)
    })
    // this.textInput(document.querySelectorAll('.pattern').forEach(element => {
    //     return element
    // }))
    }


    // blocks: BlockLinkModel[];
    //
    // constructor(private homeService: HomeService) {}
    //
    // ngOnInit(): void {
    //     this.homeService.loadInfo().pipe(
    //         map(data => {
    //             this.blocks = data;
    //         }),
    //         catchError(error => {
    //             console.error(error);
    //             return [];
    //         })
    //     ).subscribe();
    // }
}
