
const shoppingcart=wx.getStorageSync('shoppingcart')||{items:[
      
]}



module.exports={
   addcart(product_id,pname,price){
      const position=shoppingcart.items.findIndex((item)=>{
        return item.pid===product_id;
      })
      if(position===-1){
        shoppingcart.items.push({pid:product_id,name:pname,price:price,count:1})
      }else{
        shoppingcart.items[position].count++
      }
      wx.setStorageSync('shoppingcart',shoppingcart);
      console.log(shoppingcart)
   },
    

   getCartItems(){
     return shoppingcart.items
   },


   addcount(product_id){
     const position = shoppingcart.items.findIndex((item) => {
       return item.pid === product_id;
     })
     shoppingcart.items[position].count++
     wx.setStorageSync('shoppingcart', shoppingcart);
   },


   deccount(product_id){
     const position = shoppingcart.items.findIndex((item) => {
       return item.pid === product_id;
     })
     shoppingcart.items[position].count--
     wx.setStorageSync('shoppingcart', shoppingcart);
   },


   getItemcount(){
        let count=0;
        for(let item of shoppingcart.items){
          count+=item.count
        }
        return count
   },

   getTotal(){
        let sum=0;
        for(let item of shoppingcart.items){
           sum += item.price * item.count;
        }
        return sum
   }
}