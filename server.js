const http = require('http');

const PORT = process.env.PORT || 8080;
const COLOR = process.env.COLOR || 'blue';
const VERSION = 'V1';

http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf=8' });
	res.end(`[${VERSION}] 현재 응답 서버 식별: ${COLOR} (포트: ${PORT}\n`);
}).listen(PORT, () => {
	console.log(`서버 가동 완료 (PORT: ${PORT})`);
});