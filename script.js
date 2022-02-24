function IsUserValid(bool) {
    return bool;
}

var answer = IsUserValid(true) ? "you may enter" : "access denied";

var automatedAnswer = 
"your account no is " + (IsUserValid(false) ? "1234" : "not available");