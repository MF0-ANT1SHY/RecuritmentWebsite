import Mock from 'mockjs'

const Requirement = {
    'WorkingYears': ['1', '2', '3', '4', '5'],
    'Welfares': ['五险一金', '专业培训', '免费班车', '年假'],
    'PayMonths': ['12', '13', '14', '15'],
    'PayFilter': ['under 3k', '3-5k', '5-10k', '10-15k'],
}

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

Mock.mock('/mock/Requirement', 'get', { data: Requirement })