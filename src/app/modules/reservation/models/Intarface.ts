export interface roomDataForm {
    roomTypeId: number,
    countOfGuests: number,
    startDate: string,
    endDate: string,
    withAnimal: boolean,
    user: {
        firstName: string,
        lastName: string,
        patronymicName: string,
        birthday: string
    }
}


