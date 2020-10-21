const colors = ['gray', 'blue', 'purple', 'cyan']
for (let i = 1; i <= 4; i++) {
  for (let j = 0; j < 4; j++) {
    color(colors[i-1]);
  	fd(30*i);
    rt(90);
  }
}