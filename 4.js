/*
4. Provide logic for function generateNewFolderName, which receive an array as argument. Everytime the function gets called,
it should check for folder name. If the folder named 'New Folder' does not exist, it should add the name 'New Folder' to array.
If folder 'New Folder' exists, it should add 'New Folder (1)' to array. If 'New Folder (1)' exists, it should add 'New Folder (2)'
to array, and so on.
*/

/* Initialize a counter to 1 to start the numbering for the new folder at 1
 Otherwise the first folder would be named 'New Folder(0)' */

const generateNewFolderName = (existingFolders) => {
    let folderName = 'New Folder'
    let i = 1  

    while(existingFolders.includes(folderName)) { // If 'existingFolders' does include the folderName, the function enters a loop
        folderName = `New Folder(${i})`          // Each iteration it sets the folderName to 'New Folder(X), where X is the current i value
        i++                                     // Increments i in each iteration
    }

    existingFolders.push(folderName)          // Add a new folderName to the existingFolders and return it
    return folderName
}

let folder = []
generateNewFolderName(folder)
generateNewFolderName(folder)
generateNewFolderName(folder)
generateNewFolderName(folder)
console.log(folder) //expect to see ['New Folder', 'New Folder (1)', 'New Folder (2)', 'New Folder (3)']