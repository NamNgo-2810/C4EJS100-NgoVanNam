let edge_number = prompt('Enter number of edges')
let corner = (1 - 2/edge_number)*180
for (let i = 0; i < edge_number; i++) {
    fd(50)
    rt(180 - corner) 
}