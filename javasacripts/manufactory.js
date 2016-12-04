/*
  Create a function named Car with one property named `manufactured_date`
  whose value will be Date.now()
 */
function Car () {

  this.manufactured_date = Date.now();
  // Create the manufactured date property (see above)
}



/*
  1. Create a new constructor function for the make of your favorite car.
  2. It must inherit from the more general Car object.
  3. Give it one property, named manufacturer, that holds a string value. 
         For, example, this.manufacturer = "Ford".
 */



function Pagani () {
  this.manufacturer = "Pagani";
};

 // Define the manufacturer instance variable

// Set the prototype to a new Car instance
Pagani.prototype = new Car();

/*
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}


  1. Create a constructor function named after your favorite car model.
  2. It must inherit from the specific make type you created in previous step.
  3. Create some instance properties that are specific to the specific
        car model (e.g. horsepower, cargo capacity, etc.)
*/
function Huayra (horsepower, transmission , engine) {

    this.horsepower = "730";
    this.transmission = "7-speed sequential";
    this.engine = "5980 cc Mercedes-AMG bi-turbo M158 V12"; 

}

// Set the prototype to appropriate model you created above and set the model name argument
//YourFavoriteModel.prototype = new ???;

Huayra.prototype = new Pagani();


/*
    Being an avid car collector, you own three different cars all of
    same model from your favorite manufacturer.

    1. Create three new instances of your favorite car.
    2. Create a new property on each object to hold the license plate
       number for each car.

var myFirstFavoriteCar = new ???;
myFirstFavoriteCar.plate_number = "";
...
*/


var HuayraSilver = new Pagani.prototype;
HuayraSilver.prototype.plate_number = "APIM8KR"; 


var HuayraBlack = new Pagani.prototype;
HuayraBlack.prototype.plate_number = "D23V1L";

var HuayraHoverVan = new Pagani.prototype;
HuayraHoverVan.prototype.plate_number = "T0PGE4R";



/*
  Now let's see some power of prototypal inheritance. Create a function for
  another model that's made by the manufacturer as your previous car. So if
  your first model was Fusion, make another one here for F150, for example.
 */
function Zonda (horsepower, transmission, engine) {

  this.horsepower = "547";
  this.transmission = "6-speed manual";
  this.engine = "7.0 L AMG V12"; 

}
/*
  Assign the prototype to the make you define above. Now both models will
  inherit the `manufacturer` property from the make function.
 */

 Zonda.prototype = new Pagani();
/*
  Now create an instance of this new car model to put in your garage. Remember
  to give it a plate number.
 */

 var ZondaGarage = new Pagani();
 ZondaGarage.prototype.plate_number = "STR4T1";