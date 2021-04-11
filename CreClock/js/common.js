function numToSimp(n){
    var str = "";
    var units=parseInt(n%10);
    var tens=parseInt(n/10);
    var trans="0123456789";



    if(tens>1){
        str=trans.charAt(tens);
    }
    if(tens!=0){
        str+="";
    }
    if(units!=0){
        str += trans.charAt(units);
    }

    if(tens==0&&units==0){
        str=trans[0];
    }
    
    return str;
}


function numToTrad(n){
    var str = "";
    var units=parseInt(n%10);
    var tens=parseInt(n/10);
    var trans="0123456789";
    if(tens>1){
        str=trans.charAt(tens);
    }
    if(tens!=0){
		if(tens == 1 && units != 0){
			str+="1";	// > 10h
		}
		if(units == 0){
			switch(tens){
				case 1:
					str+="10";
					break;
				case 2:
				case 3:
				case 4:
				case 5:
					str+="0";
					break
			}			
		}
		
		str+="";
    }
    if(units!=0){
        str += trans.charAt(units);
    }

    if(tens==0&&units==0){
        str=trans[0];
    }
    
    return str;
}


// Hiển thị bằng tiếng Anh
function numToEng(n){
    var str = "";
    var units=parseInt(n%10);
    var tens=parseInt(n/10);
    var trans=[
        ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine","ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
        ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"],
    ];
    if(n<20)
    {
        str=trans[0][n];
    }else{
        str=trans[1][tens-2];
        if(units!=0){
            str+=trans[0][units];
        }
    }

    if(tens==0&&units==0){
        str=trans[0][0];
    }
    return str;
}



function isLeapYear(year){
    if(year % 4 == 0 && year %100 != 0 ||year % 400 == 0)
    {
        return true;
    }else{
        return false;
    }
}



function getYear(type,year){
    var res=""
    var units=parseInt(year/1%10);
    var tens=parseInt(year/10%10);
    var hund=parseInt(year/100%10);
    var thou=parseInt(year/1000%10);
    switch(type){
        case 0:
        case 3:
            res=year;
            break;
        case 1:
            res=numToSimp(thou)+numToSimp(hund)+numToSimp(tens)+numToSimp(units);
            break;
        case 2:
            res=numToTrad(thou)+numToTrad(hund)+numToTrad(tens)+numToTrad(units);
            break;
    }
    return res;
}


function getMonths(type,month){
    var months=new Array();
    var monthsEng=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var i=1;
    switch (type) {
        case 0:
            for(i=month;i<=12;i++)
            {
                months.push(i);
            }
            for(i=1;i<month;i++)
            {
                months.push(i);
            }
            
            break;
        case 1:
            for(i=month;i<=12;i++)
            {
                months.push(numToSimp(i));
            }
            for(i=1;i<month;i++)
            {
                months.push(numToSimp(i));
            }
            break;
        case 2:

            for(i=month;i<=12;i++)
            {
                months.push(numToTrad(i));
            }
            for(i=1;i<month;i++)
            {
                months.push(numToTrad(i));
            }
            break;
        case 3:
            for(i=month-1;i<12;i++)
            {
                months.push(monthsEng[i]);
            }
            for(i=0;i<month-1;i++)
            {
                months.push(monthsEng[i]);
            }
            break;
    }
    return months;
}


function getdays(type,year,month,day){
    var days=new Array();
    var j=1;
    var isLeap=isLeapYear(year);
    switch (type) {
        case 0:
        case 3:
            for(j=day;j<=31;j++)
            {
                days.push(j)
                if(month==2&&isLeap&&j==29){
                    break;
                }
                if(month==2&&!isLeap&&j==28){
                    break;
                }
                if((month==2||month==4||month==6||month==9||month==11)&&j==30){
                    break;
                }

            }
            for(j=1;j<day;j++){
                days.push(j)
            }
            break;
        case 1:
            for(j=day;j<=31;j++)
            {
                days.push(numToSimp(j))
                if(month==2&&isLeap&&j==29){
                    break;
                }
                if(month==2&&!isLeap&&j==28){
                    break;
                }
                if((month==2||month==4||month==6||month==9||month==11)&&j==30){
                    break;
                }

            }

            for(j=1;j<day;j++){
                days.push(numToSimp(j))
            }

            break;
        case 2:
            for(j=day;j<=31;j++)
            {
                days.push(numToTrad(j))
                if(month==2&&isLeap&&j==29){
                    break;
                }
                if(month==2&&!isLeap&&j==28){
                    break;
                }
                if((month==2||month==4||month==6||month==9||month==11)&&j==30){
                    break;
                }

            }

            for(j=1;j<day;j++){
                days.push(numToTrad(j))
            }

            break;
    }
    return days;
}






function getShiChen(type,hour){
    var shichen={
        index:0,
        str:""
    };

    switch(type){
        case 0:
            if(hour>=23||hour<1){
                shichen.index=0;
                shichen.str="23:00-1:00";
            }
            else if(hour>=1&&hour<3){
                shichen.index=1;
                shichen.str="1:00-3:00";
            }
            else if(hour>=3&&hour<5){
                shichen.index=2;
                shichen.str="3:00-5:00";
            }
            else if(hour>=5&&hour<7){
                shichen.index=3;
                shichen.str="5:00-7:00";
            }
            else if(hour>=7&&hour<9){
                shichen.index=4;
                shichen.str="7:00-9:00";
            }
            else if(hour>=9&&hour<11){
                shichen.index=5;
                shichen.str="9:00-11:00";
            }
            else if(hour>=11&&hour<13){
                shichen.index=6;
                shichen.str="11:00-13:00";
            }
            else if(hour>=13&&hour<15){
                shichen.index=7;
                shichen.str="13:00-15:00";
            }
            else if(hour>=15&&hour<17){
                shichen.index=8;
                shichen.str="15:00-17:00";
            }
            else if(hour>=17&&hour<19){
                shichen.index=9;
                shichen.str="17:00-19:00";
            }
            else if(hour>=19&&hour<21){
                shichen.index=10;
                shichen.str="19:00-21:00";
            }
            else if(hour>=21&&hour<23){
                shichen.index=11;
                shichen.str="21:00-23:00";
            }
            break;
        case 1:
        case 2:
            if(hour>=23||hour<1){
                shichen.index=0;
                shichen.str="Tý"
            }
            else if(hour>=1&&hour<3){
                shichen.index=1;
                shichen.str="Sửu";
            }
            else if(hour>=3&&hour<5){
                shichen.index=2;
                shichen.str="Dần";
            }
            else if(hour>=5&&hour<7){
                shichen.index=3;
                shichen.str="Mão";
            }
            else if(hour>=7&&hour<9){
                shichen.index=4;
                shichen.str="Thìn";
            }
            else if(hour>=9&&hour<11){
                shichen.index=5;
                shichen.str="Tỵ";
            }
            else if(hour>=11&&hour<13){
                shichen.index=6;
                shichen.str="Ngọ";
            }
            else if(hour>=13&&hour<15){
                shichen.index=7;
                shichen.str="Mùi";
            }
            else if(hour>=15&&hour<17){
                shichen.index=8;
                shichen.str="Thân";
            }
            else if(hour>=17&&hour<19){
                shichen.index=9;
                shichen.str="Dậu";
            }
            else if(hour>=19&&hour<21){
                shichen.index=10;
                shichen.str="Tuất";
            }
            else if(hour>=21&&hour<23){
                shichen.index=11;
                shichen.str="Hợi";
            }
            break;
        case 3:
            if(hour>=23||hour<1){
                shichen.index=0;
                shichen.str="23pm to 1am"
            }
            else if(hour>=1&&hour<3){
                shichen.index=1;
                shichen.str="1am to 3am"
            }
            else if(hour>=3&&hour<5){
                shichen.index=2;
                shichen.str="3am to 5am"
            }
            else if(hour>=5&&hour<7){
                shichen.index=3;
                shichen.str="5pm to 7am"
            }
            else if(hour>=7&&hour<9){
                shichen.index=4;
                shichen.str="7pm to 9am"
            }
            else if(hour>=9&&hour<11){
                shichen.index=5;
                shichen.str="9pm to 11am"
            }
            else if(hour>=11&&hour<13){
                shichen.index=6;
                shichen.str="11am to 13pm"
            }
            else if(hour>=13&&hour<15){
                shichen.index=7;
                shichen.str="13pm to 15pm"
            }
            else if(hour>=15&&hour<17){
                shichen.index=8;
                shichen.str="15pm to 17pm"
            }
            else if(hour>=17&&hour<19){
                shichen.index=9;
                shichen.str="17pm to 19pm"
            }
            else if(hour>=19&&hour<21){
                shichen.index=10; 
                shichen.str="19pm to 21pm"
            }
            else if(hour>=21&&hour<23){
                shichen.index=11;
                shichen.str="21pm to 23pm"
            }
            break;
    }



    return shichen;
}

function getShiChens(type,shichen){
    var shichens=new Array();
    var i=0;
    var shichen0=["23:00-1:00","1:00-3:00","3:00-5:00","5:00-7:00","7:00-9:00","9:00-11:00","11:00-13:00","13:00-15:00","15:00-17:00","17:00-19:00","19:00-21:00","21:00-23:00"];
    var shichen1=["Tý","Sửu","Dần","Mão","Thìn","Tỵ","Ngọ","Mùi","Thân","Dậu","Tuất","Hợi"];
    var shichen3=["23pm to 1am","1am to 3am","3am to 5am","5pm to 7am","7pm to 9am","9pm to 11am","11am to 13pm","13pm to 15pm","15pm to 17pm","17pm to 19pm","19pm to 21pm","21pm to 23pm"];
    switch(type){
        case 0:
            for(i=shichen.index;i<12;i++){
                shichens.push(shichen0[i]);
            }
            for(i=0;i<shichen.index;i++){
                shichens.push(shichen0[i]);
            }
            break;
        case 1:
        case 2:
            for(i=shichen.index;i<12;i++){
                shichens.push(shichen1[i]);
            }
            for(i=0;i<shichen.index;i++){
                shichens.push(shichen1[i]);
            }
            break;
        case 3:
            for(i=shichen.index;i<12;i++){
                shichens.push(shichen3[i]);
            }
            for(i=0;i<shichen.index;i++){
                shichens.push(shichen3[i]);
            }
            break;
    }
    return shichens;
}

function getMonthEng(month){
    var monthsEng=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    return monthsEng[month-1];
}



function getWeeks(type,week){
    weeks=[];
    weeksEng=["Sun","Mon","Tues","Wed","Thur","Fri","Sat"];
    var i=0;
    switch(type){
        case 0:
        case 1:
        case 2:
            for(i=week;i<7;i++){
                weeks[i]="Thứ "+numToSimp(i + 2); // Thứ trong tuần
                if(i==6){
                    weeks[i]="SunD"
                }
            }
            for(i=0;i<week;i++){
                weeks[i]="T"+ (numToSimp(i));
            }
            break;
        case 3:
            for(i=week;i<7;i++)
            {
                weeks.push(weeksEng[i]);
            }
            for(i=0;i<week;i++)
            {
                weeks.push(weeksEng[i]);
            }
            break;
    }
    return weeks;
}

function getWeek(type,week){
    weekEng=["Sun","Mon","Tues","Wed","Thur","Fri","Sat"];
    res="";
    switch(type){
        case 0:
        case 1:
        case 2:
            if(week==0){
                res="" // Ngày
            }else{
                res=numToSimp(week);
            }
            break;
        case 3:
            res=weekEng[week];
            break;
    }
    return res;
}

function getHours(type,hour){
    var hours=new Array();
    var i=0;
    switch(type){
        case 0:
        case 3:
            for(i=hour;i<24;i++){
                hours.push(i);
            }
            for(i=0;i<hour;i++){
                hours.push(i);
            }
            break;
        case 1:
            for(i=hour;i<24;i++){
                hours.push(numToSimp(i));
            }
            for(i=0;i<hour;i++){
                hours.push(numToSimp(i));
            }
            break;
        case 2:
            for(i=hour;i<24;i++){
                hours.push(numToTrad(i));
            }
            for(i=0;i<hour;i++){
                hours.push(numToTrad(i));
            }
            break;
    }
    return hours;
}


function getMinutes(type,minute){
    var minutes=new Array();
    var i=0;
    switch(type){
        case 0:
        case 3:
            for(i=minute;i<60;i++){
                minutes.push(i);
            }
            for(i=0;i<minute;i++){
                minutes.push(i);
            }
            break;
        case 1:
            for(i=minute;i<60;i++){
                minutes.push(numToSimp(i));
            }
            for(i=0;i<minute;i++){
                minutes.push(numToSimp(i));
            }
            break;
        case 2:
            for(i=minute;i<60;i++){
                minutes.push(numToTrad(i));
            }
            for(i=0;i<minute;i++){
                minutes.push(numToTrad(i));
            }
            break;
    }
    return minutes;
}


function getSeconds(type,second){
    var seconds=new Array();
    var i=0;
    switch(type){
        case 0:
        case 3:
            for(i=second;i<60;i++){
                seconds.push(i);
            }
            for(i=0;i<second;i++){
                seconds.push(i);
            }
            break;
        case 1:
            for(i=second;i<60;i++){
                seconds.push(numToSimp(i));
            }
            for(i=0;i<second;i++){
                seconds.push(numToSimp(i));
            }
            break;
        case 2:
            for(i=second;i<60;i++){
                seconds.push(numToTrad(i));
            }
            for(i=0;i<second;i++){
                seconds.push(numToTrad(i));
            }
            break;
    }
    return seconds;
}

function isShichen(hour){
    if(hour=="one h"||hour=="three h"||hour=="five h"||hour=="seven h"||hour=="nine h"||hour=="eleven h"||hour=="thirteen h"||hour=="fifteen h"||hour=="seventeen h"||hour=="nineteen h"||hour=="twentyone h"||hour=="twentythree h"
    ||hour=="1 Giờ"||hour=="3 Giờ"||hour=="5 Giờ"||hour=="7 Giờ"||hour=="9 Giờ"||hour=="11 Giờ"||hour=="13 Giờ"||hour=="15 Giờ"||hour=="17 Giờ"||hour=="19 Giờ"||hour=="21 Giờ"||hour=="23 giờ"
    ||hour=="1 Giờ"||hour=="3 Giờ"||hour=="5 Giờ"||hour=="7 Giờ"||hour=="9 Giờ"||hour=="11 Giờ"||hour=="13 Giờ"||hour=="15 Giờ"||hour=="17 Giờ"||hour=="19 Giờ"||hour=="21 Giờ"||hour=="23 giờ"
    ||hour=="1 Giờ"||hour=="3 Giờ"||hour=="5 Giờ"||hour=="7 Giờ"||hour=="9 Giờ"||hour=="11 Giờ"||hour=="13 Giờ"||hour=="15 Giờ"||hour=="17 Giờ"||hour=="19 Giờ"||hour=="21 Giờ"||hour=="23 giờ"
    ||hour=="1 h"||hour=="3 h"||hour=="5 h"||hour=="7 h"||hour=="9 h"||hour=="11 h"||hour=="13 h"||hour=="15 h"||hour=="17 h"||hour=="19 h"||hour=="21 h"||hour=="23 h"){
        return true;
    }
    return false;
}


function updateDays(type,year,month,day){
    var days=new Array();
    var j=1;
    var isLeap=isLeapYear(year);
    switch (type) {
        case 0:
        case 3:
            for(j=day;j<=31;j++)
            {
                days.push(j)
                if(month==2&&isLeap&&j==29){
                    break;
                }
                if(month==2&&!isLeap&&j==28){
                    break;
                }
                if((month==2||month==4||month==6||month==9||month==11)&&j==30){
                    break;
                }

            }
            for(j=1;j<day;j++){
                days.push(j)
            }
            break;
        case 1:
            for(j=1;j<=31;j++)
            {
                days.push(numToSimp(j))
                if(month==2&&isLeap&&j==29){
                    break;
                }
                if(month==2&&!isLeap&&j==28){
                    break;
                }
                if((month==2||month==4||month==6||month==9||month==11)&&j==30){
                    break;
                }

            }

            for(j=1;j<day;j++){
                days.push(numToSimp(j))
            }

            break;
        case 2:
            for(j=1;j<=31;j++)
            {
                days.push(numToTrad(j))
                if(month==2&&isLeap&&j==29){
                    break;
                }
                if(month==2&&!isLeap&&j==28){
                    break;
                }
                if((month==2||month==4||month==6||month==9||month==11)&&j==30){
                    break;
                }

            }

            for(j=1;j<day;j++){
                days.push(numToTrad(j))
            }

            break;
    }
    return days;
}



function getFirstDay(type){
    day=1;
    switch (type) {
        case 1:
            day=numToSimp(day);
            break;
        case 2:
            day=numToTrad(day);
            break;
    }
    return day;
}
