function receiveData(key) {
    return JSON.parse(localStorage.getItem(key))
}

let intialData = receiveData('test')

window.addEventListener('storage', () => {
    const data = receiveDataFromLocalStorage('test');
    console.log('Received data:', data);
  });