let dictionary = {
    debug: `The process of figuring out why your program has a certain error and how to fix it`,
    done: `When your task is complete, tho only thing you have to do is to wait for users to use it (no additional codes or actions needed)`,
    defect: `The formal word for 'error'`,
    pm: `The short version of Project Manager, the person in charge of the final result of a project`,
    ui: `User Interface, the process to define how your product feels`,
    ux: `User Experience, the process to define how your product feels` 
};

while (true) {
    alert('Hi there, this is dev dictionary');
    let keyword = prompt('Enter a keyword');
    
    if (dictionary[keyword] == null) {
    // 4.1 
    //     alert(`We could not find your word: ${keyword}`);
    // 4.2
        let update = prompt(`We could not find your word: ${keyword}, leave your explanation`);
        dictionary[keyword] = update;
    }
    
    
    else alert(`${keyword} \n ${dictionary[keyword]}`);
}