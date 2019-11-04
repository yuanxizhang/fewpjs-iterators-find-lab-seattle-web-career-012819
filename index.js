function superbowlWin(records){
  let win = records.find(s => s.result === "W")
  return win ? win.year : undefined;
}