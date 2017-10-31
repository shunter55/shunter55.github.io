
// Header Resizing.
var archerResizeSmall = function() {
   var archerSize = (90 / 700 * $(window).height());
   $("#archerLegsHeader").css("background-size", archerSize + "px");
   $("#archerLegsHeader").height(archerSize);
   $("#archerLegsHeader").width(archerSize);
   $("#archerLegsHeader").css(
      "left", ($(window).width() / 2 - 260 / 700 * $(window).height()) + "px");
   $("#archerLegsHeader").css(
      "bottom", (30 / 700 * $(window).height()) + "px");

   $("#archerBodyHeader").css("background-size", archerSize + "px");
   $("#archerBodyHeader").height(archerSize);
   $("#archerBodyHeader").width(archerSize);
   $("#archerBodyHeader").css(
      "left", ($(window).width() / 2 - 260 / 700 * $(window).height()) + "px");
   $("#archerBodyHeader").css(
      "bottom", (40 / 700 * $(window).height()) + "px");

   $("#archerHeadHeader").css("background-size", archerSize + "px");
   $("#archerHeadHeader").height(archerSize);
   $("#archerHeadHeader").width(archerSize);
   $("#archerHeadHeader").css(
      "left", ($(window).width() / 2 - 260 / 700 * $(window).height()) + "px");
   $("#archerHeadHeader").css(
      "bottom", (70 / 700 * $(window).height()) + "px");

   $("#archerBowHeader").css("background-size", archerSize + "px");
   $("#archerBowHeader").height(archerSize);
   $("#archerBowHeader").width(archerSize);
   $("#archerBowHeader").css(
      "left", ($(window).width() / 2 - 260 / 700 * $(window).height()) + "px");
   $("#archerBowHeader").css(
      "bottom", (53 / 700 * $(window).height()) + "px");

   $("#archerArmUpperHeader").css("background-size", archerSize + "px");
   $("#archerArmUpperHeader").height(archerSize);
   $("#archerArmUpperHeader").width(archerSize);
   $("#archerArmUpperHeader").css(
      "left", ($(window).width() / 2 - 260 / 700 * $(window).height()) + "px");
   $("#archerArmUpperHeader").css(
      "bottom", (53 / 700 * $(window).height()) + "px");

   $("#archerArmLowerHeader").css("background-size", archerSize + "px");
   $("#archerArmLowerHeader").height(archerSize);
   $("#archerArmLowerHeader").width(archerSize);
   $("#archerArmLowerHeader").css(
      "left", ($(window).width() / 2 - 260 / 700 * $(window).height()) + "px");
   $("#archerArmLowerHeader").css(
      "bottom", (53 / 700 * $(window).height()) + "px");

   $("#arrowHeader").css("background-size", archerSize + "px");
   $("#arrowHeader").height(archerSize);
   $("#arrowHeader").width(archerSize);
   $("#arrowHeader").css(
      "left", ($(window).width() / 2 - 236 / 700 * $(window).height()) + "px");
   $("#arrowHeader").css(
      "bottom", (20 / 700 * $(window).height()) + "px");
}

var archerResizeBig = function() {
   var archerSize = 90;
   $("#archerLegsHeader").css("background-size", archerSize + "px");
   $("#archerLegsHeader").height(archerSize);
   $("#archerLegsHeader").width(archerSize);
   $("#archerLegsHeader").css("left", ($(window).width() / 2 - 260));
   $("#archerLegsHeader").css("bottom", "30px");

   $("#archerBodyHeader").css("background-size", archerSize + "px");
   $("#archerBodyHeader").height(archerSize);
   $("#archerBodyHeader").width(archerSize);
   $("#archerBodyHeader").css("left", ($(window).width() / 2 - 260));
   $("#archerBodyHeader").css("bottom", "40px");

   $("#archerHeadHeader").css("background-size", archerSize + "px");
   $("#archerHeadHeader").height(archerSize);
   $("#archerHeadHeader").width(archerSize);
   $("#archerHeadHeader").css("left", ($(window).width() / 2 - 260));
   $("#archerHeadHeader").css("bottom", "70px");

   $("#archerBowHeader").css("background-size", archerSize + "px");
   $("#archerBowHeader").height(archerSize);
   $("#archerBowHeader").width(archerSize);
   $("#archerBowHeader").css("left", ($(window).width() / 2 - 260));
   $("#archerBowHeader").css("bottom", "53px");

   $("#archerArmUpperHeader").css("background-size", archerSize + "px");
   $("#archerArmUpperHeader").height(archerSize);
   $("#archerArmUpperHeader").width(archerSize);
   $("#archerArmUpperHeader").css("left", ($(window).width() / 2 - 260));
   $("#archerArmUpperHeader").css("bottom", "53px");

   $("#archerArmLowerHeader").css("background-size", archerSize + "px");
   $("#archerArmLowerHeader").height(archerSize);
   $("#archerArmLowerHeader").width(archerSize);
   $("#archerArmLowerHeader").css("left", ($(window).width() / 2 - 260));
   $("#archerArmLowerHeader").css("bottom", "53px");

   $("#arrowHeader").css("background-size", archerSize + "px");
   $("#arrowHeader").height(archerSize);
   $("#arrowHeader").width(archerSize);
   $("#arrowHeader").css("left", ($(window).width() / 2 - 236));
   $("#arrowHeader").css("bottom", "20px");
}

var resizeHeader = function() {
   if ($(window).height() < 700) {
      var treeSize = (145 / 700 * $(window).height());
      var millBladesSize = (135 / 700 * $(window).height());
      var millBaseSize = (60 / 700 * $(window).height());
      var appleSize = (25 / 700 * $(window).height());
      $("#millHeader").css("background-size", millBladesSize + "px");
      $("#millHeader").height(millBladesSize);
      $("#millHeader").width(millBladesSize);
      $("#millHeader").css(
         "left", ($(window).width() / 2 - millBladesSize / 2 + 220 / 700 * $(window).height()) + "px");
      $("#millHeader").css(
         "bottom", ($(window).height() / 6.0) + "px");

      $("#appleHeader").css("background-size", appleSize + "px");
      $("#appleHeader").height(appleSize);
      $("#appleHeader").width(appleSize);
      $("#appleHeader").css(
         "left", ($(window).width() / 2 + 48 / 700 * $(window).height()) + "px"); //48
      $("#appleHeader").css(
         "bottom", ($(window).height() / 2.29) + "px");
      
      archerResizeSmall();

      $("#header").css('background-size', 
         treeSize + "px, " +
         millBaseSize + "px, " + 
         $(window).height() + "px");
      $("#header").css('background-position', 
         "left " + ($(window).width() / 2 - treeSize / 2 + 6) + "px bottom " + ($(window).height() / 2.725) + "px, " +
         "left " + ($(window).width() / 2 - millBaseSize / 2 + 220 / 700 * $(window).height()) + "px bottom " + ($(window).height() / 8.7) + "px, " +
         "center bottom");
   } else {
      $("#millHeader").css("background-size", "135px");
      $("#millHeader").height(135);
      $("#millHeader").width(135);
      $("#millHeader").css(
         "left", ($(window).width() / 2 + 152));
      $("#millHeader").css(
         "bottom", "115px");

      $("#appleHeader").css("background-size", "25px");
      $("#appleHeader").height(25);
      $("#appleHeader").width(25);
      $("#appleHeader").css("left", ($(window).width() / 2 + 48));
      $("#appleHeader").css("bottom", "305px");

      archerResizeBig();
      
      $("#header").css("background-size", "145px, 60px, 700px");
      $("#header").css("background-position",
         "left " + ($(window).width() / 2 - 66) + "px bottom 256px, " +
         "left " + ($(window).width() / 2 + 190) + "px bottom 80px, " +
         "center bottom");
   }

   $("#header").height($(window).height());

   $("#body1").text("Window Size - Width: " + $(window).width() + " Height: " + $(window).height());
}

// Call on document start.
$(document).ready(resizeHeader);
// Call on window resize.
$(window).resize(resizeHeader);
// ----------------------------------------------------------------------------------------------------------------------------------------------------


// Windmill Animation.
var angle = 0;
var animateBlades = function() {
   angle = (angle + 1) % 360;
   $("#millHeader").css({
      "transform": "rotate(" + angle + "deg)"
   });
}
setInterval(animateBlades, 25);
// ----------------------------------------------------------------------------------------------------------------------------------------------------


// Apple Animation.
var wiggleAppleHeavy = function() {
   var appleSize = (25 / 700 * $(window).height());
   var degs = [-5, 4, -3, 2, 0];
   //if (Math.random() > 0.5) {
   //   degs = [-2, 1, -1, 0, 0];
   //}
   for (i = 0; i < 5; i++) {
      $("#appleHeader").animate({ deg: degs[i] }, {
         step: function(now, fx) {
            $(this).css("transform", "rotate(" + now + "deg) " +
               "translateX(" + (-appleSize / 2) * Math.sin(Math.PI / 180 * now) + "px)");
         }
      }, "ease-in-out");
   }
}
var wiggleAppleLight = function() {
   var appleSize = (25 / 700 * $(window).height());
   var degs = [-2, 1, -1, 0, 0];
   
   for (i = 0; i < 5; i++) {
      $("#appleHeader").animate({ deg: degs[i] }, {
         step: function(now, fx) {
            $(this).css("transform", "rotate(" + now + "deg) " +
               "translateX(" + (-appleSize / 2) * Math.sin(Math.PI / 180 * now) + "px)");
         }
      }, "ease-in-out");
   }
}
//setInterval(wiggleApple, 2000);
// ----------------------------------------------------------------------------------------------------------------------------------------------------


// Archer Animation.
var startDegUpper = 0;
var getLowerNow = function(now, upper, lower) {
   var lowerNow = lower / upper;
   if (upper - startDegUpper == 0) {
      lowerNow = 1;
   }
   if (upper < startDegUpper) {
      lowerNow = 1 - lowerNow;
   }
   return lowerNow * lower;
}

//var armUpperStart = -0.0;
//var armLowerStart = -0.0;
//var armUpperDeg = armUpperStart;
//var armLowerDeg = armLowerStart;
//var rotateArm = function(upper, lower, duration) {
//   $("#archerArmUpperHeader").animate({ deg: upper }, {
//      step: function(now, tween) {
//         var armUpper = ((upper - armUpperStart) / (duration / 12.5));
//         var armLower = ((lower - armLowerStart) / (duration / 12.5));
//         
//         armUpperDeg += armUpper;
//         armLowerDeg += armLower;
//         $(this).css("transform", "rotate(" + armUpperDeg + "deg)");
//         $("#archerArmLowerHeader").css("transform", 
//            "rotate(" + armUpperDeg + "deg) " +
//            "translateX(" + (-14) + "px) " +
//            "rotate(" + armLowerDeg + "deg)");
//      },
//      duration: duration,
//      complete: function() {
//         armUpperStart = upper;
//         armLowerStart = lower;
//         armUpperDeg = upper;
//         armLowerDeg = lower;
//         if (armUpperStart >= 360) {
//            armUpperStart = 0;
//         }
//         if (armLowerStart >= 360) {
//            armLowerStart = 0;
//         }
//      }
//   });
//}

var armUpperStart = 0.0;
var armLowerStart = 0.0;
var bodyStart = 0.0;
var headStart = 0.0;
var bowStart = 0.0;
var armUpperDeg = armUpperStart;
var armLowerDeg = armLowerStart;
var bodyDeg = bodyStart;
var headDeg = headStart;
var bowDeg = bowStart;
var rotateBody = function(upper, lower, body, head, bow, duration) {

   $("#archerBodyHeader").animate({ deg: body }, {
      step: function(now, tween) {
         var bodyChange = (body - bodyStart) / (duration / 12.5);
         var headChange = (head - headStart) / (duration / 12.5);
         var armUpperChange = (upper - armUpperStart) / (duration / 12.5);
         var armLowerChange = (lower - armLowerStart) / (duration / 12.5);
         var bowChange = (bow - bowStart) / (duration / 12.5);

         var headToPivot = 25;
         var armToPivot = 14;
         var lowerArmToPivot = 14;

         if ($(window).height() < 700) {
            headToPivot = (headToPivot / 700 * $(window).height());
            armToPivot = (armToPivot / 700 * $(window).height());
            lowerArmToPivot = (lowerArmToPivot / 700 * $(window).height());
         }

         bodyDeg += bodyChange;
         headDeg += headChange;
         armUpperDeg += armUpperChange;
         armLowerDeg += armLowerChange;
         bowDeg += bowChange;

         $(this).css("transform", "rotate(" + bodyDeg + "deg)");
         $("#archerHeadHeader").css("transform", 
            "rotate(" + headDeg + "deg) " +
            "translateY(" + headToPivot + "px) " +
            "rotate(" + bodyDeg + "deg) " +
            "translateY(" + -headToPivot + "px)");
         
         $("#archerArmUpperHeader").css("transform", 
            "translateY(" + armToPivot + "px) " +
            "rotate(" + bodyDeg + "deg) " +
            "translateY(" + -armToPivot + "px) " + 
            "rotate(" + armUpperDeg + "deg)");
         $("#archerArmLowerHeader").css("transform", 
            "translateY(" + armToPivot + "px) " +
            "rotate(" + bodyDeg + "deg) " +
            "translateY(" + -armToPivot + "px) " +
            "rotate(" + armUpperDeg + "deg) " +
            "translateX(" + -lowerArmToPivot + "px) " +
            "rotate(" + armLowerDeg + "deg) ");
         
         $("#archerBowHeader").css("transform",
            "translateY(" + armToPivot + "px) " +
            "rotate(" + bodyDeg + "deg) " +
            "translateY(" + -armToPivot + "px) " + 
            "rotate(" + bowDeg + "deg)");
      },
      duration: duration,
      complete: function() {
         bodyStart = body;
         headStart = head;
         bodyDeg = body;
         headDeg = head;
         bowDeg = bow;
         armUpperStart = upper;
         armLowerStart = lower;
         armUpperDeg = upper;
         armLowerDeg = lower;
         bowStart = bow;
         if (bodyStart >= 360) {
            bodyStart = 0;
         }
         if (headStart >= 360) {
            headStart = 0;
         }
         if (armUpperStart >= 360) {
            armUpperStart = 0;
         }
         if (armLowerStart >= 360) {
            armLowerStart = 0;
         }
      }
   });
}

var arrowRotStart = 0.0;
var arrowXStart = 0;
var arrowYStart = 0;
var arrowDeg = arrowRotStart;
var arrowX = arrowXStart;
var arrowY = arrowYStart;
var pivotRotStart = 0;
var pivotRotDeg = 0;
var moveArrow = function(rotation, x, y, pivotX, pivotY, pivotRotation, duration) {

   $("#arrowHeader").animate({ deg: rotation }, {
      step: function(now, tween) {
         var rotChange = (rotation - arrowRotStart) / (duration / 12.5);
         var xChange = (x - arrowXStart) / (duration / 12.5);
         var yChange = (y - arrowYStart) / (duration / 12.5);
         var pivotRotChange = (pivotRotation - pivotRotStart) / (duration / 12.5);

         arrowDeg += rotChange;
         arrowX += xChange;
         arrowY += yChange;
         pivotRotDeg += pivotRotChange;

         $(this).css("transform", 
            "translateY(" + arrowY + "px) " +
            "translateX(" + arrowX + "px) " +
            "translateY(" + -pivotY + "px) " +
            "translateX(" + -pivotX + "px) " +
            "rotate(" + pivotRotDeg + "deg) " +
            "translateY(" + pivotY + "px) " +
            "translateX(" + pivotX + "px) " +
            "rotate(" + arrowDeg + "deg)");
      },
      duration: duration,
      complete: function() {
         arrowDeg = rotation;
         arrowX = x;
         arrowY = y;
         arrowRotStart = rotation;
         arrowXStart = x;
         arrowYStart = y;
         pivotRotStart = pivotRotation;
         pivotRotDeg = pivotRotation;
      }
   });
}

var shootArrow = function() {
   if (winHasFocus) {

      //         upper, lower, body, head, bow , duration
      rotateBody(-145 , -35  , 3   , 12  , 12  , 1000);
      rotateBody(-145 , -10  , 0   , 12  , 12  , 500);
      rotateBody(-145 , -30  , 0   , 0   , 12  , 500);
      rotateBody(-360 , 130  , -20 , -18 , -25 , 700);
      rotateBody(-360 , 130  , -20 , -18 , -25 , 700);
      rotateBody(-75  , -75  , 0   , 0   , 12  , 1000);
      rotateBody(-75  , -75  , 0   , 12  , 12  , 1000);

      if ($(window).height() >= 700) {
         //        rot , x    , y    , pivotX, pivotY, pivotRot, duration
         moveArrow(0   , 0    , 0    , 0     , 0     , 0       , 1500    );
         moveArrow(0   , 0    , -5   , 0     , 0     , 0       , 500     );
         moveArrow(17  , -1   , -7   , 19    , 23    , -110    , 400     );
         moveArrow(17  , 0    , 0    , 19    , 23    , -150    , 300     );

         moveArrow(-135  , -26   , -50    , 0     , 0     , 0       , 0     );
         moveArrow(-135  , -26   , -50    , 0     , 0     , 0       , 100     );

         var arrowPivX = -700;
         var arrowPivY = -650;
         moveArrow(-135  , -26   , -50    , arrowPivX     , arrowPivY     , 20.5       , 500      );
         moveArrow(-140  , -26   , -50    , arrowPivX     , arrowPivY     , 20.5       , 375      );
         moveArrow(-131  , -26   , -50    , arrowPivX     , arrowPivY     , 20.5       , 375      );
         moveArrow(-138  , -26   , -50    , arrowPivX     , arrowPivY     , 20.5       , 375      );
         moveArrow(-133  , -26   , -50    , arrowPivX     , arrowPivY     , 20.5       , 375      );
         moveArrow(-135  , -26   , -50    , arrowPivX     , arrowPivY     , 20.5       , 600     );
         moveArrow(5   , 2    , 3    , 0     , 0     , 0       , 0    );
      } else {
         //        rot , x    , y    , pivotX, pivotY, pivotRot, duration
         moveArrow(0   , 0    , 0    , 0     , 0     , 0       , 1500    );
         moveArrow(0   , 0    , -5/700 * $(window).height()   , 0     , 0     , 0       , 500     );
         moveArrow(17  , -1/700 * $(window).height()   , -7/700 * $(window).height()   , 19/700 * $(window).height(), 23/700 * $(window).height(), -110, 400     );
         moveArrow(17  , 0    , 0    , 19/700 * $(window).height(), 23/700 * $(window).height(), -150, 300     );

         moveArrow(-135, -26/700 * $(window).height(), -50/700 * $(window).height()  , 0     , 0     , 0       , 0     );
         moveArrow(-135, -26/700 * $(window).height(), -50/700 * $(window).height()  , 0     , 0     , 0       , 100     );

         var arrowPivX = -700/700  * $(window).height();
         var arrowPivY = -650/700  * $(window).height();
         moveArrow(-135  , -26/700  * $(window).height()   , -50/700  * $(window).height()    , arrowPivX     , arrowPivY     , 20.5       , 500      );
         moveArrow(-140  , -26/700  * $(window).height()   , -50/700  * $(window).height()    , arrowPivX     , arrowPivY     , 20.5       , 375      );
         moveArrow(-131  , -26/700  * $(window).height()   , -50/700  * $(window).height()    , arrowPivX     , arrowPivY     , 20.5       , 375      );
         moveArrow(-138  , -26/700  * $(window).height()   , -50/700  * $(window).height()    , arrowPivX     , arrowPivY     , 20.5       , 375      );
         moveArrow(-133  , -26/700  * $(window).height()   , -50/700  * $(window).height()    , arrowPivX     , arrowPivY     , 20.5       , 375      );
         moveArrow(-135  , -26/700  * $(window).height()   , -50/700  * $(window).height()    , arrowPivX     , arrowPivY     , 20.5       , 600     );
         moveArrow(5   , 2/700 * $(window).height()    , 3/700 * $(window).height()    , 0     , 0     , 0       , 0    );
      }
      window.setTimeout(wiggleAppleLight, 300);
      window.setTimeout(wiggleAppleHeavy, 3200);
      $("#arrowHeader").css("opacity", 1);

   }
}

$(document).ready(function() {
   var armUpper = -75;
   var armLower = -75;

   var armToPivot = 14;
   if ($(window).height() < 700) {
      armToPivot = (armToPivot / 700 * $(window).height());
   }

   $("#archerArmUpperHeader").css("transform", "rotate(" + armUpper + "deg)");
   $("#archerArmLowerHeader").css("transform", 
      "rotate(" + armUpper + "deg) " +
      "translateX(" + -armToPivot + "px) " +
      "rotate(" + armLower + "deg)");

   armUpperStart = armUpper;
   armLowerStart = armLower;
   armUpperDeg = armUpper;
   armLowerDeg = armLower;

   shootArrow();
});
$(window).resize(function() {
   if ($(window).height() < 700) {
      $("#arrowHeader").css("opacity", 0);
   }
});
setInterval(shootArrow, 6500);
// ----------------------------------------------------------------------------------------------------------------------------------------------------


// Cloud Animations.
var cloudArr = [];
var cloudTopArr = [];
var cloudSpdArr = [];
var cloudPosArr = [];
var winHasFocus = true;

var randCloudPos = function(cloudDiv) {
   var rand = Math.floor((Math.random() * ($(window).height() / 3))) - $(window).height() / 12;
   cloudTopArr.push(rand);
   $(cloudDiv).css("top", rand);
}

var randCloudSpd = function() {
   return Math.floor((Math.random() * 7) + 3);
}

var createCloud = function() {
   if (winHasFocus) {
      var cloudSize = (200 / 700 * $(window).height());
      var cloudDiv = document.createElement("div");
      if (Math.random() < 0.5) {
         $(cloudDiv).css("background-image", "url(Images/Cloud1.png)");
      } else {
         $(cloudDiv).css("background-image", "url(Images/Cloud2.png)");
      }
      if (Math.random() < 0.65) {
         $(cloudDiv).css("z-index", "1");
      } else {
         $(cloudDiv).css("z-index", "3");
      }
      $(cloudDiv).css("background-size", cloudSize);
      $(cloudDiv).css("background-repeat", "no-repeat");
      $(cloudDiv).css("position", "fixed");
      $(cloudDiv).css("left", -cloudSize + "px");
      $(cloudDiv).width(cloudSize);
      $(cloudDiv).height(cloudSize);
      randCloudPos(cloudDiv);
      cloudArr.push(cloudDiv);
      cloudSpdArr.push(randCloudSpd());
      cloudPosArr.push(0);
      $("#header").append(cloudDiv);
   }
}

var animateClouds = function() {
   var cloudSize = (200 / 700 * $(window).height());
   for (i = 0; i < cloudArr.length; i++) {
      cloudPosArr[i] = (cloudPosArr[i] + cloudSpdArr[i] / 10);
      if (cloudPosArr[i] > $(window).width() + cloudSize) {
         cloudArr[i].remove();
         cloudArr.splice(i, 1);
         cloudTopArr.splice(i, 1);
         cloudSpdArr.splice(i, 1);
         cloudPosArr.splice(i, 1);
      } else {
         $(cloudArr[i]).css({
            "transform": "translateX(" + cloudPosArr[i] + "px)"   
         });
      }
   }
}

var scaleClouds = function() {
   var cloudSize = (200 / 700 * $(window).height());
   for (i = 0; i < cloudArr.length; i++) {
      $(cloudArr[i]).css("background-size", cloudSize);
      $(cloudArr[i]).css("top", cloudTopArr[i] / 700 * $(window).height());
      $(cloudArr[i]).height(cloudSize);
      $(cloudArr[i]).width(cloudSize);
   }
}

$(window).blur(function() {
   winHasFocus = false;
});
$(window).focus(function() {
   winHasFocus = true;
   while (cloudArr.length < 4) {
      createCloud();
      cloudPosArr[cloudPosArr.length - 1] = Math.random() * $(window).width();
   }
});

$(document).ready(function() {
   for (i = 0; i < 5; i++) {
      createCloud();
      cloudPosArr[cloudPosArr.length - 1] = Math.random() * $(window).width();
   }
   createCloud();
});

$(window).resize(scaleClouds);
setInterval(createCloud, 5000);
setInterval(animateClouds, 17);
// ----------------------------------------------------------------------------------------------------------------------------------------------------
  

// Header Title.
var positionTitle = function() {
   if ($(window).width() < 800) {
      $("#nameHeading").css('left', 3 * $(window).width() / 10);
   } else {
      $("#nameHeading").css('left', 5 * $(window).width() / 9);
   }
   $("#nameHeading").css('font-size', $(window).height() / 7);
   $("#nameHeading").css('padding-top',  $(window).height() / 40);
}

$(document).ready(positionTitle);
$(window).resize(positionTitle);
// ----------------------------------------------------------------------------------------------------------------------------------------------------






























