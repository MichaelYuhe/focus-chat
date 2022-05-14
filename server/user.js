const users = [];

const userJoin = ({ id, name, room }) => {
    const user = { id, name, room };

    users.push(user);

    return user;
};

const userEnter = ({ id, name }) => {
    const user = { id, name };

    users.push(user);

    return user;
};

const getCurrentUser = (id) => {
    return users.find(user => user.id === id);
};

const userLeave = (id) => {
    const index = users.findIndex(user => user.id === id);

    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
};

const getRoomUsers = (room) => {
    return users.filter(user => user.room === room);
};

exports.modules = {
    userJoin,
    userEnter,
    getCurrentUser,
    userLeave,
    getRoomUsers
};
