// let todayDate = document.getElementById('today-date').toString();
const d = new Date();
document.getElementById('today-date').innerHTML = `${d.getDate()} : ${d.getMonth()} : ${d.getFullYear()}`;

if(d.getDate() === 12 || d.getMonth() === 9){
    document.getElementById("my-statement").innerHTML = "Today's moon is full moon"
    document.getElementById("explanation").innerHTML = "It can be relationship, project, activity and a new chapter"
}
// let day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case  6:
//     day = "Saturday";
// }
// document.getElementById("my-statement").innerHTML = "Today's moon is " + day;