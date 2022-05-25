import axios from 'axios'

enum MSGS {
    "操作成功" = 200,
    "密码错误" = 201,
    "帐号错误" = 202,
    "账号异常" = 999
}

const $http = axios.create({
    timeout: 5000,
    headers: {
        "Content-Type": "application/json;charset=utf-8"
    }
})

$http.interceptors.request.use(config => {
    config.headers = config.headers || {}
    // config.headers.token = komeijicenrili
    return config
})

$http.interceptors.response.use(res => {
    const code: number = res.data?.code;
    // if(code!=200){
    //     alert(MSGS[code]);
    //     return Promise.reject(res.data)
    // }else{
    return res.data
    // }
}, err => {
    console.log(err);
})


export default $http