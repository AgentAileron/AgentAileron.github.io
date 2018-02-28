function doIt()
{
    // Variables for HTML element DOM references.
    let num1Ref, num2Ref, answerRef;

    // Working variables.
    let num1, num2, answer;

    // String var for even / odd
    let strDiv;

    // Get references to DOM elements.
    num1Ref = document.getElementById("number1");
    num2Ref = document.getElementById("number2");
    num3Ref = document.getElementById("number3");
    answerRef = document.getElementById("answer");

    // Note: The "input" tag is a void tag (i.e., it can't have
    // start and end tags, can't have content) so it does not
    // support "innerText" or "innerHTML" properties.  Thus
    // we use the "value" property to get its contents.

    // The following statment will not work properly.
    // It results in concatenation rather than addition.
    //answer = num1Ref.value + num2Ref.value;

    // Convert strings to numbers, e.g., "21" to 21.
    num1 = Number(num1Ref.value);
    num2 = Number(num2Ref.value);
    num3 = Number(num3Ref.value);

    // Perform addition operation then assignment operation
    answer = num1 + num2 + num3;

    // Append odd /  even identifier

    strDiv = "";

    if (answer >= 0){
      if(answer % 2 == 0){
        strDiv = " even";
      }else if (answer % 2 == 1){
        strDiv = " odd";
      }
      answer = "+" + answer;
      answerRef.className = "positive";
    }else if (answer == 0){
        answer = "±" + answer;
        answerRef.className = "zero";
    }else{
      answerRef.className = "negative";
    }
    answer = answer + strDiv;
    answerRef.innerText = answer;
}
