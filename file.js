const fs = require('fs');

// Read file synchronously
try {
  const data = fs.readFileSync('file.txt', 'utf8');
  console.log('File content:', data);
} catch (error) {
  console.error('Error reading file:', error);
}

// Write to file synchronously
try {
  fs.writeFileSync('newfile.txt', 'Hello, World!', 'utf8');
  console.log('File written successfully');
} catch (error) {
  console.error('Error writing file:', error);
}





// Append to file synchronously
try {
  fs.appendFileSync('newfile.txt', '\nAppended content', 'utf8');
  console.log('Content appended successfully');
} catch (error) {
  console.error('Error appending to file:', error);
}

// Rename file synchronously
try {
  fs.renameSync('newfile.txt', 'renamedfile.txt');
  console.log('File renamed successfully');
} catch (error) {
  console.error('Error renaming file:', error);
}

// Delete file synchronously
try {
  fs.unlinkSync('renamedfile.txt');
  console.log('File deleted successfully');
} catch (error) {
  console.error('Error deleting file:', error);
}

// Check if file exists synchronously
const fileExists = fs.existsSync('file.txt');
console.log('File exists:', fileExists);

// Get file information synchronously
try {
  const fileStats = fs.statSync('file.txt');
  console.log('File size:', fileStats.size, 'bytes');
  console.log('File last modified:', fileStats.mtime);
} catch (error) {
  console.error('Error getting file information:', error);
}
