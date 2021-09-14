function autoReply() {
  const interval = 5 // if the script runs every 5 minutes change otherwise
  const daysToSendMessage = [2,4] // 1=Mo, 2=Tu, 3=We, 4=Th, 5=Fr, 6=Sa, 0=Su
  const message = "Hi, Thank you for contacting us. The office is now closed. All emails will be attended to when the office re-opens."
  const date = new Date()
  const day = date.getDay()
  // const hour = date.getHours()
  if (daysToSendMessage.includes(day)) {
    const timeFrom = Math.floor(date.valueOf()/1000) - 60 * interval
    const threads = GmailApp.search('is:inbox after:' + timeFrom)
    for (let i = 0; i < threads.length; i++) {
      threads[i].reply(message)
    }
  }
}

function doGet() {
  return ContentService.createTextOutput("");
}

// Modified code from: https://memberfix.rocks/gmail-office-hours/