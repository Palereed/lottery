var lottery_initial_datas = [
    {
        "id": "avatar1",
        "avatar": "./img/avatar/avatar1.jpg",
        "name": "蒋勇",
        "wish": "新年快乐，们委的交型关确音几心她民知历解。"
    },
    {
        "id": "avatar2",
        "avatar": "./img/avatar/avatar2.jpg",
        "name": "于桂英",
        "wish": "新年快乐，龙公平儿叫许车际展去状第论。"
    },
    {
        "id": "avatar3",
        "avatar": "./img/avatar/avatar3.jpg",
        "name": "徐超",
        "wish": "新年快乐，十小叫社法革领事因水务住酸事义小。"
    },
    {
        "id": "avatar4",
        "avatar": "./img/avatar/avatar4.jpg",
        "name": "孙秀兰",
        "wish": "新年快乐，得表新传目物九切设清志在油几口名调一再。"
    },
    {
        "id": "avatar5",
        "avatar": "./img/avatar/avatar5.jpg",
        "name": "张娟",
        "wish": "新年快乐，片土列们准军看上调划准常员原进。"
    },
    {
        "id": "avatar6",
        "avatar": "./img/avatar/avatar6.jpg",
        "name": "潘秀兰",
        "wish": "新年快乐，九论期要着音区内公观积。"
    },
    {
        "id": "avatar7",
        "avatar": "./img/avatar/avatar7.jpg",
        "name": "任伟",
        "wish": "新年快乐，了教公没基改特低体细角好无二联片里都系。"
    },
    {
        "id": "avatar8",
        "avatar": "./img/avatar/avatar8.jpg",
        "name": "何刚",
        "wish": "新年快乐，理由正用点美最属持象低集性期部条。"
    },
    {
        "id": "avatar9",
        "avatar": "./img/avatar/avatar9.jpg",
        "name": "万艳",
        "wish": "新年快乐，几法完般石度成资位今派至林转面则改。"
    },
    {
        "id": "avatar10",
        "avatar": "./img/avatar/avatar10.jpg",
        "name": "田秀英",
        "wish": "新年快乐，西使命带值直分把史达信且表计管海。"
    },
    {
        "id": "avatar11",
        "avatar": "./img/avatar/avatar11.jpg",
        "name": "崔伟",
        "wish": "新年快乐，两从元处经争复当场导规起规织之组。"
    },
    {
        "id": "avatar12",
        "avatar": "./img/avatar/avatar12.jpg",
        "name": "朱秀兰",
        "wish": "新年快乐，况机比来十回是算军传方照先想。"
    },
    {
        "id": "avatar13",
        "avatar": "./img/avatar/avatar13.jpg",
        "name": "金静",
        "wish": "新年快乐，土及例育此求运大立价标点。"
    },
    {
        "id": "avatar14",
        "avatar": "./img/avatar/avatar14.jpg",
        "name": "韩伟",
        "wish": "新年快乐，外青号由参她于空习天品建平运同就。"
    },
    {
        "id": "avatar15",
        "avatar": "./img/avatar/avatar15.jpg",
        "name": "邹勇",
        "wish": "新年快乐，划完面克用规五看八下地什群金下许公条话。"
    },
    {
        "id": "avatar16",
        "avatar": "./img/avatar/avatar16.jpg",
        "name": "许强",
        "wish": "新年快乐，前走式调细确林资易山把。"
    },
    {
        "id": "avatar17",
        "avatar": "./img/avatar/avatar17.jpg",
        "name": "赵杰",
        "wish": "新年快乐，线很持装布二教想新马九土际料眼分第精。"
    },
    {
        "id": "avatar18",
        "avatar": "./img/avatar/avatar18.jpg",
        "name": "孟明",
        "wish": "新年快乐，本件什有量今据收导我那无文。"
    },
    {
        "id": "avatar19",
        "avatar": "./img/avatar/avatar19.jpg",
        "name": "杨平",
        "wish": "新年快乐，收般得可史常办现他把业千严么史广当说用。"
    },
    {
        "id": "avatar20",
        "avatar": "./img/avatar/avatar20.jpg",
        "name": "史敏",
        "wish": "新年快乐，步根长无定体色厂集内白阶阶并以节口每养。"
    }
];

var award_config = {
    "award01": {
        label: '一等奖',
        char: '一',
        image: './img/award_1.png',
        count: 3,
        items: [
            { label: '多喝热水', image: './img/gift/beizi.jpg' }
        ]
    },
    "award02": {
        label: '二等奖',
        char: '二',
        image: './img/award_2.png',
        count: 6,
        items: [
            { label: '多喝热水', image: './img/gift/beizi.jpg' }
        ]
    },
    "award03": {
        label: '三等奖',
        char: '三',
        image: './img/award_3.png',
        count: 9,
        items: [
            { label: '多喝热水', image: './img/gift/beizi.jpg' }
        ]
    },
    "award04": {
        label: '纪念奖',
        char: '纪',
        image: './img/award_4.png',
        count: 20,
        items: [
            { label: '多喝热水', image: './img/gift/beizi.jpg' }
        ]
    }
};

// 初始化数据
(function() {
    // 计算初始化数据
    var str_lottery = JSON.stringify(lottery_initial_datas);
    var award_data = {};
    for (k in award_config) {
        award_data[k] = Object.assign({
            winners: [],
        }, award_config[k]);
    }
    var str_award = JSON.stringify(award_data);
    // 配置数据有变化直接清空
    if (localStorage.getItem('lottery_initial') !== str_lottery || localStorage.getItem('award_initial') !== str_award) {
        window.localStorage.clear()
    }
    localStorage.setItem('lottery_initial', str_lottery);
    localStorage.setItem('award_initial', str_award);
})();
