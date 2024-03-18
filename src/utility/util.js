import { BASE_URL } from "../constants/constants";

export const isBaseUrl = () => {
    return window.location.href === BASE_URL;
}

export const setCookie = (key, value, expiresInMinutes) => {
    const date = new Date();
    date.setMinutes(date.getMinutes() + expiresInMinutes);
    document.cookie = `${key}=${value}; expires=${date.toUTCString()}`;
};

export const getCookie = (name) => {
    const cookies = document.cookie.split('; ');
    const cookie = cookies.find(cookie => cookie.startsWith(`${name}=`));
    if (cookie) {
        return cookie.split('=')[1];
    }
    return null;
};