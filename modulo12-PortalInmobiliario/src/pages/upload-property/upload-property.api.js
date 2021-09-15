import Axios from "axios";

const url = `${process.env.BASE_API_URL}/properties`;

export const insertProperty = property =>
    Axios.post(`${url}/${property.id}`, property).then(({ data }) => data);

const equipmentsListUrl = `${process.env.BASE_API_URL}/equipments`;

export const getEquipmentsList = () =>
    Axios.get(`${equipmentsListUrl}`).then(({ data }) => data);

const saleTypeListUrl = `${process.env.BASE_API_URL}/saleTypes`;

export const getSaleTypeList = () =>
    Axios.get(`${saleTypeListUrl}`).then(({ data }) => data);

const provinceListUrl = `${process.env.BASE_API_URL}/provinces`;

export const getProvinceList = () =>
    Axios.get(`${provinceListUrl}`).then(({ data }) => data);