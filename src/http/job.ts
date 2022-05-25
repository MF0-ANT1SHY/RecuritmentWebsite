import $http from './index'

export function getJob(data: any): any {
    return $http({
        url: '/Job',
        method: 'get',
        params: data
    })
}

export function postJob(): any {
    return $http({
        url: '/Job',
        method: 'post',
    })
}
export function putJob(): any {
    return $http({
        url: '/Job',
        method: 'put',
    })
}
export function getRequirement(): any {
    return $http({
        url: '/Requirement',
        method: 'get',
    })
}
