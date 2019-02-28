"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Maria De Jesus Rizo
   Date:   2.27.19
   
   Filename: tc_cart.js
	
*/
// The line below creates a variable with the name of orderTotal. This variable is then assigned a value of 0.
var orderTotal = 0;
// The line below created a variable named cartHTML that has html code placed within it. This HTML code will late be called and placed in the HTML document to be displayed on the page. 
var cartHTML = "<table><tr><th>Item</th><th> Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";
// The lines below create a for loop. In the loop, the variable i is first given the value of 0. The loop will continue to increase in increments of one until the value of i is equal to 3
for (var i = 0; i <= 3; i++) {
    // The line below adds the HTMl code provided to the cartHTML variable defined above. The various addition signs between the stings and variables of are used to concatinate the values together, connecting them to one another. 
    cartHTML += "<tr><td><img src='tc_" + item[i] + ".png' alt='item'  /></td>";
    //The code above applied to the rest of the cartHTML += lines written in the program. The only difference between them is the values that are being connected to one another. 
    cartHTML += "<td>" + itemDescription[i] + "</td><td>$" + itemPrice[i] + "</td><td>" + itemQty[i] + "</td>";
    // The line below creates a variable with the name of itemCost. The variable is set equal to the value of the itemPrice's value by the array times the itemQty value specified by the array.
    var itemCost = itemPrice[i] * itemQty[i];

    cartHTML += "<td>$" + itemCost + "</td></tr>";
    // The line below provides the global variable orderTotal with a new value. This new value is equal to the value of orderTotal plus the value of itemCost.
    orderTotal = orderTotal + itemCost;
}

cartHTML += "<tr> <td colspan='4'>Subtotal</td> <td>$" + orderTotal + "</td> </tr> </table>"
// The line below states that the value of cartHTML will be placed within the HTMl code in the element that has an id of cart.
document.getElementById("cart").innerHTML = cartHTML;