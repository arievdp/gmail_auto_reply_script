function autoReply() {
  const interval = 5 // if the script runs every 5 minutes change otherwise
  const message = "Thanks for emailing Streamside Organics.\n\nIf you are emailing about your veggie box delivery, please note that whilst we try to get all boxes delivered by a reasonable time some boxes may be delivered up until 9pm.\n\nIf you have not received your box by 9pm please let us know by email.\n\nWe will follow up first thing in the morning.\n\nThanks for supporting your local farmers.\n\nStreamside Organics"
  const date = new Date()
  const day = date.getDay()
  const hour = date.getHours()
  if (day === 4 && hour >= 17 || day === 6) { // 1=Mo, 2=Tu, 3=We, 4=Th, 5=Fr, 6=Sa, 0=Su
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