var startApp = function() {
    gapi.load('auth2', function(){
        auth2 = gapi.auth2.init({
            client_id:'436389233409-qqsr48jg1dqtnr0pgt9eoccjkhqvdb6g.apps.googleusercontent.com',
            scope: 'openid profile email',
        }).then(function(){
            retrieve();
        });
    });
}

var retrieve = function() {
    let auth2 = gapi.auth2.getAuthInstance();
    let profile = auth2.currentUser.get().getBasicProfile();
    document.getElementById('email_id').innerHTML = profile.getEmail();
    document.getElementById('nama-lengkap').innerHTML = profile.getName();
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function(){
        console.log('User signed out');
        gotoFront();
    })
}

function gotoFront(){
    window.location.replace("http://localhost:9000")
};

startApp();