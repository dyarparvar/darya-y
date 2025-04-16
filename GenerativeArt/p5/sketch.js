/**
 * mathematics
 */

const lSystem = {
  variables: ["F","G"],
  constants: ["+","-"],
  axiom: "F",
  rules: {
      F: "F+G",
      G: "F-G"
    },
  parameters: [],
  probabilities: []
};




const algea = {
  variables: ["A","B"],
  constants: [],
  axiom: "A",
  rules: {
      A: "AB",
      B: "A"
    },
  parameters: [],
  probabilities: []
};

const binaryTree = {
  variables: ["0","a"],
  constants: ["[","]"],
  axiom: "0",
  rules: {
      0: "1[0]0",
      1: "11"
    },
  parameters: [],
  probabilities: []
};

const cantorSet = {
  variables: ["A","B"],
  constants: [],
  axiom: "A",
  rules: {
      A: "ABA",
      B: "BBB"
    },
  parameters: [],
  probabilities: []
};

const kochCurve = {
  variables: ["F"],
  constants: ["+","-"],
  axiom: "F",
  rules: {
      F: "F+F-F-F+F"
    },
  parameters: [],
  probabilities: []
};

const sierpinskiTriangle1 = {
  variables: ["F","G"],
  constants: ["+","-"],
  axiom: "F-G-G",
  rules: {
      F: "F-G+F+G-F",
      G: "GG"
    },
  parameters: [],
  probabilities: []
};

const sierpinskiTriangle2 = {
  variables: ["A","B"],
  constants: ["+","-"],
  axiom: "A",
  rules: {
      A: "B-A-B",
      B: "A+B+A"
    },
  parameters: [],
  probabilities: []
};

const dragonCurve = {
  variables: ["F","G"],
  constants: ["+","-"],
  axiom: "F",
  rules: {
      F: "F+G",
      G: "F-G"
    },
  parameters: [],
  probabilities: []
};


const plant = {
  variables: ["X","G"],
  constants: ["+","-","[","]"],
  axiom: "X",
  rules: {
      X: "F+[[X]-X]-F[-FX]+X",
      F: "FF"
    },
  parameters: [],
  probabilities: []
};




/**
 * Display Settings
 */

let padding = 10;
let freq = 10;

/**
 * Colour Palettes
 */

let bgColour = [235,235,245];
let colourSet = [{"name":"Orange Yellow","hex":"ebb607","rgb":[235,182,7],"cmyk":[0,23,97,8],"hsb":[46,97,92],"hsl":[46,94,47],"lab":[77,7,78]},{"name":"Spanish Bistre","hex":"826c23","rgb":[130,108,35],"cmyk":[0,17,73,49],"hsb":[46,73,51],"hsl":[46,58,32],"lab":[46,0,42]},{"name":"Blue RYB","hex":"0a40f2","rgb":[10,64,242],"cmyk":[96,74,0,5],"hsb":[226,96,95],"hsl":[226,92,49],"lab":[38,54,-91]},{"name":"Illuminating Emerald","hex":"2b8c76","rgb":[43,140,118],"cmyk":[69,0,16,45],"hsb":[166,69,55],"hsl":[166,53,36],"lab":[52,-33,4]},{"name":"Cerulean Blue","hex":"3150b5","rgb":[49,80,181],"cmyk":[73,56,0,29],"hsb":[226,73,71],"hsl":[226,57,45],"lab":[37,24,-57]}];
let colourSetTetradic = [{"name":"Cadet Blue","hex":"3ea3a3","rgb":[62,163,163],"cmyk":[62,0,0,36],"hsb":[180,62,64],"hsl":[180,45,44],"lab":[62,-29,-9]},{"name":"Trypan Blue","hex":"1212b8","rgb":[18,18,184],"cmyk":[90,90,0,28],"hsb":[240,90,72],"hsl":[240,82,40],"lab":[24,58,-81]},{"name":"Tiffany Blue","hex":"23b8b8","rgb":[35,184,184],"cmyk":[81,0,0,28],"hsb":[180,81,72],"hsl":[180,68,43],"lab":[68,-36,-11]},{"name":"Medium Slate Blue","hex":"7878ff","rgb":[120,120,255],"cmyk":[53,53,0,0],"hsb":[240,53,100],"hsl":[240,100,74],"lab":[57,36,-67]},{"name":"Light Pink","hex":"ffa8a8","rgb":[255,168,168],"cmyk":[0,34,34,0],"hsb":[0,34,100],"hsl":[0,100,83],"lab":[77,32,13]}];
let colourSetSquare = [{"name":"Super Pink","hex":"e060b4","rgb":[224,96,180],"cmyk":[0,57,20,12],"hsb":[321,57,88],"hsl":[321,67,63],"lab":[59,59,-20]},{"name":"Medium Aquamarine","hex":"6ce095","rgb":[108,224,149],"cmyk":[52,0,33,12],"hsb":[141,52,88],"hsl":[141,65,65],"lab":[81,-49,27]},{"name":"Safety Yellow","hex":"f5d62a","rgb":[245,214,42],"cmyk":[0,13,83,4],"hsb":[51,83,96],"hsl":[51,91,56],"lab":[86,-5,80]},{"name":"Pansy Purple","hex":"82105a","rgb":[130,16,90],"cmyk":[0,88,31,49],"hsb":[321,88,51],"hsl":[321,78,29],"lab":[29,51,-13]},{"name":"Cadmium Green","hex":"0b662b","rgb":[11,102,43],"cmyk":[89,0,58,60],"hsb":[141,89,40],"hsl":[141,81,22],"lab":[37,-39,26]}];
let colourSetMonochromatic = [{"name":"Persian Indigo","hex":"1f0a69","rgb":[31,10,105],"cmyk":[70,90,0,59],"hsb":[253,90,41],"hsl":[253,83,23],"lab":[13,38,-50]},{"name":"Blue Violet Crayola","hex":"6f5db0","rgb":[111,93,176],"cmyk":[37,47,0,31],"hsb":[253,47,69],"hsl":[253,34,53],"lab":[45,27,-42]},{"name":"Han Purple","hex":"6238fc","rgb":[98,56,252],"cmyk":[61,78,0,1],"hsb":[253,78,99],"hsl":[253,97,60],"lab":[42,66,-90]},{"name":"Plump Purple","hex":"5e4aa8","rgb":[94,74,168],"cmyk":[44,56,0,34],"hsb":[253,56,66],"hsl":[253,39,47],"lab":[38,32,-48]},{"name":"Blue Violet Crayola","hex":"796cab","rgb":[121,108,171],"cmyk":[29,37,0,33],"hsb":[252,37,67],"hsl":[252,27,55],"lab":[49,19,-32]}];



/**
 * Mathematic variables
 */

let prevOutput;
let currentOutput = ""; 
let r; //replaceing alphabet



/**
 * multiple sketches
 */

const sketchA = ( p ) => {
  
  
  p.setup = function() {
    let canvasSize = p.select("#canvas").width/5;
    let canvas = p.createCanvas(canvasSize, canvasSize);
    console.log("L-System", dragonCurve);
  };

  p.draw = function() {
    p.frameRate(freq);
    p.background(bgColour);
    p.strokeWeight(1);
    drawDragonCurve(dragonCurve, p.frameCount, "F", p.canvas.width/2, p.canvas.height/2, 20, 90);
    // stop the iteration & save the canvas
    if (p.frameCount>10) {
      p.frameRate(0);
      // saveCanvas(canvas, 'dragonCurve', 'jpg'); 
    };
  };

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
   */

  function drawDragonCurve (lSystem, nIteration , input , startX, startY, length, angle) {
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
        
        console.log(`iteration ${i}`, input);

        for (a of input) {

          if (lSystem.constants.includes(a) || !Object.keys(lSystem.rules).includes(a)) {
            r = a;
            if (a === "+") {
              // l = p.random(0,length); //______interesting! different l at each turn. [#1]
              // v.setMag(l); //______interesting! [#1]
              v.rotate(rad);
              // console.log("v +",v);
              // console.log("vSum +",vSum);
            } else if (a === "-") {
             // l = p.random(0,length); //______interesting! different l at each turn. [#1]
             //  v.setMag(l); //______interesting! [#1]
              v.rotate(-rad);
              // console.log("v -",v);
              // console.log("vSum -",vSum);
            };
          } else {
            r = lSystem.rules[a];
            if (a === "F") {
              p.stroke(colourSetTetradic[i%5].rgb);
              let x0 = vSum.x;
              let y0 = vSum.y;
              vSum.add(v);
              p.line(x0 , y0, vSum.x, vSum.y);
              // console.log("v F",v);
              // console.log("vSum F",vSum);
            } else if (a === "G") { 
              p.stroke(colourSetTetradic[i%5].rgb);
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
};

const sketchB = ( p ) => {
  
  
  p.setup = function() {
    let canvasSize = p.select("#canvas").width/5;
    let canvas = p.createCanvas(canvasSize, canvasSize);
    console.log("L-System", dragonCurve);
  };

  p.draw = function() {
    p.frameRate(freq);
    p.background(bgColour);
    p.strokeWeight(1);
    drawDragonCurve(dragonCurve, p.frameCount, "F", p.canvas.width/2, p.canvas.height/2, 20, 90);
    // stop the iteration & save the canvas
    if (p.frameCount>10) {
      p.frameRate(0);
      // saveCanvas(canvas, 'dragonCurve', 'jpg'); 
    };
  };

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
   */

  function drawDragonCurve (lSystem, nIteration , input , startX, startY, length, angle) {
    if (input === lSystem.axiom) {
      let v = new p5.Vector(1,0);
      let l = length; // normal fixed length
      l = p.random(0,length); //______interesting! different l at each iteration.
      p.stroke(colourSetTetradic[(p.random([0,1,2,3,4]))%5].rgb); 
      v.setMag(l);
      // console.log("v start",v);
      rad = p.radians(angle);
      
      let vSum = new p5.Vector(0,0);
      vSum.x = startX;
      vSum.y = startY; 
      // console.log("vSum start",vSum);

      for (i=0; i<=nIteration; i++) {
        
        console.log(`iteration ${i}`, input);

        for (a of input) {

          if (lSystem.constants.includes(a) || !Object.keys(lSystem.rules).includes(a)) {
            r = a;
            if (a === "+") {
              // l = p.random(0,length); //______interesting! different l at each turn. [#1]
              // v.setMag(l); //______interesting! [#1]
              v.rotate(rad);
              // console.log("v +",v);
              // console.log("vSum +",vSum);
            } else if (a === "-") {
             // l = p.random(0,length); //______interesting! different l at each turn. [#1]
             //  v.setMag(l); //______interesting! [#1]
              v.rotate(-rad);
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
            } else if (a === "G") { 
              
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
};

const sketchC = ( p ) => {
  
  
  p.setup = function() {
    let canvasSize = p.select("#canvas").width/5;
    let canvas = p.createCanvas(canvasSize, canvasSize);
    console.log("L-System", dragonCurve);
  };

  p.draw = function() {
    p.frameRate(freq);
    p.background(bgColour);
    p.strokeWeight(1);
    drawDragonCurve(dragonCurve, p.frameCount, "F", p.canvas.width/2, p.canvas.height/2, 20, 90);
    // stop the iteration & save the canvas
    if (p.frameCount>10) {
      p.frameRate(0);
      // saveCanvas(canvas, 'dragonCurve', 'jpg'); 
    };
  };

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
   */

  function drawDragonCurve (lSystem, nIteration , input , startX, startY, length, angle) {
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
        
        console.log(`iteration ${i}`, input);

        for (a of input) {

          if (lSystem.constants.includes(a) || !Object.keys(lSystem.rules).includes(a)) {
            r = a;
            if (a === "+") {
              l = p.random(0,length); //______interesting! different l at each turn. [#1]
              v.setMag(l); //______interesting! [#1]
              v.rotate(rad);
              // console.log("v +",v);
              // console.log("vSum +",vSum);
            } else if (a === "-") {
             l = p.random(0,length); //______interesting! different l at each turn. [#1]
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
};

const sketchD = ( p ) => {
  p.setup = function() {
    let canvasSize = p.select("#canvas").width/5;
    let canvas = p.createCanvas(canvasSize, canvasSize);
    console.log("L-System", cantorSet);
  };
  p.draw = function() {
    p.frameRate(freq);
    p.background(bgColour);
    p.strokeWeight(2);
    drawCantorSet(cantorSet, p.frameCount, "A", padding, padding, p.canvas.width-2*padding);
    // stop the iteration & save the canvas
    if (p.frameCount>8) {
      p.frameRate(0);
      // saveCanvas(canvas, 'dragonCurve', 'jpg'); 
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
   */
   function drawCantorSet (lSystem, nIteration , input , startX, startY, length) {
      if (input === lSystem.axiom) {
        let y0 = startY;
        let l = length;
        let canvasSize = p.select("#canvas").width/4;  // canvasSize is not a global variable in sketchD. I couldnt use select() outside setup() or draw().
        let deltaY = (canvasSize-2*padding)/nIteration;

        for (i=0; i<=nIteration; i++) {
          
          console.log(`iteration ${i}`, input);
          
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
};


const sketchE = ( p ) => {
  p.setup = function() {
    let canvasSize = p.select("#canvas").width/3;
    let canvas = p.createCanvas(canvasSize, canvasSize);
    console.log("L-System", plant);
  };
  p.draw = function() {
    p.frameRate(freq);
    p.background(bgColour);
    p.strokeWeight(1);
    drawPlant(plant, p.frameCount , "X" , p.canvas.width/2, p.canvas.height-padding, p.canvas.height/400, -25);
    // stop the iteration & save the canvas
    if (p.frameCount>6) {
      p.frameRate(0);
      // saveCanvas(canvas, 'dragonCurve', 'jpg'); 
    };


  };



  /**
   * Draws a Fractal Plant. (L-System Grammer in console & Turtle Graphics in canvas)
   *
   * @param      {object}  lSystem     The Cantor Set
   * @param      {number}  nIteration  The iteration number
   * @param      {string}  input       The axiom
   * @param      {number}  startX      The start x
   * @param      {number}  startY      The start y
   * @param      {number}  length      The length of initial line
   */
  
  // Darya version 
  // function drawPlant(lSystem, nIteration , input , startX, startY, length, angle) {
  //   if (input === lSystem.axiom) {
  //     let v = new p5.Vector(1,1);
  //     let l = length; // normal fixed length
  //     // l = random(0,length); //______interesting! different l at each iteration.
      
  //     rad = p.radians(angle);
      
  //     v.setMag(l);
  //     v.setHeading(-rad);
  //     console.log("v start",v);

  //     let vSum = new p5.Vector(0,0);
  //     vSum.x = startX;
  //     vSum.y = startY; 
  //     // console.log("vSum start",vSum);

  //     let saveX = vSum.x;
  //     let saveY = vSum.y;
  //     let saveAngle = v.heading();
  //     console.log("save start", [saveX,saveY,saveAngle]);

  //     for (i=0; i<=nIteration; i++) {
        
  //       console.log(`iteration ${i}`, input);

  //       for (a of input) {

  //         if (lSystem.constants.includes(a) || !Object.keys(lSystem.rules).includes(a)) {
  //           r = a;
  //           if (a === "+") {
  //             // l = p.random(0,length); //______interesting! different l at each turn. [#1]
  //             // v.setMag(l); //______interesting! [#1]
  //             v.rotate(rad);
  //             console.log("v +",v);
  //           } else if (a === "-") {
  //            // l = p.random(0,length); //______interesting! different l at each turn. [#1]
  //            //  v.setMag(l); //______interesting! [#1]
  //             v.rotate(-rad);
  //             console.log("v -",v);
  //             // p.pop();
  //           } else if (a === "[") {
  //             saveX = vSum.x;
  //             saveY = vSum.y;
  //             saveAngle = v.heading();
  //             console.log("vSum [",vSum);
  //           } else if (a === "]") {
  //             vSum.x = saveX;
  //             vSum.y = saveY;
  //             v.setHeading(saveAngle);
  //             console.log("v ]",v);
  //             console.log("vSum ]",vSum);
  //           } 
  //         } else {
  //           r = lSystem.rules[a];
  //           if (a === "F") {
  //             // color = [p.random(255),p.random(255),p.random(255)];
  //             p.stroke(i*100,i*i*50,i*i*i*5);
  //             let x0 = vSum.x;
  //             let y0 = vSum.y;
  //             vSum.add(v);
  //             p.line(x0 , y0, vSum.x, vSum.y);
  //             console.log("v F",v);
  //             console.log("vSum F",vSum);
  //           };
  //         };
  //         currentOutput =  currentOutput + r;
  //       };
  //       input = currentOutput;
  //       currentOutput = "";

  //     };
  //   } else {
  //     console.log("wrong start!");
  //   };
  // };

  function drawPlant(lSystem, nIteration , input , startX, startY, length, angle) {
    if (input === lSystem.axiom) {
      let l = length; // normal fixed length
      // l = random(0,length); //______interesting! different l at each iteration.
      rad = p.radians(angle);
      
      p.translate(startX, startY);
      for (i=0; i<=nIteration; i++) {
        p.push();
        

        console.log(`iteration ${i}`, input);

        for (a of input) {

          if (lSystem.constants.includes(a) || !Object.keys(lSystem.rules).includes(a)) {
            r = a;
            if (a === "+") {
              p.rotate(rad);
            } else if (a === "-") {
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
  
  // mix ?!
  // function drawPlant(lSystem, nIteration , input , startX, startY, length, angle) {
  //   if (input === lSystem.axiom) {
  //     let v = new p5.Vector(0,-1);
  //     let l = length; // normal fixed length
  //     rad = p.radians(angle);
  //     v.setMag(l);
  //     v.setHeading(-rad);
  //     console.log("v start",v);


  //     let vSum = new p5.Vector(0,-1);
  //     vSum.setMag(0); 
  //     // console.log("vSum start",vSum);
      
  //     let saveX = startX;
  //     let saveY = startY;
  //     // let currentX = saveX + startX;
  //     // let currentY = saveY + startY;
  //     p.translate(startX, startY);

  //     // let saveX = vSum.x;
  //     // let saveY = vSum.y;
  //     // let saveAngle = v.heading();
  //     // console.log("save start", [saveX,saveY,saveAngle]);
  //     p.beginShape();
  //     for (i=0; i<=nIteration; i++) {

  //       currentX = vSum.x;
  //       currentY = vSum.y;
  //       p.noStroke();
  //       p.fill(200,30,10); //red
  //       p.ellipse(saveX,saveY, i*6,i*2);
  //       p.fill(25,130,200); //blue
  //       p.ellipse(currentX,currentY, i*6,i*2);
  //       console.log("[currentX,currentY]",[currentX,currentY]);
  //       // p.endShape();
  //       console.log(`iteration ${i}`, input);
  //       // p.push();
  //       for (a of input) {

  //         if (lSystem.constants.includes(a) || !Object.keys(lSystem.rules).includes(a)) {
  //           r = a;
  //           if (a === "+") {
  //             p.rotate(rad);
  //             v.rotate(rad);
  //           } else if (a === "-") {
  //             p.rotate(-rad);
  //             v.rotate(-rad);
  //           } else if (a === "[") {
  //             saveX = vSum.x;
  //             saveY = vSum.y;
  //             saveAngle = v.heading();
  //             v.setHeading(saveAngle);

  //             p.push();
              
              
  //             console.log("[saveX,saveY] [",[saveX,saveY]);
  //           } else if (a === "]") {
  //             p.pop();
  //             // vSum.x = saveX;
  //             // vSum.y = saveY;
  //             v.setHeading(saveAngle);

  //           } 
  //         } else {
  //           r = lSystem.rules[a];
  //           if (a === "F") {
  //             // color = [p.random(255),p.random(255),p.random(255)];
  //             p.stroke(i*5,i*30,i*80);
  //             vSum.add(v);
  //             p.fill(0); //black
  //             p.ellipse(vSum.x,vSum.y, 6*i,i*2);
  //             // noFill();
  //             // p.vertex(vSum.x,vSum.y);
  //             console.log("[saveX,saveY] F",[saveX,saveY]);
  //             p.line(0, 0, 0, -l);
  //             p.translate(0, -l);
  //           };
  //         };
  //         currentOutput =  currentOutput + r;
  //       };
  //       input = currentOutput;
  //       currentOutput = "";

  //       // p.translate(saveX - currentX, saveY-currentY);
  //       // p.translate(-saveX+currentX, -saveY+currentY);
  //       // p.pop();
  //       // p.translate(30,-100);
       
  //     };
  //     p.endShape();
  //   } else {
  //     console.log("wrong start!");
  //   };
  // };
};



const sketchF = ( p ) => {
  p.setup = function() {
    let canvasSize = p.select("#canvas").width/3;
    let canvas = p.createCanvas(canvasSize, canvasSize);
    console.log("L-System", kochCurve);
  };

  p.draw = function() {
    p.frameRate(freq);
    p.background(bgColour);
    p.strokeWeight(1);
    drawKochCurve(kochCurve, p.frameCount, "F", padding, p.canvas.height-padding, 1, 90);
    // stop the iteration & save the canvas
    if (p.frameCount>4) {
      p.frameRate(0);
      // saveCanvas(canvas, 'dragonCurve', 'jpg'); 
    };
  };

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
   */

  function drawKochCurve (lSystem, nIteration , input , startX, startY, length, angle) {
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
        p.stroke(colourSetTetradic[i%5].rgb);
        
        console.log(`iteration ${i}`, input);

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
};




// // to put all canvases in div.canvas with no specific div assignment :
// let canvasA = new p5(sketchA, 'canvas'); 
// let canvasB = new p5(sketchB, 'canvas');
// let canvasC = new p5(sketchC, 'canvas');
// let canvasD = new p5(sketchD, 'canvas');
// let canvasE = new p5(sketchE, 'canvas');
// let canvasF = new p5(sketchF, 'canvas');

// to put each canvases in a specific div in .canvas :
let canvasA = new p5(sketchA, 'canvasA'); 
let canvasB = new p5(sketchB, 'canvasB');
let canvasC = new p5(sketchC, 'canvasC');
let canvasD = new p5(sketchD, 'canvasD');
let canvasE = new p5(sketchE, 'canvasE');
let canvasF = new p5(sketchF, 'canvasF');
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




