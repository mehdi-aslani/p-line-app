import axios from "axios";
import Cookies from "js-cookie";

export default class PlineTools {
  static backendUrl = () => {
    return `${window.location.protocol}//${window.location.hostname}:8080`;
  };

  static getRequest = (path) => {
    const requestOptions = {
      validateStatus: function (status) {
        return status > 0;
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          PlineTools.getCookies("token") === undefined
            ? ""
            : PlineTools.getCookies("token")
        }`,
      },
    };
    const response = axios.get(PlineTools.backendUrl() + path, requestOptions);
    return response;
  };

  static postRequest = async (path, data) => {
    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          PlineTools.getCookies("token") === undefined
            ? ""
            : PlineTools.getCookies("token")
        }`,
      },
    };
    const response = await axios.post(
      PlineTools.backendUrl() + path,
      data,
      requestOptions
    );
    //const result = await response.json();
    return response?.data;
  };

  static uploadFile = async (path, file) => {
    const formData = new FormData();
    formData.append("file", file);
    const requestOptions = {
      method: "POST",
      headers: {
        //"Content-Type": "multipart/form-data",
        Authorization: `Bearer ${
          PlineTools.PlineTools.getCookies("token") === undefined
            ? ""
            : PlineTools.getCookies("token")
        }`,
      },
      body: formData,
    };
    const response = await fetch(
      PlineTools.backendUrl() + path,
      requestOptions
    );
    //const result = await response.json();
    return response;
  };

  static setCookies = (k, v) => {
    Cookies.set(k, v);
  };
  static getCookies = (k) => {
    return Cookies.get(k);
  };
  static removeCookies = (k) => {
    Cookies.remove(k);
  };

  static stringToLabel = (string) => {
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

  static formDataToObject(target) {
    const formData = new FormData(target);
    var object = {};
    formData.forEach(function (value, key) {
      object[key] = value;
    });
    return object;
  }
}
