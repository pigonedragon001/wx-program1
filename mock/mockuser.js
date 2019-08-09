const users=[
           {id:'111', login_name:'zhang',name:'张三',password:'123',gender:'男',age:18},
           {id:'222', login_name:'wang',name:'王五',password:'456',gender:'女',age:18},
           {id:'333', login_name:'li',name:'李四',password:'789',gender:'男',age:28}
          ]
      
          
module.exports={
    login(loginName,password){
        const position=users.findIndex((user)=>{
            return loginName===user.login_name
        });
        if(position>-1){
            return users[position];
        }
        return null;
    },

    getUser(userId) {
        const position = users.findIndex((user) => {
            return user.id === userId
        });

        return users[position];
    }
}