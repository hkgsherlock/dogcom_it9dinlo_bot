"use strict";

const axios = require('axios');

const { ACCESS_TOKEN } = require("../api_keys/facebook.json");

const BASE_URL = "https://graph.facebook.com/v2.9/"
const PAGES_ID = {
    'itdogcom': '998741260294270'
};

// from api_keys.facebook_token import ACCESS_TOKEN

const requestFb = (method, params, callback) => axios.get(`${BASE_URL}${method}`, {
    params: {
        access_token: 
    }
});

module.exports = {
    getPageFeed: (page) => requestFb(`${PAGES_ID[page]}/posts`, {
        params: {
            'fields': 'created_time,id',
            'since': parseInt(Date.now() / 1000) - 86400,  // within 24 hrs
            'limit': 100,
        },
    }),
    getPost: (id) => requestFb(String(id), {
        params: {
            'fields': 'created_time,message,id,'
                + 'reactions.type(LIKE).limit(0).summary(total_count).as(reactions_like),'
                + 'reactions.type(LOVE).limit(0).summary(total_count).as(reactions_love),'
                + 'reactions.type(WOW).limit(0).summary(total_count).as(reactions_wow),'
                + 'reactions.type(HAHA).limit(0).summary(total_count).as(reactions_haha),'
                + 'reactions.type(SAD).limit(0).summary(total_count).as(reactions_sad),'
                + 'reactions.type(ANGRY).limit(0).summary(total_count).as(reactions_angry),'
                + 'comments.limit(0).summary(total_count).as(comments_count),shares',
        },
    }),
};