export interface jobsTypeInt {
    jobName: string,
    payMin: string,
    payMax: string,
    payMonth: string,
    welfare: string[],
    education: string,
    workingYears: string,
    ciryId: string,
    areaId: string,
    companyId: number,
    id: number,
    publishTime: number,
    workPosition: string,
    companyName: string,
}

export interface selectInt {
    workingYears: string[],
    Welfares: string[],
    PayMonths: string[],
    PayFilter: string[],
}

export interface selectKeyOptionInt {
    key: string,
    name: string,
    inp: string
}

interface optionTypeInt {
    jobName: string,
    payArea: string,
    cityId: number,
    education: string,
}

export class Initdata {
    jobs: Array<jobsTypeInt> = [];
    option: optionTypeInt = {
        jobName: '',
        payArea: '',
        cityId: 0,
        education: '',
    }
}