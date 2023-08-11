export const setCookie = (cookieName: string, cookieValue: string, hoursToExpire: number) => {
    let date = new Date();
    date.setTime(date.getTime() + (hoursToExpire * 60 * 60 * 1000));
    document.cookie = cookieName + " = " + cookieValue + "; expires = " + date.toLocaleString();
}

export const getCookie = (cookieName: string) => {
    let name = cookieName + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

export const deleteCookie = (cookieName: string, path?: string, domain?: string) => {
    if (path === undefined) {
        path = "/"
    }
    if (domain === undefined) {
        domain = location.hostname
    }
    if (getCookie(cookieName)) {
        document.cookie = cookieName + "=" +
            ((path) ? ";path=" + path : "") +
            ((domain) ? ";domain=" + domain : "") +
            ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
    }
}