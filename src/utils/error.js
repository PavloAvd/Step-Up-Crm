const ERROR_CODES = {
    'auth/user-not-found' : 'Немає користувача з такою поштою',
    'auth/wrong-password' : 'Неправильний пароль',
    auth: 'Please LogIn'
}
export function error(code) {
    return ERROR_CODES[code] ? ERROR_CODES[code] : 'Unknown error'
}
