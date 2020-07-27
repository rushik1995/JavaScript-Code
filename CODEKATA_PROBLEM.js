const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

var A = userInput[0].split(" ");
//var B = userInput[1].split(" ");
var B = Math.round(A);


if(B===0)
{
    console.log("NULL");
}

for(i=1;i<=B;i++)
{
    ans = 9 * i;
    console.log(ans);

}

});
