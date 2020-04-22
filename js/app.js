if('serviceWorker' in navigator)
{
    window.addEventListener('load', function(){
        this.navigator.serviceWorker.register('/sw.js')
        .then(function(){
            console.log('ServiceWorker registered!');
        })
        .catch(function(err){
            console.log('serviceWorker failed:(',err);

        });
    });
}