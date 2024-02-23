const users = [];

//Add user to list
const addUser = ({name, roomId, userId, host, presenter}) => {
   const user = {name, roomId, userId, host, presenter};
   users.push(user);

   return users.filter((eachUser) => (
      eachUser.roomId === roomId
   ))
}


//Remove user to list
// findIndex() method is used to find the index of the user in the users array where the userId matches the given id. If there is no such user, findIndex() will return -1.
const RemoveUser = (id) => {
    const index = users.findIndex((eachUser) => (
        eachUser.userId === id
    ))

    //If the index is found (i.e., it's not -1), the function uses the splice()
    // method to remove one element from the users array at the found index. splice()
    // modifies the original array and returns an array containing the removed element(s).
    // In this case, since only one user is being removed, [0] is appended to the end of splice(index, 1) to extract the removed user.
    if(index !== -1) {
        return users.splice(index, 1)[0];
    }
 }
 

//Get user from the list 
const getUser = (id) => {
    return users.find((eachUser) => (
        eachUser.userId === id
    ))
}


//Get All User from the room 
const getAllUser = (id) => {
    return users.filter((eachUser) => (
        eachUser.roomId === id
    ))
}

module.exports = {
    addUser,
    RemoveUser,
    getUser,
    getAllUser
}