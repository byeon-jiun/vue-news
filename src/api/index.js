import axios from "axios";
import { interceptor } from './common/interceptors'
const base = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

function createInstance() {
    const instance = axios.create({
        baseURL: process.env.VUE_APP_API_URL,
        /*headers: {
            Authorization: 'test1234',
        }*/
    })
    return interceptor(instance);
}
const instance = createInstance();

async function fetchNewsList() {
    try {
        return await axios.get(`${base.baseUrl}news/1.json`);
    } catch (err) {
        console.log(err)
    }
}

async function fetchAskList() {
    try {
        return await axios.get(`${base.baseUrl}ask/1.json`);
    } catch (err) {
        console.log(err)
    }
}

async function fetchJobsList() {
    try {
        return await axios.get(`${base.baseUrl}jobs/1.json`);
    } catch (err) {
        console.log(err)
    }

}

async function fetchUserInfo(username) {
    try {
        return await axios.get(`${base.baseUrl}user/${username}.json`);
    } catch (err) {
        console.log(err)
    }

}

async function fetchItemDetail(itemid) {
    try {
        return await axios.get(`${base.baseUrl}item/${itemid}.json`);
    } catch (err) {
        console.log(err)
    }

}

async function fetchAllList(pageName) {
    try {
        return await instance.get(`${pageName}/1.json`);
    } catch (err) {
        console.log(err)
    }

}
export {
    fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchItemDetail, fetchAllList
}