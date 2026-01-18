// var fibo = [0, 1];
// for (var i = 2; i <= 10; i++) {
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
//     console.log(fibo[i], fibo[i - 1], fibo[i - 2]);
// }

// ফিবোনাচ্চি সিরিজ বের করার ফাংশন
function fibonaci(n)
if (n === 0) {        // n এর মান 0 হলে 0 রিটার্ন করবে
    return 0;
}
if (n === 1) {        // n এর মান 1 হলে 1 রিটার্ন করবে
    return 1;
} else {               // n এর মান 2 বা তার বেশি হলে
    return fibonaci(n - 1) + fibonaci(n - 2);  // n এর মান 2 বা তার বেশি হলে পূর্বের দুইটি সংখ্যার যোগফল রিটার্ন করবে
}
}
console.log(fibonaci(7)); // আউটপুট: 13
console.log(fibonaci(12)); // আউটপুট: 144
console.log(fibonaci(14)); // আউটপুট: 610