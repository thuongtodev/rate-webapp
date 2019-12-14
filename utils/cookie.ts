import Cookies from 'js-cookie';

export enum Cookie {
  AccessToken = 'token',
  CompanyID = 'companyId',
}

export const setCookie = (key: Cookie, value: string | object, options?: object) => {
  return Cookies.set(key, value, options);
};

export const getCookie = (key: Cookie): string => {
  const cookieValue = Cookies.get(key);
  if (cookieValue) {
    return cookieValue;
  }
  return '';
};

export const getCompanyId = () => {
  return Cookies.get(Cookie.CompanyID) || '';
};

export const deleteCookie = (key: Cookie) => Cookies.remove(key);
