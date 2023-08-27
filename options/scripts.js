const nameInput = document.querySelector('#name');
const saveButton = document.querySelector('#save');

saveButton.addEventListener('click', () => {
  const name = nameInput.value ?? '';
  chrome.storage.sync.set({name}, () => {
    console.log('Name saved successfully');
  })
})

chrome.storage.sync.get(['name'], (data) => {
  nameInput.value = data.name ?? '';
})
