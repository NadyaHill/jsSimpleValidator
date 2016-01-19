var number=prompt("Please enter either your phone number in xxx-xxx-xxxx format")

// Prompt checking phone number
if (
	number.charAt(3)=== "-" &&
	number.charAt(7)=== "-"
	) {
	alert("Thank You")
	}

else {
	alert("Your number is invalid-- please try again")
}




var birthDate=prompt("Please enter your birth date in xx/xx/xx format")

if (
	birthDate.charAt(2)==="/"&&
	birthDate.charAt(5)==="/"
	) {
	alert("Thank You")
	}

else {
	alert("Your birth date is invalid-- please try again")
}



// THERE SHOULD BE A MORE ELEGANT WAY TO DO THIS
var postalCode=prompt("Please enter your postal code in xxxxx or xxxxx-xxxx format")

if (
	postalCode.charAt(5)==="-"  ||
	postalCode.length===10 ||
	postalCode.length===5
	) {
	alert ("Thank You")
}

else {
	alert("Your postal code is invalid-- please try again")
}





var stateAbbreviation=prompt("Please enter your state in XX format")

if (
	stateAbbreviation.length===2 &&
	// stateAbbreviation.toUpperCase()
	) {
	alert ("Thank You")
}

else {
	alert("Your state is invalid-- please try again")
}






var married=prompt("Are you married? Please answer yes or no")

if (
	married === "yes" ||
	married === "Yes" ||
	married === "YES" ||
	married === "NO" ||
	married === "no" ||
	married === "No" 
	) {
	alert ("Thank You")
}

else {
	alert ("Your response was invalid-- please try again")
}



