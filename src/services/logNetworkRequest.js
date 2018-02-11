const logNetworkRequest = (...args) => {
    const url = args[0];
    const params = args[1];

    console.log(`Request to ${url}`);
    console.log(params);
};

export default logNetworkRequest;
