const fs = require('fs');
const path = require('path');

const worklogDir = 'D:\\Thuc Tap AWS\\du an\\tantai-workshop\\content\\1-Worklog';
const sentences = new Set();

for (let i = 1; i <= 12; i++) {
  const weekFolder = `1.${i}-Week${i}`;
  const viFile = path.join(worklogDir, weekFolder, '_index.vi.md');
  if (fs.existsSync(viFile)) {
    const lines = fs.readFileSync(viFile, 'utf8').split('\n');
    lines.forEach(line => {
      let trimmed = line.trim();
      if (trimmed.startsWith('*') || trimmed.startsWith('-')) {
        sentences.add(trimmed.replace(/^[*-\s]+/, ''));
      } else if (trimmed.includes('|') && !trimmed.includes('---') && !trimmed.includes('Thứ')) {
        const cols = trimmed.split('|').map(c => c.trim()).filter(c => c.length > 0);
        if (cols.length >= 4) {
          sentences.add(cols[1]); // Task column
          sentences.add(cols[4]); // Note column
        }
      } else if (trimmed.startsWith('####') || trimmed.startsWith('###')) {
        sentences.add(trimmed.replace(/^[#\s]+/, ''));
      }
    });
  }
}

console.log(JSON.stringify(Array.from(sentences), null, 2));
