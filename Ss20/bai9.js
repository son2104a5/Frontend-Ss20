let a = 5;
let b= "5";
console.log(a==b);  console.log(a===b);
console.log(a!=b);  console.log(a!==b);

// 2 phép toán đầu tiên là so sánh bằng, phép toán đầu tiên đúng vì giá trị của 2 biến a 
// và b đều bằng nhau, còn phép toán thứ 2 thì có giá trị trả về là false vì toán tử ===
// sẽ nghiêm ngặt hơn cả về kiểu dữ liệu của biến, do a đang có kiểu dữ liệu số còn b 
// có kiểu dữ liệu là chuỗi hay kí tự nên giá trị trả về của phép toán sẽ là false dù
// đều có cùng giá trị

// 2 phép toán thứ 2 là so sánh khác, phép toán đầu tiền trả về giá trị false vì 2 biến 
// a và b đều có giá giống nhau và đều bằng 5, còn phép toán thứ 2 trả về giá trị true vì
// nó cũng là 1 toán tử so sánh nghiêm ngặt giống như ===, do 2 biến a và b có 2 kiểu dữ liệu
// khác nhau nên giá trị trả về sẽ là true dù cả 2 đều cùng giá trị