import Mock from 'mockjs'

Mock.mock('/mock/Job', 'get', {
    'data|5': [{
        "jobName": "C# engineer",
        "payMin": "10",
        "payMax": "15",
        "payMonth": "15month",
        "welfare": "五险一金，旅游，奖金，年假",
        "education": "本科",
        "workingYears": "5",
        "publishTime": "20220525",
        "worPosition": "Shanghai",
        "companyName": "campus",
        "id": 115514
    }]
})