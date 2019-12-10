const express=require('express')
const app=express();


// 响应首页
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/www/index.html');
})
// 响应静态资源
// app.use('/js', express.static('./www/js'));
// app.use('/css', express.static('./www/css'));
// app.use('/data', express.static('./www/data'));
// app.use('/static', express.static('./www/static'));
// app.use('/img', express.static('./www/img'));
// app.use('/font', express.static('./www/font'));
// app.get('/favicon.ico', (req, res) => {
//     res.sendFile(__dirname + '/www/favicon.ico');
// })

// app.use((req, res) => {
//     res.sendFile(__dirname + '/www/index.html');
// })






app.listen('3001', (error) => {
    if (!error) {
        console.log('服务器启动成功');
    } else {
        console.log('服务器启动失败：');
        console.log(error);
    }
})



app.get('/api/home/npsList',(req,res)=>{
    res.json(
    require('./data/data.json'));
}   )

app.get('/api/home/range/1', (req, res) => {
    res.json(
        require('./data/range1.json'));
})

app.get('/api/home/range/2', (req, res) => {
    res.json(
        require('./data/range2.json'));
})

app.get('/api/home/range/3', (req, res) => {
    res.json(
        require('./data/range3.json'));
})

app.get('/api/home/range/4', (req, res) => {
    res.json(
        require('./data/range4.json'));
})

app.get('/api/home/range/5', (req, res) => {
    res.json(
        require('./data/range5.json'));
})

app.get('/api/home/range/6', (req, res) => {
    res.json(
        require('./data/range6.json'));
})

app.get('/api/home/range/detail/1', (req, res) => {
    res.json(
        require('./data/detail.json'));

})








