var gui = new dat.GUI();
var params = {
    Ellipse_Size: 30,
    Download_Image: function () { return save(); },
};
gui.add(params, "Ellipse_Size", 0, 100, 1);
gui.add(params, "Download_Image");
function draw() {
    background('#a16e68');
    strokeWeight(0);
    fill('#faead7');
    ellipse(width / 2, height / 2, 220, 250);
    ellipse(width / 2, height / 2 + 10, 225, 250);
    strokeWeight(1);
    fill('white');
    ellipse(width / 2 - 50, height / 2 - 10, 70, 70);
    ellipse(width / 2 + 50, height / 2 - 10, 70, 70);
    fill('black');
    ellipse(width / 2 - 50 - 10, height / 2 - 10, 50, 50);
    ellipse(width / 2 + 50 - 10, height / 2 - 10, 50, 50);
    strokeWeight(2);
    line(width / 2 - 5, height / 2 + 40, width / 2 + 5, height / 2 + 40);
    fill('#ffbfa6');
    strokeWeight(0);
    ellipse(width / 2 - 60, height / 2 + 40, 45, 20);
    ellipse(width / 2 + 60, height / 2 + 40, 45, 20);
}
function setup() {
    p6_CreateCanvas();
}
function windowResized() {
    p6_ResizeCanvas();
}
var __ASPECT_RATIO = 1;
var __MARGIN_SIZE = 25;
function __desiredCanvasWidth() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return windowWidth - __MARGIN_SIZE * 2;
    }
    else {
        return __desiredCanvasHeight() * __ASPECT_RATIO;
    }
}
function __desiredCanvasHeight() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return __desiredCanvasWidth() / __ASPECT_RATIO;
    }
    else {
        return windowHeight - __MARGIN_SIZE * 2;
    }
}
var __canvas;
function __centerCanvas() {
    __canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
}
function p6_CreateCanvas() {
    __canvas = createCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
function p6_ResizeCanvas() {
    resizeCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
var p6_SaveImageSequence = function (durationInFrames, fileExtension) {
    if (frameCount <= durationInFrames) {
        noLoop();
        var filename_1 = nf(frameCount - 1, ceil(log(durationInFrames) / log(10)));
        var mimeType = (function () {
            switch (fileExtension) {
                case 'png':
                    return 'image/png';
                case 'jpeg':
                case 'jpg':
                    return 'image/jpeg';
            }
        })();
        __canvas.elt.toBlob(function (blob) {
            p5.prototype.downloadFile(blob, filename_1, fileExtension);
            setTimeout(function () { return loop(); }, 100);
        }, mimeType);
    }
};
//# sourceMappingURL=../src/src/build.js.map