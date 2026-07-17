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








//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////// functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 // generating the grid and putting angle information for the flow filed in it.
  generateGrid = function (num_columns=0, num_rows=0, grid=[], randomness=false, seed=false, angleA, angleB, p) {
    for (let column=0; column < num_columns; column++) {
      grid[column]=[];
      for (let row=0; row < num_rows; row++) {
        if (randomness===false) {
          grid[column][row] = p.map(p.PI*(row/num_rows), 0, p.PI, -p.PI,p.PI);

        } else if (randomness=="random") {
          grid[column][row] = p.random(-p.PI,p.PI); 

        } else if (randomness=="perlin"){
                if (seed) { 
                  //active noiseSeed, deactive randomSeed to get dif num_curves but same each time.
                  //if active randomSeed, regardless of noiseSeed, you get single (overlapped) num_curves following the fate of the grid.
                  p.noiseSeed(seed);
                  p.randomSeed(seed);
                  // console.log("seeded perlin");
                };
                // get our noise value, between 0.0 and 1.0       
                lod = p.map(p.random(), 0,1, 1,8);
                falloff = p.random();
                p.noiseDetail(lod,falloff);
                // noise() works best when the step between points is approximately 0.005, so scale down to that: how about p5.js?             
                scaled_x = column*p.random(); // * 0.01;
                scaled_y = row*p.random(); // * 0.01;
                noise_val = p.noise(scaled_x,scaled_y);
                // map the noise value to an angle 
                // (betwen -p.PI and p.PI then cracks will be in the up-right half triangle.)   
                // (betwen 0 and 2*p.PI then cracks will be in the bottom-left half triangle.)
                // (betwen 2*p.PI and 2*p.PI then cracks will be none)
                // (betwen -0.01*p.PI, 0.01*p.PI then cracks will be hashours!)
                // the smaller the scaled- x and y, or the final map range, the more hashour-like result
                angle = p.map(noise_val, 0, 1, angleA, angleB);
                grid[column][row] = angle;   
              // }; 
            // };
          };
      };
    };
    return grid;
  };





  /**
   * Draws a vector.
   * much simpler function
   *
   * @param      {number}  [start_x=0]
   * @param      {number}  [start_y=0]
   * @param      {<type>}  end_x        The end x
   * @param      {<type>}  end_y        The end y
   * @param      {<type>}  angle        The angle
   * @param      {<type>}  length       The length
   * @param      {<type>}  p            sketch canvas
   */

  drawVector = function (start_x=0, start_y=0, end_x=false, end_y=false, angle, length=30, p) {
    if (!end_x || !end_y) {
      v0 = p.createVector(start_x, start_y);
      start_x = v0.x;
      start_y = v0.y;
      v = p5.Vector.fromAngle(angle, length);
      v1 = v0.add(v);
      end_x = v1.x;
      end_y = v1.y;
    } else if (end_x && end_y) {
      v1 = p.createVector(start_x, start_y, end_x, end_y);
    };

    // p.stroke("blue");
    // p.strokeWeight(3);
    // p.point(start_x, start_y);
    // p.strokeWeight(5);
    // p.point(end_x, end_y);
    let colour = p.color("lightgrey");
    colour.setAlpha(1);
    p.stroke(colour);
    p.strokeWeight(0.01);
    p.line(start_x, start_y, end_x, end_y); 
    return v1;
  };



  /**
   * [drawCurve description]
   * @param  {Number} start_x       
                          1.  Use a regular grid for starting points >> the simplest, but sometimes it can feel overly stiff
                          2.  Use uniformly random selection to pick the points >> a looser feeling, but it will leave some clumps and some sparse areas,
                          3.  Use circle packing >> a nice balance: things are pretty evenly spaced out, but with enough random variation that it's more relaxed
   * @param  {Number} start_y
                          1.  Use a regular grid for starting points
                          2.  Use uniformly random selection to pick the points
                          3.  Use circle packing
   * @param  {Number} num_steps    affect the texture of the result. Short curves may look more like "fur". Long curves are more fluid.
   * @param  {Number} step_length  usually around 0.1% to 0.5% of the image width. go larger for quicker render speeds, go smaller if there are tight turns that need to be clean.
   * @param  {[type]} left_x      [description]
   * @param  {[type]} right_x     [description]
   * @param  {[type]} top_y       [description]
   * @param  {[type]} bottom_y    [description]
   * @param  {[type]} resolutionX [description]
   * @param  {[type]} resolutionY [description]
   * @param  {[type]} p           [description]
   * @return {[type]}             [description]
   */
  drawCurve = function (start_x=0, start_y=0, num_steps=1000, step_length=1, num_columns, num_rows, resolutionX, resolutionY, grid, strokeColour, p) {
    // to visualise the start point   
    p.noFill();
    x = start_x;
    y = start_y;
    // console.log("grid inside drawCurve",grid);
    
    p.blendMode(p.MULTIPLY);
    strokeColour.setAlpha(0.2);
    p.strokeWeight(Math.max(2*step_length,1.5));
    p.stroke(strokeColour);



    p.beginShape();
    p.curveVertex(x, y); // to include the start point
    for (let n=0; n<num_steps; n++) {
      // to avoid falling off the margins, it's better to check whether x,y are inside the boundaries or not
      if (x>=0 && x<=p.width && y>=0 && y<=p.height) {
        p.curveVertex(x, y); // to include the last point
        column_index = p.int(x / resolutionX); //correct except that p.int may give column_index = num_columns which will mess with the next step for index of grid array.
        row_index = p.int(y / resolutionY); //correct
        // console.log(column_index, row_index);
        if (column_index < num_columns && row_index < num_rows) { grid_angle = grid[column_index][row_index]; } // else { console.log("skip the nasty error!"); };
        x_step = step_length * Math.cos(grid_angle);    
        y_step = step_length * Math.sin(grid_angle);
        x += x_step;     
        y += y_step;
        p.curveVertex(x, y); // to include the last point
      };
    };
    
    p.curveVertex(x, y); // to include the last point
    p.endShape();
  };


  getData = function (input, p) {
    let data = input.value();
    return data;
  };



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////// Sketches
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  

  /**
   * SKETCH 1
   * step_length:
     * Typically, this should be small enough that you don't see any sharp points on the curve. 
     * usually around 0.1% to 0.5% of the image width. 
     * go larger for quicker render speeds, and smaller if there are tight turns that need to be clean.
   * num_steps:
     * short curves, fur, rough, patchy,consistent, flat, keep distinct sections of colors more separate
     * long curves, fluid, smooth, lead the eye, drag one color further into another color's section
     * when using a lot of color variation, usually pick a short to medium length curve to avoid really drawn out blending areas
     * when using very similar colors, going with longer curves can work just fine
   * start position:
     *   1) Use a regular grid for starting points >> simplest but sometimes it can feel overly stiff
     *   2) Use uniformly random selection to pick the points >> a looser feeling, but it will leave some clumps and some sparse areas
     *   3) Use circle packing >> a nice balance: things are pretty evenly spaced out, but with enough random variation that it's more relaxed
   * distort the vectors in the field
     *   will determine what shapes your curves take (loops, abrupt turns, and overlapping lines)
     *   1) Perlin Noise
     *   2) Non-Continuous Distortions
   */
  
      const sketch1 = ( p ) => {
        p.setup = function() {
          let canvasSize = p.select("#canvas").width/3;
          let canvas = p.createCanvas(canvasSize, canvasSize);
          p.colorMode(p.RGB,255,255,255,1);
        };

        p.draw = function() {
          p.background(255);
          p.frameRate(100);
          

          let resolution_factorX = 0.04; 
          let resolution_factorY = 0.04;
          let resolutionX = p.int(p.width * resolution_factorX); 
          let resolutionY = p.int(p.height * resolution_factorY);  
          let num_columns = p.int(p.width/resolutionX);
          let num_rows = p.int(p.height/resolutionY);
          
          let length = 0.5*Math.sqrt(resolutionX*resolutionX+resolutionY*resolutionY);

          // perline random anchor points
          for (let column=0; column < num_columns; column++) {
            for (let row=0; row < num_rows; row++) {
              p.noiseSeed();
              p.randomSeed();
              lod = p.map(p.random(), 0,1, 1,8);
              falloff = p.random();
              p.noiseDetail(lod,falloff);

              // to get different anchor points, you should run p.random twice:
              // play with mapping to get various results! :)
              scaled_x = column* p.random();
              scaled_y = 1/row* p.random();
              anchorInputs = [{x: p.map(p.noise(scaled_x,scaled_y),0,1,0,p.width) , y: p.map(p.noise(scaled_x,scaled_y),0,1,0,p.height)}];
              
              scaled_x = 1/column* p.random();
              scaled_y = row* p.random();
              p.append(anchorInputs, {x: p.map(p.noise(scaled_x,scaled_y),0,1,0,p.width) , y: p.map(p.noise(scaled_x,scaled_y),0,1,0,p.height)});
            };
          };
          // normal random anchor points (at least two points because I want blending colours.)
          // anchorInputs = [{x: p.map(p.random(),0,1,0,p.width) , y: p.map(p.random(),0,1,0,p.height)}, {x: p.map(p.random(),0,1,0,p.width) , y: p.map(p.random(),0,1,0,p.height)}];

          let grid = []; 
          let randomness = "perlin";
          let seed = 11111;
          let angleA = 0;
          let angleB = 2*p.PI;
          let anchorsX = [];
          let anchorsY = [];

          for (const point of anchorInputs) { 
            p.append(anchorsX, point.x);
            p.append(anchorsY, point.y);
          };


         /**
         * step_length : keep this const to get smooth results (0.001 * p.width)
         * num_curve : how hard you try (maybe slider input); your persistence; different ways that you give it a go... (fix it for a simpler mode)
         * num_steps : your life span (time/frameCount dependent)
         * anchors : where people/goals are (an array of objects: [{x1,y1},{x2,y2}])
         * map langitude & latitude points on earth to [p.width, p.height] to get x&y of anchors
         * grid : logical randomness. the inherent chance element in life; yet restricted by effective initial conditions (birth place, vision extend, knowledge, ...)
         * 
         */

          const step_length = 0.001 * p.width; // fix to this amount to get smooth curves
          let curveStart = {x: anchorsX[0], y: anchorsY[0]};// {x:p.map(anchorsX[0],0,p.width, , ), y:p.map(anchorsY[0],0,p.height, , )};
          let curveEnd = {x: anchorsX[1], y: anchorsY[1]};
          let dist = p.dist(curveStart.x,curveStart.y,curveEnd.x,curveEnd.y);
          // I want to bind the propagation of the curves to time, so:
          let num_steps = 10*p.frameCount; // Math.max(2*dist/step_length, 100); // your life span


          let startColour = p.color(0,0,255,1);
          let endColour = p.color(255,0,0,1);
          // console.log("start",curveStart);
          // console.log("end",curveEnd);

          // I want only one grid per canvas for all drawings. not one grid per drawing. 
          // I CAN declare grid in setup() but this will either make it unaccessible inside draw() or make a global variable that will mess with other canvases.
          // instead I am using if (frameCount==1) then {} ... WHICH IS NOT WORKING!!!
          // instead I'm using the same seed seed for each drawing but different seed for each canvas.  
          // the problem would be generating grid over and over at each drawing.
          // maybe not too bad. as it gets darker and darker, it shows time has passed...
          // generate grid (random things happen which are affected by the intial conditions of your life)
       
          grid = generateGrid(num_columns, num_rows, grid, randomness, seed, angleA, angleB, p);  
          // draw grid (optional)
          for (const column of grid) { 
            pointX = grid.indexOf(column) * resolutionX;
            for (const row of column) {
              pointY = column.indexOf(row) * resolutionY;
              angle = row;
              drawVector(pointX, pointY, false , false , angle, length, p);
            };
          };
            
          
        // draw curves
          drawCurve(curveStart.x, curveStart.y, num_steps, step_length, num_columns, num_rows, resolutionX, resolutionY, grid, startColour, p); 
          drawCurve(curveEnd.x, curveEnd.y, num_steps, step_length, num_columns, num_rows, resolutionX, resolutionY, grid, endColour, p); 
          

        // why this stop is not working?!?!  
          if (p.frameCount>1000) {
            p.frameRate(0);
            console.log("stop")
            // saveCanvas(canvas, 'dragonCurve', 'jpg'); 
          };



        };

      };

  /**
   * SKETCH 2
   */
  
      const sketch2 = ( p ) => {
        p.setup = function() {
          let canvasSize = p.select("#canvas").width/3;
          let canvas = p.createCanvas(canvasSize, canvasSize);
          p.colorMode(p.RGB,255,255,255,1);
        };

        p.draw = function() {
          p.background(255);
          p.frameRate(100);
          

          let resolution_factorX = 0.04; 
          let resolution_factorY = 0.04;
          let resolutionX = p.int(p.width * resolution_factorX); 
          let resolutionY = p.int(p.height * resolution_factorY);  
          let num_columns = p.int(p.width/resolutionX);
          let num_rows = p.int(p.height/resolutionY);
          
          let length = 0.5*Math.sqrt(resolutionX*resolutionX+resolutionY*resolutionY);

          // perline random anchor points
          for (let column=0; column < num_columns; column++) {
            for (let row=0; row < num_rows; row++) {
              p.noiseSeed();
              p.randomSeed();
              lod = p.map(p.random(), 0,1, 1,8);
              falloff = p.random();
              p.noiseDetail(lod,falloff);

              // to get different anchor points, you should run p.random twice:
              // play with mapping to get various results! :)
              scaled_x = 1/column* p.random();
              scaled_y = row* p.random();
              anchorInputs = [{x: p.map(p.noise(scaled_x,scaled_y),0,1,0,p.width) , y: p.map(p.noise(scaled_x,scaled_y),0,1,0,p.height)}];
              
              scaled_x = column* p.random();
              scaled_y = 1/row* p.random();
              p.append(anchorInputs, {x: p.map(p.noise(scaled_x,scaled_y),0,1,0,p.width) , y: p.map(p.noise(scaled_x,scaled_y),0,1,0,p.height)});
            };
          };
          // normal random anchor points (at least two points because I want blending colours.)
          // anchorInputs4 = [{x: p.map(p.random(),0,1,0,p.width) , y: p.map(p.random(),0,1,0,p.height)}, {x: p.map(p.random(),0,1,0,p.width) , y: p.map(p.random(),0,1,0,p.height)}];

          let grid = []; 
          let randomness = "perlin";
          let seed = 222;
          let angleA = -p.PI;
          let angleB = p.PI;
          let anchorsX = [];
          let anchorsY = [];

          for (const point of anchorInputs) { 
            p.append(anchorsX, point.x);
            p.append(anchorsY, point.y);
          };


         /**
         * step_length : keep this const to get smooth results (0.001 * p.width)
         * num_curve : how hard you try (maybe slider input); your persistence; different ways that you give it a go... (fix it for a simpler mode)
         * num_steps : your life span (time/frameCount dependent)
         * anchors : where people/goals are (an array of objects: [{x1,y1},{x2,y2}])
         * map langitude & latitude points on earth to [p.width, p.height] to get x&y of anchors
         * grid : logical randomness. the inherent chance element in life; yet restricted by effective initial conditions (birth place, vision extend, knowledge, ...)
         * 
         */

          const step_length = 0.001 * p.width; // fix to this amount to get smooth curves
          let curveStart = {x: anchorsX[0], y: anchorsY[0]};// {x:p.map(anchorsX[0],0,p.width, , ), y:p.map(anchorsY[0],0,p.height, , )};
          let curveEnd = {x: anchorsX[1], y: anchorsY[1]};
          let dist = p.dist(curveStart.x,curveStart.y,curveEnd.x,curveEnd.y);
          // I want to bind the propagation of the curves to time, so:
          let num_steps = 10*p.frameCount; // Math.max(2*dist/step_length, 100); // your life span


          let startColour = p.color(0,0,255,1);
          let endColour = p.color(255,0,0,1);
          // console.log("start",curveStart);
          // console.log("end",curveEnd);

          // I want only one grid per canvas for all drawings. not one grid per drawing. 
          // I CAN declare grid in setup() but this will either make it unaccessible inside draw() or make a global variable that will mess with other canvases.
          // instead I am using if (frameCount==1) then {} ... WHICH IS NOT WORKING!!!
          // instead I'm using the same seed seed for each drawing but different seed for each canvas.  
          // the problem would be generating grid over and over at each drawing.
          // maybe not too bad. as it gets darker and darker, it shows time has passed...
          // generate grid (random things happen which are affected by the intial conditions of your life)
       
          grid = generateGrid(num_columns, num_rows, grid, randomness, seed, angleA, angleB, p);  
          // draw grid (optional)
          for (const column of grid) { 
            pointX = grid.indexOf(column) * resolutionX;
            for (const row of column) {
              pointY = column.indexOf(row) * resolutionY;
              angle = row;
              drawVector(pointX, pointY, false , false , angle, length, p);
            };
          };
            
          
        // draw curves
          drawCurve(curveStart.x, curveStart.y, num_steps, step_length, num_columns, num_rows, resolutionX, resolutionY, grid, startColour, p); 
          drawCurve(curveEnd.x, curveEnd.y, num_steps, step_length, num_columns, num_rows, resolutionX, resolutionY, grid, endColour, p); 
          

        // why this stop is not working?!?!  
          if (p.frameCount>1000) {
            p.frameRate(0);
            console.log("stop")
            // saveCanvas(canvas, 'dragonCurve', 'jpg'); 
          };



        };

      };



  /**
   * SKETCH 3
   */
  
      const sketch3 = ( p ) => {
        p.setup = function() {
          let canvasSize = p.select("#canvas").width/3;
          let canvas = p.createCanvas(canvasSize, canvasSize);
          p.colorMode(p.RGB,255,255,255,1);
        };

        p.draw = function() {
          p.background(255);
          p.frameRate(100);
          

          let resolution_factorX = 0.04; 
          let resolution_factorY = 0.04;
          let resolutionX = p.int(p.width * resolution_factorX); 
          let resolutionY = p.int(p.height * resolution_factorY);  
          let num_columns = p.int(p.width/resolutionX);
          let num_rows = p.int(p.height/resolutionY);
          
          let length = 0.5*Math.sqrt(resolutionX*resolutionX+resolutionY*resolutionY);

          // perline random anchor points
          for (let column=0; column < num_columns; column++) {
            for (let row=0; row < num_rows; row++) {
              p.noiseSeed();
              p.randomSeed();
              lod = p.map(p.random(), 0,1, 1,8);
              falloff = p.random();
              p.noiseDetail(lod,falloff);

              // to get different anchor points, you should run p.random twice:
              // play with mapping to get various results! :)
              scaled_x = column*p.random();
              scaled_y = row*p.random();
              anchorInputs = [{x: p.map(p.noise(scaled_x,scaled_y),0,1,0,p.width), y: p.map(p.noise(scaled_x,scaled_y),0,1,0,p.height)}];
              
              scaled_x = column*p.random();
              scaled_y = row*p.random();
              p.append(anchorInputs, {x: p.map(p.noise(scaled_x,scaled_y),0,1,0,p.width), y: p.map(p.noise(scaled_x,scaled_y),0,1,p.height/3,2*p.height/3)});
            };
          };
          // normal random anchor points (at least two points because I want blending colours.)
          // anchorInputs4 = [{x: p.map(p.random(),0,1,0,p.width) , y: p.map(p.random(),0,1,0,p.height)}, {x: p.map(p.random(),0,1,0,p.width) , y: p.map(p.random(),0,1,0,p.height)}];

          let grid = []; 
          let randomness = "perlin";
          let seed = 3;
          let angleA = -0.01*p.PI;
          let angleB = 0.01*p.PI;
          let anchorsX = [];
          let anchorsY = [];

          for (const point of anchorInputs) { 
            p.append(anchorsX, point.x);
            p.append(anchorsY, point.y);
          };


         /**
         * step_length : keep this const to get smooth results (0.001 * p.width)
         * num_curve : how hard you try (maybe slider input); your persistence; different ways that you give it a go... (fix it for a simpler mode)
         * num_steps : your life span (time/frameCount dependent)
         * anchors : where people/goals are (an array of objects: [{x1,y1},{x2,y2}])
         * map langitude & latitude points on earth to [p.width, p.height] to get x&y of anchors
         * grid : logical randomness. the inherent chance element in life; yet restricted by effective initial conditions (birth place, vision extend, knowledge, ...)
         * 
         */

          const step_length = 0.001 * p.width; // fix to this amount to get smooth curves
          let curveStart = {x: anchorsX[0], y: anchorsY[0]};// {x:p.map(anchorsX[0],0,p.width, , ), y:p.map(anchorsY[0],0,p.height, , )};
          let curveEnd = {x: anchorsX[1], y: anchorsY[1]};
          let dist = p.dist(curveStart.x,curveStart.y,curveEnd.x,curveEnd.y);
          // I want to bind the propagation of the curves to time, so:
          let num_steps = 10*p.frameCount; // Math.max(2*dist/step_length, 100); // your life span


          let startColour = p.color(0,0,255,1);
          let endColour = p.color(255,0,0,1);
          // console.log("start",curveStart);
          // console.log("end",curveEnd);

          // I want only one grid per canvas for all drawings. not one grid per drawing. 
          // I CAN declare grid in setup() but this will either make it unaccessible inside draw() or make a global variable that will mess with other canvases.
          // instead I am using if (frameCount==1) then {} ... WHICH IS NOT WORKING!!!
          // instead I'm using the same seed seed for each drawing but different seed for each canvas.  
          // the problem would be generating grid over and over at each drawing.
          // maybe not too bad. as it gets darker and darker, it shows time has passed...
          // generate grid (random things happen which are affected by the intial conditions of your life)
       
          grid = generateGrid(num_columns, num_rows, grid, randomness, seed, angleA, angleB, p);  
          // draw grid (optional)
          for (const column of grid) { 
            pointX = grid.indexOf(column) * resolutionX;
            for (const row of column) {
              pointY = column.indexOf(row) * resolutionY;
              angle = row;
              drawVector(pointX, pointY, false , false , angle, length, p);
            };
          };
            
          
        // draw curves
          drawCurve(curveStart.x, curveStart.y, num_steps, step_length, num_columns, num_rows, resolutionX, resolutionY, grid, startColour, p); 
          drawCurve(curveEnd.x, curveEnd.y, num_steps, step_length, num_columns, num_rows, resolutionX, resolutionY, grid, endColour, p); 
          

        // why this stop is not working?!?!  
          if (p.frameCount>1000) {
            p.frameRate(0);
            console.log("stop")
            // saveCanvas(canvas, 'dragonCurve', 'jpg'); 
          };



        };

      };
  /**
   * SKETCH 4
   */
  
      const sketch4 = ( p ) => {
        p.setup = function() {
          let canvasSize = p.select("#canvas").width/3;
          let canvas = p.createCanvas(canvasSize, canvasSize);
          p.colorMode(p.RGB,255,255,255,1);
        };

        p.draw = function() {
          p.background(255);
          p.frameRate(100);
          

          let resolution_factorX = 0.04; 
          let resolution_factorY = 0.04;
          let resolutionX = p.int(p.width * resolution_factorX); 
          let resolutionY = p.int(p.height * resolution_factorY);  
          let num_columns = p.int(p.width/resolutionX);
          let num_rows = p.int(p.height/resolutionY);
          
          let length = 0.5*Math.sqrt(resolutionX*resolutionX+resolutionY*resolutionY);

          // perline random anchor points
          for (let column=0; column < num_columns; column++) {
            for (let row=0; row < num_rows; row++) {
              p.noiseSeed();
              p.randomSeed();
              lod = p.map(p.random(), 0,1, 1,8);
              falloff = p.random();
              p.noiseDetail(lod,falloff);

              // to get different anchor points, you should run p.random twice:
              // play with mapping to get various results! :)
              scaled_x = column*p.random();
              scaled_y = row*p.random();
              anchorInputs = [{x: p.map(p.noise(scaled_x,scaled_y),0,1,0,p.width/2) , y: p.map(p.noise(scaled_x,scaled_y),0,1,0,p.height/2)}];
              
              scaled_x = column*p.random();
              scaled_y = row*p.random();
              p.append(anchorInputs, {x: p.map(p.noise(scaled_x,scaled_y),0,1,p.width/2,p.width) , y: p.map(p.noise(scaled_x,scaled_y),0,1,p.height/2,p.height)});
            };
          };
          // normal random anchor points (at least two points because I want blending colours.)
          // anchorInputs4 = [{x: p.map(p.random(),0,1,0,p.width) , y: p.map(p.random(),0,1,0,p.height)}, {x: p.map(p.random(),0,1,0,p.width) , y: p.map(p.random(),0,1,0,p.height)}];

          let grid = []; 
          let randomness = "perlin";
          let seed = 444;
          let angleA = -2*p.PI;
          let angleB = 2*p.PI;
          let anchorsX = [];
          let anchorsY = [];

          for (const point of anchorInputs) { 
            p.append(anchorsX, point.x);
            p.append(anchorsY, point.y);
          };


         /**
         * step_length : keep this const to get smooth results (0.001 * p.width)
         * num_curve : how hard you try (maybe slider input); your persistence; different ways that you give it a go... (fix it for a simpler mode)
         * num_steps : your life span (time/frameCount dependent)
         * anchors : where people/goals are (an array of objects: [{x1,y1},{x2,y2}])
         * map langitude & latitude points on earth to [p.width, p.height] to get x&y of anchors
         * grid : logical randomness. the inherent chance element in life; yet restricted by effective initial conditions (birth place, vision extend, knowledge, ...)
         * 
         */

          const step_length = 0.001 * p.width; // fix to this amount to get smooth curves
          let curveStart = {x: anchorsX[0], y: anchorsY[0]};// {x:p.map(anchorsX[0],0,p.width, , ), y:p.map(anchorsY[0],0,p.height, , )};
          let curveEnd = {x: anchorsX[1], y: anchorsY[1]};
          let dist = p.dist(curveStart.x,curveStart.y,curveEnd.x,curveEnd.y);
          // I want to bind the propagation of the curves to time, so:
          let num_steps = 10*p.frameCount; // Math.max(2*dist/step_length, 100); // your life span


          let startColour = p.color(0,0,255,1);
          let endColour = p.color(255,0,0,1);
          // console.log("start",curveStart);
          // console.log("end",curveEnd);

          // I want only one grid per canvas for all drawings. not one grid per drawing. 
          // I CAN declare grid in setup() but this will either make it unaccessible inside draw() or make a global variable that will mess with other canvases.
          // instead I am using if (frameCount==1) then {} ... WHICH IS NOT WORKING!!!
          // instead I'm using the same seed seed for each drawing but different seed for each canvas.  
          // the problem would be generating grid over and over at each drawing.
          // maybe not too bad. as it gets darker and darker, it shows time has passed...
          // generate grid (random things happen which are affected by the intial conditions of your life)
       
          grid = generateGrid(num_columns, num_rows, grid, randomness, seed, angleA, angleB, p);  
          // draw grid (optional)
          for (const column of grid) { 
            pointX = grid.indexOf(column) * resolutionX;
            for (const row of column) {
              pointY = column.indexOf(row) * resolutionY;
              angle = row;
              drawVector(pointX, pointY, false , false , angle, length, p);
            };
          };
            
          
        // draw curves
          drawCurve(curveStart.x, curveStart.y, num_steps, step_length, num_columns, num_rows, resolutionX, resolutionY, grid, startColour, p); 
          drawCurve(curveEnd.x, curveEnd.y, num_steps, step_length, num_columns, num_rows, resolutionX, resolutionY, grid, endColour, p); 
          

        // why this stop is not working?!?!  
          if (p.frameCount>1000) {
            p.frameRate(0);
            console.log("stop")
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
    // let canvas5 = new p5(sketch5, 'canvas5');
    // let canvas6 = new p5(sketch6, 'canvas6');
    // let canvas7 = new p5(sketch7, 'canvas7');
    // let canvas8 = new p5(sketch8, 'canvas8');
    // let canvas9 = new p5(sketch9, 'canvas9');
    // let canvas10 = new p5(sketch10, 'canvas10');
    // let canvas11 = new p5(sketch11, 'canvas11');
    // let canvas12 = new p5(sketch12, 'canvas12');
    // let canvas13 = new p5(sketch13, 'canvas13');
    // let canvas14 = new p5(sketch14, 'canvas14');
    // let canvas15 = new p5(sketch15, 'canvas15');
    // let canvas16 = new p5(sketch16, 'canvas16');
    // let canvas17 = new p5(sketch17, 'canvas17');
    // let canvas18 = new p5(sketch18, 'canvas18');
    // let canvas19 = new p5(sketch19, 'canvas19');
    // let canvas20 = new p5(sketch20, 'canvas20');
    // let canvas21 = new p5(sketch21, 'canvas21');
    // let canvas22 = new p5(sketch22, 'canvas22');
    // let canvas23 = new p5(sketch23, 'canvas23');
    // let canvas24 = new p5(sketch24, 'canvas24');
    // let canvas25 = new p5(sketch25, 'canvas25');
    







