chrome.alarms.create({
  periodInMinutes: 1 / 60
})

chrome.alarms.onAlarm.addListener(alarm => {
  chrome.storage.local.get(['timer'], data => {
    const time = data.timer ?? 0
    chrome.storage.local.set({
      timer: time + 1
    })

    chrome.action.setBadgeText({text: `${time + 1}`})

    if (time % 600 === 0) {
      this.registration.showNotification('Chrome Timer Extension', {
        body: 'You have been using Chrome for 10 minutes',
        icon: 'icon.png'
      })
    }
  })
})