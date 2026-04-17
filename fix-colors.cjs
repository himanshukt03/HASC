const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else if (file.endsWith('.tsx')) { 
            results.push(file);
        }
    });
    return results;
}

const files = walk(path.join(__dirname, 'src'));
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace text-white in className strings that contain bg-brand-primary
    content = content.replace(/className="[^"]+"/g, (match) => {
        if (match.includes('bg-brand-primary') && match.includes('text-white')) {
            return match.replace(/\btext-white\b/g, 'text-brand-primary-content');
        }
        return match;
    });

    // Replace group-hover:text-white
    content = content.replace(/className="[^"]+"/g, (match) => {
        if (match.includes('group-hover:bg-brand-primary') && match.includes('group-hover:text-white')) {
            return match.replace(/\bgroup-hover:text-white\b/g, 'group-hover:text-brand-primary-content');
        }
        return match;
    });
    
    // Replace hover:text-white
    content = content.replace(/className="[^"]+"/g, (match) => {
        if (match.includes('hover:bg-brand-primary') && match.includes('hover:text-white')) {
            return match.replace(/\bhover:text-white\b/g, 'hover:text-brand-primary-content');
        }
        return match;
    });

    fs.writeFileSync(file, content);
});

console.log('Updated remaining disjoint text-white instances in TSX files');
