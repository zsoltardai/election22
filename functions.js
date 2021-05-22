const fideszColor = 'rgb(255, 106, 0)'
const dkColor = 'rgb(0,103,170)'
const mszpColor = 'rgb(204,0,0)'
const jobbikColor = 'rgb(0,131,113)'
const lmpColor = 'rgb(160,207,103)'
const pmColor = 'rgb(60,179,77)'
const momentumColor = 'rgb(142,111,206)'
const egyuttColor = 'rgb(254,213,0)'
const independentColor ='rgb(128,128,128)'
var btnCampaignContainer = document.getElementById('btnCampaignContainer');

const party = JSON.parse(localStorage.party);
const date = document.getElementById('date');
const moneyDisplay = document.getElementById('money');
var actualDate = new Date('2021-08-01T00:00:00');
var dateEnd = new Date('2022-05-05T00:00:00');
var gameSpeed = 1;
date.innerText = actualDate.toISOString().replace(/T/, ' ').replace(/\..+/, '');
// party data
const numSeats = document.getElementById('numSeats');
const membershipFee = document.getElementById('membershipFee');
const members = document.getElementById('numMembers');
const partyName = document.getElementById('partyName');
const partyLeader = document.getElementById('partyLeader');

var audio = new Audio('music/music.mp3');
audio.loop = 'true';
audio.play();


partyName.innerText += ' ' + party.title;
partyLeader.innerText = party.leader;

function refreshData() {
    members.innerText = party.members;
    membershipFee.innerText = party.membershipFee;
};

refreshData();


function showdata(region) {

    document.getElementById('region_name').innerText = region.getTitle()

    var leftover = 1-(region.fidesz_kdnp + region.mszp + region.jobbik + region.pm + region.egyutt + region.independent + region.momentum + region.lmp + region.dk)


    if (region.fidesz_kdnp > 0) {
        document.getElementById('popularity_fidesz').style.height = ((region.fidesz_kdnp*100)+"px")
    }
    else
    {
        document.getElementById('popularity_fidesz').style.height = "1px"
    }
    document.getElementById('popularity_fidesz').style.fill = fideszColor
    document.getElementById('percent_fidesz').textContent = ((region.fidesz_kdnp*100).toFixed(1) + "%")

    if (region.dk > 0) {
        document.getElementById('popularity_dk').style.height = ((region.dk*100)+"px")
    }
    else
    {
        document.getElementById('popularity_dk').style.height = "1px"
    }
    document.getElementById('popularity_dk').style.fill = dkColor
    document.getElementById('percent_dk').textContent = ((region.dk*100).toFixed(1) + "%")

    if (region.mszp > 0) {
        document.getElementById('popularity_mszp').style.height = ((region.mszp*100)+"px")
    }
    else
    {
        document.getElementById('popularity_mszp').style.height = "1px"
    }
    document.getElementById('popularity_mszp').style.fill = mszpColor
    document.getElementById('percent_mszp').textContent = ((region.mszp*100).toFixed(1) + "%")

    if (region.jobbik > 0) {
        document.getElementById('popularity_jobbik').style.height = ((region.jobbik*100)+"px")
    }
    else
    {
        document.getElementById('popularity_jobbik').style.height = "1px"
    }
    document.getElementById('popularity_jobbik').style.fill = jobbikColor
    document.getElementById('percent_jobbik').textContent = ((region.jobbik*100).toFixed(1) + "%")

    if (region.lmp > 0) {
        document.getElementById('popularity_lmp').style.height = ((region.lmp*100)+"px")
    }
    else
    {
        document.getElementById('popularity_lmp').style.height = "1px"
    }
    document.getElementById('popularity_lmp').style.fill = lmpColor
    document.getElementById('percent_lmp').textContent = ((region.lmp*100).toFixed(1) + "%")

    if (region.pm > 0) {
        document.getElementById('popularity_pm').style.height = ((region.pm*100)+"px")
    }
    else
    {
        document.getElementById('popularity_pm').style.height = "1px"
    }
    document.getElementById('popularity_pm').style.fill = pmColor
    document.getElementById('percent_pm').textContent = ((region.pm*100).toFixed(1) + "%")

    if (region.momentum > 0) {
        document.getElementById('popularity_momentum').style.height = ((region.momentum*100)+"px")
    }
    else
    {
        document.getElementById('popularity_momentum').style.height = "1px"
    }
    document.getElementById('popularity_momentum').style.fill = momentumColor
    document.getElementById('percent_momentum').textContent = ((region.momentum*100).toFixed(1) + "%")

    if (region.egyutt > 0) {
        document.getElementById('popularity_egyutt').style.height = ((region.egyutt*100)+"px")
    }
    else
    {
        document.getElementById('popularity_egyutt').style.height = "1px"
    }
    document.getElementById('popularity_egyutt').style.fill = egyuttColor
    document.getElementById('percent_egyutt').textContent = ((region.egyutt*100).toFixed(1) + "%")

    if (region.independent > 0) {
        document.getElementById('popularity_independent').style.height = ((region.independent*100)+"px")
    }
    else
    {
        document.getElementById('popularity_independent').style.height = "1px"
        
    }
    document.getElementById('popularity_independent').style.fill = independentColor
    if ((region.independent+leftover) > 0)
    {   
        document.getElementById('percent_independent').textContent = (((region.independent+leftover)*100).toFixed(1) + "%")
    }
    else
    {
        document.getElementById('percent_independent').textContent = ("0.0%")
    }


    btnCampaignContainer.innerHTML = `<button style="font-weight: 800; height: auto; width: 80%;" class="btn btn-primary" id='btnCampaign' onclick='campaignEvent(${region.getName()})' class="btnCampaign">Campaign</button>`;
}

setInterval(function (){
    if (party.money < 50)
    {
        document.getElementById('btnCampaign').disabled = true;
    }
    else 
    {
        document.getElementById('btnCampaign').disabled = false;
    };

    if (party.money < 25)
    {
        document.getElementById('btnRecruit').disabled = true;
    }
    else
    {
        document.getElementById('btnRecruit').disabled = false;
    };

    if (party.money < 10)
    {
        document.getElementById('btnRaiseMembershipFee').disabled = true;
    }
    else
    {
        document.getElementById('btnRaiseMembershipFee').disabled = false;
    };
}, 500);

var budapest1 = {
    fidesz_kdnp: 0.4181,
    jobbik: 0.0639,
    mszp: 0.0,
    dk: 0.0,
    lmp: 0.4873,
    pm: 0.0,
    momentum: 0.0,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 69890,
    turnout: 52325,
    getName: function() {return 'budapest1'},
    getTitle: function() {return 'Budapesti 1. sz. országgyűlési egyéni választókerület'}
}
var budapest2 = {
    fidesz_kdnp: 0.4216,
    jobbik: 0.0586,
    mszp: 0.0,
    dk: 0.4053,
    lmp: 0.061,
    pm: 0.0,
    momentum: 0.0277,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 76937,
    turnout: 56900,
    getName: function() {return 'budapest2'},
    getTitle: function() {return 'Budapesti 2. sz. országgyűlési egyéni választókerület'}
}
var budapest3 = {
    fidesz_kdnp: 0.4271,
    jobbik: 0.0579,
    mszp: 0.0,
    dk: 0.3903,
    lmp: 0.0698,
    pm: 0.0,
    momentum: 0.0,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 66874,
    turnout: 51417,
    getName: function() {return 'budapest3'},
    getTitle: function() {return 'Budapesti 3. sz. országgyűlési egyéni választókerület'}
}
var budapest4 = {
    fidesz_kdnp: 0.4182,
    jobbik: 0.0619,
    mszp: 0.0,
    dk: 0.3714,
    lmp: 0.101,
    pm: 0.0,
    momentum: 0.0266,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 72064,
    turnout: 56132,
    getName: function() {return 'budapest4'},
    getTitle: function() {return 'Budapesti 4. sz. országgyűlési egyéni választókerület'}
}
var budapest5 = {
    fidesz_kdnp: 0.3714,
    jobbik: 0.0706,
    mszp: 0.0,
    dk: 0.4585,
    lmp: 0.068,
    pm: 0.0,
    momentum: 0.0,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 69196,
    turnout: 45533,
    getName: function() {return 'budapest5'},
    getTitle: function() {return 'Budapesti 5. sz. országgyűlési egyéni választókerület'}
}
var budapest6 = {
    fidesz_kdnp: 0.4051,
    jobbik: 0.1292,
    mszp: 0.0,
    dk: 0.3217,
    lmp: 0.0556,
    pm: 0.0,
    momentum: 0.0229,
    egyutt: 0.0313,
    independent: 0.0,
    eligible_voters: 74376,
    turnout: 46313,
    getName: function() {return 'budapest6'},
    getTitle: function() {return 'Budapesti 6. sz. országgyűlési egyéni választókerület'}
}
var budapest7 = {
    fidesz_kdnp: 0.2849,
    jobbik: 0.0607,
    mszp: 0.5648,
    dk: 0.0,
    lmp: 0.0414,
    pm: 0.0,
    momentum: 0.0257,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 84871,
    turnout: 61193,
    getName: function() {return 'budapest7'},
    getTitle: function() {return 'Budapesti 7. sz. országgyűlési egyéni választókerület'}
}
var budapest8 = {
    fidesz_kdnp: 0.3506,
    jobbik: 0.0765,
    mszp: 0.0,
    dk: 0.4723,
    lmp: 0.041,
    pm: 0.0,
    momentum: 0.0302,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 82667,
    turnout: 60519,
    getName: function() {return 'budapest8'},
    getTitle: function() {return 'Budapesti 8. sz. országgyűlési egyéni választókerület'}
}
var budapest9 = {
    fidesz_kdnp: 0.3932,
    jobbik: 0.107,
    mszp: 0.4078,
    dk: 0.0,
    lmp: 0.0653,
    pm: 0.0,
    momentum: 0.0211,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 80171,
    turnout: 55675,
    getName: function() {return 'budapest9'},
    getTitle: function() {return 'Budapesti 9. sz. országgyűlési egyéni választókerület'}
}
var budapest10 = {
    fidesz_kdnp: 0.3636,
    jobbik: 0.1082,
    mszp: 0.4815,
    dk: 0.0,
    lmp: 0.0,
    pm: 0.0,
    momentum: 0.0394,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 75863,
    turnout: 57487,
    getName: function() {return 'budapest10'},
    getTitle: function() {return 'Budapesti 10. sz. országgyűlési egyéni választókerület'}
}
var budapest11 = {
    fidesz_kdnp: 0.3526,
    jobbik: 0.1023,
    mszp: 0.0,
    dk: 0.408,
    lmp: 0.0607,
    pm: 0.0,
    momentum: 0.0224,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 78188,
    turnout: 56862,
    getName: function() {return 'budapest11'},
    getTitle: function() {return 'Budapesti 11. sz. országgyűlési egyéni választókerület'}
}
var budapest12 = {
    fidesz_kdnp: 0.3754,
    jobbik: 0.1027,
    mszp: 0.0,
    dk: 0.4225,
    lmp: 0.0462,
    pm: 0.0,
    momentum: 0.0197,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 76159,
    turnout: 54753,
    getName: function() {return 'budapest12'},
    getTitle: function() {return 'Budapesti 12. sz. országgyűlési egyéni választókerület'}
}
var budapest13 = {
    fidesz_kdnp: 0.4191,
    jobbik: 0.0914,
    mszp: 0.0,
    dk: 0.0,
    lmp: 0.0727,
    pm: 0.0,
    momentum: 0.0,
    egyutt: 0.0,
    independent: 0.0,
    egyutt: 0.3996,
    eligible_voters: 69902,
    turnout: 54056,
    getName: function() {return 'budapest13'},
    getTitle: function() {return 'Budapesti 13. sz. országgyűlési egyéni választókerület'}
}
var budapest14 = {
    fidesz_kdnp: 0.4117,
    jobbik: 0.1304,
    mszp: 0.3723,
    dk: 0.0,
    lmp: 0.0489,
    pm: 0.0,
    momentum: 0.0278,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 75823,
    turnout: 56523,
    getName: function() {return 'budapest14'},
    getTitle: function() {return 'Budapesti 14. sz. országgyűlési egyéni választókerület'}
}
var budapest15 = {
    fidesz_kdnp: 0.397,
    jobbik: 0.1161,
    mszp: 0.4603,
    dk: 0.01,
    lmp: 0.01,
    pm: 0.0,
    momentum: 0.0,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 80347,
    turnout: 59537,
    getName: function() {return 'budapest15'},
    getTitle: function() {return 'Budapesti 15. sz. országgyűlési egyéni választókerület'}
}
var budapest16 = {
    fidesz_kdnp: 0.3728,
    jobbik: 0.1221,
    mszp: 0.4323,
    dk: 0.0,
    lmp: 0.0438,
    pm: 0.0,
    momentum: 0.0203,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 72846,
    turnout: 51395,
    getName: function() {return 'budapest16'},
    getTitle: function() {return 'Budapesti 16. sz. országgyűlési egyéni választókerület'}
}
var budapest17 = {
    fidesz_kdnp: 0.3709,
    jobbik: 0.1558,
    mszp: 0.0,
    dk: 0.0,
    lmp: 0.0,
    pm: 0.0,
    momentum: 0.0,
    egyutt: 0.4245,
    independent: 0.0,
    eligible_voters: 78805,
    turnout: 55769,
    getName: function() {return 'budapest17'},
    getTitle: function() {return 'Budapesti 17. sz. országgyűlési egyéni választókerület'}
}
var budapest18 = {
    fidesz_kdnp: 0.4006,
    jobbik: 0.0917,
    mszp: 0.4145,
    dk: 0.05,
    lmp: 0.0424,
    pm: 0.0,
    momentum: 0.0,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 76665,
    turnout: 58198,
    getName: function() {return 'budapest18'},
    getTitle: function() {return 'Budapesti 18. sz. országgyűlési egyéni választókerület'}
}
var bacs_kiskun_megye1 = {
    fidesz_kdnp: 0.5453,
    jobbik: 0.24,
    mszp: 0.0,
    dk: 0.0768,
    lmp: 0.0992,
    pm: 0.0,
    momentum: 0.0236,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 68999,
    turnout: 45011,
    getName: function() {return 'bacs_kiskun_megye1'},
    getTitle: function() {return 'Bács-Kiskun megyei 1. sz. országgyűlési egyéni választókerület'}
}
var bacs_kiskun_megye2 = {
    fidesz_kdnp: 0.5274,
    jobbik: 0.1976,
    mszp: 0.1664,
    dk: 0.0,
    lmp: 0.0677,
    pm: 0.0,
    momentum: 0.0303,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 72826,
    turnout: 50136,
    getName: function() {return 'bacs_kiskun_megye2'},
    getTitle: function() {return 'Bács-Kiskun megyei 2. sz. országgyűlési egyéni választókerület'}
}
var bacs_kiskun_megye3 = {
    fidesz_kdnp: 0.5322,
    jobbik: 0.302,
    mszp: 0.1113,
    dk: 0.0,
    lmp: 0.0274,
    pm: 0.0,
    momentum: 0.0126,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 66063,
    turnout: 441151,
    getName: function() {return 'bacs_kiskun_megye3'},
    getTitle: function() {return 'Bács-Kiskun megyei 3. sz. országgyűlési egyéni választókerület'}
}
var bacs_kiskun_megye4 = {
    fidesz_kdnp: 0.6021,
    jobbik: 0.2109,
    mszp: 0.1215,
    dk: 0.0,
    lmp: 0.0292,
    pm: 0.0,
    momentum: 0.0113,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 72017,
    turnout: 46760,
    getName: function() {return 'bacs_kiskun_megye4'},
    getTitle: function() {return 'Bács-Kiskun megyei 4. sz. országgyűlési egyéni választókerület'}
}
var bacs_kiskun_megye5 = {
    fidesz_kdnp: 0.5585,
    jobbik: 0.3328,
    mszp: 0.0,
    dk: 0.0587,
    lmp: 0.0232,
    pm: 0.0,
    momentum: 0.0102,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 69799,
    turnout: 44369,
    getName: function() {return 'bacs_kiskun_megye5'},
    getTitle: function() {return 'Bács-Kiskun megyei 5. sz. országgyűlési egyéni választókerület'}
}
var bacs_kiskun_megye6 = {
    fidesz_kdnp: 0.5445,
    jobbik: 0.1874,
    mszp: 0.18,
    dk: 0.0,
    lmp: 0.0584,
    pm: 0.0,
    momentum: 0.0166,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 66012,
    turnout: 42051,
    getName: function() {return 'bacs_kiskun_megye6'},
    getTitle: function() {return 'Bács-Kiskun megyei 6. sz. országgyűlési egyéni választókerület'}
}
var baranya_megye1 = {
    fidesz_kdnp: 0.3697,
    jobbik: 0.1408,
    mszp: 0.0,
    dk: 0.0,
    lmp: 0.0546,
    pm: 0.0,
    momentum: 0.0181,
    independent: 0.3926,
    egyutt: 0.0,
    eligible_voters: 78544,
    turnout: 54430,
    getName: function() {return 'baranya_megye1'},
    getTitle: function() {return 'Baranya megyei 1. sz. országgyűlési egyéni választókerület'}
}
var baranya_megye2 = {
    fidesz_kdnp: 0.4011,
    jobbik: 0.2215,
    mszp: 0.0,
    dk: 0.2085,
    lmp: 0.0915,
    pm: 0.0,
    momentum: 0.0194,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 75762,
    turnout: 50279,
    getName: function() {return 'baranya_megye2'},
    getTitle: function() {return 'Baranya megyei 2. sz. országgyűlési egyéni választókerület'}
}
var baranya_megye3 = {
    fidesz_kdnp: 0.5762,
    jobbik: 0.2371,
    mszp: 0.0,
    dk: 0.089,
    lmp: 0.0698,
    pm: 0.0,
    momentum: 0.0,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 71985,
    turnout: 46279,
    getName: function() {return 'baranya_megye3'},
    getTitle: function() {return 'Baranya megyei 3. sz. országgyűlési egyéni választókerület'}
}
var baranya_megye4 = {
    fidesz_kdnp: 0.4893,
    jobbik: 0.1582,
    mszp: 0.2719,
    dk: 0.0,
    lmp: 0.0333,
    pm: 0.0,
    momentum: 0.0077,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 77081,
    turnout: 48830,
    getName: function() {return 'baranya_megye4'},
    getTitle: function() {return 'Baranya megyei 4. sz. országgyűlési egyéni választókerület'}
}
var bekes_megye1 = {
    fidesz_kdnp: 0.447,
    jobbik: 0.3306,
    mszp: 0.0,
    dk: 0.1103,
    lmp: 0.0527,
    pm: 0.0,
    momentum: 0.018,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 69326,
    turnout: 47505,
    getName: function() {return 'bekes_megye1'},
    getTitle: function() {return 'Békés megyei 1. sz. országgyűlési egyéni választókerület'}
}
var bekes_megye2 = {
    fidesz_kdnp: 0.52,
    jobbik: 0.2939,
    mszp: 0.0,
    dk: 0.0866,
    lmp: 0.0547,
    pm: 0.0,
    momentum: 0.0145,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 70170,
    turnout: 44676,
    getName: function() {return 'bekes_megye2'},
    getTitle: function() {return 'Békés megyei 2. sz. országgyűlési egyéni választókerület'}
}
var bekes_megye3 = {
    fidesz_kdnp: 0.5043,
    jobbik: 0.2313,
    mszp: 0.1855,
    dk: 0.0,
    lmp: 0.0379,
    pm: 0.0,
    momentum: 0.0158,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 69062,
    turnout: 43799,
    getName: function() {return 'bekes_megye3'},
    getTitle: function() {return 'Békés megyei 3. sz. országgyűlési egyéni választókerület'}
}
var bekes_megye4 = {
    fidesz_kdnp: 0.4315,
    jobbik: 0.395,
    mszp: 0.1034,
    dk: 0.0,
    lmp: 0.0219,
    pm: 0.0,
    momentum: 0.0106,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 73242,
    turnout: 47244,
    getName: function() {return 'bekes_megye4'},
    getTitle: function() {return 'Békés megyei 4. sz. országgyűlési egyéni választókerület'}
}
var borsod_abauj_zemplen_megye1 = {
    fidesz_kdnp: 0.3896,
    jobbik: 0.3872,
    mszp: 0.0,
    dk: 0.1158,
    lmp: 0.0314,
    pm: 0.0,
    momentum: 0.0108,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 73492,
    turnout: 49777,
    getName: function() {return 'borsod_abauj_zemplen_megye1'},
    getTitle: function() {return 'Borsod-Abaúj-Zemplén megyei 1. sz. országgyűlési egyéni választókerület'}
}
var borsod_abauj_zemplen_megye2 = {
    fidesz_kdnp: 0.3806,
    jobbik: 0.2825,
    mszp: 0.2991,
    dk: 0.0,
    lmp: 0.0,
    pm: 0.0,
    momentum: 0.0131,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 73995,
    turnout: 48264,
    getName: function() {return 'borsod_abauj_zemplen_megye2'},
    getTitle: function() {return 'Borsod-Abaúj-Zemplén megyei 2. sz. országgyűlési egyéni választókerület'}
}
var borsod_abauj_zemplen_megye3 = {
    fidesz_kdnp: 0.481,
    jobbik: 0.3672,
    mszp: 0.0,
    dk: 0.0803,
    lmp: 0.0273,
    pm: 0.0,
    momentum: 0.0105,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 72530,
    turnout: 41062,
    getName: function() {return 'borsod_abauj_zemplen_megye3'},
    getTitle: function() {return 'Borsod-Abaúj-Zemplén megyei 3. sz. országgyűlési egyéni választókerület'}
}
var borsod_abauj_zemplen_megye4 = {
    fidesz_kdnp: 0.4472,
    jobbik: 0.3017,
    mszp: 0.1727,
    dk: 0.0,
    lmp: 0.0337,
    pm: 0.0,
    momentum: 0.0073,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 75875,
    turnout: 47049,
    getName: function() {return 'borsod_abauj_zemplen_megye4'},
    getTitle: function() {return 'Borsod-Abaúj-Zemplén megyei 4. sz. országgyűlési egyéni választókerület'}
}
var borsod_abauj_zemplen_megye5 = {
    fidesz_kdnp: 0.4903,
    jobbik: 0.2929,
    mszp: 0.0,
    dk: 0.048,
    lmp: 0.1295,
    pm: 0.0,
    momentum: 0.0048,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 74952,
    turnout: 45828,
    getName: function() {return 'borsod_abauj_zemplen_megye5'},
    getTitle: function() {return 'Borsod-Abaúj-Zemplén megyei 5. sz. országgyűlési egyéni választókerület'}
}
var borsod_abauj_zemplen_megye6 = {
    fidesz_kdnp: 0.493,
    jobbik: 0.3164,
    mszp: 0.149,
    dk: 0.0,
    lmp: 0.0227,
    pm: 0.0,
    momentum: 0.0,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 77166,
    turnout: 50118,
    getName: function() {return 'borsod_abauj_zemplen_megye6'},
    getTitle: function() {return 'Borsod-Abaúj-Zemplén megyei 6. sz. országgyűlési egyéni választókerület'}
}
var borsod_abauj_zemplen_megye7 = {
    fidesz_kdnp: 0.5479,
    jobbik: 0.3127,
    mszp: 0.0838,
    dk: 0.0,
    lmp: 0.0338,
    pm: 0.0,
    egyutt: 0.0,
    independent: 0.0,
    momentum: 0.0,
    eligible_voters: 75552,
    turnout: 50645,
    getName: function() {return 'borsod_abauj_zemplen_megye7'},
    getTitle: function() {return 'Borsod-Abaúj-Zemplén megyei 7. sz. országgyűlési egyéni választókerület'}
}
var csongrad_csanad_megye1 = {
    fidesz_kdnp: 0.3565,
    jobbik: 0.1103,
    mszp: 0.4367,
    dk: 0.0,
    lmp: 0.0434,
    pm: 0.0,
    momentum: 0.0172,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 81156,
    turnout: 55056,
    getName: function() {return 'csongrad_csanad_megye1'},
    getTitle: function() {return 'Csongrád-Csanád megyei 1. sz. országgyűlési egyéni választókerület'}
}
var csongrad_csanad_megye2 = {
    fidesz_kdnp: 0.4462,
    jobbik: 0.1137,
    mszp: 0.3543,
    dk: 0.0,
    lmp: 0.041,
    pm: 0.0,
    momentum: 0.0179,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 89768,
    turnout: 61748,
    getName: function() {return 'csongrad_csanad_megye2'},
    getTitle: function() {return 'Csongrád-Csanád megyei 2. sz. országgyűlési egyéni választókerület'}
}
var csongrad_csanad_megye3 = {
    fidesz_kdnp: 0.4962,
    jobbik: 0.3779,
    mszp: 0.0,
    dk: 0.0485,
    lmp: 0.0281,
    pm: 0.0,
    momentum: 0.0157,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 81038,
    turnout: 53428,
    getName: function() {return 'csongrad_csanad_megye3'},
    getTitle: function() {return 'Csongrád-Csanád megyei 3. sz. országgyűlési egyéni választókerület'}
}
var csongrad_csanad_megye4 = {
    fidesz_kdnp: 0.5178,
    jobbik: 0.3671,
    mszp: 0.0742,
    dk: 0.0,
    lmp: 0.0176,
    pm: 0.0,
    momentum: 0.0,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 78892,
    turnout: 55038,
    getName: function() {return 'csongrad_csanad_megye4'},
    getTitle: function() {return 'Csongrád-Csanád megyei 4. sz. országgyűlési egyéni választókerület'}
}
var fejer_megye1 = {
    fidesz_kdnp: 0.4717,
    jobbik: 0.1387,
    mszp: 0.0,
    dk: 0.3099,
    lmp: 0.0603,
    pm: 0.0,
    momentum: 0.0,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 63113,
    turnout: 46139,
    getName: function() {return 'fejer_megye1'},
    getTitle: function() {return 'Fejér megyei 1. sz. országgyűlési egyéni választókerület'}
}
var fejer_megye2 = {
    fidesz_kdnp: 0.5369,
    jobbik: 0.2887,
    mszp: 0.0938,
    dk: 0.0,
    lmp: 0.0428,
    pm: 0.0,
    momentum: 0.02,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 69185,
    turnout: 48764,
    getName: function() {return 'fejer_megye2'},
    getTitle: function() {return 'Fejér megyei 2. sz. országgyűlési egyéni választókerület'}
}
var fejer_megye3 = {
    fidesz_kdnp: 0.5297,
    jobbik: 0.2341,
    mszp: 0.1499,
    dk: 0.0,
    lmp: 0.0509,
    pm: 0.0,
    momentum: 0.0257,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 73665,
    turnout: 52541,
    getName: function() {return 'fejer_megye3'},
    getTitle: function() {return 'Fejér megyei 3. sz. országgyűlési egyéni választókerület'}
}
var fejer_megye4 = {
    fidesz_kdnp: 0.3956,
    jobbik: 0.4353,
    mszp: 0.0,
    dk: 0.0996,
    lmp: 0.0349,
    pm: 0.0,
    momentum: 0.0144,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 67314,
    turnout: 45125,
    getName: function() {return 'fejer_megye4'},
    getTitle: function() {return 'Fejér megyei 4. sz. országgyűlési egyéni választókerület'}
}
var fejer_megye5 = {
    fidesz_kdnp: 0.5597,
    jobbik: 0.3215,
    mszp: 0.0,
    dk: 0.0588,
    lmp: 0.0284,
    pm: 0.0,
    momentum: 0.0,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 67390,
    turnout: 41510,
    getName: function() {return 'fejer_megye5'},
    getTitle: function() {return 'Fejér megyei 5. sz. országgyűlési egyéni választókerület'}
}
var gyor_moson_sopron_megye1 = {
    fidesz_kdnp: 0.4955,
    jobbik: 0.173,
    mszp: 0.0,
    dk: 0.2163,
    lmp: 0.0639,
    pm: 0.0,
    momentum: 0.0287,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 69498,
    turnout: 49379,
    getName: function() {return 'gyor_moson_sopron_megye1'},
    getTitle: function() {return 'Győr-Moson-Sporon megyei 1. sz. országgyűlési egyéni választókerület'}
}
var gyor_moson_sopron_megye2 = {
    fidesz_kdnp: 0.5764,
    jobbik: 0.2112,
    mszp: 0.1318,
    dk: 0.0,
    lmp: 0.0474,
    pm: 0.0,
    momentum: 0.0212,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 71418,
    turnout: 50372,
    getName: function() {return 'gyor_moson_sopron_megye2'},
    getTitle: function() {return 'Győr-Moson-Sporon megyei 2. sz. országgyűlési egyéni választókerület'}
}
var gyor_moson_sopron_megye3 = {
    fidesz_kdnp: 0.639,
    jobbik: 0.2375,
    mszp: 0.0,
    dk: 0.0615,
    lmp: 0.0431,
    pm: 0.0,
    momentum: 0.0111,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 66457,
    turnout: 47633,
    getName: function() {return 'gyor_moson_sopron_megye3'},
    getTitle: function() {return 'Győr-Moson-Sporon megyei 3. sz. országgyűlési egyéni választókerület'}
}
var gyor_moson_sopron_megye4 = {
    fidesz_kdnp: 0.5444,
    jobbik: 0.1813,
    mszp: 0.1682,
    dk: 0.0,
    lmp: 0.0448,
    pm: 0.0,
    momentum: 0.0321,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 76666,
    turnout: 56593,
    getName: function() {return 'gyor_moson_sopron_megye4'},
    getTitle: function() {return 'Győr-Moson-Sporon megyei 4. sz. országgyűlési egyéni választókerület'}
}
var gyor_moson_sopron_megye5 = {
    fidesz_kdnp: 0.5485,
    jobbik: 0.2612,
    mszp: 0.0991,
    dk: 0.0,
    lmp: 0.0524,
    pm: 0.0,
    momentum: 0.0,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 75668,
    turnout: 52549,
    getName: function() {return 'gyor_moson_sopron_megye5'},
    getTitle: function() {return 'Győr-Moson-Sporon megyei 5. sz. országgyűlési egyéni választókerület'}
}
var hajdu_bihar_megye1 = {
    fidesz_kdnp: 0.4736,
    jobbik: 0.1521,
    mszp: 0.2757,
    dk: 0.0,
    lmp: 0.0525,
    pm: 0.0,
    momentum: 0.0295,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 66609,
    turnout: 46078,
    getName: function() {return 'hajdu_bihar_megye1'},
    getTitle: function() {return 'Hajdú-Bihar megyei 1. sz. országgyűlési egyéni választókerület'}
}
var hajdu_bihar_megye2 = {
    fidesz_kdnp: 0.494,
    jobbik: 0.2541,
    mszp: 0.0,
    dk: 0.1199,
    lmp: 0.0598,
    pm: 0.0,
    momentum: 0.0269,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 76073,
    turnout: 50539,
    getName: function() {return 'hajdu_bihar_megye2'},
    getTitle: function() {return 'Hajdú-Bihar megyei 2. sz. országgyűlési egyéni választókerület'}
}
var hajdu_bihar_megye3 = {
    fidesz_kdnp: 0.5816,
    jobbik: 0.2546,
    mszp: 0.0,
    dk: 0.076,
    lmp: 0.0404,
    pm: 0.0,
    momentum: 0.0133,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 76178,
    turnout: 46127,
    getName: function() {return 'hajdu_bihar_megye3'},
    getTitle: function() {return 'Hajdú-Bihar megyei 3. sz. országgyűlési egyéni választókerület'}
}
var hajdu_bihar_megye4 = {
    fidesz_kdnp: 0.5509,
    jobbik: 0.3016,
    mszp: 0.0982,
    dk: 0.0,
    lmp: 0.0262,
    pm: 0.0,
    momentum: 0.008,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 67882,
    turnout: 41342,
    getName: function() {return 'hajdu_bihar_megye4'},
    getTitle: function() {return 'Hajdú-Bihar megyei 4. sz. országgyűlési egyéni választókerület'}
}
var hajdu_bihar_megye5 = {
    fidesz_kdnp: 0.5158,
    jobbik: 0.298,
    mszp: 0.1125,
    dk: 0.0,
    lmp: 0.0346,
    pm: 0.0,
    momentum: 0.0126,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 69791,
    turnout: 44045,
    getName: function() {return 'hajdu_bihar_megye5'},
    getTitle: function() {return 'Hajdú-Bihar megyei 5. sz. országgyűlési egyéni választókerület'}
}
var hajdu_bihar_megye6 = {
    fidesz_kdnp: 0.4891,
    jobbik: 0.2738,
    mszp: 0.1772,
    dk: 0.0,
    lmp: 0.0299,
    pm: 0.0,
    momentum: 0.0108,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 69786,
    turnout: 43270,
    getName: function() {return 'hajdu_bihar_megye6'},
    getTitle: function() {return 'Hajdú-Bihar megyei 6. sz. országgyűlési egyéni választókerület'}
}
var heves_megye1 = {
    fidesz_kdnp: 0.4644,
    jobbik: 0.3922,
    mszp: 0.0,
    dk: 0.0676,
    lmp: 0.0325,
    pm: 0.0,
    momentum: 0.0,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 82030,
    turnout: 56907,
    getName: function() {return 'heves_megye1'},
    getTitle: function() {return 'Heves megyei 1. sz. országgyűlési egyéni választókerület'}
}
var heves_megye2 = {
    fidesz_kdnp: 0.4615,
    jobbik: 0.4194,
    mszp: 0.0831,
    dk: 0.0,
    lmp: 0.0226,
    pm: 0.0,
    momentum: 0.0,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 78000,
    turnout: 54198,
    getName: function() {return 'heves_megye2'},
    getTitle: function() {return 'Heves megyei 2. sz. országgyűlési egyéni választókerület'}
}
var heves_megye3 = {
    fidesz_kdnp: 0.5075,
    jobbik: 0.3518,
    mszp: 0.087,
    dk: 0.0,
    lmp: 0.0312,
    pm: 0.0,
    momentum: 0.01,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 80288,
    turnout: 52999,
    getName: function() {return 'heves_megye3'},
    getTitle: function() {return 'Heves megyei 3. sz. országgyűlési egyéni választókerület'}
}
var jasz_nagykun_szolnok_megye1 = {
    fidesz_kdnp: 0.4209,
    jobbik: 0.3512,
    mszp: 0.1515,
    dk: 0.0,
    lmp: 0.0361,
    pm: 0.0,
    momentum: 0.0153,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 79014,
    turnout: 53236,
    getName: function() {return 'jasz_nagykun_szolnok_megye1'},
    getTitle: function() {return 'Jász-Nagykun-Szolnok megyei 1. sz. országgyűlési egyéni választókerület'}
}
var jasz_nagykun_szolnok_megye2 = {
    fidesz_kdnp: 0.5129,
    jobbik: 0.335,
    mszp: 0.0,
    dk: 0.0812,
    lmp: 0.0425,
    pm: 0.0,
    momentum: 0.0062,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 71857,
    turnout: 46655,
    getName: function() {return 'jasz_nagykun_szolnok_megye2'},
    getTitle: function() {return 'Jász-Nagykun-Szolnok megyei 2. sz. országgyűlési egyéni választókerület'}
}
var jasz_nagykun_szolnok_megye3 = {
    fidesz_kdnp: 0.5529,
    jobbik: 0.3292,
    mszp: 0.0,
    dk: 0.0544,
    lmp: 0.0344,
    pm: 0.0,
    momentum: 0.009,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 76192,
    turnout: 46953,
    getName: function() {return 'jasz_nagykun_szolnok_megye3'},
    getTitle: function() {return 'Jász-Nagykun-Szolnok megyei 3. sz. országgyűlési egyéni választókerület'}
}
var jasz_nagykun_szolnok_megye4 = {
    fidesz_kdnp: 0.4471,
    jobbik: 0.4078,
    mszp: 0.0963,
    dk: 0.0,
    lmp: 0.0231,
    pm: 0.0,
    momentum: 0.0072,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 74689,
    turnout: 46855,
    getName: function() {return 'jasz_nagykun_szolnok_megye4'},
    getTitle: function() {return 'Jász-Nagykun-Szolnok megyei 4. sz. országgyűlési egyéni választókerület'}
}
var komarom_esztergom_megye1 = {
    fidesz_kdnp: 0.4443,
    jobbik: 0.1958,
    mszp: 0.2686,
    dk: 0.0,
    lmp: 0.0431,
    pm: 0.0,
    momentum: 0.0139,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 80383,
    turnout: 54969,
    getName: function() {return 'komarom_esztergom_megye1'},
    getTitle: function() {return 'Komárom-Esztergom megyei 1. sz. országgyűlési egyéni választókerület'}
}
var komarom_esztergom_megye2 = {
    fidesz_kdnp: 0.4521,
    jobbik: 0.3431,
    mszp: 0.0,
    dk: 0.112,
    lmp: 0.046,
    pm: 0.0,
    momentum: 0.0,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 82272,
    turnout: 56356,
    getName: function() {return 'komarom_esztergom_megye2'},
    getTitle: function() {return 'Komárom-Esztergom megyei 2. sz. országgyűlési egyéni választókerület'}
}
var komarom_esztergom_megye3 = {
    fidesz_kdnp: 0.5099,
    jobbik: 0.2661,
    mszp: 0.1243,
    dk: 0.0,
    lmp: 0.0493,
    pm: 0.0,
    momentum: 0.0238,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 82771,
    turnout: 55863,
    getName: function() {return 'komarom_esztergom_megye3'},
    getTitle: function() {return 'Komárom-Esztergom megyei 3. sz. országgyűlési egyéni választókerület'}
}
var nograd_megye1 = {
    fidesz_kdnp: 0.4734,
    jobbik: 0.2222,
    mszp: 0.0,
    dk: 0.0892,
    lmp: 0.1631,
    pm: 0.0,
    momentum: 0.0062,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 77217,
    turnout: 49890,
    getName: function() {return 'nograd_megye1'},
    getTitle: function() {return 'Nórgád megyei 1. sz. országgyűlési egyéni választókerület'}
}
var nograd_megye2 = {
    fidesz_kdnp: 0.5426,
    jobbik: 0.2747,
    mszp: 0.1236,
    dk: 0.0,
    lmp: 0.0382,
    pm: 0.0,
    momentum: 0.0,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 79088,
    turnout: 52572,
    getName: function() {return 'nograd_megye2'},
    getTitle: function() {return 'Nórgád megyei 2. sz. országgyűlési egyéni választókerület'}
}
var pest_megye1 = {
    fidesz_kdnp: 0.4374,
    jobbik: 0.1299,
    mszp: 0.3547,
    dk: 0.0,
    lmp: 0.0367,
    pm: 0.0,
    momentum: 0.0168,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 82593,
    turnout: 60733,
    getName: function() {return 'pest_megye1'},
    getTitle: function() {return 'Pest megyei 1. sz. országgyűlési egyéni választókerület'}
}
var pest_megye2 = {
    fidesz_kdnp: 0.4414,
    jobbik: 0.0844,
    mszp: 0.0,
    dk: 0.0,
    lmp: 0.4372,
    pm: 0.0,
    momentum: 0.0,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 90421,
    turnout: 69645,
    getName: function() {return 'pest_megye2'},
    getTitle: function() {return 'Pest megyei 2. sz. országgyűlési egyéni választókerület'}
}
var pest_megye3 = {
    fidesz_kdnp: 0.4611,
    jobbik: 0.1745,
    mszp: 0.0,
    dk: 0.193,
    lmp: 0.0707,
    pm: 0.0,
    momentum: 0.0221,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 88078,
    turnout: 65508,
    getName: function() {return 'pest_megye3'},
    getTitle: function() {return 'Pest megyei 3. sz. országgyűlési egyéni választókerület'}
}
var pest_megye4 = {
    fidesz_kdnp: 0.5141,
    jobbik: 0.2392,
    mszp: 0.0,
    dk: 0.0,
    lmp: 0.189,
    pm: 0.0,
    momentum: 0.0173,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 73659,
    turnout: 52685,
    getName: function() {return 'pest_megye4'},
    getTitle: function() {return 'Pest megyei 4. sz. országgyűlési egyéni választókerület'}
}
var pest_megye5 = {
    fidesz_kdnp: 0.4327,
    jobbik: 0.1545,
    mszp: 0.0,
    dk: 0.3624,
    lmp: 0.0,
    pm: 0.0,
    momentum: 0.0354,
    eligible_voters: 93942,
    egyutt: 0.0,
    independent: 0.0,
    turnout: 70343,
    getName: function() {return 'pest_megye5'},
    getTitle: function() {return 'Pest megyei 5. sz. országgyűlési egyéni választókerület'}
}
var pest_megye6 = {
    fidesz_kdnp: 0.4592,
    jobbik: 0.1916,
    mszp: 0.0741,
    dk: 0.0,
    lmp: 0.2291,
    pm: 0.0,
    momentum: 0.0132,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 87802,
    turnout: 63773,
    getName: function() {return 'pest_megye6'},
    getTitle: function() {return 'Pest megyei 6. sz. országgyűlési egyéni választókerület'}
}
var pest_megye7 = {
    fidesz_kdnp: 0.4482,
    jobbik: 0.2954,
    mszp: 0.0,
    dk: 0.1426,
    lmp: 0.0577,
    pm: 0.0,
    momentum: 0.022,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 87979,
    turnout: 61029,
    getName: function() {return 'pest_megye7'},
    getTitle: function() {return 'Pest megyei 7. sz. országgyűlési egyéni választókerület'}
}
var pest_megye8 = {
    fidesz_kdnp: 0.4033,
    jobbik: 0.2036,
    mszp: 0.3062,
    dk: 0.0,
    lmp: 0.0481,
    pm: 0.0,
    momentum: 0.0216,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 88636,
    turnout: 61823,
    getName: function() {return 'pest_megye8'},
    getTitle: function() {return 'Pest megyei 8. sz. országgyűlési egyéni választókerület'}
}
var pest_megye9 = {
    fidesz_kdnp: 0.5025,
    jobbik: 0.3346,
    mszp: 0.0716,
    dk: 0.0,
    lmp: 0.0294,
    pm: 0.0,
    momentum: 0.0,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 74591,
    turnout: 46552,
    getName: function() {return 'pest_megye9'},
    getTitle: function() {return 'Pest megyei 9. sz. országgyűlési egyéni választókerület'}
}
var pest_megye10 = {
    fidesz_kdnp: 0.5261,
    jobbik: 0.2621,
    mszp: 0.143,
    dk: 0.0,
    lmp: 0.0337,
    pm: 0.0,
    momentum: 0.0161,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 76530,
    turnout: 48445,
    getName: function() {return 'pest_megye10'},
    getTitle: function() {return 'Pest megyei 10. sz. országgyűlési egyéni választókerület'}
}
var pest_megye11 = {
    fidesz_kdnp: 0.5094,
    jobbik: 0.2947,
    mszp: 0.1224,
    dk: 0.0,
    lmp: 0.0564,
    pm: 0.0,
    egyutt: 0.0,
    independent: 0.0,
    momentum: 0.0,
    eligible_voters: 85299,
    turnout: 57709,
    getName: function() {return 'pest_megye11'},
    getTitle: function() {return 'Pest megyei 11. sz. országgyűlési egyéni választókerület'}
}
var pest_megye12 = {
    fidesz_kdnp: 0.5164,
    jobbik: 0.3358,
    mszp: 0.0,
    dk: 0.0701,
    lmp: 0.0408,
    pm: 0.0,
    egyutt: 0.0,
    independent: 0.0,
    momentum: 0.0133,
    eligible_voters: 73892,
    turnout: 46938,
    getName: function() {return 'pest_megye12'},
    getTitle: function() {return 'Pest megyei 12. sz. országgyűlési egyéni választókerület'}
}
var somogy_megye1 = {
    fidesz_kdnp: 0.4369,
    jobbik: 0.3189,
    mszp: 0.0,
    dk: 0.1279,
    lmp: 0.0462,
    pm: 0.0,
    egyutt: 0.0,
    independent: 0.0,
    momentum: 0.0167,
    eligible_voters: 62226,
    turnout: 42890,
    getName: function() {return 'somogy_megye1'},
    getTitle: function() {return 'Somogy megyei 1. sz. országgyűlési egyéni választókerület'}
}
var somogy_megye2 = {
    fidesz_kdnp: 0.5163,
    jobbik: 0.3818,
    mszp: 0.0,
    dk: 0.0598,
    lmp: 0.0201,
    pm: 0.0,
    momentum: 0.0,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 60390,
    turnout: 37650,
    getName: function() {return 'somogy_megye2'},
    getTitle: function() {return 'Somogy megyei 2. sz. országgyűlési egyéni választókerület'}
}
var somogy_megye3 = {
    fidesz_kdnp: 0.5185,
    jobbik: 0.3718,
    mszp: 0.0717,
    dk: 0.0,
    lmp: 0.0198,
    pm: 0.0,
    egyutt: 0.0,
    independent: 0.0,
    momentum: 0.0,
    eligible_voters: 62311,
    turnout: 40566,
    getName: function() {return 'somogy_megye3'},
    getTitle: function() {return 'Somogy megyei 3. sz. országgyűlési egyéni választókerület'}
}
var somogy_megye4 = {
    fidesz_kdnp: 0.5111,
    jobbik: 0.1925,
    mszp: 0.2502,
    dk: 0.0,
    lmp: 0.0205,
    pm: 0.0,
    egyutt: 0.0,
    independent: 0.0,
    momentum: 0.0107,
    eligible_voters: 64399,
    turnout: 43486,
    getName: function() {return 'somogy_megye4'},
    getTitle: function() {return 'Somogy megyei 4. sz. országgyűlési egyéni választókerület'}
}
var szabolcs_szatmar_bereg_megye1 = {
    fidesz_kdnp: 0.4034,
    jobbik: 0.1921,
    mszp: 0.3283,
    dk: 0.0,
    lmp: 0.0332,
    pm: 0.0,
    momentum: 0.0155,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 73533,
    turnout: 50841,
    getName: function() {return 'szabolcs_szatmar_bereg_megye1'},
    getTitle: function() {return 'Szabolcs-Szatmár-Bereg megyei 1. sz. országgyűlési egyéni választókerület'}
}
var szabolcs_szatmar_bereg_megye2 = {
    fidesz_kdnp: 0.4789,
    jobbik: 0.3505,
    mszp: 0.0,
    dk: 0.105,
    lmp: 0.0279,
    pm: 0.0,
    egyutt: 0.0,
    independent: 0.0,
    momentum: 0.0105,
    eligible_voters: 70987,
    turnout: 44294,
    getName: function() {return 'szabolcs_szatmar_bereg_megye2'},
    getTitle: function() {return 'Szabolcs-Szatmár-Bereg megyei 2. sz. országgyűlési egyéni választókerület'}
}
var szabolcs_szatmar_bereg_megye3 = {
    fidesz_kdnp: 0.6187,
    jobbik: 0.2774,
    mszp: 0.0,
    dk: 0.048,
    lmp: 0.0237,
    pm: 0.0,
    momentum: 0.0069,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 78009,
    turnout: 49647,
    getName: function() {return 'szabolcs_szatmar_bereg_megye3'},
    getTitle: function() {return 'Szabolcs-Szatmár-Bereg megyei 3. sz. országgyűlési egyéni választókerület'}
}
var szabolcs_szatmar_bereg_megye4 = {
    fidesz_kdnp: 0.5975,
    jobbik: 0.2729,
    mszp: 0.0846,
    dk: 0.0,
    lmp: 0.0092,
    pm: 0.0,
    momentum: 0.0,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 74368,
    turnout: 47420,
    getName: function() {return 'szabolcs_szatmar_bereg_megye4'},
    getTitle: function() {return 'Szabolcs-Szatmár-Bereg megyei 4. sz. országgyűlési egyéni választókerület'}
}
var szabolcs_szatmar_bereg_megye5 = {
    fidesz_kdnp: 0.5855,
    jobbik: 0.329,
    mszp: 0.0,
    dk: 0.042,
    lmp: 0.0179,
    pm: 0.0,
    momentum: 0.0066,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 74036,
    turnout: 46625,
    getName: function() {return 'szabolcs_szatmar_bereg_megye5'},
    getTitle: function() {return 'Szabolcs-Szatmár-Bereg megyei 5. sz. országgyűlési egyéni választókerület'}
}
var szabolcs_szatmar_bereg_megye6 = {
    fidesz_kdnp: 0.5652,
    jobbik: 0.203,
    mszp: 0.1948,
    dk: 0.0,
    lmp: 0.0145,
    pm: 0.0,
    momentum: 0.0072,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 72532,
    turnout: 46103,
    getName: function() {return 'szabolcs_szatmar_bereg_megye6'},
    getTitle: function() {return 'Szabolcs-Szatmár-Bereg megyei 6. sz. országgyűlési egyéni választókerület'}
}
var tolna_megye1 = {
    fidesz_kdnp: 0.5156,
    jobbik: 0.0936,
    mszp: 0.0,
    dk: 0.0,
    lmp: 0.3576,
    pm: 0.0,
    momentum: 0.0,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 61027,
    turnout: 40035,
    getName: function() {return 'tolna_megye1'},
    getTitle: function() {return 'Tolna megyei 1. sz. országgyűlési egyéni választókerület'}
}
var tolna_megye2 = {
    fidesz_kdnp: 0.5845,
    jobbik: 0.2476,
    mszp: 0.0,
    dk: 0.0848,
    lmp: 0.0481,
    pm: 0.0,
    momentum: 0.0114,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 60069,
    turnout: 39395,
    getName: function() {return 'tolna_megye2'},
    getTitle: function() {return 'Tolna megyei 2. sz. országgyűlési egyéni választókerület'}
}
var tolna_megye3 = {
    fidesz_kdnp: 0.5778,
    jobbik: 0.2423,
    mszp: 0.1176,
    dk: 0.0,
    lmp: 0.0308,
    pm: 0.0,
    momentum: 0.0129,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 60348,
    turnout: 39280,
    getName: function() {return 'tolna_megye3'},
    getTitle: function() {return 'Tolna megyei 3. sz. országgyűlési egyéni választókerület'}
}
var vas_megye1 = {
    fidesz_kdnp: 0.4992,
    jobbik: 0.1258,
    mszp: 0.3052,
    dk: 0.0,
    lmp: 0.0355,
    pm: 0.0,
    momentum: 0.0,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 69019,
    turnout: 50332,
    getName: function() {return 'vas_megye1'},
    getTitle: function() {return 'Vas megyei 1. sz. országgyűlési egyéni választókerület'}
}
var vas_megye2 = {
    fidesz_kdnp: 0.6138,
    jobbik: 0.1824,
    mszp: 0.1398,
    dk: 0.0,
    lmp: 0.0359,
    pm: 0.0,
    momentum: 0.0133,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 69022,
    turnout: 49611,
    getName: function() {return 'vas_megye2'},
    getTitle: function() {return 'Vas megyei 2. sz. országgyűlési egyéni választókerület'}
}
var vas_megye3 = {
    fidesz_kdnp: 0.6352,
    jobbik: 0.2681,
    mszp: 0.0,
    dk: 0.0429,
    lmp: 0.0313,
    pm: 0.0,
    egyutt: 0.0,
    independent: 0.0,
    momentum: 0.0104,
    eligible_voters: 66630,
    turnout: 47294,
    getName: function() {return 'vas_megye3'},
    getTitle: function() {return 'Vas megyei 3. sz. országgyűlési egyéni választókerület'}
}
var veszprem_megye1 = {
    fidesz_kdnp: 0.4875,
    jobbik: 0.1327,
    mszp: 0.0,
    dk: 0.0,
    lmp: 0.0341,
    pm: 0.0,
    momentum: 0.0,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 71872,
    turnout: 51738,
    getName: function() {return 'veszprem_megye1'},
    getTitle: function() {return 'Veszprém megyei 1. sz. országgyűlési egyéni választókerület'}
}
var veszprem_megye2 = {
    fidesz_kdnp: 0.5063,
    jobbik: 0.3416,
    mszp: 0.0,
    dk: 0.1054,
    lmp: 0.0,
    pm: 0.0,
    momentum: 0.0246,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 73104,
    turnout: 51048,
    getName: function() {return 'veszprem_megye2'},
    getTitle: function() {return 'Veszprém megyei 2. sz. országgyűlési egyéni választókerület'}
}
var veszprem_megye3 = {
    fidesz_kdnp: 0.4691,
    jobbik: 0.4056,
    mszp: 0.082,
    dk: 0.05,
    lmp: 0.0227,
    pm: 0.0,
    momentum: 0.0,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 68573,
    turnout: 46791,
    getName: function() {return 'veszprem_megye3'},
    getTitle: function() {return 'Veszprém megyei 3. sz. országgyűlési egyéni választókerület'}
}
var veszprem_megye4 = {
    fidesz_kdnp: 0.5834,
    jobbik: 0.2434,
    mszp: 0.1332,
    dk: 0.05,
    lmp: 0.0217,
    pm: 0.0,
    momentum: 0.0084,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 69248,
    turnout: 47331,
    getName: function() {return 'veszprem_megye4'},
    getTitle: function() {return 'Veszprém megyei 4. sz. országgyűlési egyéni választókerület'}
}
var zala_megye1 = {
    fidesz_kdnp: 0.528,
    jobbik: 0.2189,
    mszp: 0.1543,
    dk: 0.0,
    lmp: 0.0506,
    pm: 0.0,
    momentum: 0.0158,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 75620,
    turnout: 54596,
    getName: function() {return 'zala_megye1'},
    getTitle: function() {return 'Zala megyei 1. sz. országgyűlési egyéni választókerület'}
}
var zala_megye2 = {
    fidesz_kdnp: 0.5551,
    jobbik: 0.2831,
    mszp: 0.0,
    dk: 0.0823,
    lmp: 0.041,
    pm: 0.0,
    momentum: 0.0212,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 73963,
    turnout: 50345,
    getName: function() {return 'zala_megye2'},
    getTitle: function() {return 'Zala megyei 2. sz. országgyűlési egyéni választókerület'}
}
var zala_megye3 = {
    fidesz_kdnp: 0.4879,
    jobbik: 0.346,
    mszp: 0.0,
    dk: 0.0996,
    lmp: 0.0361,
    pm: 0.0,
    momentum: 0.0146,
    egyutt: 0.0,
    independent: 0.0,
    eligible_voters: 73355,
    turnout: 49431,
    getName: function() {return 'zala_megye3'},
    getTitle: function() {return 'Zala megyei 3. sz. országgyűlési egyéni választókerület'}
}

var districts = [ budapest1, budapest2, budapest3, budapest4, budapest5, budapest6,
    budapest7, budapest8, budapest9, budapest10, budapest11, budapest12, budapest13,
    budapest14, budapest15, budapest16, budapest17, budapest18,
    bacs_kiskun_megye1, bacs_kiskun_megye2, bacs_kiskun_megye3, bacs_kiskun_megye4,
    bacs_kiskun_megye5, bacs_kiskun_megye6,
    baranya_megye1, baranya_megye2, baranya_megye3, baranya_megye4,
    bekes_megye1, bekes_megye2, bekes_megye3, bekes_megye4,
    borsod_abauj_zemplen_megye1, borsod_abauj_zemplen_megye2, borsod_abauj_zemplen_megye3,
    borsod_abauj_zemplen_megye4, borsod_abauj_zemplen_megye5, borsod_abauj_zemplen_megye6,
    borsod_abauj_zemplen_megye7,
    csongrad_csanad_megye1, csongrad_csanad_megye2, csongrad_csanad_megye3, csongrad_csanad_megye4,
    fejer_megye1, fejer_megye2, fejer_megye3, fejer_megye4, fejer_megye5,
    gyor_moson_sopron_megye1, gyor_moson_sopron_megye2, gyor_moson_sopron_megye3,
    gyor_moson_sopron_megye4, gyor_moson_sopron_megye5,
    hajdu_bihar_megye1, hajdu_bihar_megye2, hajdu_bihar_megye3, hajdu_bihar_megye4,
    hajdu_bihar_megye5, hajdu_bihar_megye6,
    heves_megye1, heves_megye2, heves_megye3,
    jasz_nagykun_szolnok_megye1, jasz_nagykun_szolnok_megye2,
    jasz_nagykun_szolnok_megye3, jasz_nagykun_szolnok_megye4,
    komarom_esztergom_megye1, komarom_esztergom_megye2, komarom_esztergom_megye3,
    nograd_megye1, nograd_megye2,
    pest_megye1, pest_megye2, pest_megye3, pest_megye4, pest_megye5, pest_megye6,
    pest_megye7, pest_megye8, pest_megye9, pest_megye10, pest_megye11, pest_megye12,
    somogy_megye1, somogy_megye2, somogy_megye3, somogy_megye4,
    szabolcs_szatmar_bereg_megye1, szabolcs_szatmar_bereg_megye2, szabolcs_szatmar_bereg_megye3, 
    szabolcs_szatmar_bereg_megye4, szabolcs_szatmar_bereg_megye5, szabolcs_szatmar_bereg_megye6,
    tolna_megye1, tolna_megye2, tolna_megye3,
    vas_megye1, vas_megye2, vas_megye3,
    veszprem_megye1, veszprem_megye2, veszprem_megye3, veszprem_megye4,
    zala_megye1, zala_megye2, zala_megye3];


function getNumSeats() 
{
    var otherParties = ['fidesz_kdnp', 'dk', 'lmp', 'mszp', 'jobbik', 'independent', 'pm', 'momentum', 'egyutt'];

    otherParties.splice(otherParties.indexOf(party.name), 1);

    var numberOfSeats = 0;

    for (i = 0; i < districts.length; i++)
    {
        var counter = 0;

        for (j = 0; j < 8; j++)
        {
            if (districts[i][party.name] > districts[i][otherParties[j]])
            {
                counter += 1;
            }
        }

        if (counter == 8)
        {
            numberOfSeats += 1;
        }
    }

    return numberOfSeats;
};

function collectData() {
    let partiesResults = {
        'fidesz_kdnp': 0,
        'jobbik': 0,
        'mszp': 0,
        'dk': 0,
        'lmp': 0,
        'pm': 0,
        'momentum': 0,
        'egyutt': 0,
        'independent': 0
    };

    let popularVote = {
        'fidesz_kdnp': 0,
        'jobbik': 0,
        'mszp': 0,
        'dk': 0,
        'lmp': 0,
        'pm': 0,
        'momentum': 0,
        'egyutt': 0,
        'independent': 0
    }; 

    let totalTurnout = 0;

    let partiesList = ['fidesz_kdnp', 'jobbik', 'mszp', 'dk', 'lmp', 'pm', 'momentum', 'egyutt', 'independent'];

    for (i = 0; i < districts.length; i++) {

        let mostPopParty = '';
        let mostPopular = 0;

        for (k = 0; k < partiesList.length; k++) {
            if (districts[i][partiesList[k]] > mostPopular) {
                mostPopular = districts[i][partiesList[k]];
                mostPopParty = partiesList[k];
            };
            let popVote = (districts[i][partiesList[k]] * districts[i].turnout)
            popularVote[partiesList[k]] += popVote;
            totalTurnout += popVote;
        };

        partiesResults[mostPopParty] += 1;
    };

    return [partiesResults, popularVote, totalTurnout];
};

function testLeader() {
    for (i = 0; i < districts.length; i++) 
    {
        item = districts[i]

        if (item.fidesz_kdnp > item.dk & 
            item.fidesz_kdnp > item.mszp & 
            item.fidesz_kdnp > item.jobbik &
            item.fidesz_kdnp > item.lmp &
            item.fidesz_kdnp > item.egyutt &
            item.fidesz_kdnp > item.momentum &
            item.fidesz_kdnp > item.independent &
            item.fidesz_kdnp > item.pm)
        {
            document.getElementById(item.getName()).style.fill = fideszColor;
        }
        else if (item.dk > item.fidesz_kdnp & 
                item.dk > item.mszp & 
                item.dk > item.jobbik &
                item.dk > item.lmp &
                item.dk > item.egyutt &
                item.dk > item.momentum &
                item.dk > item.independent &
                item.dk > item.pm) 
        {
            document.getElementById(item.getName()).style.fill = dkColor;
        }
        else if (item.mszp > item.fidesz_kdnp & 
                item.mszp > item.dk & 
                item.mszp > item.jobbik &
                item.mszp > item.lmp &
                item.mszp > item.egyutt &
                item.mszp > item.momentum &
                item.mszp > item.independent &
                item.mszp > item.pm) 
        {
            document.getElementById(item.getName()).style.fill = mszpColor;
        }
    
        else if (item.jobbik > item.fidesz_kdnp & 
                item.jobbik > item.mszp & 
                item.jobbik > item.dk &
                item.jobbik > item.lmp &
                item.jobbik > item.egyutt &
                item.jobbik > item.momentum &
                item.jobbik > item.independent &
                item.jobbik > item.pm) 
        {
            document.getElementById(item.getName()).style.fill = jobbikColor;
        }
        else if (item.lmp > item.fidesz_kdnp & 
            item.lmp > item.mszp & 
            item.lmp > item.dk &
            item.lmp > item.jobbik &
            item.lmp > item.egyutt &
            item.lmp > item.momentum &
            item.lmp > item.independent &
            item.lmp > item.pm)
        {
            document.getElementById(item.getName()).style.fill = lmpColor;
        }
        else if (item.egyutt > item.fidesz_kdnp & 
            item.egyutt > item.mszp & 
            item.egyutt > item.dk &
            item.egyutt > item.lmp &
            item.egyutt > item.jobbik &
            item.egyutt > item.momentum &
            item.egyutt > item.independent &
            item.egyutt > item.pm)
        {
            document.getElementById(item.getName()).style.fill = egyuttColor;
        }
        else if (item.momentum > item.fidesz_kdnp & 
            item.momentum > item.mszp & 
            item.momentum > item.dk &
            item.momentum > item.lmp &
            item.momentum > item.jobbik &
            item.momentum > item.egyutt &
            item.momentum > item.independent &
            item.momentum > item.pm)
        {
            document.getElementById(item.getName()).style.fill = momentumColor;
        }
        else if (item.independent > item.fidesz_kdnp & 
            item.independent > item.mszp & 
            item.independent > item.dk &
            item.independent > item.lmp &
            item.independent > item.jobbik &
            item.independent > item.momentum &
            item.independent > item.egyutt &
            item.independent > item.pm)
        {
            document.getElementById(item.getName()).style.fill = independentColor;
        }
        else if (item.pm > item.fidesz_kdnp & 
            item.pm > item.mszp & 
            item.pm > item.dk &
            item.pm > item.lmp &
            item.pm > item.jobbik &
            item.pm > item.momentum &
            item.pm > item.independent &
            item.pm > item.egyutt)
        {
            document.getElementById(item.getName()).style.fill = pmColor;
        } 
    }
}

function totalVoters()
{
    var voters = 0

    for (i = 0; i < districts.length; i++) 
    {
        
        item = districts[i]

        voters += item.eligible_voters

    }

    return voters
}


function totalTurnout()
{
    var turnout = 0

    for (i = 0; i < districts.length; i++) 
    {
        
        item = districts[i]

        turnout += item.turnout

    }

    return turnout
}


function campaignEvent(region)
{
    if (party.money >= 50)
    {
        var otherParties = ['fidesz_kdnp', 'dk', 'lmp', 'mszp', 'jobbik', 'independent', 'pm', 'momentum', 'egyutt'];

        otherParties.splice(otherParties.indexOf(party.name), 1);

        var partiesWithSupport = 0;

        for (i = 0; i < 8; i++)
        {
            if (region[otherParties[i]] > 0)
            {
                partiesWithSupport += 1;
            }
        }

        if (partiesWithSupport > 0)
        {
            if ((region[party.name] + 0.04) < 1)
            {
                region[party.name] += 0.04;

                for (i = 0; i < 8; i++)
                {
                    if (region[otherParties[i]] >= (0.04/partiesWithSupport))
                    {
                        region[otherParties[i]] -= (0.04/partiesWithSupport);
                    }
                    else
                    {
                        region[otherParties[i]] = 0;
                    }
                }
            }
            else
            {
                region[party.name] = 1;

                for (i = 0; i < 8; i++)
                {
                    region[otherParties[i]] = 0;
                }

            }
        }

        party.money -= 50;

        showdata(region);
    }
};

Date.prototype.addHours = function(h) {
    this.setTime(this.getTime() + (h*60*60*1000));
    return this;
}

var timeInterval = setInterval(function()
{
    actualDate.addHours(1);
    date.innerText = actualDate.toISOString().replace(/T/, ' ').replace(/\..+/, '');
    party.money += (party.members * gameSpeed * 0.00005);
    for (i = 1; i < 7; i++) {
        let partyMoney =  JSON.parse(localStorage[i]);
        partyMoney.money += (partyMoney.members * gameSpeed * 0.00005);
        localStorage.removeItem(i);
        localStorage.setItem(i, JSON.stringify(partyMoney));
    };
    moneyDisplay.innerText = (party.money).toFixed(2) + " coin";
    numSeats.innerText = getNumSeats();
    localStorage.setItem('results', JSON.stringify(collectData()));
},(gameSpeed*500));

const btnGameSpeed0 = document.getElementById('btnGameSpeed0');
const btnImg0 = document.getElementById('btnImg0');
const btnGameSpeed1 = document.getElementById('btnGameSpeed1');
const btnImg1 = document.getElementById('btnImg1');
const btnGameSpeed2 = document.getElementById('btnGameSpeed2');
const btnImg2 = document.getElementById('btnImg2');
const btnGameSpeed3 = document.getElementById('btnGameSpeed3');
const btnImg3 = document.getElementById('btnImg3');
const paused = document.getElementById('paused');

function setGameSpeed(speed)
{
    if (speed == 0)
    {
        gameSpeed = 0;
        clearInterval(timeInterval);
        timeInterval = setInterval(function()
        {
            actualDate.addHours((gameSpeed*1));
            date.innerText = actualDate.toISOString().replace(/T/, ' ').replace(/\..+/, '');
            party.money += (party.members * gameSpeed * party.membershipFee);
            for (i = 1; i < 7; i++) {
                let partyMoney =  JSON.parse(localStorage[i]);
                partyMoney.money += (partyMoney.members * gameSpeed * partyMoney.membershipFee);
                localStorage.removeItem(i);
                localStorage.setItem(i, JSON.stringify(partyMoney));
            };
            moneyDisplay.innerText = (party.money).toFixed(2) + " coin";
            numSeats.innerText = getNumSeats();
            localStorage.setItem('results', JSON.stringify(collectData()));
        },(500));

        btnImg0.src = 'img/0_selected.png';
        btnImg1.src = 'img/1.png';
        btnImg2.src = 'img/2.png';
        btnImg3.src = 'img/3.png';

        paused.innerText = 'Paused';
    }

    else if (speed == 1)
    {
        gameSpeed = 1;
        clearInterval(timeInterval);
        timeInterval = setInterval(function()
        {
            actualDate.addHours((gameSpeed*1));
            date.innerText = actualDate.toISOString().replace(/T/, ' ').replace(/\..+/, '');
            party.money += (party.members * gameSpeed * party.membershipFee);
            for (i = 1; i < 7; i++) {
                let partyMoney =  JSON.parse(localStorage[i]);
                partyMoney.money += (partyMoney.members * gameSpeed * partyMoney.membershipFee);
                localStorage.removeItem(i);
                localStorage.setItem(i, JSON.stringify(partyMoney));
            };
            moneyDisplay.innerText = (party.money).toFixed(2) + " coin";
            numSeats.innerText = getNumSeats();
            localStorage.setItem('results', JSON.stringify(collectData()));
        },(500));
        
        btnImg0.src = 'img/0.png';
        btnImg1.src = 'img/1_selected.png';
        btnImg2.src = 'img/2.png';
        btnImg3.src = 'img/3.png';

        paused.innerText = '';
    }
    
    else if (speed == 2)
    {
        gameSpeed = 2;
        clearInterval(timeInterval);
        timeInterval = setInterval(function()
        {
            actualDate.addHours((gameSpeed*1));
            date.innerText = actualDate.toISOString().replace(/T/, ' ').replace(/\..+/, '');
            party.money += (party.members * gameSpeed * party.membershipFee);
            for (i = 1; i < 7; i++) {
                let partyMoney =  JSON.parse(localStorage[i]);
                partyMoney.money += (partyMoney.members * gameSpeed * partyMoney.membershipFee);
                localStorage.removeItem(i);
                localStorage.setItem(i, JSON.stringify(partyMoney));
            };
            moneyDisplay.innerText = (party.money).toFixed(2) + " coin";
            numSeats.innerText = getNumSeats();
            localStorage.setItem('results', JSON.stringify(collectData()));
        },(500));
        
        btnImg0.src = 'img/0.png';
        btnImg1.src = 'img/1.png';
        btnImg2.src = 'img/2_selected.png';
        btnImg3.src = 'img/3.png';

        paused.innerText = 'x2 speed';
    }

    else if (speed == 3)
    {
        gameSpeed = 3;
        clearInterval(timeInterval);
        timeInterval = setInterval(function()
        {
            actualDate.addHours((gameSpeed*1));
            date.innerText = actualDate.toISOString().replace(/T/, ' ').replace(/\..+/, '');
            party.money += (party.members * gameSpeed * party.membershipFee);
            for (i = 1; i < 7; i++) {
                let partyMoney =  JSON.parse(localStorage[i]);
                partyMoney.money += (partyMoney.members * gameSpeed * partyMoney.membershipFee);
                localStorage.removeItem(i);
                localStorage.setItem(i, JSON.stringify(partyMoney));
            };
            moneyDisplay.innerText = (party.money).toFixed(2) + " coin";
            numSeats.innerText = getNumSeats();
            localStorage.setItem('results', JSON.stringify(collectData()));
        },(500));
        
        btnImg0.src = 'img/0.png';
        btnImg1.src = 'img/1.png';
        btnImg2.src = 'img/2.png';
        btnImg3.src = 'img/3_selected.png';

        paused.innerText = '3x speed';
    }
};

function testTime() {
    if (actualDate >= dateEnd) 
    {
        var seatsParty = getNumSeats();
        var seatsOtherParties = []
        for (i = 0; i < 8; i++) {

        }
        localStorage.clear();
        localStorage.setItem('results', JSON.stringify(collectData()));
        window.location.href = 'results.html';
    }
};

btnRecruit = document.getElementById('btnRecruit');
btnRaiseMembershipFee = document.getElementById('btnRaiseMembershipFee');

btnRecruit.addEventListener('click', () => {
    if (party.money >= 25) {
        
        party.members += 50;

        party.money -= 25

        refreshData();
    }
});

btnRaiseMembershipFee.addEventListener('click', () => {
    if (party.money >= 10) {
        
        party.members -= 500;

        party.membershipFee += 0.00001;

        party.money -= 10

        refreshData();
    }
});

function AIMoves() {

    for (i = 1; i < 8; i++) {

        let partyAI = JSON.parse(localStorage[i]);

        while (partyAI.money > 50) {

            var tasks = [0, 2, 2, 2, 1, 2, 2, 2];

            switch(tasks[Math.floor(Math.random() * tasks.length)]) {

                case 0:
                    partyAI.members -= 500;
                    partyAI.membershipFee += 0.00001;
                    partyAI.money -= 10
                case 1:
                    partyAI.members += 50;
                    partyAI.money -= 25;
                case 2:
                    let otherParties = ['fidesz_kdnp', 'dk', 'lmp', 'mszp', 'jobbik', 'independent', 'pm', 'momentum', 'egyutt'];

                    let region = districts[(Math.floor(Math.random() * districts.length))];
                    
                    otherParties.splice(otherParties.indexOf(partyAI.name), 1);

                    var partiesWithSupport = 0;

                    for (k = 0; k < 8; k++)
                    {
                        if (region[otherParties[k]] > 0)
                        {
                            partiesWithSupport += 1;
                        }
                    };

                    if (partiesWithSupport > 0)
                    {
                        if ((region[partyAI.name] + 0.04) < 1)
                        {
                            region[partyAI.name] += 0.04;

                            for (k = 0; k < 8; k++)
                            {
                                if (region[otherParties[k]] >= (0.04/partiesWithSupport))
                                {
                                    region[otherParties[k]] -= (0.04/partiesWithSupport);
                                }
                                else
                                {
                                    region[otherParties[k]] = 0;
                                }
                            }
                        }
                        else
                        {
                            region[partyAI.name] = 1;

                            for (k = 0; k < 8; k++)
                            {
                                region[otherParties[k]] = 0;
                            }

                        }
                    };

                    partyAI.money -= 50;

                    
                    console.log('Party: ' + partyAI.name + 'Region: ' + region.name + 'Support: ' + region[partyAI.name]);

                    localStorage.removeItem(i);
                    localStorage.setItem(i, JSON.stringify(partyAI));

            };
        };
    };
};

setInterval(AIMoves, 1000);

setInterval(testLeader, 500);
setInterval(testTime, 100);

showdata(budapest1);