$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid(); 


    // TODO 2 - Create Platforms
    createPlatform(1000, 280 , 100, 20,"transparent");
    createPlatform(1200, 150, 200, 20, "green");
    createPlatform(100, 659, 40, 80, "purple" );
    createPlatform(300, 659, 40, 80, "blue" );
    createPlatform(500, 659, 40, 80, "red");
    createPlatform(700, 659, 40, 80, "white" );
    createPlatform(900, 659, 40, 80, "orange" );
    createPlatform(1100, 659, 40, 80, "yellow" );
    createPlatform(1300, 540, 100, 20,"transparent");
    createPlatform(150, 410, 1110, 20,"transparent");
    createPlatform(750, 150 , 100, 20,"transparent");
   createPlatform(500, 110 , 100, 20,"transparent");
    
   // TODO 3 - Create Collectables
    createCollectable("steve", 500, 70);
    createCollectable("diamond", 750, 110, 0.3, 0.5);
    createCollectable("kennedi", 1350, 40);
    createCollectable("max", 90, 500, 0.3, 0.5);
    createCollectable("grace", 1000, 240, 0.3, 0.5);


    
    // TODO 4 - Create Cannons
    
    createCannon("bottom", 150, 1000);
    createCannon("bottom", 359, 1000);
    createCannon("bottom", 550, 600);
    createCannon("bottom", 759, 1000);
    createCannon("bottom", 950, 1000);
  
    createCannon("left", 300, 2000); 
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
