const needToLearn = {
    
    HTML: {
        mean: 'Hyper Text Markup Language',
        version: 6
    },
    CSS: {
        mean: 'Cascading Style Sheets',
        version: 3
    },
    JS: {
        mean: 'Javascript',
        version: 6
    }
}
console.log(needToLearn);
function deleteProp(prop, obj) {
    let {[prop]: _, ...result} = obj;
    return result;
}
const needToLearn_Updated = deleteProp('JS', needToLearn);
console.log(needToLearn_Updated);