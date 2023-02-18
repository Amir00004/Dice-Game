var x = Math.random() * 6;
if (Math.round(x) == 0)
{
    x = Math.round(x) + 1;
}
else
{
    x = Math.round(x);
}

var y = Math.random() * 6;
if (Math.round(y) == 0)
{
    y = Math.round(y) + 1;
}
else
{
    y = Math.round(y);
}

document.getElementById("player1").innerHTML = `<img src="assets/dice${x}.png" alt="" width="auto"></img>`;
document.getElementById("player2").innerHTML = `<img src="assets/dice${y}.png" alt="" width="auto"></img>`;

if(x > y)
{
    document.querySelector("h1").innerHTML = "🙌🙌 Player 1 WON!!!";
}
else 
{
    if(x < y)
    {
        document.querySelector("h1").innerHTML = "Player 2 WON!!! 🙌🙌";
    } 
    else
    {
        document.querySelector("h1").innerHTML = "It's a DRAW!";
    }
}
