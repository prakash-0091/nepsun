
this.addEventListener('push',event=>{
    event.waitUntil(
        this.registration.showNotification('Nepsun',{
            body:'You will have useful updates everyday',
        })
    )
})