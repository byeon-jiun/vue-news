function saveAuthToCookie(value) {
    document.cookie = `auth=${value}`
}

function saveUserToCookie(value) {
    document.cookie = `user=${value}`
}

function getAuthFromCookie() {
    return document.cookie.replace(
        /(?:(?:^|.*;\s*)auth\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
    );
}

function getUserFromCookie() {
    return document.cookie.replace(
        /(?:(?:^|.*;\s*)user\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
    );
}

export {saveAuthToCookie, saveUserToCookie, getUserFromCookie, getAuthFromCookie}