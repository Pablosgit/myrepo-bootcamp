import Axios from "axios";

const url = `${process.env.BASE_API_URL}/transfer`;

export const insertTranfer = transfer =>
    Axios.post(`${url}/${transfer.id}`, transfer).then(({ data }) => data);

const urlAccount = `${process.env.BASE_API_URL}/account`;

export const getAccount = () =>
    Axios.get(`${urlAccount}`).then(({ data }) => data);