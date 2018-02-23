//declared string
var a = "32 AFLAC  41 Alexis Ducorbier State Farm Insurance Agency  27 ArcBest  28 Bankers Life  42 Becker Professional Education  6 Brooke Companies  15 Carr Riggs & Ingram  43 Chick-fil-A Denham Springs  18 DXC Technology  25 Edward Jones  40 Entergy  16 Enterprise Holdings (Enterprise Rent-A-Car)  20 Ericksen Krentel  35 Express Employment Professionals  37 Fastenal Company  9 Faulk & Winkler, LLC  34 Ferguson Enterprises  30 Fifth District Savings Bank  2 Foresters Financial  19 GNO, Inc.  10 Hannis T. Bourgeois, LLP  24 IBM  38 La Farm Bureau Ins Co.  26 Latter & Blum Classic Homes & Properties  29 Louisiana Cat  5 Louisiana Legislative Auditor's office  13 MassMutual Louisiana  39 Modern Woodmen of America  12 Motion Industries  36 Northwestern Mutual  4 POOLCORP  17 Postlethwaite & Netterville  7 Republic Finance, LLC  31 Republic National Distributing Company  21 Sanderson Farms  8 Sherwin-Williams  3 Smittys Supply, Inc  11 The Martin-Brower Company  23 Tower Loan  1 Waffle House Inc  14 Walgreens  33 Western & Southern Life  22 York Risk Services Group";

//splitted the string to array
var b = a.split("  ");
var x;
var y;
var z ;
var haha = "";
var arr = [];

//for loop to go inside of the array
for(var i =0;i<b.length;i++){
  
  x = b[i].split(" ");    //each line is again splitted
  y = parseInt(x[0]);     //The first index is the number assigned in the list. So it is stored as integer in y.
  haha ="";
  
 for(var m =1;m<x.length;m++){   //Another loop inside each member of x.
   haha = haha+" "+x[m];         // every string inside x except first integer is added in haha string
 }
arr[y]= haha;                    //Integer y is taken as index and haha is assigned to that integer


  
  
  
  
  
}

//It is sorted already




//The number associated with it and the Company name associated with it is printed afterwards.
for(var k = 0;k<arr.length-1;k++){
  
  
  console.log(k+1+ " " +arr[k+1])
}


//You can copy the code and execute it at repl.it compiler (javascript)
