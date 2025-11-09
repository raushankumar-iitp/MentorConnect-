const { spawn } = require('child_process');
const path = require('path');

console.log('Starting MentorConnect development servers...');

// Start backend server
const backend = spawn('npm', ['run', 'server'], {
  cwd: path.join(__dirname, 'server'),
  stdio: 'inherit',
  shell: true
});

// Start frontend server
const frontend = spawn('npm', ['start'], {
  cwd: path.join(__dirname, 'client'),
  stdio: 'inherit',
  shell: true
});

// Handle process termination
process.on('SIGINT', () => {
  console.log('\nShutting down development servers...');
  backend.kill();
  frontend.kill();
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\nShutting down development servers...');
  backend.kill();
  frontend.kill();
  process.exit(0);
});