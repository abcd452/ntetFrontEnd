import axios from 'axios'
export const type = 'showInfoAction';

const showInfoAction = (numcel) => {
    axios.get(`profile?id=${numcel}`,
    {
        token: localStorage.getItem(userInfo).token
    }).then((res) => {
        return({
            type,
            payload: {
                res
            }    
        });
    }).catch((err) => {
        console.log(err);
        return({
            type,
            payload: {}
        });
    });
};

export default showInfoAction; 