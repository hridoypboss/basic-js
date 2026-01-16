
function love(){       // Function  এর যে নাম থাকবে সই নামে ধরে কল করলে গুরুপে থাকা আউটপুট দেখাবে 
    console.log("I love programming!");
    console.log("I love JavaScript!");
    console.log("I love coding challenges!");
}
love();


/*
function addition(num1, num2){   // Function এর ভিতরে প্যারামিটার ব্যবহার করা হয়েছে
    var sum = num1 + num2;
    console.log("The sum is: " + sum);
}
addition(5, 10);   // Function কল করার সময় আর্গুমেন্ট ব্যবহার করা হয়েছে
addition(20, 30);


function check (age, gender){   // Function এর ভিতরে প্যারামিটার ব্যবহার করা হয়েছে
    if(age>=21 && gender == "male"){    // Conditional Statement ব্যবহার করা হয়েছে
        console.log("bayar bayas hoyca");   // আউটপুট দেখাবে
    }
    else if(age >=18 && gender == "female"){  // Conditional Statement ব্যবহার করা হয়েছে
        console.log("maya hoyla bayar bayas hoyca");
    }
    else{                                          // Conditional Statement ব্যবহার করা হয়েছে
        console.log("bayar bayas hoynai");
    }
}
check(17, "female");   // Function কল করার সময় আর্গুমেন্ট ব্যবহার করা হয়েছে
check(25, "male");
check(19, "female");

{
function jogfol(num1, num2){   // Function এর ভিতরে প্যারামিটার ব্যবহার করা হয়েছে
return num1 + num2;   // এখানে ফলাফেরত ফেরত পাঠানো হয়েছে
}
var result = jogfol(15, 25);   // Function কল করার সময় আর্গুমেন্ট ব্যবহার করা হয়েছে
console.log("Jogfol: " + result);   // আউটপুট দেখাবে
}



