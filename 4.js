const axios = require("axios");
const { JSDOM } = require("jsdom");

const fetchImgTag = async (url) => {
  try {
    const res = await axios.get(url);
    const dom = new JSDOM(res.data);
    const imgTag = dom.window.document.querySelectorAll("img");
    return imgTag;
  } catch (e) {
    throw new Error("please check url validity");
  }
};

const fetch = async (url) => {
  try {
    const imgTag = await fetchImgTag(url);
    for (let i = 0; i < imgTag.length; i++) {
      console.log("URL : " + imgTag[i].getAttribute("src"));
      console.log("size : " + imgTag[i].sizes);
    }
  } catch (e) {
    throw new Error("error reading data");
  }
};

fetch("http://www.iznes.io");
