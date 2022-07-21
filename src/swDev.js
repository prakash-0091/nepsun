
// {
//     "subject" : "mailto: <prakashtaz000@gmail.com>",
//     "publicKey" : "BNnzXsbVg0CeuWXZZ4TDGZRfFXuZ4rj-MPulToageDrm2P6Hvyhcl1hmQHiC9AxT3LyGFYrLSY9eStkgWm75x-0",
//     "privateKey" : "5f1UXnscgLaQkluzKQezvk60z4YGoy6oQ5YiRTBnTuQ"
//     }


function urlBase64ToUnit8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4)
    const base64 = (base64String + padding)
        .replace(/-/g, '+')
        .replace(/_/g, '/')

    const rawData = window.atob(base64)
    const outputArray = new Uint8Array(rawData.length)

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt[i]
    }

    console.log(outputArray)
    return outputArray
}


function determineAppServerKey(){
    let vapidPublicKey = 'BNnzXsbVg0CeuWXZZ4TDGZRfFXuZ4rj-MPulToageDrm2P6Hvyhcl1hmQHiC9AxT3LyGFYrLSY9eStkgWm75x-0'
    return vapidPublicKey
}

function swDev(){
    let swUrl = `${process.env.PUBLIC_URL}/sw.js`

    let vapidPublicKey = 'BNnzXsbVg0CeuWXZZ4TDGZRfFXuZ4rj-MPulToageDrm2P6Hvyhcl1hmQHiC9AxT3LyGFYrLSY9eStkgWm75x-0'


    navigator.serviceWorker.register(swUrl).then(response => {
        console.warn('response', response)
        return response.pushManager.getSubscription()
            .then(subscription => {
                return response.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: vapidPublicKey
                })
            })
    })
}

export default swDev