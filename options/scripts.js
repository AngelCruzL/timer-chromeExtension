const $nameInput = document.querySelector('#name');
const $saveButton = document.querySelector('#save');
const $timeInput = document.querySelector('#notificationTime');

$saveButton.addEventListener('click', () => {
  const name = $nameInput.value ?? '';
  const notificationTime = $timeInput.value ?? 600;

  chrome.storage.sync.set({name, notificationTime}, () => {
    console.log('Name saved successfully');
  })
})

chrome.storage.sync.get(['name', 'notificationTime'], (data) => {
  $nameInput.value = data.name ?? '';
  $timeInput.value = data.notificationTime ?? 600;
})
