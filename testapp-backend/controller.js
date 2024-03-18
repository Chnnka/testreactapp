const users=[
  {
    id:1,
    name:'name1'
  },
  {
    id:1,
    name:'name2'
  },
];

const getUsers=(callBack)=>{
  callBack(users);
}

const getUsersById = (id,callBack)=>{
  const user =users.find(user=>user.id==id);
  callBack(user);
}

exports.getUsers=getUsers;
exports.getUsersById=getUsersById;