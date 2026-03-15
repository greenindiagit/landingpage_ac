export const BASE_URL = import.meta.env.VITE_API_SERVER_BASE_URL;

const apis = {
  dashboard: {
    get: `${BASE_URL}/api/v1/enquiries/enquiry`,
  },
  enquiry: {
    create: `${BASE_URL}/api/v1/enquiries/enquiry`,
    get: `${BASE_URL}/api/v1/enquiries/enquiry`,
    update: `${BASE_URL}/api/v1/enquiries/enquiry`,
    delete: `${BASE_URL}/api/v1/enquiries/enquiry`,
  },
};


export default apis;
