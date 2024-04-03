# 

To use command--> import express from "express"  we have to use modulejs not commonjs of js 

commonjs--> uses synchronous approach

modulejs--> uses asynchronous approach 

So add --> `"type":"module",`  command in package.json file



CORS --> cross origin resource sharing

cors ni error means url check thay k ander aave che eeghar no che k bar no 

bar no hoi to aa error aave ena mate vite config file maa proxy add kari devani

```
server:{
  proxy:{
    '/api':'http://localhost:5000', // api ni harre append thy jase ane proxy lagi jase k same origin thi request aav che 
  }
}
```
ka pachi whitelisting karvu pade

