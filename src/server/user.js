const users = [];

const addUser = ({ id, name, room }) => {
    const user = { id, name, room };
    users.push(user);
    return user;
};

export { addUser };