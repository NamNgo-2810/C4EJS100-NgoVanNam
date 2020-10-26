// 7
const pos = {
    x: 200,
    y: 50
}
penup();
rt(90);
fd(pos.x/2);
lt(90);
fd(pos.y);
// ###########################################################################################################################
// 8
const square = {
    x: 100,
    y: 50,
    width: 20
}
penup();
rt(90);
fd(square.x);
lt(90);
fd(square.y);
pendown();
for (let i = 0; i < 4; i++) {
    fd(square.width);
    rt(90);
}
// ###########################################################################################################################
// 9
const rect = {
    x: 100,
    y: 50,
    width: 20,
    height: 40
}
penup();
rt(90);
fd(rect.x);
lt(90);
fd(rect.y);
pendown();
fd(rect.height);
rt(90);
fd(rect.width);
rt(90)
fd(rect.height);
rt(90);
fd(rect.width);
const circle = {
    shape: 'circle',
    x: 100,
    y: 50,
    radius: 30
}
penup();
rt(90);
fd(circle.x);
lt(90);
fd(circle.y + circle.radius);
pendown();
rt(90);
const corner = 180*(1-2/100);
const edge = circle.radius*2*Math.PI/100;
for (let i = 0; i < 100; i++) {
    fd(edge);
    rt(180 - corner);
}
// ############################################################################################################################
// 10
// const cmds = [
//     {
//         shape: 'square',
//         x: 20,
//         y: 40,
//         width: 50,
//     },
//     {
//         shape: 'rect',
//         x: 8,
//         y: 70,
//         width: 12,
//         height: 40,
//     },
//     {
//         shape: 'rect',
//         x: 70,
//         y: 70,
//         width: 12,
//         height: 40,
//     },
//     {
//         shape: 'rect',
//         x: 10,
//         y: 20,
//         width: 70,
//         height: 20,
//     },
//     {
//         shape: 'square',
//         x: 25,
//         y: 40,
//         width: 14,
//     },
//     {
//         shape: 'square',
//         x: 33,
//         y: 42,
//         width: 6,
//     },
//     {
//         shape: 'square',
//         x: 50,
//         y: 40,
//         width: 14,
//     },
//     {
//         shape: 'square',
//         x: 58,
//         y: 42,
//         width: 6,
//     },
//     {
//         shape: 'square',
//         x: 40,
//         y: 25,
//         width: 8,
//     },
//     {
//         shape: 'square',
//         penWidth: 1,
//         x: 500,
//         y: 500,
//         width: 15,
//     },
// ]
function move(cmd) {
    penup();
    rt(90);
    fd(cmd.x);
    lt(90);
    fd(cmd.y);
    pendown();
}
function drawSquare(cmd) {
    move(cmd);
    for (let i = 0; i < 4; i++) {
        fd(cmd.width);
        rt(90);
    }
}
function drawRect(cmd) {
    move(cmd);
    fd(cmd.height);
    rt(90);
    fd(cmd.width);
    rt(90)
    fd(cmd.height);
    rt(90);
    fd(cmd.width);
}
function drawCircle(cmd) {
    move(cmd);
    rt(90);
    const corner = 180*(1-2/100);
    const edge = cmd.radius*2*Math.PI/100;
    for (let i = 0; i < 100; i++) {
        fd(edge);
        rt(180 - corner);
    }
}
// for (let cmd of cmds) {
//     if (cmd.shape == 'square') drawSquare(cmd);
//     else drawRect(cmd);
// }
// ############################################################################################################################
// 11

// ###############################################################################################################################
// 12
const cmds = [
    {
        shape: 'circle',
        x: 0,
        y: -20,
        radius: 60,
    },
    {
        shape: 'circle',
        x: 0,
        y: 80,
        radius: 40,
    },
    {
        shape: 'circle',
        x: -75,
        y: 10,
        radius: 20,
    },
      {
        shape: 'circle',
        x: 75,
        y: 10,
        radius: 20,
    },
    {
        shape: 'square',
        x: -65,
        y: -100,
        width: 30,
    },
      {
        shape: 'square',
        x: 38,
        y: -100,
        width: 30,
    },
  
  {
        shape: 'rect',
        x: -30,
        y: 80,
        width: 20,
        height: 4
    },
    {
        shape: 'rect',
        x: 10,
        y: 80,
        width: 20,
        height: 4
    },
      {
        shape: 'rect',
        x: -10,
        y: 50,
        width: 20,
        height: 6
    },
  {
        shape: 'square',
        x: 500,
        y: 500,
        width: 20,
    },
]

for (let cmd of cmds) {
    switch(cmd.shape) {
        case "square":
            drawSquare(cmd);
            break;
        case "rect":
            drawRect(cmd);
            break;
        case "circle":
            drawCircle(cmd);
            break;
    }
}