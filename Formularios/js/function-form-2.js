window.addEventListener('load', function () {
    const formAcces = document.getElementById('formAcces');
    const user = document.getElementById('user');
    const password = document.getElementById('password');   
    const userWarnings = document.getElementById('userWarnings');
     // const changePassword = document.getElementById('changePassword');
    // const registerUser = document.getElementById('registerUser')

    formAcces.addEventListener('submit', function (evento) {
        evento.preventDefault();
        let us = user.value;
        let key = password.value

        let users = ['bruno', 'vitor', 'thiago', 'vanessa', 'andre', 'flavia', 'davi'];
        let keys = ['leandro', 'hugo', 'augusto', 'thais', 'felipe', 'carolina', 'miguel'];

        let controlAcces = users.indexOf(us);
        if (controlAcces >= 0){ // Correct user
            if(keys[controlAcces] === key){ //Correct Password
                
                userWarnings.innerHTML = '<h4 class="correcto"> Welcome back ' + us + '!' + '</h4>'
            }

            else{
                userWarnings.innerHTML = '<p class="error">Incorrect password.</p>'
            }


        } else { // User was not found

            userWarnings.innerHTML = '<p class="noregistrado">User not found</p>'

        }
    });
    $('#formAcces').validate().text().css(' text-align: center;');
});

