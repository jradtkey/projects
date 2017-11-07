module.exports = function (){
  return {
    add: function(num1, num2) {
      var ans = num1+num2;
      console.log(ans);
    },
    multiply: function(num1, num2) {
      var ans = num1*num2;
      console.log(ans);
    },
    square: function(num) {
      var ans = num*num;
      console.log(ans);
    },
    random: function(num1, num2) {
      var ans = Math.floor((Math.random()*num2)+num1);
      console.log(ans);
    }
  }
};
