import http from 'http';


let num1;
let num2;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    res.write("<h1>heloo</h1>")
    res.write(`
    <form action="/add" method="POST">
        <input type="number" name="num1" />
        <input type="number" name="num2" />
        <button type="submit">Add</button>
    </form>
    `);
    
    if (req.url === '/add' && req.method === 'POST') {
        const body = [];    
        req.on('data', (chunk) => { 
            body.push(chunk);
        }).on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const messages = new URLSearchParams(parsedBody) 
            const message = Object.fromEntries(messages)
            num1 = message.num1
            num2 = message.num2
            const sum = Number(num1) + Number(num2);
            res.end(`The sum of ${num1} and ${num2} is ${sum}`);
        });  
    }
});

server.listen(3000, () => { 
    console.log('Server running on port 3000');
}); 