const express = require("express");
const app = express();

const port = 8080;

app.get('/callback', (req, res) => 
{
    res.json({
        
    });
});

app.listen(port, () => 
{
    console.log(`${port}포트에서 서버 시작`);
}); 