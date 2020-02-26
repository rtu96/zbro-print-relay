export default {
    development: process.env.NODE_ENV == 'development',
    printers: [
        {
            name: 'Test Printer',
            address: '123123',
        }
    ]
};
