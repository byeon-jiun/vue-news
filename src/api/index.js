import axios from "axios";

const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

async function fetchNewsList() {
    try {
        return await axios.get(`${config.baseUrl}news/1.json`);
    } catch (err) {
        console.log(err)
    }
}

async function fetchAskList() {
    try {
        return await axios.get(`${config.baseUrl}ask/1.json`);
    } catch (err) {
        console.log(err)
    }
}

async function fetchJobsList() {
    try {
        return await axios.get(`${config.baseUrl}jobs/1.json`);
    } catch (err) {
        console.log(err)
    }

}

async function fetchUserInfo(username) {
    try {
        return await axios.get(`${config.baseUrl}user/${username}.json`);
    } catch (err) {
        console.log(err)
    }

}

async function fetchItemDetail(itemid) {
    try {
        return await axios.get(`${config.baseUrl}item/${itemid}.json`);
    } catch (err) {
        console.log(err)
    }

}

async function fetchAllList(pageName) {
    try {
        return await axios.get(`${config.baseUrl}${pageName}/1.json`);
    } catch (err) {
        console.log(err)
    }

}
export {
    fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchItemDetail, fetchAllList
}