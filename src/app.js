export const dva = {
    config: {
        onError(err) {
            err.preventDefault();
            console.error(err.message);
        },
        initialState: {
            products: [
                { id: 1, name: 'dva' },
                { id: 2, name: 'antd' }
            ]
        }
    },

};