const express=require('express');
const jwt=require('jsonwebtoken');
const bodyParse=require('body-parser');
const http = require('http');
const path=require('path');
const cookieParser = require('cookie-parser')
const app=express();
app.use(bodyParse.json());
app.use(cookieParser());


const mock=require('./mock.js');
const mockuser=require('./mockuser.js');


app.use('static',express.static(path.join(__dirname, 'public')));
app.get('/api/getproducts',function(req,res){
    const pageSize = Number(req.query.pageSize);
    const pageNo = Number(req.query.pageNo);

    const offset = pageSize * (pageNo - 1);

    res.send({
        products: mock.getProducts(pageSize, offset)
    });
});

  app.get('/api/getdetail',function(req,res){
       const pid=req.query.pid;
       const detail=mock.getProductDetail(pid);
       if (detail) {
        res.send({
            productDetail: detail
        })
    } else {
        res.send({
            msg: '未发布',
            productDetail: null
        })
    }
  });


  app.post('/api/login',function(req,res){
        const {loginName,password}=req.body;
        const user=mockuser.login(loginName,password);

        if(user){
            var token=jwt.sign(user,'123456');
            res.send({
                status:10000,
                data:{
                    userID:user.id,
                    userName:user.name,
                    token:token
                }
            })
        }else{
            res.send({
                status:10001
            })
        }
  });

  app.get('/api/getmessage',function(req,res){
      const userId=req.query.userId;
      console.log('cookie',req.cookies)
      
      if(!req.cookies.token){
          res.send({
              status:13000,
              msg:'未登陆，没有权限'
          });
          return;
      }

      jwt.verify(req.cookies.token,'123456',function(err,user){
          if(err){
              res.send({
                  status:14000,
                  msg:'token失效'
              });
              return;
          }


        if(user.id!==userId){
            res.send({
                status:15000,
                msg:'不要盗取他人信息'
            });
            return
        }


           user = mockuser.getUser(userId);
        if(user){
            res.send({
                status:10000,
                userId:user.id,
                userName: user.name,
                gender: user.gender
            })
        }else{
            res.send({
                status:12000
            })
        }

      })
  })



app.listen(3000,function(err){
    if(err){
        console.log(err)
    }
    console.log('server is running')
})