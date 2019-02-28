"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Maria De Jesus Rizo
   Date:   2.27.19
   
   Filename: tc_cart.js
	
*/

var orderTotal = 0;
var cartHTML = "<table><tr><th>Item</th><th> Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";
for (var i = 0; i <= 3; i++) {
    cartHTML += "<tr><td><img src='tc_" + item[i] + ".png' alt='item'  />" + " </td>"
    cartHTML += itemDescription[i] + "<td>" + itemPrice[i] + "</td>";
    itemPrice += "<td>$" + itemPrice[i] + "</td";
    itemQty += "<td>" + itemQty[i] + "</td>";

    var itemCost = itemPrice[i] * itemQty[i];
    cartHTML += "<td>$" + itemCost + "</td></tr>";

    orderTotal = orderTotal + itemCost;
}

cartHTML += "<tr> <td colspan='4'>Subtotal</td> <td>$" + orderTotal + "</td> </tr> </table>"

document.getElementById("cart").innerHTML = cartHTML;