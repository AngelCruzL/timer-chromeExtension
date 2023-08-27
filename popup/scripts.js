const $time = document.getElementById('time')
const $name = document.getElementById('name')
const $timer = document.getElementById('timer')

chrome.storage.sync.get(['name'], (data) => {
  const name = data.name ?? ''
  $name.textContent = `Hello ${name}`
})

updateTimeElements()
setInterval(updateTimeElements, 1000)

function updateTimeElements() {
  const currentTime = new Date().toLocaleTimeString()
  $time.textContent = `The current time is ${currentTime}`

  chrome.storage.local.get(['timer'], (data) => {
    const time = data.timer ?? 0
    $timer.textContent = `The timer has run for ${time} seconds`
  })
}