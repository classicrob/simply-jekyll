// import fs and glob
import * as fs from 'fs';
import * as glob from 'glob';

// read all files from _notes-source in parent directory
const files = glob.sync('../_notes-source/**/*.md');

console.log(files);

function replaceWikilinkAliasWithMarkdownAlias (fileName: string) {
    // read file
    const fileContent = fs.readFileSync(fileName, 'utf8');
    
    // replace all wikilink aliases with markdown aliases
    const newFileContent = fileContent.replace(/\[\[([^|\]]*?)\|(.*?)\]\]/g, (match, title, label) => {
        // replace spaces with dashes in title
        const internalLink = title.replace(/\s/g, '-');
        return `((${label}::/notes/${internalLink}))`;
    });
    
    // write file
    fs.writeFileSync(fileName.replace("../_notes-source", "../_notes"), newFileContent, 'utf8');
}

// replace all of the text in the _notes-source directory with the text in the _notes directory

// replace all of the text in the _notes-source directory with the text in the _notes directory
// files.forEach((fileName) => {
//     const sourceFileName = fileName.replace("../_notes-source", "../_notes");
//     const sourceFileContent = fs.readFileSync(sourceFileName, 'utf8');
//     fs.writeFileSync(fileName, sourceFileContent, 'utf8');
// });


// map over all files and replace wikilink aliases with markdown aliases

files.forEach(replaceWikilinkAliasWithMarkdownAlias);