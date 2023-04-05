const controller = {
    name: 'bussiness-title'
}
const { REACT_APP_BASE_URL } = process.env;

export const businessTitle = {
    getAll: `${REACT_APP_BASE_URL}${controller.name}`,
    create: `${REACT_APP_BASE_URL}${controller.name}`,
    deletion: `${REACT_APP_BASE_URL}${controller.name}`,
}