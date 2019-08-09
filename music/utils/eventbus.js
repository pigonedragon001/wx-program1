const events={};

module.exports={
    on(eventName,callback){
      let callbacklist=events[eventName];
      if(!callbacklist){
         callbacklist=[];
      }
      callbacklist.push(callback);
      events[eventName]=callbacklist;

      return{
        cancle(){
          let position=callbacklist.indexof(callback);
          callbacklist.splice(position,1)
        }
      }
    },

    emit(eventName, data) {
    const callbackList = events[eventName];
    if (callbackList) {
      for (let callback of callbackList) {
        callback(data);
      }
    }
  }
}