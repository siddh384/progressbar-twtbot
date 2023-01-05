require('dotenv').config()
const {TwitterApi} = require('twitter-api-v2')

const client = new TwitterApi({
    appKey: process.env.APPKEY,
    appSecret: process.env.APPSECRET,
    accessToken: process.env.ACCESSTOKEN,
    accessSecret: process.env.ACCESS_SECRET
})

function percentageOfYearPassed() {
  // Get the current date
  const currentDate = new Date();

  // Get the current year
  const currentYear = currentDate.getFullYear();

  // Get the current month (0-based, so 0 = January)
  const currentMonth = currentDate.getMonth();

  // Get the current day of the month
  const currentDay = currentDate.getDate();

  // Calculate the total number of days that have passed so far this year
  const daysPassed = (currentMonth * 30) + currentDay;

  // Calculate the total number of days in the year
  const daysInYear = 365;

  // Calculate the percentage of the year that has passed
  const percentage = (daysPassed / daysInYear) * 100;

  // Return the percentage
  return percentage;
}






setInterval(()=>{
  client.v2.tweet(`The year has progressed by ${percentageOfYearPassed()}`).then((val) => {
    console.log(val)
  }).catch(err => console.log(err))
},86400*1000)

 




