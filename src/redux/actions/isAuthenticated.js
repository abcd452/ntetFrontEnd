export const type = 'isAuthenticated';


const isAuthenticated = (user) => {
    localStorage.setItem('userInfo',user);
    return {type, payload: user};
};

export default isAuthenticated;