//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////// Display Settings
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let padding = 10;
    let freq = 10;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////// Colour Palettes
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
    let bgColour = [235,235,245];
    let colourSet = [{"name":"Orange Yellow","hex":"ebb607","rgb":[235,182,7],"cmyk":[0,23,97,8],"hsb":[46,97,92],"hsl":[46,94,47],"lab":[77,7,78]},{"name":"Spanish Bistre","hex":"826c23","rgb":[130,108,35],"cmyk":[0,17,73,49],"hsb":[46,73,51],"hsl":[46,58,32],"lab":[46,0,42]},{"name":"Blue RYB","hex":"0a40f2","rgb":[10,64,242],"cmyk":[96,74,0,5],"hsb":[226,96,95],"hsl":[226,92,49],"lab":[38,54,-91]},{"name":"Illuminating Emerald","hex":"2b8c76","rgb":[43,140,118],"cmyk":[69,0,16,45],"hsb":[166,69,55],"hsl":[166,53,36],"lab":[52,-33,4]},{"name":"Cerulean Blue","hex":"3150b5","rgb":[49,80,181],"cmyk":[73,56,0,29],"hsb":[226,73,71],"hsl":[226,57,45],"lab":[37,24,-57]}];
    let colourSetTetradic = [{"name":"Cadet Blue","hex":"3ea3a3","rgb":[62,163,163],"cmyk":[62,0,0,36],"hsb":[180,62,64],"hsl":[180,45,44],"lab":[62,-29,-9]},{"name":"Trypan Blue","hex":"1212b8","rgb":[18,18,184],"cmyk":[90,90,0,28],"hsb":[240,90,72],"hsl":[240,82,40],"lab":[24,58,-81]},{"name":"Tiffany Blue","hex":"23b8b8","rgb":[35,184,184],"cmyk":[81,0,0,28],"hsb":[180,81,72],"hsl":[180,68,43],"lab":[68,-36,-11]},{"name":"Medium Slate Blue","hex":"7878ff","rgb":[120,120,255],"cmyk":[53,53,0,0],"hsb":[240,53,100],"hsl":[240,100,74],"lab":[57,36,-67]},{"name":"Light Pink","hex":"ffa8a8","rgb":[255,168,168],"cmyk":[0,34,34,0],"hsb":[0,34,100],"hsl":[0,100,83],"lab":[77,32,13]}];
    let colourSetSquare = [{"name":"Super Pink","hex":"e060b4","rgb":[224,96,180],"cmyk":[0,57,20,12],"hsb":[321,57,88],"hsl":[321,67,63],"lab":[59,59,-20]},{"name":"Medium Aquamarine","hex":"6ce095","rgb":[108,224,149],"cmyk":[52,0,33,12],"hsb":[141,52,88],"hsl":[141,65,65],"lab":[81,-49,27]},{"name":"Safety Yellow","hex":"f5d62a","rgb":[245,214,42],"cmyk":[0,13,83,4],"hsb":[51,83,96],"hsl":[51,91,56],"lab":[86,-5,80]},{"name":"Pansy Purple","hex":"82105a","rgb":[130,16,90],"cmyk":[0,88,31,49],"hsb":[321,88,51],"hsl":[321,78,29],"lab":[29,51,-13]},{"name":"Cadmium Green","hex":"0b662b","rgb":[11,102,43],"cmyk":[89,0,58,60],"hsb":[141,89,40],"hsl":[141,81,22],"lab":[37,-39,26]}];
    let colourSetMonochromatic = [{"name":"Persian Indigo","hex":"1f0a69","rgb":[31,10,105],"cmyk":[70,90,0,59],"hsb":[253,90,41],"hsl":[253,83,23],"lab":[13,38,-50]},{"name":"Blue Violet Crayola","hex":"6f5db0","rgb":[111,93,176],"cmyk":[37,47,0,31],"hsb":[253,47,69],"hsl":[253,34,53],"lab":[45,27,-42]},{"name":"Han Purple","hex":"6238fc","rgb":[98,56,252],"cmyk":[61,78,0,1],"hsb":[253,78,99],"hsl":[253,97,60],"lab":[42,66,-90]},{"name":"Plump Purple","hex":"5e4aa8","rgb":[94,74,168],"cmyk":[44,56,0,34],"hsb":[253,56,66],"hsl":[253,39,47],"lab":[38,32,-48]},{"name":"Blue Violet Crayola","hex":"796cab","rgb":[121,108,171],"cmyk":[29,37,0,33],"hsb":[252,37,67],"hsl":[252,27,55],"lab":[49,19,-32]}];


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////// Classes
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    /**
     * This class describes a L-System.
     * it has a method that returns the output at each iteration in the console.
     */

    class lSystem {
      constructor(variables=["F","G"], constants=["+","-"], axiom="F", rules={F: "F+G", G: "F-G"}, name="l-system"){
        this.variables = variables ;
        this.constants = constants;
        this.axiom = axiom;
        this.rules = rules;
        this.name = name;
      }; 

      /**
       * { returns the l-system output at each iteration, in the console }
       *
       * @param      {object}  lSystem     The l system definition
       * @param      {number}  nIteration  The iteration number (default = 3)
       */
      generate(nIteration=3) {
        let prevOutput = this.axiom;
        let currentOutput = ""; 
        let r; //replaceing alphabet
        console.log(this.name);
        for (let i=0; i<=nIteration; i++) {
          console.log(`iteration ${i}`, prevOutput);
          for (let a of prevOutput) {
            if (this.constants.includes(a) || !Object.keys(this.rules).includes(a)) {
              r = a;
            } else {
              r = this.rules[a];
            };
            currentOutput = currentOutput + r;
          }
          prevOutput = currentOutput;
          currentOutput = "";
        };
      };
    };



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////// l systems
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * the mathematic definition of different l-systems
     */

    /*const cantorSet = {
      variables: ["A","B"],
      constants: [],
      axiom: "A",
      rules: {
          A: "ABA",
          B: "BBB"
        }
    };


    const algea = {
      variables: ["A","B"],
      constants: [],
      axiom: "A",
      rules: {
          A: "AB",
          B: "A"
        }
    };

    const binaryTree = {
      variables: ["0","a"],
      constants: ["[","]"],
      axiom: "0",
      rules: {
          0: "1[0]0",
          1: "11"
        }
    };

    const kochCurve = {
      variables: ["F"],
      constants: ["+","-"],
      axiom: "F",
      rules: {
          F: "F+F-F-F+F"
        }
    };

    const sierpinskiTriangle1 = {
      variables: ["F","G"],
      constants: ["+","-"],
      axiom: "F-G-G",
      rules: {
          F: "F-G+F+G-F",
          G: "GG"
        }
    };

    const sierpinskiTriangle2 = {
      variables: ["A","B"],
      constants: ["+","-"],
      axiom: "A",
      rules: {
          A: "B-A-B",
          B: "A+B+A"
        }
    };

    const dragonCurve = {
      variables: ["F","G"],
      constants: ["+","-"],
      axiom: "F",
      rules: {
          F: "F+G",
          G: "F-G"
        }
    };


    const plant = {
      variables: ["X","G"],
      constants: ["+","-","[","]"],
      axiom: "X",
      rules: {
          X: "F+[[X]-X]-F[-FX]+X",
          F: "FF"
        }
    };
    */




    
    /**
     * generate each l-system in console for the desired nIteration. default nIteration is 3; 
     */
   

    cantorSet = new lSystem(["A","B"], [] , "A", {A: "ABA", B: "BBB"}, "Cantor Set");
    kochCurve = new lSystem(["F"], ["+","-"] , "F", {F: "F+F-F-F+F"}, "Koch Curve");
    dragonCurve = new lSystem(["F","G"],["+","-"], "F", {F: "F+G", G: "F-G"}, "Dragon Curve");
    plant = new lSystem(["X","G"],["+","-","[","]"],"X",{X: "F+[[X]-X]-F[-FX]+X", F: "FF"}, "Fractal Plant");
    sierpinskiTriangle1 = new lSystem(["F","G"],["+","-"],"F-G-G",{F: "F-G+F+G-F", G: "GG"}, "Sierpinski Triangle");

    let nIteration;
    cantorSet.generate(nIteration);
    kochCurve.generate(nIteration);
    dragonCurve.generate(nIteration);
    plant.generate(nIteration);
    sierpinskiTriangle1.generate(nIteration);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////// Finite Subdivision
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////// Auxilary Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////// l system Drawing Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



  /**
   * Draws a Dragon curve. (L-System Grammer in console & Turtle Graphics in canvas)
   *
   * @param      {object}  lSystem     The Dragon Curve
   * @param      {number}  nIteration  The iteration number
   * @param      {string}  input       The axiom
   * @param      {number}  startX      The start x
   * @param      {number}  startY      The start y
   * @param      {number}  length      The length of each move
   * @param      {number}  angle       The angle in degrees
   * @param      {boolean} random      [true,true] means random l at each iteration in Turtle Graphics. [true, false] means random l at each drawing. [false, false] means fix length.
   * @param      {object}  p           The canvas
   */

    function drawDragonCurve (lSystem, nIteration , input , startX, startY, length, angle, random = [false,false], p) {
      if (input === lSystem.axiom) {
        let v = new p5.Vector(1,0);
        (random[0] == false && random[1]== false) ? l = length : l = p.random(0,length);
        p.stroke(colourSetTetradic[(p.random([0,1,2,3,4]))%5].rgb); 
        v.setMag(l);
        // console.log("v start",v);
        rad = p.radians(angle);
        
        let vSum = new p5.Vector(0,0);
        vSum.x = startX;
        vSum.y = startY; 
        // console.log("vSum start",vSum);

        for (i=0; i<=nIteration; i++) {
          let currentOutput = "";
           

          for (a of input) {

            if (lSystem.constants.includes(a) || !Object.keys(lSystem.rules).includes(a)) {
              r = a;
              if (a === "+") {
                (random[0] == true && random[1]== true) ? l = p.random(0,length) : l = l; //______interesting! different l at each turn. [#1]
                v.setMag(l); //______interesting! [#1]
                v.rotate(rad);
                // console.log("v +",v);
                // console.log("vSum +",vSum);
              } else if (a === "-") {
                (random[0] == true && random[1]== true) ? l = p.random(0,length) : l = l; //______interesting! different l at each turn. [#1]
                v.setMag(l); //______interesting! [#1]
                v.rotate(-rad);
                // console.log("v -",v);
                // console.log("vSum -",vSum);
              };
            } else {
              r = lSystem.rules[a];
              if (a === "F") {
                p.stroke(colourSetTetradic[(p.random([0,1,2,3,4]))%5].rgb);
                let x0 = vSum.x;
                let y0 = vSum.y;
                vSum.add(v);
                p.line(x0 , y0, vSum.x, vSum.y);
                // console.log("v F",v);
                // console.log("vSum F",vSum);
              } else if (a === "G") { 
                p.stroke(colourSetTetradic[(p.random([0,1,2,3,4]))%5].rgb);
                let x0 = vSum.x;
                let y0 = vSum.y;
                vSum.add(v);
                p.line(x0 , y0, vSum.x, vSum.y);
                // console.log("v G",v);
                // console.log("vSum G",vSum);
              }
            };
            currentOutput =  currentOutput + r;
          };
          input = currentOutput;
          currentOutput = "";
        };
      } else {
        console.log("wrong start!");
      };
    };

  /**
   * Draws a Cantor Set. (L-System Grammer in console & Turtle Graphics in canvas)
   *
   * @param      {object}  lSystem     The Cantor Set
   * @param      {number}  nIteration  The iteration number
   * @param      {string}  input       The axiom
   * @param      {number}  startX      The start x
   * @param      {number}  startY      The start y
   * @param      {number}  length      The length of initial line
   * @param      {object}  p           The canvas
   */
    function drawCantorSet (lSystem, nIteration , input , startX, startY, length, p) {
      if (input === lSystem.axiom) {
        let y0 = startY;
        let l = length;
        let canvasSize = p.select("#canvas").width/4;  // canvasSize is not a global variable in sketchD. I couldnt use select() outside setup() or draw().
        let deltaY = (canvasSize-2*padding)/nIteration;

        for (i=0; i<=nIteration; i++) {
          let currentOutput = "";
          
          x0 = startX;
          (i>0) ? l = l/3 : l = l;
          // console.log("l", l);
          
          for (a of input) {
            if (lSystem.constants.includes(a) || !Object.keys(lSystem.rules).includes(a)) {
              r = a;
            } else {
              r = lSystem.rules[a];
              if (a === "A") { 
                p.stroke(colourSetTetradic[(p.random([0,1,2,3,4]))%5].rgb);
                p.line(x0,y0,x0+l,y0);
              }
              x0 = x0+l;
            };
            currentOutput =  currentOutput + r;
          };
          input = currentOutput;
          currentOutput = "";
          y0 = y0 + deltaY;
        };
      } else {
        console.log("wrong start!");
      };
    };

  /**
   * Draws a fractal plant. (L-System Grammer in console & Turtle Graphics in canvas)
   *
   * @param      {object}  lSystem     The Fractal Plant
   * @param      {number}  nIteration  The iteration number
   * @param      {string}  input       The axiom
   * @param      {number}  startX      The start x
   * @param      {number}  startY      The start y
   * @param      {number}  length      The length of each line fragment
   * @param      {number}  angle       The angle of rotation
   * @param      {object}  p           The canvas
   */  
    function drawPlant(lSystem, nIteration , input , startX, startY, length, angle, p) {
        if (input === lSystem.axiom) {
          let l = length; // normal fixed length
          rad = p.radians(angle);
          p.translate(startX, startY);
          for (i=0; i<=nIteration; i++) {
            let currentOutput = "";
            p.push();
            for (a of input) {
              if (lSystem.constants.includes(a) || !Object.keys(lSystem.rules).includes(a)) {
                r = a;
                if (a === "+") {
                  rad = p.radians(p.random(0,angle));
                  p.rotate(rad);
                } else if (a === "-") {
                  rad = p.radians(p.random(0,angle));
                  p.rotate(-rad);
                } else if (a === "[") {
                  p.push();
                } else if (a === "]") {
                  p.pop();
                } 
              } else {
                r = lSystem.rules[a];
                if (a === "F") {
                  p.stroke(colourSetMonochromatic[i%5].rgb);
                  l = p.random(0,length);
                  p.line(0, 0, 0, -l);
                  p.translate(0, -l);
                };
              };
              currentOutput =  currentOutput + r;
            };
            input = currentOutput;
            currentOutput = "";
            // rad = -rad;
            p.pop();

          };
        } else {
          console.log("wrong start!");
        };
      };

  /**
   * Draws a Koch curve. (L-System Grammer in console & Turtle Graphics in canvas)
   *
   * @param      {object}  lSystem     The Koch Curve
   * @param      {number}  nIteration  The iteration number
   * @param      {string}  input       The axiom
   * @param      {number}  startX      The start x
   * @param      {number}  startY      The start y
   * @param      {number}  length      The length of each move
   * @param      {number}  angle       The angle in degrees
   * @param      {object}  p           The canvas
   */
    function drawKochCurve (lSystem, nIteration , input , startX, startY, length, angle, p) {
      if (input === lSystem.axiom) {
        let v = new p5.Vector(1,0);
        let l = length; // normal fixed length
        // l = random(0,length); //______interesting! different l at each iteration.
        v.setMag(l);
        // console.log("v start",v);
        rad = p.radians(angle);
        
        let vSum = new p5.Vector(0,0);
        vSum.x = startX;
        vSum.y = startY; 
        // console.log("vSum start",vSum);
        
        for (i=0; i<=nIteration; i++) {
          let currentOutput = "";
          p.stroke(colourSetTetradic[i%5].rgb);
          
           

          for (a of input) {

            if (lSystem.constants.includes(a) || !Object.keys(lSystem.rules).includes(a)) {
              r = a;
              if (a === "+") {
                // l = p.random(0,length); //______interesting! different l at each turn. [#1]
                // v.setMag(l); //______interesting! [#1]
                v.rotate(-rad);
                // console.log("v +",v);
                // console.log("vSum +",vSum);
              } else if (a === "-") {
               // l = p.random(0,length); //______interesting! different l at each turn. [#1]
               //  v.setMag(l); //______interesting! [#1]
                v.rotate(rad);
                // console.log("v -",v);
                // console.log("vSum -",vSum);
              };
            } else {
              r = lSystem.rules[a];
              if (a === "F") {
                
                let x0 = vSum.x;
                let y0 = vSum.y;
                vSum.add(v);
                p.line(x0 , y0, vSum.x, vSum.y);
                // console.log("v F",v);
                // console.log("vSum F",vSum);
              } 
            };
            currentOutput =  currentOutput + r;
          };
          input = currentOutput;
          currentOutput = "";
        };
      } else {
        console.log("wrong start!");
      };
    };

  /**
   * Draws a Sierpinski Triangle. (L-System Grammer in console & Turtle Graphics in canvas)
   *
   * @param      {object}  lSystem     The Sierpinski Triangle
   * @param      {number}  nIteration  The iteration number
   * @param      {string}  input       The axiom
   * @param      {number}  startX      The start x
   * @param      {number}  startY      The start y
   * @param      {number}  length      The length of each move
   * @param      {number}  angle       The angle in degrees
   * @param      {object}  p           The canvas
   */
    function drawSierpinskiTriangle1 (lSystem, nIteration , input , startX, startY, length, angle, random = [false,false], p) {
      if (input === lSystem.axiom) {
        let v = new p5.Vector(1,0);
        (random[0] == false && random[1]== false) ? l = length : l = p.random(0,length);
        p.stroke(colourSetTetradic[(p.random([0,1,2,3,4]))%5].rgb); 
        v.setMag(l);
        // console.log("v start",v);
        rad = p.radians(angle);
        
        let vSum = new p5.Vector(0,0);
        vSum.x = startX;
        vSum.y = startY; 
        // console.log("vSum start",vSum);

        for (i=0; i<=nIteration; i++) {
          let currentOutput = "";
           

          for (a of input) {

            if (lSystem.constants.includes(a) || !Object.keys(lSystem.rules).includes(a)) {
              r = a;
              if (a === "+") {
                (random[0] == true && random[1]== true) ? l = p.random(0,length) : l = l; //______interesting! different l at each turn. [#1]
                v.setMag(l); //______interesting! [#1]
                v.rotate(rad);
                // console.log("v +",v);
                // console.log("vSum +",vSum);
              } else if (a === "-") {
                (random[0] == true && random[1]== true) ? l = p.random(0,length) : l = l; //______interesting! different l at each turn. [#1]
                v.setMag(l); //______interesting! [#1]
                v.rotate(-rad);
                // console.log("v -",v);
                // console.log("vSum -",vSum);
              };
            } else {
              r = lSystem.rules[a];
              if (a === "F") {
                p.stroke(colourSetTetradic[(p.random([0,1,2,3,4]))%5].rgb);
                let x0 = vSum.x;
                let y0 = vSum.y;
                vSum.add(v);
                p.line(x0 , y0, vSum.x, vSum.y);
                // console.log("v F",v);
                // console.log("vSum F",vSum);
              } else if (a === "G") { 
                p.stroke(colourSetTetradic[(p.random([0,1,2,3,4]))%5].rgb);
                let x0 = vSum.x;
                let y0 = vSum.y;
                vSum.add(v);
                p.line(x0 , y0, vSum.x, vSum.y);
                // console.log("v G",v);
                // console.log("vSum G",vSum);
              }
            };
            currentOutput =  currentOutput + r;
          };
          input = currentOutput;
          currentOutput = "";
        };
      } else {
        console.log("wrong start!");
      };
    };



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////// Finite Subdivision Drawing Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////








//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////// Sketches
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /**
   * SKETCH 1
   */

      const sketch1 = ( p ) => {
        p.setup = function() {
          let canvasSize = p.select("#canvas").width/5;
          let canvas = p.createCanvas(canvasSize, canvasSize);
          p.createElement("span").html("<sup>[</sup> fix length of step <sub>]</sub>").parent("canvas1");
        };

        p.draw = function() {
          p.frameRate(freq);
          p.background(bgColour);
          p.strokeWeight(1);
          drawDragonCurve(dragonCurve, p.frameCount, "F", p.canvas.width/2, p.canvas.height/2, 20, 90, [false,false], p);
          // stop the iteration & save the canvas
          if (p.frameCount>10) {
            p.frameRate(0);
            // saveCanvas(canvas, 'dragonCurve', 'jpg'); 
          };
        };
      };

  /**
   * SKETCH 2
   */
      const sketch2 = ( p ) => {
        p.setup = function() {
          let canvasSize = p.select("#canvas").width/5;
          let canvas = p.createCanvas(canvasSize, canvasSize);
          p.createElement("span").html("<sup>[</sup> random length of step at each drawing <sub>]</sub>").parent("canvas2");
        };

        p.draw = function() {
          p.frameRate(freq);
          p.background(bgColour);
          p.strokeWeight(1);
          drawDragonCurve(dragonCurve, p.frameCount, "F", p.canvas.width/2, p.canvas.height/2, 20, 90, [true,false], p);
          // stop the iteration & save the canvas
          if (p.frameCount>10) {
            p.frameRate(0);
            // saveCanvas(canvas, 'dragonCurve', 'jpg'); 
          };
        };      
      };

  /**
   * SKETCH 3
   */
  
      const sketch3 = ( p ) => {
        p.setup = function() {
          let canvasSize = p.select("#canvas").width/5;
          let canvas = p.createCanvas(canvasSize, canvasSize);
          p.createElement("span").html("<sup>[</sup> random length of step at each iteration <sub>]</sub>").parent("canvas3");
        };

        p.draw = function() {
          p.frameRate(freq);
          p.background(bgColour);
          p.strokeWeight(1);
          drawDragonCurve(dragonCurve, p.frameCount, "F", p.canvas.width/2, p.canvas.height/2, 20, 90, [true,true], p);
          // stop the iteration & save the canvas
          if (p.frameCount>10) {
            p.frameRate(0);
            // saveCanvas(canvas, 'dragonCurve', 'jpg'); 
          };
        };
      };

  /**
   * SKETCH 4
   */
  
      const sketch4 = ( p ) => {
        p.setup = function() {
          let canvasSize = p.select("#canvas").width/5;
          let canvas = p.createCanvas(canvasSize, canvasSize);
        };
        p.draw = function() {
          p.frameRate(freq);
          p.background(bgColour);
          p.strokeWeight(2);
          drawCantorSet(cantorSet, p.frameCount, "A", padding, padding, p.canvas.width-2*padding, p);
          // stop the iteration & save the canvas
          if (p.frameCount>8) {
            p.frameRate(0);
            // saveCanvas(canvas, 'dragonCurve', 'jpg'); 
          };
        };
        
      };

  /**
   * SKETCH 5
   */

      const sketch5 = ( p ) => {
        p.setup = function() {
          let canvasSize = p.select("#canvas").width/3;
          let canvas = p.createCanvas(canvasSize, canvasSize);
        };
        p.draw = function() {
          p.frameRate(freq);
          p.background(bgColour);
          p.strokeWeight(1);
          drawPlant(plant, p.frameCount , "X" , p.canvas.width/2, p.canvas.height-padding, p.canvas.height/200, -25, p);
          // stop the iteration & save the canvas
          if (p.frameCount>6) {
            p.frameRate(0);
            // saveCanvas(canvas, 'dragonCurve', 'jpg'); 
          };
        };
      };

  /**
   * SKETCH 6
   */
    
      const sketch6 = ( p ) => {
        p.setup = function() {
          let canvasSize = p.select("#canvas").width/3;
          let canvas = p.createCanvas(canvasSize, canvasSize);
        };

        p.draw = function() {
          p.frameRate(freq);
          p.background(bgColour);
          p.strokeWeight(1);
          drawKochCurve(kochCurve, p.frameCount, "F", padding, p.canvas.height-padding, 1, 90, p);
          // stop the iteration & save the canvas
          if (p.frameCount>4) {
            p.frameRate(0);
            // saveCanvas(canvas, 'dragonCurve', 'jpg'); 
          };
        };
      };

  /**
   * SKETCH 7
   */
    
      const sketch7 = ( p ) => {
        p.setup = function() {
          let canvasSize = p.select("#canvas").width/3;
          let canvas = p.createCanvas(canvasSize, canvasSize);
        };

        p.draw = function() {
          p.frameRate(freq);
          p.background(bgColour);
          p.strokeWeight(1);
          drawSierpinskiTriangle1(sierpinskiTriangle1, p.frameCount, "F-G-G", p.canvas.width/2, p.canvas.height/2, 3, 120, [true,false], p);
          // stop the iteration & save the canvas
          if (p.frameCount>5) {
            p.frameRate(0);
            // saveCanvas(canvas, 'dragonCurve', 'jpg'); 
          };
        };
      };





  /**
   * Assign each Skecth to an HTML element
   */

  /**
   * @todo  write a loop function
   * to put each canvases in a specific div in .canvas
   */
    


    let canvas1 = new p5(sketch1, 'canvas1'); 
    let canvas2 = new p5(sketch2, 'canvas2');
    let canvas3 = new p5(sketch3, 'canvas3');
    let canvas4 = new p5(sketch4, 'canvas4');
    let canvas5 = new p5(sketch5, 'canvas5');
    let canvas6 = new p5(sketch6, 'canvas6');
    let canvas7 = new p5(sketch7, 'canvas7');







    // let canvasG = new p5(sketchG, 'canvasG');
    // let canvasH = new p5(sketchH, 'canvasH');
    // let canvasI = new p5(sketchI, 'canvasI');
    // let canvasJ = new p5(sketchJ, 'canvasJ');
    // let canvasK = new p5(sketchK, 'canvasK');
    // let canvasL = new p5(sketchL, 'canvasL');
    // let canvasM = new p5(sketchM, 'canvasM');
    // let canvasN = new p5(sketchN, 'canvasN');
    // let canvasO = new p5(sketchO, 'canvasO');
    // let canvasP = new p5(sketchP, 'canvasP');
    // let canvasQ = new p5(sketchQ, 'canvasQ');
    // let canvasR = new p5(sketchR, 'canvasR');
    // let canvasS = new p5(sketchS, 'canvasS');
    // let canvasT = new p5(sketchT, 'canvasT');
    // let canvasU = new p5(sketchU, 'canvasU');
    // let canvasV = new p5(sketchV, 'canvasV');
    // let canvasW = new p5(sketchW, 'canvasW');
    // let canvasX = new p5(sketchX, 'canvasX');
    // let canvasY = new p5(sketchY, 'canvasY');
    // let canvasZ = new p5(sketchZ, 'canvasZ');





