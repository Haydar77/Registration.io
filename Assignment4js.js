function ValidateFullName() { //4a
            var fName = document.getElementById("fName").value;
            var lName = document.getElementById("lName").value;

            if (fName != null &&
                fName != "" &&
                lName != null &&
                lName != "" &&
                isNaN(fName) &&
                isNaN(lName) &&
                fName[0].toUpperCase() == fName[0] &&
                lName[0].toUpperCase() == lName[0])
                return true;
            else
                return false;
        }

        function ValidatePassword() { //4b and 4c
            var password1 = document.getElementById("password1").value;
            var password2 = document.getElementById("password2").value;           
            var numbers = /\d+/;

            if (password1.length >= 8 &&
                password1.length <= 12 &&
                password1.indexOf('.') >= 0 &&
                password1.indexOf('/') >= 0 &&
                password1.match(numbers)) {
                if (password1 == password2)
                    return true;
					else 
					return false;
            }
            else
                return false;
        }

        function ValidatePhonenumber() { //4d
            var phone1 = document.getElementById("phone1").value;
            var phone2 = document.getElementById("phone2").value;
            var fullPhone = phone1 + phone2;

            if (!isNaN(fullPhone) && fullPhone.length == 10 && fullPhone != null && fullPhone != "")
                return true;
            else
                return false;
        }

        function ValidatePostalCode() { //4e UNFINISHED
            var countryInput = document.getElementById("country").value;
            var country = countryInput.toLocaleLowerCase();
            var postCode1 = document.getElementById("postCode1").value;
            var postCode2 = document.getElementById("postCode2").value;
            var fullPostCode = postCode1 + postCode2;
            var canada = new RegExp(/^(?!.*[DFIOQU])[A-VXY][0-9][A-Z][0-9][A-Z][0-9]$/i);

            if (country == "usa") {
                if (!isNaN(fullPostCode) && fullPostCode.length == 5)
                    return true;
                else
                    return false;
            }
            else if (country == "canada") {
                if (canada.test(fullPostCode))
                    return true;
                else
                    return false;
            }
        }

        function ValidateEmail() { //4f
            var email = document.getElementById("email").value;

            if (email.indexOf('@') >= 0 && email.indexOf('.') >= 0)
                return true;
            else
                return false;
        }

        function ValidateAllForms() {
            var finalErrorMessage = "Please fill in all of the fields marked with a red asterik and correct the following errors: \n";
            var errorMessageEmail = "\n*The Email box must contain the following characters: '@' and '.'\n"
            var errorMessageName = "\n*The first letters of your first and last names must be capitilized.\n"
            var errorMessagePassword = "\n*Both password fields must match, and your password must meet the following criteria: must be 8 to 12 characters, include at least 1 number, dot (.), back slash (/).\n"
            var errorMessagePhone = "\n*Your phone number must contain ten digits.\n";
            var errorMessagePostal = "\n*Format for postal/zip codes is as follows: \nCanada = \"A9A\" \"9A9\" \nUSA = \"12345.\"\n";

            if (ValidateEmail() && ValidateFullName() && ValidatePassword() && ValidatePhonenumber && ValidatePostalCode()) {
                alert("Thank you for your application! We will try our best to respond within 14 business days.");
            }
            else {
                if (ValidateEmail() == false)
                    finalErrorMessage = finalErrorMessage + errorMessageEmail;
                if (ValidateFullName() == false)
                    finalErrorMessage = finalErrorMessage + errorMessageName;
                if (ValidatePassword() == false)
                    finalErrorMessage = finalErrorMessage + errorMessagePassword;
                if (ValidatePhonenumber() == false)
                    finalErrorMessage = finalErrorMessage + errorMessagePhone;
                if (ValidatePhonenumber() == false)
                    finalErrorMessage = finalErrorMessage + errorMessagePostal;
                alert(finalErrorMessage);
            }              
        }