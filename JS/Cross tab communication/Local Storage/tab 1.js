function sendData(key, data) {
    localStorage.setItem(key, JSON.stringify(data))

    const event = new Event('storage')
    window.dispatchEvent(event)
}


sendData('test', {massage: 'test is it working or not'})