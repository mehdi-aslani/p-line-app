import axios from "axios";
import Cookies from "js-cookie";

export const url = () => {
  return window.location.host.indexOf("localhost:3000") >= 0
    ? "http://localhost:8080"
    : "";
};

export const getRequest = async (path) => {
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${
        getCookies("token") === undefined ? "" : getCookies("token")
      }`,
    },
  };
  const response = await axios.get(url() + path, requestOptions);
  //const data = await response.json();
  return response?.data;
};

export const postRequest = async (path, data) => {
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${
        getCookies("token") === undefined ? "" : getCookies("token")
      }`,
    },
  };
  const response = await axios.post(url() + path, data, requestOptions);
  //const result = await response.json();
  return response?.data;
};

export const uploadFile = async (path, file) => {
  const formData = new FormData();
  formData.append("file", file);
  const requestOptions = {
    method: "POST",
    headers: {
      //"Content-Type": "multipart/form-data",
      Authorization: `Bearer ${
        getCookies("token") === undefined ? "" : getCookies("token")
      }`,
    },
    body: formData,
  };
  const response = await fetch(url() + path, requestOptions);
  //const result = await response.json();
  return response;
};

export const setCookies = (k, v) => {
  Cookies.set(k, v);
};
export const getCookies = (k) => {
  return Cookies.get(k);
};
export const removeCookies = (k) => {
  Cookies.remove(k);
};

export const stringToLabel = (string) => {
  try {
    let result = "";
    const items = string.split("_");
    items.forEach((element) => {
      result += element.charAt(0).toUpperCase() + element.slice(1) + " ";
    });
    return result.trim();
  } catch (e) {
    return "";
  }
};
