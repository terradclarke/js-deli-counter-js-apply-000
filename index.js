var waitingList = [];
function takeANumber (waitingList, personName) {
  waitingList.push(personName);
  return (
    "Welcome, " 
    + personName
    + ". You are number "
    + waitingList.length
    + " in line.")
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) 
    return "Currently serving "
    + katzDeliLine.shift()
    +".";
    else return "There is nobody waiting to be served!"
}

var line = [];

function currentLine (katzDeliLine) {
  let i = 0;
  while (i < katzDeliLine.length) {
    line.push(" " + [i+1] + "." + " " + katzDeliLine[i])
    i++;
  }
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else 
  return "The line is currently:" + line;
}


var ticketNumber = 1 

function takeATicket (waitingList) {
  ticketNumber += 1 
  waitingList.push(ticketNumber)
  return (
    "Welcome, You are ticket number "
    + ticketNumber
    + " .")