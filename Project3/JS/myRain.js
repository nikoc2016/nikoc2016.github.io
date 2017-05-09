
//Background Matrix Rain - CODE BY CHENGLIN LU
var myRain = {

  //Rain Elements
  textBase: ["<!DOCTYPE> ", "<a>", "<abbr>", "<acronym>", "<address>", "<applet>", "<area>", "<article>", "<aside>", "<audio>", "<b>", "<base>", "<basefont>", "<bdi>", "<bdo>", "<big>", "<blockquote>", "<body>", "<br>", "<button>", "<canvas>", "<caption>", "<center>", "<cite>", "<code>", "<col>", "<colgroup>", "<datalist>", "<dd>", "<del>", "<details>", "<dfn>", "<dialog>", "<dir>", "<div>", "<dl>", "<dt>", "<em>", "<embed>", "<fieldset>", "<figcaption>", "<figure>", "<font>", "<footer>", "<form>", "<frame>", "<frameset>", "<h1> to <h6>", "<head>", "<header>", "<hr>", "<html>", "<i>", "<iframe>", "<img>", "<input>", "<ins>", "<kbd>", "<keygen>", "<label>", "<legend>", "<li>", "<link>", "<main>", "<map>", "<mark>", "<menu>", "<menuitem>", "<meta>", "<meter>", "<nav>", "<noframes>", "<noscript>", "<object>", "<ol>", "<optgroup>", "<option>", "<output>", "<p>", "<param>", "<picture>", "<pre>", "<progress>", "<q>", "<rp>", "<rt>", "<ruby>", "<s>", "<samp>", "<script>", "<section>", "<select>", "<small>", "<source>", "<span>", "<strike>", "<strong>", "<style>", "<sub>", "<summary>", "<sup>", "<table>", "<tbody>", "<td>", "<textarea>", "<tfoot>", "<th>", "<thead>", "<time>", "<title>", "<tr>", "<track>", "<tt>", "<u>", "<var>", "<video>", "<wbr>"],

  //Variables Zone
  stage : 0,
  ctx : 0,
  w : 0,
  h : 0,
  minScale: 0.3,
  maxScale: 1,
  maxFontSize: $(window).width() / 60,
  maxBGcolor: {
    r : "67",
    g : "99",
    b : "85"
  },
  minBGcolor: {
    r : "32",
    g : "47",
    b : "40"
  },
  BGcolor: {
    r : "0",
    g : "0",
    b : "0"
  },
  BGfading: true, //True for fading out, False for fading In
  BGfadeTime: 6,    //How many seconds for fading out

  tags : [],

  //Method Zone
  init: function() {

    //Binding Canvas
    this.stage = $("#myRainPad")[0];
    if(!this.stage.getContext)
      return;

    //Sync Stage To Win Size
    this.resizeCanvas();
    this.ctx = this.stage.getContext('2d');

    //Generating Strings
    this.loadTags();

    //Drawing Frame
    setInterval($.proxy(this.drawFrame, this), 1);

  },

  resizeCanvas: function() {
    this.stage.width = $(window).width();
    this.stage.height = $(window).height();
    this.w = this.stage.width;
    this.h = this.stage.height;
  },

  loadTags: function(){
    for (var i=0;i<80;i++) {
      var currentScale = (Math.random() * (1 - this.minScale)) + this.minScale;
      this.tags.push({
        txt: this.textBase[i],
        x: Math.random() * this.w,
        y: Math.random() * this.h - 1.2 * this.h,
        ys: currentScale * 2,
        scale: currentScale
      });
    }
  },

  drawFrame: function(){
    this.ctx.clearRect(0,0,this.w,this.h);
    this.ctx.save();

    var grd = this.ctx.createLinearGradient(0,this.h/3,0,this.h);
    grd.addColorStop(0,"black");
    grd.addColorStop(1, myRainRGB.toHEX(this.BGcolor.r,this.BGcolor.g,this.BGcolor.b));
    this.ctx.fillStyle=grd;
    this.ctx.fillRect(0,0,this.w,this.h);

    this.ctx.restore();

    for (var i=0;i<this.tags.length;i++) {
      this.ctx.save();

      var DFangle = Math.PI / 2;
      var DFlength = this.ctx.measureText(this.tags[i].txt).width;
      var DFtext = this.tags[i].txt;
      var DFx = this.tags[i].x;
      var DFy = this.tags[i].y + 0.5 * DFlength;
      var DFScale = this.tags[i].scale;
      var DFcolor = "#a2e18a"; // green
      var DFshadow = 4;
      var DFshadowColor = "rgba(162,225,138,0.3)";
      var DFshadowBlur = 4;

      this.ctx.font = this.maxFontSize * DFScale + "px martix-code";
      this.ctx.translate(DFx, DFy);
      this.ctx.rotate(DFangle);
      this.ctx.fillStyle = DFcolor;
      this.ctx.textAlign = "center";
      this.ctx.shadowOffsetX = DFshadow;
      this.ctx.shadowOffsetY = DFshadow;
      this.ctx.shadowColor = DFshadowColor;
      this.ctx.shadowBlur = DFshadowBlur;
      this.ctx.globalAlpha = DFScale;

      this.ctx.fillText(DFtext, 0, 0 );
      this.ctx.restore();
    }
    this.moveChar();
    this.updateBG();
  },

  moveChar: function(){
    for (var i=0;i<this.tags.length;i++) {
      if (this.tags[i].y - this.ctx.measureText(this.tags[i].txt).width > this.h){
        this.tags[i].y = -2 * this.ctx.measureText(this.tags[i].txt).width;
        this.tags[i].x = Math.random() * this.w;
      } else {
        this.tags[i].y += this.tags[i].ys;
      }
    }
  },

  updateBG: function(){
    var totalFrames = this.BGfadeTime * 100;
    var rDecay = this.maxBGcolor.r / totalFrames;
    var gDecay = this.maxBGcolor.g / totalFrames;
    var bDecay = this.maxBGcolor.b / totalFrames;
    if (this.BGfading == true) {
      this.BGcolor.r = this.BGcolor.r - rDecay;
      this.BGcolor.g = this.BGcolor.g - gDecay;
      this.BGcolor.b = this.BGcolor.b - bDecay;
      if (this.BGcolor.r <= this.minBGcolor.r || this.BGcolor.g <= this.minBGcolor.g || this.BGcolor.b <= this.minBGcolor.b) {
        this.BGfading = false;
      }
    } else {
      this.BGcolor.r = this.BGcolor.r + rDecay;
      this.BGcolor.g = this.BGcolor.g + gDecay;
      this.BGcolor.b = this.BGcolor.b + bDecay;
      if (this.BGcolor.r >= this.maxBGcolor.r || this.BGcolor.g >= this.maxBGcolor.g || this.BGcolor.b >= this.maxBGcolor.b) {
        this.BGfading = true;
        this.BGcolor.r = this.maxBGcolor.r;
        this.BGcolor.g = this.maxBGcolor.g;
        this.BGcolor.b = this.maxBGcolor.b;
      }
    }
  },
}

//SUPER RGB ACCESSOR - https://gist.github.com/lrvick/2080648 & STACKOVERFLOW
var myRainRGB = {
  toRGB: function(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  },
  toHEX: function(r, g, b) {
    var bin = r << 16 | g << 8 | b;
    return "#" + (function(h){
        return new Array(7-h.length).join("0")+h
    })(bin.toString(16).toUpperCase())
  }
}

$(document).ready(function(){
  myRain.init();
});
