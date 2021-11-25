var user = {
    name: "John",
    surname: "Mike"
  };
  user.name = "Peter";
  console.log(user.name);
  delete user.name

  var fruit = {
    apple: 20,
    pear: 20,
    peach: 10,
    calculate: function () { 
        console.log(fruit.apple + fruit.pear + fruit.peach);
      }
    };
    fruit.calculate();
