// ফ্যাক্টোরিয়াল বের করার ফাংশন
function factorial(n) {                // n এর ফ্যাক্টোরিয়াল বের করার জন্য ফাংশন
    var factorial = 1;                // 1 থেকে n পর্যন্ত গুণফল বের করার জন্য লুপ চালানো হবে
    for (var i = 1; i <= n; i++) {   // লুপ শুরু
        factorial = factorial * i;  // গুণফল বের করা হচ্ছে

    }
    return factorial;             // ফ্যাক্টোরিয়াল রিটার্ন করা হচ্ছে
}
console.log(factorial(5));  // আউটপুট: 120
console.log(factorial(7));  // আউটপুট: 5040


// while লুপ ব্যবহার করে ফ্যাক্টোরিয়াল বের করার ফাংশন
var i = 1;
var factorial = 1;
wile(i <= 10) {
    factorial = factorial * i;
    i++;
}
console.log(factorial);

