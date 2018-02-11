export default function(array) {
    let byId = {};
    let order = [];

    array.forEach(item => {
        byId[item.id] = item;
        order.push(item.id);
    });

    return {
        byId,
        order
    };
}
