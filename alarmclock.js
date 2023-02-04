console.log("It is tut54 where will learn to create an alarm clock");    



// Adding an Event listener to the submit button
const alarmSubmit = document.getElementById('alarmSubmit');
alarmSubmit.addEventListener('click',setAlarm);

var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');


// Function to play the alarm ringtone
function ringBell(){
    audio.play();
}



// This function will run whenever the alarm is set from the UI
function setAlarm(e){
    e.preventDefault();
    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value);
    console.log(`Setting Alarm for ${alarmDate}...`);
    now = new Date();
    

    let timetoAlarm = alarmDate - now                        // Result will be in milliseconds
    console.log(timetoAlarm);                            
    if(timetoAlarm>=0){
        setTimeout(() => {
        console.log('Ringing Now');
        ringBell();

        }, timetoAlarm);                                     // setTimeout function vaneko etti samay paxi kaam hunxa
    }

}


// Homework : Use regular expression for the input box of the alarm
// 2023-01-28 23:30:45     --> 10:30 PM

validDate = false;
let alarm = document.getElementById('alarm');
alarm.addEventListener('blur',()=>{
    console.log('Alarm is blurred');
  //  let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let regex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    let str = alarm.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log('Your Date format is valid.');   
        alarm.classList.remove('is-invalid');
        validDate = true;
    }
    else{
        console.log('Your Date format is not valid.');
        alarm.classList.add('is-invalid'); 
        validDate = false;  
    }
})