const date = new Date().toLocaleDateString('en-US', 
{day: "numeric",
month: "short",
year:"numeric"})
const time =  new Date().toLocaleTimeString('en-US', 
{ hour12: true, hour: "numeric", minute: "numeric"});
console.log(date);
console.log(time);