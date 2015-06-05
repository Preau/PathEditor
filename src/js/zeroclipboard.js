angular.element(document).ready(function () {
    //ZeroClipboard
    var zcb = new ZeroClipboard(document.getElementById('copy-clipboard-button'));
    zcb.on('ready', function (event) {
        zcb.on('copy', function (event) {
            event.clipboardData.setData('text/plain', document.getElementById('path-string-field').value);
        });
        zcb.on('aftercopy', function(event) {
            event.target.classList.add('button-good');
            setTimeout(function() {
                event.target.classList.remove('button-good');
            }, 1000);
        });
    });
    zcb.on('error', function (event) {
        console.log('ZeroClipboard error of type "' + event.name + '": ' + event.message);
        ZeroClipboard.destroy();
    });
});