

let s = "aabbaacac";

console.log(s.charAt(0));

let lth = s.length;
let cnt = 0;
let i =0;
let j=0;


for (i=0; i<lth; i++)
{ 
   
        if (s.charAt(0)==s.charAt(i)){
        cnt=cnt+1;
    }

}


console.log(cnt);

const str = new Array();
for (i=0;i<lth;i++)
{
    str[parseInt(s.charAt(i))]++;

}  

for (i=0;i<lth;i++)
{
    if (str[i] !=0)
        console.log(s.charAt(i) + "   "+ str[i]);
}

