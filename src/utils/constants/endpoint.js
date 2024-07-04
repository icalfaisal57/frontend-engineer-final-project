const ENDPOINTS = {
    DETAIL(detail) {
        return `https://covid-fe-2023.vercel.app/api/${detail}.json`;
    },
    GLOBALS : `https://covid-fe-2023.vercel.app/api/global.json`
};

export default ENDPOINTS;
