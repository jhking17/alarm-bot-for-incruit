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

;(function (){
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

    
    // class Clock implements ClockInterface{
    //     currentTime : Date = new Date();
    //     setTime(dc:Date){
    //         this.currentTime = dc;
    //     }
    //     constructor(h: number, m : number){
            
    //     }
    // }
    interface ClockConstructor {
        new ( hour : number, minute : number) : ClockInterface;
    }

    interface ClockInterface{
        tick() : void;
    }

    function createClock(ctor : ClockConstructor, hour : number, minute : number) : ClockInterface{
        return new ctor(hour, minute)
    }
    class DigitalClock implements ClockInterface{
        constructor(h : number, m: number){}
        tick(){
            console.log("beep beep");
        }
    }

    class AnalogClock implements ClockInterface{
        constructor(h : number, m:number) {}
        tick(){
            console.log("tick tock");
        }
    }

    let digitalClock = createClock(DigitalClock, 12, 17);
    let analogClock = createClock(AnalogClock, 7, 32);
    const Clock: ClockConstructor = class Clock implements ClockInterface {
        constructor(h:number, m:number){}
        tick(){
            console.log("bb");
        }
    }

    digitalClock = new Clock(1,2);
    digitalClock.tick();
})();

;(function (){
    interface Shape {
        color : string;
    }

    interface PenStroke{
        penWidth : number;
    }

    interface Square extends Shape, PenStroke {
        sideLength : number;
    }

    let square = {} as Square;
    square.color = 'blue';
    square.sideLength = 1;
    square.penWidth = 5.0;

    interface Counter{
        (start : number) : string;
        interval : number;
        reset() : void;
    }

    function getCounter(): Counter{
        let counter = (function (start : number){
            console.log(start);
        }) as Counter;
        counter.interval = 1;
        counter.reset = function(){
            this.interval = 0;
        }
        return counter;
    }
    let c = getCounter();
    
})();
;(function (){
    class Control {
        private aaa : any;
    }
    
    interface SelectableControl extends Control{
        value : number | string;
        select() : void;
    }
    
    class Button extends Control implements SelectableControl{
        value = 0;
        select(){
            this.value = 1;
        }
    }
    
    class TextBox extends Control {
        select (){}
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
;(function(){
    let myAdd : (x:number, y:number) => number = 
        function (x : number, y:number):number {return x+y};
    
    function buildName(f : string, l ?: string, z = "a") : string{
        return f;
    }

    let result1 = buildName("a");
    let result2 = buildName("a","b");
    let result3 = buildName("a","b","1");
    function buildName2(f: string, ...r: string[]){
        return f + r.join(" ");
    }

    let emp = buildName2("j","k","l","m");
    buildName.bind("j")
    // buildName.prototype.a = "a";
    // console.log(buildName.prototype.a);
    let buildNameFun : (fname : string, ...rest:string[]) => string = buildName2;
})();

;(function (){
    interface Card {
        suit : string;
        card : number;
    }
    interface Deck {
        suits : string [];
        cards : number [];
        createCardPicker(this: Deck) : ()=> Card;
    }
    let deck : Deck = {
        suits : ["hearts", "spades", "clubs"],
        cards : Array(52),
        createCardPicker : function(this : Deck){
            return ()=>{
                let pickedCard = Math.floor(Math.random() * 52);
                let pickedSuit = Math.floor(pickedCard / 13);

                return { suit  : this.suits[pickedSuit], card : pickedCard % 13}
            }
        }
    }

    interface UIElement {
        addClickLinstener(onClick : (this : void, e: Event)=> void) : void;
    }
    class Handler {
        info : number = 0;
        onClickBad(this : void, e:Event){
            // this.info = e.timeStamp;
        }
    }

    let h = new Handler();    

})();

;(function(){
    let suits = ["hearts", "spades", "clubs", "diamonds"];
    type typeX = {suit : string, card : number;}[] | number;
    // function pickCard(x:{suit : string, card : number;}[]):number;
    // function pickCard(x:number): {suit:string; card:number;};
    function pickCard(x : typeX) : any{
        if(typeof x == "object"){
            let pickedCard = Math.floor(Math.random() * x.length);
            return pickedCard;
        } else if(typeof x == "number"){
            let pickedSuit = Math.floor(x / 13);
            return {suit : suits[pickedSuit], card : x % 13};
        }
    }
})();
//function end 
// literal
;(function(){
    type Easing = "ease-in" | "ease-out" | "ease-in-out";
    class UIElement {
        animate(dx : number, dy: number, easing : Easing){
            if(easing === "ease-in"){

            }else if(easing === "ease-in-out"){
                
            }else if(easing === "ease-out"){

            } else{

            }
        }
    }
    let btn = new UIElement();
    btn.animate(0,0,"ease-in");
    // btn.animate(0,0,"ease-idn");
})();

;(function (){
    function padLeft(value : string, padding :string | number){
        if(typeof padding == "number"){
            return Array(padding + 1).join(" ") + value;
        }

        if(typeof padding == "string"){
            return padding + value;
        }
        throw new Error(`Expected string or number, got '${padding}'.`);
    }

    console.log(padLeft("Hello world", 4));

    interface Bird {
        fly(): void;
        layEggs(): void;
    }

    interface Fish {
        swim() : void;
        layEggs() : void;
    }

    // // declare function getSmallPet() : Fish | Bird;
    
    // let pet = getSmallPet();
    // pet.layEggs();
    type Network = {
        state : "success";
        code : number
    }

    type State = Network;

    function networkState(state : State) : string {
        state.code;
        state.state
        return "";
    }

    interface ErrorHandling {
        success : boolean;
        error ?: {message : string};
    }

    interface ArtworksData {
        artworks : {title : string}[];
    }

    interface ArtistsData {
        artists : {name : string}[];
    }

    type ArtworksResponse = ArtworksData & ErrorHandling;
    type ArtistsResponse = ArtistsData & ErrorHandling;

    const handleArtistsResponse = (response : ArtistsResponse) =>{
        if(response.error){
            console.error(response.error.message);
            return;
        }
        console.log(response.artists)
    }
    handleArtistsResponse({artists : [{name : "asd"}], success : true});
})();

;(function (){
    class Person {
        constructor(public name : string){}
    }

    interface Loggable {
        log(name : string) : void;
    }
    class ConsoleLogger implements Loggable{
        log(name : string) {
            console.log(`Hello, I'm ${name}.`);
        }
    }

    // const FlyToMixin = (superclass : any) => class extends superclass {
    //     flyTo(destination : string){
    //         console.log(`${this.name} is flying to the ${destination}`);
    //     }
    // }

    function extend<First extends{}, Second extends {}>(
        first : First,
        second : Second
    ) : First & Second{
        const result : Partial<First & Second> = {};
        console.log(first, second)
        for(const prop in first){
            if(first.hasOwnProperty(prop)){
                (result as First)[prop] = first[prop];
            }
        }

        for(const prop in second){
            if(second.hasOwnProperty(prop)){
                (result as Second)[prop] = second[prop];
            }
        }
        console.log(result);
        return result as First & Second;
    }
    const jim = extend(new Person("Jim"), ConsoleLogger.prototype);
    // jim.log(jim.name);

})();

;(function (){
    class Greeter {
        greeting : string;
        constructor(message : string){
            this.greeting = message;
        }

        greet(){
            return "Hello, " + this.greeting;
        }
    }
    let greeter = new Greeter("world");
    console.log(greeter.greet());

    class Animal{
        move(dis : number = 0){
            console.log(` animal moved ${dis}m.`);
        }
    }

    class Dog extends Animal{
        bark(){
            console.log('Woof! Woof!');
        }
    }

    const dog = new Dog();
    dog.bark();
    dog.move(10);
})();

;(function (){
    enum Direction {
        Up = 1,
        Down,
        Left,
        Right
    }
    function Move(log : string, dir : Direction){

    }
    Move("UP!",Direction.Up);

    enum BooleanText{
        No = 0,
        Yes = "YES"
    };

    enum E {
        Foo,
        Bar,
    }
    
    function f(x: E) {
        // if (x !== E.Foo || x !== E.Bar) {
        // }
    }

    enum level {
        Error,
        Warn,
        Info,
        Debug
    }

    type LogLevels = keyof typeof level;

    function printI(key : LogLevels, msg : string){
        const num = level[key];
        if(num <= level.Warn){
            console.log("")
        }
    }
    enum Enum{
        A
    }
    let a = Enum.A;
    let nameOfA = Enum[a];

    const enum Enum2{
        A = 1,
        B = A * 2
    }

    const enum Dir {
        Up, Down, Left, Right
    }

    let dirs = [Dir.Down, Dir.Up];
})();

;(function (){
    interface GenericIdentityFn<T> {
        (arg : T[]) : T[];
    }

    function identity<TEMPLATE>(arg : TEMPLATE[]) : TEMPLATE[]{
        console.log(arg.length);
        return arg;
    }

    let output = identity<string>(["asd"]);
    // let myIdentity : <T> (asd : T[])=> T[] = identity;
    // let myIdentity : { <T>(asd : T[]): T[]} = identity;
    let myIdentity : GenericIdentityFn<string> = identity;
    myIdentity(["asd"]);

    class GenericNumber<T>{
        zeroValue : T;
        add : (x : T, y: T) => T;
    }

    let myGenericNumber = new GenericNumber<number>();
    myGenericNumber.zeroValue = 0;
    myGenericNumber.add = function(x,y) { return x+y };

    let stringNumeric = new GenericNumber<string>();
    stringNumeric.zeroValue = "";
    stringNumeric.add = function (x,y){return x+y};

    console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));

    interface lengthWise{
        length : number
    }

    function loggingIdentity<T extends lengthWise>(arg : T): T{
        console.log(arg.length);
        return arg;
    }

    // loggingIdentity(3);
    loggingIdentity({length : 1});

    function getProperty<T, K extends keyof T>(obj : T, key : K){
        return obj[key];
    }

    let x = {a :1 , b:2};
    getProperty(x, "a");

    function create<T>(c : {new() : T;}) : T{
        return new c();
    }
    class k  {
        a;
        constructor(){
            // this.a = c;
        }
    }
    class l  {
        a;
        constructor(c){
            this.a = c;
        }
    }

    function m (c){
        this.a = c;
    }
    let i = new l(1);
    let j = new m(1);
    console.log(i, j);
    create(k);
    console.log(k, create(k));
})();

;(function (){
    var Person = (function(){
        function Person(name){
            this._name = name;
        }
        Person.prototype.sayHi = function(){
            console.log("hi", this._name);
        }
        return Person;
    }());

    const me = new Person("lee");
    me.sayHi();

    const Foo = class MyClass {};
    const foo = Foo;
    new foo();
})();

;(function (){
    class Person{
        _name : string
        constructor(name : string){
            this._name = name;
        }
    }
    const me = new Person("Lee  ");
    console.log(me);

    class Foo {
        _arr;
        constructor(arr : string[] = []){
            this._arr = arr;
        }
    }
})();

;(function (){
    class BeeKeeper {
        hasMask : boolean;
    }

    class ZooKeeper {
        nametag : string
    }
    
    class Animal {
        numLegs : number;
    }

    class Bee extends Animal{
        keeper : BeeKeeper;
    }

    class Lion extends Animal{
        keeper : ZooKeeper;
    }

    function createInstantce<A extends Animal>(c : new() => A) : A{
        return new c();
    }
    createInstantce(Lion).keeper.nametag;
    createInstantce(Lion).numLegs;
    createInstantce(Bee).keeper.hasMask;
    createInstantce(Bee).numLegs;
})();

;;(function (){
    
})();