let a = 6;
let result = ++a + a + a++ + ++a + a;
console.log(a);
console.log(result);

// ++a và a++ tuy đều giống nhau ở việc cộng thêm 1 giá trị cho biến a nhưng khi cho vào phép toán
// thì chúng sẽ có sự khác biệt, trong phép toán ++a sẽ cộng giá trị của a lên 1 trước rồi mới bắt đầu thực hiện phép toán
// còn a++ thì ngược lại, nó sẽ tính phép toán trước bằng giá trị hiện tại của a, khi thực hiện xong thì a sẽ được cộng giá trị 