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

    chrome.storage.sync.get(['notificationTime'], data => {
      const notificationTime = data.notificationTime ?? 600
      if (time % notificationTime === 0) {
        this.registration.showNotification('Chrome Timer Extension', {
          body: `You have been using Chrome for ${notificationTime} seconds`,
          icon: 'icon.png'
        })
      }
    })
  })
})