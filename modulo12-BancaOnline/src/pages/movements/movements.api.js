import Axios from "axios";

const url = `${process.env.BASE_API_URL}/movements`;

// forma 1: Filtra los datos con la url
//export const getMovement = id => Axios.get(`${url}/?accountId=${id}`).then(({data}) => data);
//export const getMovement = id => Axios.get(url,{ params: { accountId: id }}).then(({data}) => data);

// forma 2: obtiene tos los datos y filtra despues:
export const getMovement = () => Axios.get(url).then(({data}) => data);

const urlAccount = `${process.env.BASE_API_URL}/account`;

export const getAccount = id => Axios.get(`${urlAccount}/${id}`).then(({ data }) => data);
