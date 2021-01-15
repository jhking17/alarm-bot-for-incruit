// interface IUser {
//     name : string,
//     age : number,
//     isValid : boolean
// }
// let userArr : IUser[] = [
//     {
//         name : "neo",
//         age : 84,
//         isValid : true
//     },
//     {
//         age : 84,
//         name : "a",
//         isValid : false
//     }
// ]
// type result = {
//     success : true,
//     value : unknown
// } | {
//     success : false,
//     error : Error
// }
// function getItems(user : IUser) : result{
//     if(user.age > 10){
//         return{
//             success : true,
//             value: ['a']
//         }
//     } else {
//         return {
//             success : false,
//             error : new Error("Not enable")
//         }
//     }
// }
// (function (){
//     interface User<Type> { 
//         name : Type,
//         id : Type
//     }
//     const user: User<string | number> = {
//         name : "a",
//         id : 1
//     }
//     console.log(user.name, user.id)
//     interface Backpack<Type> {
//         add : (obj : Type) => void;
//         get : ()=> Type;
//     }
//     var k : string = "";
//     const backpack : Backpack<string> = {
//         add : function(str : string){
//             k = str;
//         },
//         get : ()=>k
//     };
//     backpack.add("a");
//     const aa = backpack.get();
//     console.log(aa);
// })();
// (function(){
//     interface Point{
//         x : number,
//         y : number
//     }
//     function printPoint(p : Point){
//         console.log(`${p.x}, ${p.y}`);
//     }
//     const point3 = {x : 12, y:26, z:89};
//     printPoint(point3);
//     const rect = {x : 33, y:3, width : 30, height : 30};
//     printPoint(rect);
//     // const color = {hex : "#17q121"};
//     // printPoint(color);
//     class VirtualPoint {
//         x : number;
//         y : number;
//         constructor(x : number, y:number){
//             this.x = x;
//             this.y = y;
//         }
//     }
//     const newPoint = new VirtualPoint(1,2);
//     printPoint(newPoint);
// })();
// (function (){
//     let isDone : boolean = false;
//     let decimal : number = 6;
//     let hex: number = 0xf00d;
//     let binary: number = 0b1010;
//     let octal: number = 0o744;
//     let color : string = "blue";
//     color = "red";
//     let fullname : string = `Bob Bobbington`;
//     let age : number = 37;
//     let sentence : string = `Hello, my name is ${ fullname } I'll be ${ age + 1 }`
//     let list : number[] | Array<number> = [1,2,3];
//     let x : [string, number];
//     x=["hee", 10];
//     console.log(x[0].substring(1));
//     // console.log(x[1].substring(1));
//     // x[3] = "world";
//     enum Color {red=1, green, blue};
//     let c : Color = Color.green;
//     console.log(Color[2]);
//     let colorName : string = Color[1];
//     console.log(colorName);
//     let notSure : any = 4;
//     notSure = "notsure";
//     notSure = false;
//     let prettySure : Object = 4;
//     // prettySure.toFixed();
//     // let list : any[] = [1,true,"a"];
// })();
// (function(){
//     function warnUser(): void{
//         console.log("this is my warning");
//     }
//     function error(msg : string):never{
//         throw new Error(msg);
//     }
//     function fail(){
//         return error("something wrong");
//     }
//     // console.log(fail());
//     function infiniteLoop() : never{
//         while(true){
//         }
//     }
// })();
// declare function create(o: object | null) : void;
// (function(){
//     // create({prop : 0});
//     let someValue : any = "this";
//     let strLength : number = (someValue as string).length;
//     console.log(strLength);
// })();
// (function(){
//     interface LabeldValue {
//         label : string
//     }
//     function printLabel(labeledObj: LabeldValue){
//         console.log(labeledObj.label);
//     }
//     let myobj = {size : 10, label : "????"};
//     printLabel(myobj);
//     interface SquareConfig { 
//         color ?: string;
//         width ?: number;
//         [propName : string] : any;
//     }
//     function createSquare(config : SquareConfig) : {color : string; area : number}{
//         let newSquare = {color : "white", area : 100};
//         if(config.color){
//             newSquare.color = config.color;
//         }
//         if(config.width){
//             newSquare.area = config.width;
//         }
//         return newSquare;
//     }
//     // let mySquare = createSquare({colour : "black", width : 100});
//     let mySquare = createSquare({colour : "black"});
// })();
// (function(){
//     interface Point {
//         readonly x : number;
//         readonly y : number;
//     }
//     let p1 : Point = {x:10, y:20};
//     // p1.x = 1;
//     let a : number[] = [1,2,3,4];
//     let ro: readonly number[] = a;
//     // ro[0] = 1;
//     a = ro as number[];
// })();
// ;(function (){
//     interface SearchFunc{
//         (source : string, subString : string) : boolean;
//     }
//     // let mySearch : SearchFunc = function( a : string, b : string){
//     let mySearch : SearchFunc = function( a, b){
//         let result = a.search(b);
//         return result > -1;
//     }
//     interface StringArray {
//         [index : number] : string;
//     }
//     let myArray : StringArray = ["bob", "f"];
//     let myStr : string = myArray[0];
//     interface Animal {
//         name : string;
//     }
//     interface Dog extends Animal{
//         breed : string;
//     }
//     interface NotOkay {
//         // [x : number] : Animal;
//         [x : string] : Dog;
//     }
//     interface NumberDictionary{
//         [index : string] : number | string;
//         length : number;
//         name : string;
//     }
//     interface ReadonlyStringArray {
//         readonly [index:number] : string;
//     }
//     let arr : ReadonlyStringArray = ["alice",'bob'];
//     // arr[2] = "Mall";
// })();
;
(function () {
    // class Person{
    //     name : string;
    //     constructor(){
    //         this.name = "";
    //     }
    // }
    // interface ClockInterface {
    //     currentTime : Date;
    //     setTime(d: Date):void;
    // }
    function createClock(ctor, hour, minute) {
        return new ctor(hour, minute);
    }
    class DigitalClock {
        constructor(h, m) { }
        tick() {
            console.log("beep beep");
        }
    }
    class AnalogClock {
        constructor(h, m) { }
        tick() {
            console.log("tick tock");
        }
    }
    let digitalClock = createClock(DigitalClock, 12, 17);
    let analogClock = createClock(AnalogClock, 7, 32);
    const Clock = class Clock {
        constructor(h, m) { }
        tick() {
            console.log("bb");
        }
    };
    digitalClock = new Clock(1, 2);
    digitalClock.tick();
})();
;
(function () {
    let square = {};
    square.color = 'blue';
    square.sideLength = 1;
    square.penWidth = 5.0;
    function getCounter() {
        let counter = (function (start) {
            console.log(start);
        });
        counter.interval = 1;
        counter.reset = function () {
            this.interval = 0;
        };
        return counter;
    }
    let c = getCounter();
})();
;
(function () {
    class Control {
    }
    class Button extends Control {
        constructor() {
            super(...arguments);
            this.value = 0;
        }
        select() {
            this.value = 1;
        }
    }
    class TextBox extends Control {
        select() { }
    }
    // class Image implements SelectableControl{
    //     private state : any;
    //     private aaa : any;
    //     value = 0;
    //     select (){
    //         this.value = 2;
    //     }
    // }
})();
// interface end
// function start!
;
(function () {
    let myAdd = function (x, y) { return x + y; };
    function buildName(f, l, z = "a") {
        return f;
    }
    let result1 = buildName("a");
    let result2 = buildName("a", "b");
    let result3 = buildName("a", "b", "1");
    function buildName2(f, ...r) {
        return f + r.join(" ");
    }
    let emp = buildName2("j", "k", "l", "m");
    buildName.bind("j");
    // buildName.prototype.a = "a";
    // console.log(buildName.prototype.a);
    let buildNameFun = buildName2;
})();
;
(function () {
    let deck = {
        suits: ["hearts", "spades", "clubs"],
        cards: Array(52),
        createCardPicker: function () {
            return () => {
                let pickedCard = Math.floor(Math.random() * 52);
                let pickedSuit = Math.floor(pickedCard / 13);
                return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
            };
        }
    };
    class Handler {
        constructor() {
            this.info = 0;
        }
        onClickBad(e) {
            // this.info = e.timeStamp;
        }
    }
    let h = new Handler();
})();
;
(function () {
    let suits = ["hearts", "spades", "clubs", "diamonds"];
    // function pickCard(x:{suit : string, card : number;}[]):number;
    // function pickCard(x:number): {suit:string; card:number;};
    function pickCard(x) {
        if (typeof x == "object") {
            let pickedCard = Math.floor(Math.random() * x.length);
            return pickedCard;
        }
        else if (typeof x == "number") {
            let pickedSuit = Math.floor(x / 13);
            return { suit: suits[pickedSuit], card: x % 13 };
        }
    }
})();
//function end 
// literal
;
(function () {
    class UIElement {
        animate(dx, dy, easing) {
            if (easing === "ease-in") {
            }
            else if (easing === "ease-in-out") {
            }
            else if (easing === "ease-out") {
            }
            else {
            }
        }
    }
    let btn = new UIElement();
    btn.animate(0, 0, "ease-in");
    // btn.animate(0,0,"ease-idn");
})();
;
(function () {
    function padLeft(value, padding) {
        if (typeof padding == "number") {
            return Array(padding + 1).join(" ") + value;
        }
        if (typeof padding == "string") {
            return padding + value;
        }
        throw new Error(`Expected string or number, got '${padding}'.`);
    }
    console.log(padLeft("Hello world", 4));
    function networkState(state) {
        state.code;
        state.state;
        return "";
    }
    const handleArtistsResponse = (response) => {
        if (response.error) {
            console.error(response.error.message);
            return;
        }
        console.log(response.artists);
    };
    handleArtistsResponse({ artists: [{ name: "asd" }], success: true });
})();
;
(function () {
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    class ConsoleLogger {
        log(name) {
            console.log(`Hello, I'm ${name}.`);
        }
    }
    // const FlyToMixin = (superclass : any) => class extends superclass {
    //     flyTo(destination : string){
    //         console.log(`${this.name} is flying to the ${destination}`);
    //     }
    // }
    function extend(first, second) {
        const result = {};
        console.log(first, second);
        for (const prop in first) {
            if (first.hasOwnProperty(prop)) {
                result[prop] = first[prop];
            }
        }
        for (const prop in second) {
            if (second.hasOwnProperty(prop)) {
                result[prop] = second[prop];
            }
        }
        console.log(result);
        return result;
    }
    const jim = extend(new Person("Jim"), ConsoleLogger.prototype);
    // jim.log(jim.name);
})();
;
(function () {
    class Greeter {
        constructor(message) {
            this.greeting = message;
        }
        greet() {
            return "Hello, " + this.greeting;
        }
    }
    let greeter = new Greeter("world");
    console.log(greeter.greet());
    class Animal {
        move(dis = 0) {
            console.log(` animal moved ${dis}m.`);
        }
    }
    class Dog extends Animal {
        bark() {
            console.log('Woof! Woof!');
        }
    }
    const dog = new Dog();
    dog.bark();
    dog.move(10);
})();
;
(function () {
    let Direction;
    (function (Direction) {
        Direction[Direction["Up"] = 1] = "Up";
        Direction[Direction["Down"] = 2] = "Down";
        Direction[Direction["Left"] = 3] = "Left";
        Direction[Direction["Right"] = 4] = "Right";
    })(Direction || (Direction = {}));
    function Move(log, dir) {
    }
    Move("UP!", Direction.Up);
    let BooleanText;
    (function (BooleanText) {
        BooleanText[BooleanText["No"] = 0] = "No";
        BooleanText["Yes"] = "YES";
    })(BooleanText || (BooleanText = {}));
    ;
    let E;
    (function (E) {
        E[E["Foo"] = 0] = "Foo";
        E[E["Bar"] = 1] = "Bar";
    })(E || (E = {}));
    function f(x) {
        // if (x !== E.Foo || x !== E.Bar) {
        // }
    }
    let level;
    (function (level) {
        level[level["Error"] = 0] = "Error";
        level[level["Warn"] = 1] = "Warn";
        level[level["Info"] = 2] = "Info";
        level[level["Debug"] = 3] = "Debug";
    })(level || (level = {}));
    function printI(key, msg) {
        const num = level[key];
        if (num <= level.Warn) {
            console.log("");
        }
    }
    let Enum;
    (function (Enum) {
        Enum[Enum["A"] = 0] = "A";
    })(Enum || (Enum = {}));
    let a = Enum.A;
    let nameOfA = Enum[a];
    let dirs = [1 /* Down */, 0 /* Up */];
})();
;
(function () {
    function identity(arg) {
        console.log(arg.length);
        return arg;
    }
    let output = identity(["asd"]);
    // let myIdentity : <T> (asd : T[])=> T[] = identity;
    // let myIdentity : { <T>(asd : T[]): T[]} = identity;
    let myIdentity = identity;
    myIdentity(["asd"]);
    class GenericNumber {
    }
    let myGenericNumber = new GenericNumber();
    myGenericNumber.zeroValue = 0;
    myGenericNumber.add = function (x, y) { return x + y; };
    let stringNumeric = new GenericNumber();
    stringNumeric.zeroValue = "";
    stringNumeric.add = function (x, y) { return x + y; };
    console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
    function loggingIdentity(arg) {
        console.log(arg.length);
        return arg;
    }
    // loggingIdentity(3);
    loggingIdentity({ length: 1 });
    function getProperty(obj, key) {
        return obj[key];
    }
    let x = { a: 1, b: 2 };
    getProperty(x, "a");
    function create(c) {
        return new c();
    }
    class k {
        constructor() {
            // this.a = c;
        }
    }
    class l {
        constructor(c) {
            this.a = c;
        }
    }
    function m(c) {
        this.a = c;
    }
    let i = new l(1);
    let j = new m(1);
    console.log(i, j);
    create(k);
    console.log(k, create(k));
})();
;
(function () {
    var Person = (function () {
        function Person(name) {
            this._name = name;
        }
        Person.prototype.sayHi = function () {
            console.log("hi", this._name);
        };
        return Person;
    }());
    const me = new Person("lee");
    me.sayHi();
    const Foo = class MyClass {
    };
    const foo = Foo;
    new foo();
})();
;
(function () {
    class Person {
        constructor(name) {
            this._name = name;
        }
    }
    const me = new Person("Lee  ");
    console.log(me);
    class Foo {
        constructor(arr = []) {
            this._arr = arr;
        }
    }
})();
;
(function () {
    class BeeKeeper {
    }
    class ZooKeeper {
    }
    class Animal {
    }
    class Bee extends Animal {
    }
    class Lion extends Animal {
    }
    function createInstantce(c) {
        return new c();
    }
    createInstantce(Lion).keeper.nametag;
    createInstantce(Lion).numLegs;
    createInstantce(Bee).keeper.hasMask;
    createInstantce(Bee).numLegs;
})();
;
;
(function () {
})();
