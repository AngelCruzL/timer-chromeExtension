const timeElement$ = document.getElementById('time')
const nameElement$ = document.getElementById('name')

const currentTime = new Date().toLocaleTimeString()
timeElement$.textContent = `The current time is ${currentTime}`

chrome.action.setBadgeText({text: 'TIME'})

chrome.storage.sync.get(['name'], (data) => {
  const name = data.name ?? ''
  nameElement$.textContent = `Hello ${name}`
})