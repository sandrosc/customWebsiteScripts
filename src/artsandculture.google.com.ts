import { debugWindowFunctions, inject } from './lib/debug';

debugWindowFunctions([
  'Microscope',
  'postMessage',
  'blur',
  'focus',
  'close',
  'onerror',
  'stop',
  'open',
  'alert',
  'confirm',
  'prompt',
  'print',
  'queueMicrotask',
  'requestAnimationFrame',
  'cancelAnimationFrame',
  'captureEvents',
  'releaseEvents',
  'requestIdleCallback',
  'cancelIdleCallback',
  'getComputedStyle',
  'matchMedia',
  'moveTo',
  'moveBy',
  'resizeTo',
  'resizeBy',
  'scroll',
  'scrollTo',
  'scrollBy',
  'getSelection',
  'find',
  'webkitRequestAnimationFrame',
  'webkitCancelAnimationFrame',
  'fetch',
  'btoa',
  'atob',
  // 'setTimeout',
  // 'clearTimeout',
  'setInterval',
  'clearInterval',
  'createImageBitmap',
  'getComputedAccessibleNode',
  'webkitRequestFileSystem',
  'webkitResolveLocalFileSystemURL',
  'openDatabase',
  'chooseFileSystemEntries',
  'GetParams',
  'MicroscopeState',
  'MicroscopeSize',
  'MicroscopeImageMetadata'
]);

var _: any = window._ || {};

declare global {
  interface Window {
    INIT_data: { [key: string]: string | any };
  }
}

function downloadImage() {
  let initData: any[];
  function getInitData(): any[] {
    if (!initData) {
      initData = Object.values(window.initData)[0][2];
    }
    return initData;
  }

  class ImageDownloader {
    private baseURL: URL;
    private URLframe: string;

    constructor() {
      this.baseURL = new URL(getInitData()[8]);
      this.URLframe= getInitData()[9];
    }

    getImageUrl(
      x: number,
      y: number,
      z: number
    ) {
      const cache = {};
      var key = `${x}-${y}-${z}`;
      if (!(key in cache)) {
        const url = `${this.baseURL.pathname.substr(1)}=x${x}-y${y}-z${z}-t${this.URLframe}`;

        const blackbox = new blackboxedUT(new blackboxedWT(), [123, 43, 78, 35, 222, 44, 197, 197], 64);
        const urlHashedNumbers = getHashedNumbers(url);
        blackbox.reset();
        blackbox.update(urlHashedNumbers);
        const hashedNumbers = blackbox.F();
        let base64stuff = _Wd(hashedNumbers);
        base64stuff= base64stuff.substring(0, base64stuff.length - 1);
        base64stuff = base64stuff.replace(/\+/g, '_').replace(/\//g, '_');
          (urlHashedNumbers = this.B),
          0 == urlHashedNumbers.indexOf('http://lh3.ggpht.com') &&
          (urlHashedNumbers = urlHashedNumbers.replace(
            'http://lh3.ggpht.com',
            googleImageServers[(blackbox + y + 1) % googleImageServers.length]
          ))
          cache[key] =
            urlHashedNumbers + '=' + ('x' + blackbox + '-y' + y + '-z' + z) + '-' + this.D + blackbox));
      }

      return cache[key];
    }
  }

  ///////////////////// Black box
  function _Wd (a, b = undefined) {
    Td();
    b = b ? numToChar_Pd : base64Map_Nd;
    for (var c = [], d = 0; d < a.length; d += 3) {
      var f = a[d]
        , g = d + 1 < a.length
        , k = g ? a[d + 1] : 0
        , l = d + 2 < a.length
        , m = l ? a[d + 2] : 0
        , r = f >> 2;
      f = (f & 3) << 4 | k >> 4;
      k = (k & 15) << 2 | m >> 6;
      m &= 63;
      l || (m = 64,
        g || (k = 64));
      c.push(b[r], b[f], b[k], b[m])
    }
    return c.join("")
  }

  var base64Map_Nd:{[key:string]: string}
  var charToNumb_Od:{[key: string]:number}
  var numToChar_Pd: { [key: string]: string };
  function Td() {
    if (!base64Map_Nd) {
      base64Map_Nd = {};
      charToNumb_Od = {};
      numToChar_Pd = {};
      for (var a = 0; 65 > a; a++)
        base64Map_Nd[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),
          charToNumb_Od[base64Map_Nd[a]] = a,
          numToChar_Pd[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),
          62 <= a && (charToNumb_Od["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)] = a)
    }
  }
  function getHashedNumbers (a:string) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var f = a.charCodeAt(d);
      255 < f && (b[c++] = f & 255,
        f >>= 8);
      b[c++] = f
    }
    return b
  }
  class blackboxedUT {
    C: number;
    B: any;
    G: any[];
    D: any[];
    constructor(a: blackboxedWT, b: number[], c: number) {
      this.C = -1;
      this.B = a;
      this.C = c || a.C || 16;
      this.G = Array(this.C);
      this.D = Array(this.C);
      a = b;
      a.length > this.C && (this.B.update(a), (a = this.B.F()), this.B.reset());
      for (c = 0; c < this.C; c++)
        (b = c < a.length ? a[c] : 0),
          (this.G[c] = b ^ 92),
          (this.D[c] = b ^ 54);
      this.B.update(this.D);
    }
    reset() {
      this.B.reset();
      this.B.update(this.D);
    }
    update(a, b = undefined) {
      this.B.update(a, b);
    }
    F() :number[]{
      var a = this.B.F();
      this.B.reset();
      this.B.update(this.G);
      this.B.update(a);
      return this.B.F();
    }
  }
  var decryptImageProbably = function (a, b, c) {
    c || (c = 0);
    var d = a.M;
    if (_.Ja(b))
      for (var f = 0; 16 > f; f++)
        (d[f] =
          (b.charCodeAt(c) << 24) |
          (b.charCodeAt(c + 1) << 16) |
          (b.charCodeAt(c + 2) << 8) |
          b.charCodeAt(c + 3)),
          (c += 4);
    else
      for (f = 0; 16 > f; f++)
        (d[f] = (b[c] << 24) | (b[c + 1] << 16) | (b[c + 2] << 8) | b[c + 3]),
          (c += 4);
    for (f = 16; 80 > f; f++) {
      var g = d[f - 3] ^ d[f - 8] ^ d[f - 14] ^ d[f - 16];
      d[f] = ((g << 1) | (g >>> 31)) & 4294967295;
    }
    b = a.B[0];
    c = a.B[1];
    var k = a.B[2],
      l = a.B[3],
      m = a.B[4];
    for (f = 0; 80 > f; f++) {
      if (40 > f)
        if (20 > f) {
          g = l ^ (c & (k ^ l));
          var r = 1518500249;
        } else (g = c ^ k ^ l), (r = 1859775393);
      else
        60 > f
          ? ((g = (c & k) | (l & (c | k))), (r = 2400959708))
          : ((g = c ^ k ^ l), (r = 3395469782));
      g = (((b << 5) | (b >>> 27)) + g + m + r + d[f]) & 4294967295;
      m = l;
      l = k;
      k = ((c << 30) | (c >>> 2)) & 4294967295;
      c = b;
      b = g;
    }
    a.B[0] = (a.B[0] + b) & 4294967295;
    a.B[1] = (a.B[1] + c) & 4294967295;
    a.B[2] = (a.B[2] + k) & 4294967295;
    a.B[3] = (a.B[3] + l) & 4294967295;
    a.B[4] = (a.B[4] + m) & 4294967295;
  };
  class blackboxedWT {
    /**length of G array, 64 */
    C: number;
    B: number[];
    J: any[];
    M: any[];
    G: number[];
    H: number;
    D: number;
    constructor() {
      this.C = 64;
      this.B = [];
      this.J = [];
      this.M = [];
      this.G = [];
      this.G[0] = 128;
      for (var a = 1; a < this.C; ++a) this.G[a] = 0;
      this.H = this.D = 0;
      this.reset();
    }
    reset() {
      this.B[0] = 1732584193;
      this.B[1] = 4023233417;
      this.B[2] = 2562383102;
      this.B[3] = 271733878;
      this.B[4] = 3285377520;
      this.H = this.D = 0;
    }
    update(a, b) {
      if (null != a) {
        _.Ia(b) || (b = a.length);
        for (var c = b - this.C, d = 0, f = this.J, g = this.D; d < b;) {
          if (0 == g)
            for (; d <= c;) decryptImageProbably(this, a, d), (d += this.C);
          if (_.Ja(a))
            for (; d < b;) {
              if (((f[g] = a.charCodeAt(d)), ++g, ++d, g == this.C)) {
                decryptImageProbably(this, f);
                g = 0;
                break;
              }
            }
          else
            for (; d < b;)
              if (((f[g] = a[d]), ++g, ++d, g == this.C)) {
                decryptImageProbably(this, f);
                g = 0;
                break;
              }
        }
        this.D = g;
        this.H += b;
      }
    }
    F() {
      var a = [],
        b = 8 * this.H;
      56 > this.D
        ? this.update(this.G, 56 - this.D)
        : this.update(this.G, this.C - (this.D - 56));
      for (var c = this.C - 1; 56 <= c; c--) (this.J[c] = b & 255), (b /= 256);
      decryptImageProbably(this, this.J);
      for (c = b = 0; 5 > c; c++)
        for (var d = 24; 0 <= d; d -= 8) (a[b] = (this.B[c] >> d) & 255), ++b;
      return a;
    }
  }
}

inject(downloadImage);

interface dimensions {
  width: number;
  height: number;
}

interface position {
  x: number;
  y: number;
}

interface absolutePosition {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

enum EdgeConstant {
  BOTTOM_LEFT = 'BOTTOM_LEFT',
  BOTTOM_RIGHT = 'BOTTOM_RIGHT',
  TOP_LEFT = 'TOP_LEFT',
  TOP_RIGHT = 'TOP_RIGHT'
}

function downloadImageOriginal() {
  var Wha = [1, 4, 2];
  var FT = function(a) {
    return _.lm
      ? 0 == a.B.button
      : 'click' == a.type
      ? !0
      : !!(a.B.button & Wha[0]);
  };
  var GT = function(a) {
    return Math.sqrt(a.x * a.x + a.y * a.y);
  };
  var getValueFromNodeOrObject = function(node, attributeName, defaultValue) {
    defaultValue = null != defaultValue ? defaultValue : '';
    if (null == node) return defaultValue;
    let value = defaultValue;
    null != node.attributes &&
    null != node.attributes.getNamedItem(attributeName)
      ? (value = node.attributes.getNamedItem(attributeName).value)
      : null != node.D &&
        null != node.D('@' + attributeName) &&
        (value = node.D('@' + attributeName).get());
    return null != value ? value : defaultValue;
  };
  var getNumberFromNodeOrObject = function(node, attributeName) {
    node = getValueFromNodeOrObject(node, attributeName, '');
    node = parseInt(node, 10);
    return isNaN(node) ? 0 : node;
  };
  var edgeConstants = {
    BOTTOM_LEFT: 'BOTTOM_LEFT',
    BOTTOM_RIGHT: 'BOTTOM_RIGHT',
    TOP_LEFT: 'TOP_LEFT',
    TOP_RIGHT: 'TOP_RIGHT'
  };
  var googleImageServers;
  var bU;
  var dU;
  var Yha;
  var fU;
  var Zha;
  var gU;
  var hU;
  class ParsedPyramidLevelElementJT {
    /**pyramid level */
    B: number;
    /**tile width */
    G: any;
    /**tile height */
    F: any;
    /**pyramid level element */
    D: any;
    /**empty pixels y */
    Ak: number;
    /**empty pixels x */
    zk: number;
    /**num tiles y */
    ih: number;
    /**num tiles x */
    hh: number;
    rotation: any;
    H: EdgeConstant;
    C: position;
    constructor(
      pyramidLevel: number,
      pyramidLevelElement,
      tileWidth: number,
      tileHeight: number,
      defaultOrigin: EdgeConstant
    ) {
      this.B = pyramidLevel;
      this.G = tileWidth;
      this.F = tileHeight;
      this.D = pyramidLevelElement;
      this.Ak = this.zk = this.ih = this.hh = 0;
      this.rotation = null;
      this.H = defaultOrigin;
      this.C = new _.mQ(0, 0);
      this.parse();
    }
    V() {
      return this.D;
    }
    initialize(
      numTilesX: number,
      numTilesY: number,
      emptyPixelsX: number,
      emptyPixelsY: number,
      origin: EdgeConstant = undefined
    ) {
      this.hh = numTilesX;
      this.ih = numTilesY;
      this.zk = emptyPixelsX;
      this.Ak = emptyPixelsY;
      const actualOrigin = (this.H = origin || this.H);
      this.C = new _.mQ(
        'TOP_LEFT' == actualOrigin || 'BOTTOM_LEFT' == actualOrigin
          ? 0
          : -this.zk,
        'TOP_LEFT' == actualOrigin || 'TOP_RIGHT' == actualOrigin ? 0 : -this.Ak
      );
    }
    parse() {
      null != this.D &&
        this.initialize(
          getNumberFromNodeOrObject(this.D, 'num_tiles_x'),
          getNumberFromNodeOrObject(this.D, 'num_tiles_y'),
          getNumberFromNodeOrObject(this.D, 'empty_pels_x'),
          getNumberFromNodeOrObject(this.D, 'empty_pels_y')
        );
    }
  }
  var getWidth = function(a: ParsedPyramidLevelElementJT) {
    return a.hh * a.G - a.zk;
  };
  var getHeight = function(a: ParsedPyramidLevelElementJT) {
    return a.ih * a.F - a.Ak;
  };
  class PyramidInformationMT {
    /**
     * special document, loaded from an xml file
     * example https://lh3.ggpht.com/wdA03RmUrDwGyy0gLjlJ5eYc_K-BjLRTxHZOVOuTVanbXcOPoLMZrSWAlH3WLgU=g
     */
    D: Document;
    /**number of pyramid levels */
    C: number;
    /**tile height */
    F: number;
    /**tile width */
    G: number;
    origin: EdgeConstant | string;
    B: ParsedPyramidLevelElementJT[];
    timestamp: number;
    constructor(a) {
      this.D = a;
      this.C = this.F = this.G = 0;
      this.origin = '';
      this.B = [];
      this.timestamp = 0;
      this.parse(!0);
    }
    ra() {
      return this.D;
    }
    parse(a) {
      if (_.Ia(this.D)) {
        if (null === this.D) throw Error('sb');
        var tileInfoNode = this.D.documentElement;
        this.G = getNumberFromNodeOrObject(tileInfoNode, 'tile_width');
        this.F = getNumberFromNodeOrObject(tileInfoNode, 'tile_height');
        this.origin = getValueFromNodeOrObject(
          tileInfoNode,
          'origin',
          'TOP_LEFT'
        );
        if (!(this.origin in edgeConstants)) throw Error('tb`' + this.origin);
        this.timestamp = getNumberFromNodeOrObject(tileInfoNode, 'timestamp');
        var pyramidLevelNodes = tileInfoNode.childNodes;
        var d = 0;
        this.B = [];
        for (var f = 0; f < pyramidLevelNodes.length; ++f)
          // check if node is element node
          _.Po(pyramidLevelNodes[f]) &&
            this.B.push(
              new ParsedPyramidLevelElementJT(
                d++,
                pyramidLevelNodes[f],
                this.G,
                this.F,
                this.origin
              )
            );
        if (
          2 > getNumberFromNodeOrObject(tileInfoNode, 'tiler_version_number') &&
          _.Ia(a) &&
          a &&
          0 < this.B.length
        ) {
          var lastPyramidLevel: ParsedPyramidLevelElementJT;
          var width: number;
          var height: number;
          for (
            lastPyramidLevel = this.B[this.B.length - 1],
              width = getWidth(lastPyramidLevel),
              height = getHeight(lastPyramidLevel),
              f = 0;
            f < pyramidLevelNodes.length;
            ++f
          ) {
            var inverseScale = Math.pow(2, pyramidLevelNodes.length - f - 1);
            var scaledWidth = Math.floor(width / inverseScale);
            var scaledHeight = Math.floor(height / inverseScale);
            var actualInverseWidth = width / scaledWidth;
            var actualInverseHeight = height / scaledHeight;
            // Take the bigger calculated inverse width
            actualInverseWidth > actualInverseHeight
              ? (scaledHeight =
                  getHeight(lastPyramidLevel) / actualInverseWidth)
              : (scaledWidth =
                  getWidth(lastPyramidLevel) / actualInverseHeight);

            // Override values with calculated ones
            this.B[f].hh = Math.ceil(scaledWidth / this.G);
            this.B[f].zk = this.B[f].hh * this.G - scaledWidth;
            this.B[f].ih = Math.ceil(scaledHeight / this.F);
            this.B[f].Ak = this.B[f].ih * this.F - scaledHeight;
          }
        }
        this.C = this.B.length;
      }
    }
  }
  var getPyramidLevelIndex = function(
    pyramidInformation: PyramidInformationMT,
    dimensions: dimensions
  ) {
    if (2 > pyramidInformation.B.length) {
      return 0;
    }
    for (var c = 0, d = 1; d < pyramidInformation.B.length; ++d)
      if (
        getWidth(pyramidInformation.B[d]) > dimensions.width ||
        getHeight(pyramidInformation.B[d]) > dimensions.height
      ) {
        c = d - 1;
        break;
      }
    const upperLevel = pyramidInformation.B[c];
    const lowerLevel = pyramidInformation.B[c + 1];
    const calculatedIndex =
      c +
      Math.min(
        Math.log(dimensions.width / getWidth(upperLevel)) /
          Math.log(getWidth(lowerLevel) / getWidth(upperLevel)),
        Math.log(dimensions.height / getHeight(upperLevel)) /
          Math.log(getHeight(lowerLevel) / getHeight(upperLevel))
      );
    // fit calculated index inside array bounds
    return Math.min(
      Math.max(calculatedIndex, 0),
      pyramidInformation.B.length - 1
    );
  };
  var getPyramidLevelAccordingToDimensionsRatio = function(
    pyramidInformation: PyramidInformationMT,
    dimensions: dimensions
  ) {
    var lowestPyramidLevel =
      pyramidInformation.B[pyramidInformation.B.length - 1];
    const ratioPyramid =
      getWidth(lowestPyramidLevel) / getHeight(lowestPyramidLevel);
    var ratioDim = dimensions.width / dimensions.height;
    return getPyramidLevelIndex(
      pyramidInformation,
      new _.qo(
        ratioPyramid <= ratioDim ? dimensions.width : Number.MAX_VALUE,
        ratioPyramid > ratioDim ? dimensions.height : Number.MAX_VALUE
      )
    );
  };
  var PT = function(a: PyramidInformationMT, b: number) {
    var upperIndex = _.di(Math.ceil(b), 0, a.B.length - 1);
    var lowerIndex = _.di(Math.floor(b), 0, a.B.length - 1);
    const restOfB = b - Math.floor(b);
    return new _.qo(
      getWidth(a.B[lowerIndex]) *
        Math.pow(
          getWidth(a.B[upperIndex]) / getWidth(a.B[lowerIndex]),
          restOfB
        ),
      getHeight(a.B[lowerIndex]) *
        Math.pow(
          getHeight(a.B[upperIndex]) / getHeight(a.B[lowerIndex]),
          restOfB
        )
    );
  };
  var QT = function(
    pyramidLevel: ParsedPyramidLevelElementJT,
    position: position,
    y: number = undefined
  ): position {
    let x;
    position instanceof _.no && ((y = position.y), (x = position.x));
    return new _.no(
      Math.floor(
        (x * getWidth(pyramidLevel) - pyramidLevel.C.x) / pyramidLevel.G
      ),
      Math.floor(
        (y * getHeight(pyramidLevel) - pyramidLevel.C.y) / pyramidLevel.F
      )
    );
  };
  var RT = function(a, b, c) {
    b instanceof _.no && ((c = b.y), (b = b.x));
    return new _.no(
      (b * a.G + a.C.x) / getWidth(a),
      (c * a.F + a.C.y) / getHeight(a)
    );
  };
  class ST {
    B: any;
    constructor(a) {
      this.B = a;
    }
    Kd(a) {
      return 0 < a.C;
    }
    Dq() {
      return false;
    }
    $k() {
      return false;
    }
  }
  class UT {
    C: number;
    B: any;
    G: any[];
    D: any[];
    constructor(a: WT, b: number[], c: number) {
      this.C = -1;
      this.B = a;
      this.C = c || a.C || 16;
      this.G = Array(this.C);
      this.D = Array(this.C);
      a = b;
      a.length > this.C && (this.B.update(a), (a = this.B.F()), this.B.reset());
      for (c = 0; c < this.C; c++)
        (b = c < a.length ? a[c] : 0),
          (this.G[c] = b ^ 92),
          (this.D[c] = b ^ 54);
      this.B.update(this.D);
    }
    reset() {
      this.B.reset();
      this.B.update(this.D);
    }
    update(a, b) {
      this.B.update(a, b);
    }
    F() {
      var a = this.B.F();
      this.B.reset();
      this.B.update(this.G);
      this.B.update(a);
      return this.B.F();
    }
  }
  class TT {
    C: number;
    constructor() {
      this.C = -1;
    }
  }
  _.t(UT, TT);
  var decryptImageProbably = function(a, b, c) {
    c || (c = 0);
    var d = a.M;
    if (_.Ja(b))
      for (var f = 0; 16 > f; f++)
        (d[f] =
          (b.charCodeAt(c) << 24) |
          (b.charCodeAt(c + 1) << 16) |
          (b.charCodeAt(c + 2) << 8) |
          b.charCodeAt(c + 3)),
          (c += 4);
    else
      for (f = 0; 16 > f; f++)
        (d[f] = (b[c] << 24) | (b[c + 1] << 16) | (b[c + 2] << 8) | b[c + 3]),
          (c += 4);
    for (f = 16; 80 > f; f++) {
      var g = d[f - 3] ^ d[f - 8] ^ d[f - 14] ^ d[f - 16];
      d[f] = ((g << 1) | (g >>> 31)) & 4294967295;
    }
    b = a.B[0];
    c = a.B[1];
    var k = a.B[2],
      l = a.B[3],
      m = a.B[4];
    for (f = 0; 80 > f; f++) {
      if (40 > f)
        if (20 > f) {
          g = l ^ (c & (k ^ l));
          var r = 1518500249;
        } else (g = c ^ k ^ l), (r = 1859775393);
      else
        60 > f
          ? ((g = (c & k) | (l & (c | k))), (r = 2400959708))
          : ((g = c ^ k ^ l), (r = 3395469782));
      g = (((b << 5) | (b >>> 27)) + g + m + r + d[f]) & 4294967295;
      m = l;
      l = k;
      k = ((c << 30) | (c >>> 2)) & 4294967295;
      c = b;
      b = g;
    }
    a.B[0] = (a.B[0] + b) & 4294967295;
    a.B[1] = (a.B[1] + c) & 4294967295;
    a.B[2] = (a.B[2] + k) & 4294967295;
    a.B[3] = (a.B[3] + l) & 4294967295;
    a.B[4] = (a.B[4] + m) & 4294967295;
  };
  class WT {
    /**length of G array, 64 */
    C: number;
    B: number[];
    J: any[];
    M: any[];
    G: number[];
    H: number;
    D: number;
    constructor() {
      this.C = 64;
      this.B = [];
      this.J = [];
      this.M = [];
      this.G = [];
      this.G[0] = 128;
      for (var a = 1; a < this.C; ++a) this.G[a] = 0;
      this.H = this.D = 0;
      this.reset();
    }
    reset() {
      this.B[0] = 1732584193;
      this.B[1] = 4023233417;
      this.B[2] = 2562383102;
      this.B[3] = 271733878;
      this.B[4] = 3285377520;
      this.H = this.D = 0;
    }
    update(a, b) {
      if (null != a) {
        _.Ia(b) || (b = a.length);
        for (var c = b - this.C, d = 0, f = this.J, g = this.D; d < b; ) {
          if (0 == g)
            for (; d <= c; ) decryptImageProbably(this, a, d), (d += this.C);
          if (_.Ja(a))
            for (; d < b; ) {
              if (((f[g] = a.charCodeAt(d)), ++g, ++d, g == this.C)) {
                decryptImageProbably(this, f);
                g = 0;
                break;
              }
            }
          else
            for (; d < b; )
              if (((f[g] = a[d]), ++g, ++d, g == this.C)) {
                decryptImageProbably(this, f);
                g = 0;
                break;
              }
        }
        this.D = g;
        this.H += b;
      }
    }
    F() {
      var a = [],
        b = 8 * this.H;
      56 > this.D
        ? this.update(this.G, 56 - this.D)
        : this.update(this.G, this.C - (this.D - 56));
      for (var c = this.C - 1; 56 <= c; c--) (this.J[c] = b & 255), (b /= 256);
      decryptImageProbably(this, this.J);
      for (c = b = 0; 5 > c; c++)
        for (var d = 24; 0 <= d; d -= 8) (a[b] = (this.B[c] >> d) & 255), ++b;
      return a;
    }
  }
  _.t(WT, TT);
  googleImageServers = [
    'http://lh3.ggpht.com',
    'http://lh4.ggpht.com',
    'http://lh5.ggpht.com',
    'http://lh6.ggpht.com'
  ];
  _.ZT = function(imageURL: string, specialString: string) {
    this.B = imageURL;
    this.D = specialString || 'nt0';
    this.C = {};
  };
  _.t(_.ZT, ST);
  /**gets the function */
  _.ZT.prototype.Mr = function() {
    return this.B + '=g';
  };
  _.ZT.prototype.Lk = function(a) {
    return new PyramidInformationMT(a);
  };
  _.ZT.prototype.gj = function(
    x: number,
    y: number,
    z: number,
    timestamp: number,
    f: Window
  ) {
    var key = x + '-' + y + '-' + z;
    key in this.C ||
      ((f =
        new _.Ll(this.B).B.substr(1) +
        '=' +
        ('x' + x + '-y' + y + '-z' + z) +
        '-' +
        this.D +
        this.F(timestamp, f)),
      (timestamp = new UT(new WT(), [123, 43, 78, 35, 222, 44, 197, 197], 64)),
      (f = _.Nb(f)),
      timestamp.reset(),
      timestamp.update(f),
      (timestamp = timestamp.F()),
      (timestamp = _.Wd(timestamp)),
      (timestamp = timestamp.substring(0, timestamp.length - 1)),
      (timestamp = timestamp.replace(/\+/g, '_').replace(/\//g, '_')),
      (f = this.B),
      0 == f.indexOf('http://lh3.ggpht.com') &&
        (f = f.replace(
          'http://lh3.ggpht.com',
          googleImageServers[(x + y + 1) % googleImageServers.length]
        )),
      (this.C[key] =
        f + '=' + ('x' + x + '-y' + y + '-z' + z) + '-' + this.D + timestamp));
    return this.C[key];
  };
  _.ZT.prototype.F = function(a, b) {
    return (
      Math.floor(a / 86400) +
      '-d' +
      b.location.hostname
        .split('.')
        .slice(-3)
        .join('.')
    );
  };
  /** _.$T is a "subclass" of _.ZT, which is always called with T as second parameter */
  _.$T = function(a, b: string) {
    _.ZT.call(this, a, 't');
    this.G = b;
  };
  _.t(_.$T, _.ZT);
  _.$T.prototype.F = function() {
    return this.G;
  };
  class aU {
    B: string;
    url: any;
    constructor(a) {
      this.B = '';
      this.url = a;
    }
  }
  _.t(aU, ST);
  _.e = aU.prototype;
  _.e.Mr = function() {
    return this.url.Mr();
  };
  _.e.Lk = function(a) {
    return this.url.Lk(a);
  };
  _.e.gj = function(a, b, c, d, f) {
    return this.url.gj(a, b, c, d, f);
  };
  _.e.Kd = function(a) {
    return this.url.Kd(a);
  };
  _.e.Dq = function(a) {
    return this.url.Dq(a);
  };
  _.e.$k = function(a) {
    return this.url.$k(a);
  };
  bU = function(a, b) {
    if (b && b.B && b.B.length) {
      var c = b.B[0],
        d = b.B[b.B.length - 1],
        f = Math.max(getWidth(d), getHeight(d));
      a.C = 0;
      for (var g = 2; g <= f; g *= 2) {
        var k = getWidth(c) / (getWidth(d) / g),
          l = getHeight(c) / (getHeight(d) / g);
        if (!(1 >= k && 1 >= l)) {
          var m = new ParsedPyramidLevelElementJT(
            0,
            null,
            c.G / k,
            c.F / l,
            b.origin
          );
          m.initialize(1, 1, c.zk / k, c.Ak / l);
          b.B.unshift(m);
          a.C += 1;
        }
      }
      for (a = 0; a < b.B.length; ++a) b.B[a].B = a;
      b.C = b.B.length;
    }
  };
  _.cU = function(a) {
    aU.call(this, a);
    this.C = 0;
  };
  _.t(_.cU, aU);
  _.cU.prototype.$k = function(a) {
    return this.url.$k(
      (0, _.q)(function(b) {
        bU(this, b);
        a && a(b);
      }, this)
    );
  };
  _.cU.prototype.Lk = function(a) {
    a = this.url.Lk(a);
    bU(this, a);
    return a;
  };
  _.cU.prototype.gj = function(a, b, c, d, f) {
    return this.url.gj(a, b, Math.max(0, c - this.C), d, f);
  };
  dU = function() {
    return _.Ia(_.Ha.URL) && _.Ia(_.Ha.URL.createObjectURL)
      ? _.Ha.URL
      : _.Ia(_.Ha.webkitURL) && _.Ia(_.Ha.webkitURL.createObjectURL)
      ? _.Ha.webkitURL
      : _.Ia(_.Ha.createObjectURL)
      ? _.Ha
      : null;
  };
  _.eU = function(a) {
    if (_.Hn.test(a.type)) {
      var b = dU();
      if (null == b) throw Error('w');
      a = b.createObjectURL(a);
    } else a = 'about:invalid#zClosurez';
    return _.Jn(a);
  };
  Yha = function(a) {
    for (
      var b = new _.Pp(
          arguments[0].y,
          arguments[0].x,
          arguments[0].y,
          arguments[0].x
        ),
        c = 1;
      c < arguments.length;
      c++
    ) {
      var d = b,
        f = arguments[c];
      d.top = Math.min(d.top, f.y);
      d.right = Math.max(d.right, f.x);
      d.bottom = Math.max(d.bottom, f.y);
      d.left = Math.min(d.left, f.x);
    }
    return b;
  };
  fU = function(a) {
    if (
      (48 <= a && 57 >= a) ||
      (96 <= a && 106 >= a) ||
      (65 <= a && 90 >= a) ||
      ((_.fd || _.cd) && 0 == a)
    )
      return !0;
    switch (a) {
      case 32:
      case 43:
      case 63:
      case 64:
      case 107:
      case 109:
      case 110:
      case 111:
      case 186:
      case 59:
      case 189:
      case 187:
      case 61:
      case 188:
      case 190:
      case 191:
      case 192:
      case 222:
      case 219:
      case 220:
      case 221:
      case 163:
        return !0;
      default:
        return !1;
    }
  };
  Zha = function(a) {
    switch (a) {
      case 61:
        return 187;
      case 59:
        return 186;
      case 173:
        return 189;
      case 224:
        return 91;
      case 0:
        return 224;
      default:
        return a;
    }
  };
  gU = function(a) {
    if (_.ed) a = Zha(a);
    else if (_.ld && _.fd)
      switch (a) {
        case 93:
          a = 91;
      }
    return a;
  };
  hU = function(a, b, c, d, f, g) {
    if (_.fd && !_.Bd('525')) return !0;
    if (_.ld && f) return fU(a);
    if (f && !d) return !1;
    if (!_.ed) {
      _.Ka(b) && (b = gU(b));
      var k = 17 == b || 18 == b || (_.ld && 91 == b);
      if (((!c || _.ld) && k) || (_.ld && 16 == b && (d || g))) return !1;
    }
    if ((_.fd || _.cd) && d && c)
      switch (a) {
        case 220:
        case 219:
        case 221:
        case 192:
        case 186:
        case 189:
        case 187:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
          return !1;
      }
    if (_.bd && d && b == a) return !1;
    switch (a) {
      case 13:
        return _.ed ? (g || f ? !1 : !(c && d)) : !0;
      case 27:
        return !(_.fd || _.cd || _.ed);
    }
    return _.ed && (d || f || g) ? !1 : fU(a);
  };
  _.G('sy5k');
  _.eb('MicroscopeMaximizeMode', {
    wU: 'fit',
    VC: 'fill'
  });
  _.iU = function(a, b) {
    var c = a.B[a.B.length - 1];
    this.size = this.size = new _.qo(getWidth(c), getHeight(c));
    this.maxZoomLevel = this.C = a.C - 1;
    this.minZoomLevel = this.B = b;
  };
  _.eb('MicroscopeImageMetadata', _.iU);
  _.eb('MicroscopeBackgroundStyle', {
    PV: 'transparent',
    XT: 'checkered'
  });
  var jU = function(a) {
      var b = a;
      'function' == typeof a.V && (b = b.V());
      if (null == b) throw Error('wb');
      return b;
    },
    kU = function(a) {
      var b = a.B,
        c = null;
      b.targetTouches && 0 < b.targetTouches.length
        ? (c = b.targetTouches)
        : b.changedTouches &&
          0 < b.changedTouches.length &&
          (c = b.changedTouches);
      return c
        ? ((a = _.Jr(a.target)), new _.no(c[0].pageX - a.x, c[0].pageY - a.y))
        : new _.no(a.F, a.G);
    };
  class lU {
    position: any;
    constructor(a) {
      _.rm.call(this, 'drag_end');
      this.position = a;
    }
  }
  _.t(lU, _.rm);
  class mU {
    position: any;
    constructor(a) {
      _.rm.call(this, 'drag_hover');
      this.position = a;
    }
  }
  _.t(mU, _.rm);
  class nU {
    position: any;
    F: any;
    constructor(a, b) {
      _.rm.call(this, 'drag_move');
      this.position = a;
      this.F = b;
    }
  }
  _.t(nU, _.rm);
  class oU {
    position: any;
    constructor(a) {
      _.rm.call(this, 'drag_start');
      this.position = a;
    }
  }
  _.t(oU, _.rm);
  class pU {
    element: any;
    C: boolean;
    H: number;
    G: number;
    O: number;
    M: number;
    D: any;
    F: boolean;
    B: any;
    W: any;
    constructor(a, b) {
      _.en.call(this);
      this.element = jU(a);
      this.C = !1;
      this.H = this.G = this.O = this.M = 0;
      this.D = new _.Ks(this);
      _.ni(this, this.D);
      this.F = !1;
      this.B = null;
      this.W = !_.Ia(b) || b;
      _.Ms(this.D, this.element, ['mousedown', 'touchstart'], this.Y, void 0);
      _.Ms(this.D, this.element, ['mouseup', 'touchend'], this.J, void 0);
      _.Ms(this.D, this.element, ['mousemove', 'touchmove'], this.U, void 0);
      _.Ms(this.D, document, ['mouseup', 'touchend'], this.J, void 0);
    }
    Y(a) {
      'touchstart' != a.type && a.preventDefault();
      if (qU(a))
        if (a.button && !FT(a)) this.C && this.J(a);
        else {
          this.C = !0;
          var b = kU(a);
          this.M = b.x;
          this.O = b.y;
          this.G = b.x;
          this.H = b.y;
          this.Ga(new oU(kU(a)));
        }
    }
    Ga(arg0: oU): any {
      throw new Error('Method not implemented.');
    }
    J(a) {
      a.C != document && 'touchend' != a.type && a.preventDefault();
      this.C && ((this.C = !1), (this.B = null), this.Ga(new lU(kU(a))));
    }
    U(a) {
      a.preventDefault();
      this.B = a;
      this.F ||
        (this.Ga(new mU(kU(a))),
        qU(a) &&
          this.C &&
          ((this.F = !0),
          this.W ? setTimeout((0, _.q)(this.T, this), 1) : this.T()));
    }
    T() {
      this.F = !1;
      if (this.C && this.B) {
        var a = kU(this.B),
          b = new _.mQ(a.x - this.G, a.y - this.H),
          c = new _.mQ(a.x - this.M, a.y - this.O);
        this.Ga(new nU(kU(this.B), b, c));
        this.B = null;
        this.G = a.x;
        this.H = a.y;
      }
    }
  }
  _.t(pU, _.en);
  var qU = function(a) {
    a = a.B.targetTouches;
    return null != a && 1 < a.length ? !1 : !0;
  };
  class rU {
    B: any;
    C: {};
    G: number;
    D: any;
    F: any;
    constructor() {
      _.en.call(this);
      this.B = new _.mQ(0, 0);
      this.C = {};
      this.C[40] = !1;
      this.C[37] = !1;
      this.C[39] = !1;
      this.C[38] = !1;
      this.G = 0;
      this.D = new _.ws((1 / 60) * 1e3);
      _.ni(this, this.D);
      this.F = new _.Ks(this);
      _.ni(this, this.F);
      _.Ms(this.F, this.D, 'tick', this.H, void 0);
    }
    stop() {
      this.C[40] = !1;
      this.C[37] = !1;
      this.C[39] = !1;
      this.C[38] = !1;
      this.D.stop();
      this.B = new _.mQ(0, 0);
    }
    H() {
      var a;
      if (!(a = 0 != GT(this.B)))
        a: {
          for (var b in this.C)
            if (this.C[Number(b)]) {
              a = !0;
              break a;
            }
          a = !1;
        }
      if (a) {
        b = new _.mQ(
          (this.C[37] ? 1 : 0) - (this.C[39] ? 1 : 0),
          (this.C[38] ? 1 : 0) - (this.C[40] ? 1 : 0)
        );
        0 < GT(b) && b.scale(1 / GT(b));
        var c = (0, _.bb)();
        a = (c - this.G) / 1e3;
        this.G = c;
        _.fi(b.x) != _.fi(this.B.x) && (this.B.x = 0);
        0 != b.x && (this.B.x += (b.x / 0.2) * a);
        _.fi(b.y) != _.fi(this.B.y) && (this.B.y = 0);
        0 != b.y && (this.B.y += (b.y / 0.2) * a);
        this.B.x = _.di(this.B.x, -1, 1);
        this.B.y = _.di(this.B.y, -1, 1);
        c = this.B.clone();
        1 < GT(c) && c.scale(1 / GT(c));
        b = new _.no(0, 0);
        a = new _.mQ(a * c.x * 1500, a * c.y * 1500);
        this.Ga(new oU(b));
        this.Ga(new nU(b, a, a));
        this.Ga(new lU(a));
      } else this.D.stop();
    }
    Ga(arg0: oU): any {
      throw new Error('Method not implemented.');
    }
  }
  _.t(rU, _.en);
  class sU {
    F: any;
    G: any;
    H: any;
    constructor(a, b, c) {
      _.rm.call(this, 'zoom');
      this.F = a;
      this.G = _.Ia(c) ? c : null;
      this.H = _.Ia(b) ? b : null;
    }
  }
  _.t(sU, _.rm);
  class tU {
    D: any;
    H: number;
    B: number;
    C: any;
    F: any;
    constructor(a, b) {
      _.en.call(this);
      a = jU(a);
      if (null == a) throw Error('xb');
      this.D = a;
      this.H =
        1 / (0.25 * (b || Math.max(window.innerWidth, window.innerHeight)));
      this.B = 0;
      this.C = new _.mQ(0, 0);
      this.F = new _.Ks(this);
      _.ni(this, this.F);
      _.om && _.Ms(this.F, this.D, ['touchstart', 'touchmove'], this.G, void 0);
    }
    G(a) {
      var b = a.B.touches;
      if (2 == b.length) {
        var c = b[0],
          d = b[1];
        var f = c.clientX - d.clientX;
        c = c.clientY - d.clientY;
        f = Math.sqrt(f * f + c * c);
        'touchstart' == a.type
          ? ((a = b[0]),
            (b = b[1]),
            (c = _.Jr(this.D)),
            (this.C.x = (a.pageX + b.pageX) / 2 - c.x),
            (this.C.y = (a.pageY + b.pageY) / 2 - c.y),
            (this.B = f))
          : 'touchmove' == a.type &&
            ((b = (f - this.B) * this.H),
            (this.B = f),
            this.Ga(new sU(b, 4, this.C)));
      }
    }
    Ga(arg0: sU): any {
      throw new Error('Method not implemented.');
    }
  }
  _.t(tU, _.en);
  class uU {
    be: any;
    constructor(a) {
      _.rm.call(this, 'throw');
      this.be = a;
    }
  }
  _.t(uU, _.rm);
  class vU {
    F: any;
    G: number;
    C: number;
    D: any;
    B: any;
    constructor(a) {
      _.en.call(this);
      this.F = new _.Ks(this);
      _.ni(this, this.F);
      _.Ms(this.F, a, 'drag_start', this.M, void 0);
      _.Ms(this.F, a, 'drag_end', this.H, void 0);
      _.Ms(this.F, a, 'drag_move', this.J, void 0);
      this.G = this.C = 0;
      this.D = new _.mQ(0, 0);
      this.B = new _.mQ(0, 0);
    }
    M(a) {
      this.C = (0, _.bb)();
      this.D = new _.mQ(a.position.x, a.position.y);
      300 < this.C - this.G && this.Ga(new uU(null));
      this.G = this.C;
    }
    Ga(arg0: uU): any {
      throw new Error('Method not implemented.');
    }
    H() {
      if (200 > (0, _.bb)() - this.C) {
        this.B.scale(0.2);
        var a = GT(this.B);
        1e3 < a && this.B.scale(1e3 / a);
        10 <= GT(this.B) && this.Ga(new uU(this.B));
      }
      this.C = 0;
      this.D = new _.mQ(0, 0);
      this.B = new _.mQ(0, 0);
    }
    J(a) {
      var b = (0, _.bb)(),
        c = b - this.C;
      if (!(50 > c)) {
        this.G = 0;
        this.B.x = a.position.x;
        this.B.y = a.position.y;
        var d = this.B,
          f = this.D;
        d.x -= f.x;
        d.y -= f.y;
        this.B.scale(1e3 / c);
        this.C = b;
        this.D.x = a.position.x;
        this.D.y = a.position.y;
      }
    }
  }
  _.t(vU, _.en);
  class wU {
    position: any;
    constructor(a) {
      _.rm.call(this, 'double_tap');
      this.position = a;
    }
  }
  _.t(wU, _.rm);
  class xU {
    C: any;
    F: number;
    B: boolean;
    D: any;
    constructor(a) {
      _.en.call(this);
      this.C = jU(a);
      this.F = 0;
      this.B = !1;
      this.D = new _.Ks(this);
      _.ni(this, this.D);
      _.om &&
        _.Ms(
          this.D,
          this.C,
          ['touchstart', 'touchmove', 'touchend'],
          this.G,
          void 0
        );
    }
    G(a) {
      if (1 == a.B.changedTouches.length && this.C.offsetParent) {
        var b = a.B.changedTouches[0];
        'touchend' == a.type
          ? ((a = _.Jr(this.C)),
            (b = new _.no(b.pageX - a.x, b.pageY - a.y)),
            (a = (0, _.bb)()),
            300 >= a - this.F && this.B && this.Ga(new wU(b)),
            this.B && ((this.F = a), (this.B = !1)))
          : 'touchstart' == a.type
          ? (this.B = !0)
          : 'touchmove' == a.type && (this.B = !1);
      }
    }
    Ga(arg0: wU): any {
      throw new Error('Method not implemented.');
    }
  }
  _.t(xU, _.en);
  class zU {
    Qn: void;
    kj: any;
    Pn: any;
    zs: any;
    Wd: number;
    uf: number;
    gq: any;
    static Ba: any;
    constructor(a, b) {
      _.en.call(this);
      a &&
        (this.Qn && yU(this),
        (this.kj = a),
        (this.Pn = _.Pm(this.kj, 'keypress', this, b)),
        (this.zs = _.Pm(this.kj, 'keydown', this.B, b, this)),
        (this.Qn = _.Pm(this.kj, 'keyup', this.C, b, this)));
    }
    B(a) {
      if (_.fd || _.cd)
        if (
          (17 == this.Wd && !a.ctrlKey) ||
          (18 == this.Wd && !a.altKey) ||
          (_.ld && 91 == this.Wd && !a.metaKey)
        )
          this.uf = this.Wd = -1;
      -1 == this.Wd &&
        (a.ctrlKey && 17 != a.keyCode
          ? (this.Wd = 17)
          : a.altKey && 18 != a.keyCode
          ? (this.Wd = 18)
          : a.metaKey && 91 != a.keyCode && (this.Wd = 91));
      CU && !hU(a.keyCode, this.Wd, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey)
        ? this.handleEvent(a)
        : ((this.uf = gU(a.keyCode)), DU && (this.gq = a.altKey));
    }
    C(a) {
      this.uf = this.Wd = -1;
      this.gq = a.altKey;
    }
    handleEvent(a) {
      var b = a.B,
        c = b.altKey;
      if (_.bd && 'keypress' == a.type) {
        var d = this.uf;
        var f = 13 != d && 27 != d ? b.keyCode : 0;
      } else
        (_.fd || _.cd) && 'keypress' == a.type
          ? ((d = this.uf),
            (f =
              0 <= b.charCode && 63232 > b.charCode && fU(d) ? b.charCode : 0))
          : _.ad && !_.fd
          ? ((d = this.uf), (f = fU(d) ? b.keyCode : 0))
          : ('keypress' == a.type
              ? (DU && (c = this.gq),
                b.keyCode == b.charCode
                  ? 32 > b.keyCode
                    ? ((d = b.keyCode), (f = 0))
                    : ((d = this.uf), (f = b.charCode))
                  : ((d = b.keyCode || this.uf), (f = b.charCode || 0)))
              : ((d = b.keyCode || this.uf), (f = b.charCode || 0)),
            _.ld && 63 == f && 224 == d && (d = 191));
      var g = (d = gU(d));
      d
        ? 63232 <= d && d in AU
          ? (g = AU[d])
          : 25 == d && a.shiftKey && (g = 9)
        : b.keyIdentifier && b.keyIdentifier in BU && (g = BU[b.keyIdentifier]);
      (_.ed &&
        CU &&
        'keypress' == a.type &&
        !hU(g, this.Wd, a.shiftKey, a.ctrlKey, c, a.metaKey)) ||
        ((a = g == this.Wd),
        (this.Wd = g),
        (b = new EU(g, f, a, b)),
        (b.altKey = c),
        this.Ga(b));
    }
    Ga(b: any): boolean {
      throw new Error('Method not implemented.');
    }
    V() {
      return this.kj;
    }
    Ia() {
      zU.Ba.Ia.call(this);
      yU(this);
    }
  }
  _.t(zU, _.en);
  _.e = zU.prototype;
  _.e.kj = null;
  _.e.Pn = null;
  _.e.zs = null;
  _.e.Qn = null;
  _.e.Wd = -1;
  _.e.uf = -1;
  _.e.gq = !1;
  var AU = {
      3: 13,
      12: 144,
      63232: 38,
      63233: 40,
      63234: 37,
      63235: 39,
      63236: 112,
      63237: 113,
      63238: 114,
      63239: 115,
      63240: 116,
      63241: 117,
      63242: 118,
      63243: 119,
      63244: 120,
      63245: 121,
      63246: 122,
      63247: 123,
      63248: 44,
      63272: 46,
      63273: 36,
      63275: 35,
      63276: 33,
      63277: 34,
      63289: 144,
      63302: 45
    },
    BU = {
      Up: 38,
      Down: 40,
      Left: 37,
      Right: 39,
      Enter: 13,
      F1: 112,
      F2: 113,
      F3: 114,
      F4: 115,
      F5: 116,
      F6: 117,
      F7: 118,
      F8: 119,
      F9: 120,
      F10: 121,
      F11: 122,
      F12: 123,
      'U+007F': 46,
      Home: 36,
      End: 35,
      PageUp: 33,
      PageDown: 34,
      Insert: 45
    },
    CU = !_.fd || _.Bd('525'),
    DU = _.ld && _.ed;
  var yU = function(a) {
    a.Pn &&
      (_.Xm(a.Pn),
      _.Xm(a.zs),
      _.Xm(a.Qn),
      (a.Pn = null),
      (a.zs = null),
      (a.Qn = null));
    a.kj = null;
    a.Wd = -1;
    a.uf = -1;
  };
  class EU {
    type: string;
    keyCode: any;
    H: any;
    repeat: any;
    constructor(a, b, c, d) {
      _.tm.call(this, d);
      this.type = 'key';
      this.keyCode = a;
      this.H = b;
      this.repeat = c;
    }
  }
  _.t(EU, _.tm);
  class FU {
    B: any;
    G: any;
    C: any;
    static Ba: any;
    constructor(a, b) {
      _.en.call(this);
      this.B = a;
      a = _.Po(this.B) ? this.B : this.B ? this.B.body : null;
      this.G = !!a && _.qM(a);
      this.C = _.Pm(this.B, _.ed ? 'DOMMouseScroll' : 'mousewheel', this, b);
    }
    handleEvent(a) {
      var b = 0,
        c = 0,
        d = a.B;
      'mousewheel' == d.type
        ? ((a = GU(-d.wheelDelta)),
          _.Ia(d.wheelDeltaX)
            ? ((b = GU(-d.wheelDeltaX)), (c = GU(-d.wheelDeltaY)))
            : (c = a))
        : ((a = d.detail),
          100 < a ? (a = 3) : -100 > a && (a = -3),
          _.Ia(d.axis) && d.axis === d.HORIZONTAL_AXIS ? (b = a) : (c = a));
      _.Ka(this.D) && (b = _.di(b, -this.D, this.D));
      _.Ka(this.F) && (c = _.di(c, -this.F, this.F));
      this.G && (b = -b);
      b = new HU(a, d, b, c);
      this.Ga(b);
    }
    D(D: any): any {
      throw new Error('Method not implemented.');
    }
    F(F: any): any {
      throw new Error('Method not implemented.');
    }
    Ga(b: number): any {
      throw new Error('Method not implemented.');
    }
    Ia() {
      FU.Ba.Ia.call(this);
      _.Xm(this.C);
      this.C = null;
    }
  }
  _.t(FU, _.en);
  var GU = function(a) {
    return _.fd && (_.ld || _.nd) && 0 != a % 40 ? a : a / 40;
  };
  class HU {
    type: string;
    detail: any;
    deltaX: any;
    deltaY: any;
    constructor(a, b, c, d) {
      _.tm.call(this, b);
      this.type = 'mousewheel';
      this.detail = a;
      this.deltaX = c;
      this.deltaY = d;
    }
  }
  _.t(HU, _.tm);
  class IU {
    B: any;
    C: any;
    H: FU;
    F: xU;
    D: zU;
    M: boolean;
    G: number;
    constructor(a) {
      _.en.call(this);
      this.B = new _.Ks(this);
      _.ni(this, this.B);
      this.C = jU(a);
      this.H = new FU(this.C);
      _.ni(this, this.H);
      this.F = new xU(this.C);
      _.ni(this, this.F);
      this.D = new zU();
      _.ni(this, this.D);
      this.M = !0;
      this.G = 0;
      _.Ms(this.B, this.F, 'double_tap', this.O, void 0);
      _.Ms(this.B, this.C, 'dblclick', this.J, void 0);
      _.Ms(this.B, this.H, 'mousewheel', this.U, void 0);
      _.Ms(this.B, this.D, 'key', this.T, void 0);
    }
    O(a) {
      this.J({
        F: a.position.x,
        G: a.position.y
      });
    }
    J(a) {
      this.Ga(new sU(1, 2, new _.mQ(a.F, a.G)));
    }
    Ga(arg0: sU): any {
      throw new Error('Method not implemented.');
    }
    U(a) {
      if (this.M) {
        var b = (0, _.bb)();
        Math.abs(a.deltaY) >= Math.abs(a.deltaX) &&
          100 <= b - this.G &&
          (a.preventDefault(),
          this.Ga(new sU(0.5 * -_.fi(a.deltaY), 1, new _.mQ(a.F, a.G))),
          (this.G = b));
      }
    }
    T(a) {
      switch (a.H) {
        case 43:
        case 61:
          this.Ga(new sU(1, 3, void 0));
          break;
        case 45:
        case 95:
          this.Ga(new sU(-1, 3, void 0));
      }
    }
  }
  _.t(IU, _.en);
  class JU {
    B: any;
    static Ba: any;
    constructor(a, b, c) {
      _.en.call(this);
      for (var d = 0; d < b.length; ++d) b[d].Xj(this);
      for (d = 0; d < a.length; ++d) a[d].Xj(this), _.ni(this, a[d]);
      this.B = c;
    }
    le(a, b, c, d) {
      return JU.Ba.le.call(this, a, b, !0, d);
    }
  }
  _.t(JU, _.en);
  class KU {
    B: any;
    J: boolean;
    H: boolean;
    G: boolean;
    F: boolean;
    D: boolean;
    C: any[];
    constructor(a) {
      this.B = jU(a);
      this.J = this.H = this.G = this.F = this.D = !1;
      this.C = [];
    }
    add(a) {
      this.C.push(a);
      return this;
    }
  }
  class LU {
    size: any;
    constructor(a) {
      _.rm.call(this, 'resize');
      this.size = a;
    }
  }
  _.t(LU, _.rm);
  class NU {
    F: any;
    B: any;
    C: any;
    constructor(a, b) {
      _.en.call(this);
      this.F = jU(a);
      this.B = MU(this);
      this.C = new _.Ks(this);
      _.ni(this, this.C);
      (_.Ia(b) && !b) || _.Ms(this.C, window, 'resize', this.D, void 0);
    }
    trigger() {
      this.D(null);
    }
    D() {
      var a = MU(this);
      (_.ro(this.B, a) && 0 != a.width && 0 != a.height) ||
        ((this.B = a), this.Ga(new LU(a)));
    }
    Ga(arg0: LU): boolean {
      throw new Error('Method not implemented.');
    }
  }
  _.t(NU, _.en);
  var MU = function(a) {
    var b = a.F;
    if ('none' != _.Br(b, 'display'))
      var c = new _.qo(b.clientWidth, b.clientHeight);
    else {
      c = b.style;
      var d = c.display,
        f = c.visibility,
        g = c.position;
      c.visibility = 'hidden';
      c.position = 'absolute';
      c.display = 'inline';
      b = new _.qo(b.clientWidth, b.clientHeight);
      c.display = d;
      c.position = g;
      c.visibility = f;
      c = b;
    }
    return 0 == c.width || 0 == c.height ? a.B || new _.qo(0, 0) : c.clone();
  };
  _.eb('MicroscopeResizeMode', {
    VC: 'fill',
    FIXED: 'fixed',
    oV: 'scale'
  });
  var $ha, OU, QU;
  $ha = function(a) {
    this.B = null;
    this.D = a;
    this.C = _.Zh;
  };
  OU = function(a) {
    a = a.C(a.D.B);
    return new _.qo(a.width, a.height);
  };
  _.PU = function(a) {
    return getPyramidLevelIndex(a.B, OU(a));
  };
  QU = function(a, b, c) {
    var d = Math.max(0, (1 - c) / 2, 0);
    c = 0.5 - d;
    d = 0.5 + d;
    return b > a && a < c
      ? Math.min(b, c)
      : b < a && a > d
      ? Math.max(b, d)
      : a;
  };
  class RU {
    F: any;
    animate: any;
    G: any;
    constructor(a, b, c) {
      _.rm.call(this, 'level_change');
      this.F = a;
      this.animate = b;
      this.G = _.Ia(c) ? c : null;
    }
  }
  _.t(RU, _.rm);
  class SU {
    left: any;
    top: any;
    right: any;
    bottom: any;
    F: any;
    constructor(a, b, c, d, f) {
      _.rm.call(this, 'viewport_update');
      this.left = a;
      this.top = b;
      this.right = c;
      this.bottom = d;
      this.F = f;
    }
  }
  _.t(SU, _.rm);
  _.eb('MicroscopeZoomWidgetMode', {
    TV: 0,
    dV: 1,
    yV: 2,
    WC: 3,
    UV: 4
  });
  class TU {
    constructor() {
      _.ki.call(this);
    }
    cancel() {
      return !1;
    }
  }
  _.t(TU, _.ki);
  class UU {
    F: any;
    G: any;
    B: number;
    C: any;
    gb: {};
    D: any;
    static Ba: any;
    constructor(a, b) {
      _.ki.call(this);
      this.F = a;
      this.G = b;
      this.B = 0;
      this.C = new _.Vs();
      this.gb = {};
      this.D = new _.Ks(this);
      _.ni(this, this.D);
    }
    load(a, b, c) {
      var d = null;
      a in this.gb
        ? ((d = this.gb[a]), (d.B += 1), 1 == d.B && this.C.remove(d))
        : ((d = XU(this, a, void 0, b)), VU(this, !1));
      _.Ia(c) &&
        (d.Jd()
          ? c(d)
          : _.Ns(this.D, d, 'resource_loaded', function(a) {
              c(a.aR);
            }));
      return d;
    }
    Ia() {
      WU(this);
      UU.Ba.Ia.call(this);
    }
  }
  _.t(UU, _.ki);
  var WU = function(a: UU) {
    _.Rs(a.D);
    VU(a, !0);
    for (var b in a.gb) a.gb[b].Ta();
    a.gb = {};
    a.B = 0;
    a.C = new _.Vs();
  };
  var XU = function(a, b, c, d) {
    var f = a.gb[b];
    if (a.Jd(b) && f) return (f.B += 1), f;
    d = _.Ia(d) ? d : 1;
    f = new YU(b, d, (0, _.q)(a.PQ, a));
    a.gb[b] = f;
    a.B += d;
    _.Ia(c) ? a.Ww(b, c) : a.F.load(b, (0, _.q)(a.Ww, a));
    f.B += 1;
    return f;
  };
  _.e = UU.prototype;
  _.e.Ww = function(a, b) {
    a in this.gb && ((a = this.gb[a]), (a.data = b), a.Ga(new ZU(a)));
  };
  _.e.Jd = function(a) {
    return a in this.gb && this.gb[a].Jd();
  };
  _.e.lz = function(a) {
    return a in this.gb && !this.gb[a].Jd();
  };
  _.e.clear = function() {
    VU(this, !0);
  };
  _.e.PQ = function(a) {
    this.C.B.push(a);
    VU(this, !1);
  };
  var VU = function(a: UU, b: boolean) {
    for (; (b || a.B > a.G) && !a.C.isEmpty(); ) {
      var c = _.Xs(a.C);
      delete a.gb[c.key];
      c.Jd() || a.F.cancel(c.key);
      a.B -= c.UE;
      c.Ta();
    }
  };
  class YU {
    key: any;
    UE: any;
    data: any;
    B: number;
    C: any;
    constructor(a, b, c) {
      _.en.call(this);
      this.key = a;
      this.UE = b;
      this.data = null;
      this.B = 0;
      this.C = c;
    }
    release() {
      --this.B;
      0 == this.B && this.C(this);
    }
    Jd() {
      return null != this.data;
    }
  }
  _.t(YU, _.en);
  class ZU {
    aR: any;
    constructor(a) {
      _.rm.call(this, 'resource_loaded');
      this.aR = a;
    }
  }
  _.t(ZU, _.rm);
  class $U {
    position: any;
    constructor(a) {
      _.rm.call(this, 'view_move');
      this.position = a;
    }
  }
  _.t($U, _.rm);
  class aV {
    C: any;
    re: any;
    Oh: boolean;
    D: any;
    M: any;
    La: any;
    jb: any;
    la: any;
    Pc: any;
    Ef: any;
    static Ba: any;
    constructor(a) {
      _.en.call(this);
      this.C = a || _.uo();
      this.re = null;
      this.Oh = !1;
      this.D = null;
      this.M = void 0;
      this.La = this.jb = this.la = this.Pc = null;
    }
    getId() {
      return this.re || (this.re = ':' + (this.Ef.B++).toString(36));
    }
    V() {
      return this.D;
    }
    Xj(a) {
      if (this.la && this.la != a) throw Error('zb');
      aV.Ba.Xj.call(this, a);
    }
    wb() {
      this.D = this.C.createElement('DIV');
    }
    render(a) {
      if (this.Oh) throw Error('Ab');
      this.D || this.wb();
      a ? a.insertBefore(this.D, null) : this.C.ra().body.appendChild(this.D);
      (this.la && !this.la.Oh) || cV(this);
    }
    Ia() {
      this.Oh && eV(this);
      this.M && (this.M.Ta(), delete this.M);
      dV(this, function(a) {
        a.Ta();
      });
      this.D && _.Lo(this.D);
      this.la = this.Pc = this.D = this.La = this.jb = null;
      aV.Ba.Ia.call(this);
    }
    Uf() {
      return this.Pc;
    }
    Gd() {
      return this.D;
    }
    removeChild(a, b) {
      if (a) {
        var c = _.Ja(a) ? a : a.getId();
        this.La && c
          ? ((a = this.La),
            (a = (null !== a && c in a ? a[c] : void 0) || null))
          : (a = null);
        if (c && a) {
          var d = this.La;
          c in d && delete d[c];
          _.Ab(this.jb, a);
          b && (eV(a), a.D && _.Lo(a.D));
          b = a;
          if (null == b) throw Error('yb');
          b.la = null;
          aV.Ba.Xj.call(b, null);
        }
      }
      if (!a) throw Error('Bb');
      return a;
    }
  }
  _.t(aV, _.en);
  aV.prototype.Ef = _.wB.getInstance();
  var bV = function(a) {
    a.M || (a.M = new _.Ks(a));
    return a.M;
  };
  var cV = function(a) {
      a.Oh = !0;
      dV(a, function(a) {
        !a.Oh && a.V() && cV(a);
      });
    },
    eV = function(a) {
      dV(a, function(a) {
        a.Oh && eV(a);
      });
      a.M && _.Rs(a.M);
      a.Oh = !1;
    };
  var dV = function(a, b) {
    a.jb && (0, _.kb)(a.jb, b, void 0);
  };
  class fV {
    B: any;
    D: any;
    constructor(a) {
      aV.call(this);
      this.B = _.Io('div');
      _.lr(this.B, 'XkWAb-CHX6zb');
      if (null != a) {
        var b = bV(this);
        _.Ms(b, a, 'resize', this.G, void 0);
      }
    }
    wb() {
      this.D = this.B;
    }
    G(a) {
      _.gD(this.B, a.size.width, a.size.height);
    }
    F(a) {
      _.zr(this.B, 'cursor', a ? 'move' : 'auto');
    }
  }
  _.t(fV, aV);
  class gV {
    y: number;
    x: number;
    visible: boolean;
    size: any;
    url: any;
    M: any;
    B: any;
    J: any;
    F: boolean;
    constructor(a, b, c, d) {
      _.en.call(this);
      this.y = this.x = 0;
      this.visible = !1;
      this.size = new _.qo(0, 0);
      this.url = a;
      this.M = b;
      this.B = c;
      this.J = d;
      this.F = !0;
    }
    setVisible(a) {
      (this.visible = a) || hV(this, []);
    }
    Rb() {
      return this.visible;
    }
  }
  _.t(gV, _.en);
  var iV = function(a, b) {
    _.ro(b, a.size) ||
      ((a.size = b),
      (b = a.size),
      _.gD(a.C, b.width, b.height),
      (0, _.kb)(a.D, a.G, a));
  };
  class jV {
    F: any;
    G: any;
    constructor(a, b) {
      _.rm.call(this, 'tile_loaded');
      this.F = a;
      this.G = b;
    }
  }
  _.t(jV, _.rm);
  class kV {
    root: any;
    B: any;
    H: any;
    constructor(x, y, container, image) {
      _.ki.call(this);
      this.root = container;
      this.B = image;
      // x, y vector
      this.H = new _.no(x, y);
    }
    setVisible(a) {
      if (a != !(!this.B || !this.B.parentNode))
        if (a) this.M(), this.root.appendChild(this.B);
        else
          try {
            this.Si(), this.root.removeChild(this.B);
          } catch (b) {}
    }
    M(): any {
      throw new Error('Method not implemented.');
    }
    Si(): any {
      throw new Error('Method not implemented.');
    }
  }
  _.t(kV, _.ki);
  var aia = {
    90: 'XkWAb-xzdHvd',
    180: 'XkWAb-hTN0Jd',
    270: 'XkWAb-IZxJAe'
  };
  var bia = function(encodedURL, x, y, d, container, data, boundFunc) {
    var l;
    if ((l = data.Jd(encodedURL) ? data.gb[encodedURL].data : null))
      null == lV && ((l = _.Io('canvas')), (lV = !(!l || !l.getContext))),
        (l = null);
    return l
      ? new mV(x, y, container, l, boundFunc)
      : new nV(encodedURL, x, y, d, container, data, boundFunc);
  };
  class oV {
    J: any;
    G: any;
    F: any;
    static Ba: any;
    constructor(x, y, c, containerElement, imageElement, boundFunc) {
      kV.call(this, x, y, containerElement, imageElement);
      // add classes to img element
      _.mr(imageElement, ['L6cTce', 'XkWAb-LmsqOc']);
      this.J = c;
      this.G = null != boundFunc ? boundFunc : null;
      this.F = null;
    }
    Si() {
      null != this.F && (clearTimeout(this.F), (this.F = null));
    }
    Y(a) {
      a();
      this.F = null;
    }
    Ia() {
      this.Si();
      oV.Ba.Ia.call(this);
    }
  }
  _.t(oV, kV);
  var pV = function(a) {
    a.J || _.lr(a.B, 'XkWAb-Iak2Lc');
    _.pr(a.B, 'L6cTce', !1);
    if (null != a.G) {
      var b = a.J ? 500 : 0;
      a.F = setTimeout((0, _.q)(a.Y, a, a.G), b);
      a.G = null;
    }
  };
  class nV {
    W: any;
    gb: any;
    C: any;
    O: string;
    D: any;
    static Ba: any;
    constructor(loadUrl, x, y, d, container, g, boundFunc) {
      const imageExistsAsBlobornot = d && !g.Jd(loadUrl);
      oV.call(
        this,
        x,
        y,
        imageExistsAsBlobornot,
        container,
        _.Io('img'),
        boundFunc
      );
      this.W = loadUrl;
      this.gb = g;
      this.C = null;
      this.O = _.bd && !_.Bd('11') ? 'readystatechange' : 'load';
      this.D = new _.Ks(this);
      _.ni(this, this.D);
    }
    M() {
      _.pr(this.B, 'L6cTce', !0);
      this.C = this.gb.load(this.W, 1);
      this.C.Jd() ? this.U() : _.Ps(this.D, this.C, 'resource_loaded', this.U);
    }
    B(B: any, arg1: string, arg2: boolean): any {
      throw new Error('Method not implemented.');
    }
    Si() {
      this.B.removeAttribute('src');
      _.Rs(this.D);
      this.C && (this.C.release(), (this.C = null));
      nV.Ba.Si.call(this);
    }
    U() {
      _.Ms(this.D, this.B, this.O, this.T, void 0);
      var a = this.B,
        b = this.C.data.B;
      if (!(b instanceof _.Fn)) {
        var c = /^data:image\//i.test(b);
        b = _.Nn(b, c);
      }
      a.src = _.Gn(b);
    }
    T() {
      if (this.B.complete || 'complete' == this.B.readyState)
        _.Qs(this.D, this.B, this.O, this.T), pV(this);
    }
  }
  _.t(nV, oV);
  class mV {
    constructor(a, b, c, d, f) {
      oV.call(this, a, b, !1, c, d, f);
    }
    M() {
      pV(this);
    }
  }
  _.t(mV, oV);
  class qV {
    C: any;
    D: any[];
    H: any;
    visible: boolean;
    size: any;
    constructor(a, b, c, d, f, g) {
      gV.call(this, b, c, d, f);
      this.C = _.Io('div');
      this.C.style.direction = 'ltr';
      _.zr(
        this.C,
        'zIndex',
        Math.floor((Math.log(getWidth(d)) / Math.log(2)) * 10)
      );
      this.D = [];
      this.H = g;
      _.lr(this.C, 'XkWAb-cYRDff');
      a.appendChild(this.C);
    }
    remove() {
      hV(this, []);
      this.visible = !1;
      this.C.parentNode.removeChild(this.C);
    }
    G(a) {
      var b = new _.mQ(
          this.size.width / getWidth(this.B),
          this.size.height / getHeight(this.B)
        ),
        c = this.B.G * b.x,
        d = this.B.F * b.y,
        f = a.H,
        g = f.x * c + this.B.C.x * b.x - (Math.round(this.x) - this.x);
      f = f.y * d + this.B.C.y * b.y - (Math.round(this.y) - this.y);
      var k = Math.round(g),
        l = Math.round(f);
      b = new _.mQ(k, l);
      c = new _.qo(Math.round(g + c) - k, Math.round(f + d) - l);
      d = this.B.rotation || 0;
      g = aia[d];
      this.H && !g
        ? (a.B.style.webkitTransform =
            'translate3d(' + b.x + 'px, ' + b.y + 'px, 0)')
        : (_.pr(a.B, g, !!g),
          (a.B.style.left = b.x + 'px'),
          (a.B.style.top = b.y + 'px'));
      90 == d || 270 == d
        ? _.gD(a.B, c.height, c.width)
        : _.gD(a.B, c.width, c.height);
    }
    B(B: any): any {
      throw new Error('Method not implemented.');
    }
    x(x: any): any {
      throw new Error('Method not implemented.');
    }
    y(y: any): any {
      throw new Error('Method not implemented.');
    }
  }
  _.t(qV, gV);
  var hV = function(bigData, tileVectors) {
    for (var c = {}, tileIndex = 0; tileIndex < bigData.D.length; ++tileIndex) {
      var f = bigData.D[tileIndex],
        g = f.H;
      c['(' + g.x + ', ' + g.y + ')'] = f;
    }
    bigData.D = [];
    for (tileIndex = 0; tileIndex < tileVectors.length; ++tileIndex) {
      g = new _.mQ(tileVectors[tileIndex].x, tileVectors[tileIndex].y);
      var k = '(' + g.x + ', ' + g.y + ')';
      f = c[k];
      if (null != f) {
        delete c[k];
      } else {
        f = cia(bigData, g.x, g.y);
        _.ni(bigData, f);
        if (null == f) continue;
        f.setVisible(!0);
      }
      bigData.G(f);
      bigData.D.push(f);
    }
    for (var l in c) c[l].setVisible(!1);
  };
  var cia = function(bigData, x, y) {
    var encodedUrl = bigData.url.gj(
      x,
      y,
      bigData.B.B,
      bigData.M.timestamp,
      window
    );
    var func = (0, _.q)(function() {
      this.Ga(new jV(this.B.B, new _.no(x, y)));
    }, bigData);
    return bia(
      encodedUrl,
      x,
      y,
      0 < bigData.B.B && bigData.F,
      bigData.C,
      bigData.J,
      func
    );
  };
  class rV {
    G: any;
    C: any;
    B: any;
    D: any[];
    F: any;
    J: any;
    M: any;
    H: any;
    static Ba: any;
    constructor(a, b, c, d) {
      this.G = a;
      this.G.style.overflow = 'hidden';
      this.C = _.Io('div');
      this.C.style.direction = 'ltr';
      this.C.style.overflow = 'hidden';
      this.B = null;
      'checkered' == d &&
        ((this.B = _.Io('div')),
        (this.B.className = 'XkWAb-AHe6Kc'),
        this.C.appendChild(this.B));
      this.D = [];
      this.F = this.J = null;
      this.M = b;
      this.H = c;
    }
    Ia() {
      _.Xm(this.F);
      tV(this);
      rV.Ba.Ia.call(this);
    }
    Jt() {}
    L() {
      return this.G;
    }
  }
  _.t(rV, _.ki);
  var sV = function(a) {
    a.G.appendChild(a.C);
  };
  var tV = function(a, b) {
      for (var c = a.D.length - 1; 0 <= c; --c) c != b && uV(a, a.D[c]);
    },
    uV = function(a, b) {
      _.Ab(a.D, b) && (b.remove(), b.Ta());
    },
    dia = function(a, b, c, d, f) {
      (0, _.kb)(
        a.D,
        function(a) {
          a.x = b;
          a.y = c;
        },
        a
      );
      var g = Math.round(b),
        k = Math.round(c);
      _.gD(a.C, d);
      a.H
        ? (a.C.style.webkitTransform =
            'translate3d(' + b + 'px, ' + c + 'px, 0)')
        : (a.C.style.margin = k + 'px 0 0 ' + g + 'px');
      a.B &&
        (_.gD(a.B, d),
        (d = Math.pow(2, f - Math.floor(f))),
        a.H
          ? ((a.B.style.backgroundSize = '50px'),
            (a.B.style.transformOrigin = '0% 0%'),
            (a.B.style.transform = 'scale3d(' + d + ', ' + d + ', 1)'))
          : ((a.B.style.backgroundSize = '50px'),
            (a.B.style.backgroundPosition = '0% 0%')));
    };
  class vV {
    W: NU;
    M: rV;
    C: qV[];
    B: any;
    D: zV;
    T: boolean;
    F: any;
    G: any;
    U: any;
    J: dimensions;
    H: number;
    O: any;
    static Ba: any;
    constructor(a, b, c, d) {
      _.en.call(this);
      this.W = a;
      this.M = b;
      this.C = [];
      this.B = null;
      this.D = c;
      this.T = !0;
      this.F = null;
      this.G = new _.Yo();
      this.U = d || function() {};
      this.J = new _.qo(0, 0);
      this.H = 0;
      this.O = new _.Ks(this);
      _.ni(this, this.O);
    }
    load(a, b, c, d) {
      this.B && (uV(c, this.B), (this.B = null));
      var f = void 0;
      d && ((f = Math.ceil(this.H)), (this.B = this.C[f]));
      tV(c, f);
      this.C = [];
      d = 0;
      for (f = b.C; d < f; ++d) {
        var g = b.B[d];
        if (!g) throw Error('Cb`' + d);
        var k = c;
        g = new qV(k.C, a, b, g, k.M, k.H);
        k.D.push(g);
        k = g;
        _.Ms(this.O, k, 'tile_loaded', this.Y, void 0);
        this.C.push(k);
      }
      this.T = a = this.T;
      for (b = 0; b < this.C.length; ++b) this.C[b].F = a;
    }
    Y(a) {
      var b = a.G;
      b = b.x + ',' + b.y + ',' + a.F;
      this.F &&
        this.F.contains(b) &&
        (this.F.remove(b),
        this.G.add(b),
        0 == this.F.vc() &&
          ((this.D.G = !0),
          wV(this),
          this.U(),
          this.B && (uV(this.M, this.B), (this.B = null))));
      this.Ga(a);
    }
    Ga(a: any): any {
      throw new Error('Method not implemented.');
    }
    Ia() {
      this.B && (uV(this.M, this.B), (this.B = null));
      vV.Ba.Ia.call(this);
    }
  }
  _.t(vV, _.en);
  var xV = function(a: vV, b, c, d, f) {
    dia(a.M, b, c, d, f);
    var g = a.W.B;
    b = new _.Pp(
      -(c / d.height),
      (g.width - b + d.width) / d.width - 1,
      (g.height - c + d.height) / d.height - 1,
      -b / d.width
    );
    c = a.D;
    c.C = c.B.B[Math.ceil(f)];
    c.G = !0;
    c = a.D;
    c.H = b.clone();
    c.G = !0;
    a.H = f;
    a.J = d;
    wV(a);
  };
  var wV = function(a: vV) {
    for (
      var b = Math.ceil(a.H), c = yV(a.D, b), set = new _.Yo(), f = 0;
      f < c.length;
      ++f
    ) {
      var g = c[f];
      set.add(g.x + ',' + g.y + ',' + b);
    }
    f = a.G;
    b = new _.Yo();
    c = _.sl(set);
    for (g = 0; g < c.length; g++) {
      var k = c[g];
      f.contains(k) && b.add(k);
    }
    a.G = b;
    f = a.G;
    set = set.clone();
    f = _.sl(f);
    b = f.length;
    for (c = 0; c < b; c++) set.remove(f[c]);
    a.F = set;
    for (f = 0; f < a.C.length; ++f)
      (set = a.C[f]),
        (b = yV(a.D, f)),
        (c = 0 < b.length),
        set.setVisible(c),
        c && hV(set, b);
    for (f = 0; f < a.C.length; ++f) (set = a.C[f]), iV(set, a.J);
    a.B && iV(a.B, a.J);
  };
  class CV {
    constructor(a: zV, b: number, c: number | position, d: number) {
      c instanceof _.no ? ((d = c.y), (c = c.x)) : _.Ia(d) || (d = 0);
      return a.O.Jd(a.M.gj(c, d, b, a.B.timestamp, window));
    }
  }
  class BV {
    constructor(a, b, c) {
      var d = QT(b, new _.no(a.H.left, a.H.top)),
        f = QT(b, new _.no(a.H.right, a.H.bottom));
      d.x = _.di(d.x, 0, b.hh - 1);
      d.y = _.di(d.y, 0, b.ih - 1);
      f.x = _.di(f.x, 0, b.hh - 1);
      f.y = _.di(f.y, 0, b.ih - 1);
      for (var g = [], k = d.x; k <= f.x; ++k)
        for (var l = d.y; l <= f.y; ++l)
          (c && !CV(a, b.B, k, l)) || g.push(new _.no(k, l));
      return g;
    }
  }
  class eia {
    constructor(a) {
      var b = a.C.B + 1;
      if (!(b >= a.B.B.length)) {
        var c = BV(a, a.B.B[b], !0);
        if (0 != c.length) {
          var d = {};
          (0, _.kb)(
            c,
            function(a) {
              d[a.x + ',' + a.y] = a;
            },
            a
          );
          for (var f in a.F) {
            c = a.F[f];
            c = Yha(RT(a.C, c), RT(a.C, c.x + 1, c.y + 1));
            for (
              var g = a.B.B[b],
                k = !0,
                l = QT(g, c.left, c.top),
                m = new _.no(l.x, l.y);
              m.x < g.hh;
              ++m.x
            ) {
              for (m.y = l.y; m.y < g.ih; ++m.y) {
                var r = RT(g, m);
                if (r.x >= c.right || r.y >= c.bottom) break;
                var v = m.x + ',' + m.y;
                v in d
                  ? null != d[v] &&
                    (a.D[b].push(new _.no(m.x, m.y)), (d[v] = null))
                  : (k = !1);
              }
              if (r.x >= c.right) break;
            }
            k && delete a.F[f];
          }
        }
      }
    }
  }
  class yV {
    constructor(a, b) {
      if (a.G) {
        a.F = {};
        for (var c = a.C.B, d = 0; d <= a.B.B.length; ++d)
          if (0 == d) {
            for (var f = a.D, g = a.B.B[0], k = [], l = 0; l < g.hh; ++l)
              for (var m = 0; m < g.ih; ++m) k.push(new _.no(l, m));
            f[0] = k;
          } else if (d == c)
            for (a.D[c] = [], f = BV(a, a.C), g = 0; g < f.length; ++g)
              (k = f[g]),
                CV(a, c, k)
                  ? a.D[c].push(k)
                  : ((a.F[k.x + ',' + k.y] = k), a.J || a.D[c].push(k));
          else a.D[d] = [];
        eia(a);
        for (c = a.C.B - 1; 1 <= c && !_.Dc(a.F); --c)
          for (
            d = a.B.B[c], f = BV(a, a.B.B[c], !0), g = 0;
            g < f.length;
            ++g
          ) {
            k = f[g];
            l = QT(a.C, RT(d, k));
            m = QT(a.C, RT(d, new _.no(k.x + 1, k.y + 1)));
            for (var r = !1, v = l.x; v < m.x; ++v)
              for (var x = l.y; x < m.y; ++x) {
                var y = v + ',' + x;
                y in a.F && ((r = !0), delete a.F[y]);
              }
            r && a.D[c].push(k);
          }
        a.G = !1;
      }
      return a.D[b] || [];
    }
  }
  class AV {
    constructor(a, b, c) {
      a.B = b;
      a.M = c;
      a.G = !0;
    }
  }
  class zV {
    C: ParsedPyramidLevelElementJT;
    H: absolutePosition;
    O: UU;
    M: any;
    B: PyramidInformationMT;
    D: {};
    J: boolean;
    G: boolean;
    F: {};
    constructor(a) {
      this.C = null;
      this.H = new _.Pp(0, 1, 1, 0);
      this.O = a;
      this.M = this.B = null;
      this.D = {};
      this.J = !1;
      this.G = !0;
      this.F = {};
    }
  }
  class DV {
    target: any;
    handle: any;
    M: any;
    D: any;
    B: any;
    deltaY: number;
    deltaX: number;
    Y: number;
    W: number;
    screenY: number;
    screenX: number;
    clientY: number;
    clientX: number;
    J: boolean;
    G: boolean;
    C: boolean;
    H: boolean;
    static Ba: any;
    ma: any;
    O: any;
    constructor(a, b, c) {
      _.en.call(this);
      this.target = a;
      this.handle = b || a;
      this.M = c || new _.wr(NaN, NaN, NaN, NaN);
      this.D = _.to(a);
      this.B = new _.Ks(this);
      _.ni(this, this.B);
      this.deltaY = this.deltaX = this.Y = this.W = this.screenY = this.screenX = this.clientY = this.clientX = 0;
      this.J = !0;
      this.G = this.C = !1;
      _.Pm(this.handle, ['touchstart', 'mousedown'], this.U, !1, this);
      this.H = fia;
    }
    ob(a) {
      this.J = a;
    }
    Ia() {
      DV.Ba.Ia.call(this);
      _.Wm(this.handle, ['touchstart', 'mousedown'], this.U, !1, this);
      _.Rs(this.B);
      this.H && this.D.releaseCapture();
      this.handle = this.target = null;
    }
    U(a) {
      var b = 'mousedown' == a.type;
      if (!this.J || this.C || (b && (!FT(a) || (_.fd && _.ld && a.ctrlKey))))
        this.Ga('earlycancel');
      else if (this.Ga(new FV('start', this, a.clientX, a.clientY, a))) {
        this.C = !0;
        b && a.preventDefault();
        b = this.D;
        var c = b.documentElement,
          d = !this.H;
        _.Ms(this.B, b, ['touchmove', 'mousemove'], this.da, {
          capture: d,
          passive: !1
        });
        _.Ms(this.B, b, ['touchend', 'mouseup'], this.F, d);
        this.H
          ? (c.setCapture(!1), _.Ms(this.B, c, 'losecapture', this.F, void 0))
          : _.Ms(this.B, _.Fo(b), 'blur', this.F, void 0);
        this.ma && _.Ms(this.B, this.ma, 'scroll', this.la, d);
        this.clientX = this.W = a.clientX;
        this.clientY = this.Y = a.clientY;
        this.screenX = a.screenX;
        this.screenY = a.screenY;
        this.deltaX = this.G ? _.uM(this.target) : this.target.offsetLeft;
        this.deltaY = this.target.offsetTop;
        this.O = _.Eo(_.uo(this.D).B);
      }
    }
    Ga(arg0: string): any {
      throw new Error('Method not implemented.');
    }
    F(a, b) {
      _.Rs(this.B);
      this.H && this.D.releaseCapture();
      this.C
        ? ((this.C = !1),
          this.Ga(
            new FV(
              'end',
              this,
              a.clientX,
              a.clientY,
              a,
              GV(this, this.deltaX),
              HV(this, this.deltaY),
              b || 'touchcancel' == a.type
            )
          ))
        : this.Ga('earlycancel');
    }
    da(a) {
      if (this.J) {
        var b = (this.G && EV(this) ? -1 : 1) * (a.clientX - this.clientX),
          c = a.clientY - this.clientY;
        this.clientX = a.clientX;
        this.clientY = a.clientY;
        this.screenX = a.screenX;
        this.screenY = a.screenY;
        if (!this.C) {
          var d = this.W - this.clientX,
            f = this.Y - this.clientY;
          if (0 < d * d + f * f)
            if (this.Ga(new FV('start', this, a.clientX, a.clientY, a)))
              this.C = !0;
            else {
              this.isDisposed() || this.F(a);
              return;
            }
        }
        c = IV(this, b, c);
        b = c.x;
        c = c.y;
        this.C &&
          this.Ga(new FV('beforedrag', this, a.clientX, a.clientY, a, b, c)) &&
          (JV(this, a, b, c), a.preventDefault());
      }
    }
    isDisposed(): any {
      throw new Error('Method not implemented.');
    }
    la(a) {
      var b = IV(this, 0, 0);
      a.clientX = this.clientX;
      a.clientY = this.clientY;
      JV(this, a, b.x, b.y);
    }
  }
  _.t(DV, _.en);
  var fia =
    _.Ha.document &&
    _.Ha.document.documentElement &&
    !!_.Ha.document.documentElement.setCapture &&
    !!_.Ha.document.releaseCapture;
  var EV = function(a) {
    _.Ia(a.T) || (a.T = _.qM(a.target));
    return a.T;
  };
  var IV = function(a, b, c) {
    var d = _.Eo(_.uo(a.D).B);
    b += d.x - a.O.x;
    c += d.y - a.O.y;
    a.O = d;
    a.deltaX += b;
    a.deltaY += c;
    return new _.no(GV(a, a.deltaX), HV(a, a.deltaY));
  };
  var JV = function(a, b, c, d) {
      a.G && EV(a)
        ? (a.target.style.right = c + 'px')
        : (a.target.style.left = c + 'px');
      a.target.style.top = d + 'px';
      a.Ga(new FV('drag', a, b.clientX, b.clientY, b, c, d));
    },
    GV = function(a, b) {
      var c = a.M;
      a = isNaN(c.left) ? null : c.left;
      c = isNaN(c.width) ? 0 : c.width;
      return Math.min(
        null != a ? a + c : Infinity,
        Math.max(null != a ? a : -Infinity, b)
      );
    },
    HV = function(a, b) {
      var c = a.M;
      a = isNaN(c.top) ? null : c.top;
      c = isNaN(c.height) ? 0 : c.height;
      return Math.min(
        null != a ? a + c : Infinity,
        Math.max(null != a ? a : -Infinity, b)
      );
    };
  class FV {
    clientX: any;
    clientY: any;
    left: any;
    top: any;
    constructor(a, b, c, d, f, g, k) {
      _.rm.call(this, a);
      this.clientX = c;
      this.clientY = d;
      this.left = _.Ia(g) ? g : b.deltaX;
      this.top = _.Ia(k) ? k : b.deltaY;
    }
  }
  _.t(FV, _.rm);
  class LV {
    oa: any;
    T: number;
    qa: any;
    B: any;
    C: any;
    U: any;
    J: any;
    W: any;
    O: any;
    Y: any;
    H: any;
    G: any;
    F: any;
    ma: boolean;
    da: any;
    D: any;
    constructor() {
      aV.call(this);
      this.oa = _.bd && _.Bd('8');
      this.T = 0;
      this.qa = null;
      this.B = this.C.createElement('div');
      _.mr(this.B, ['XkWAb-UH1Jve', 'XkWAb-RCfa3e']);
      this.U = this.C.createElement('div');
      _.mr(this.U, ['XkWAb-eJuzjc', 'XkWAb-RCfa3e']);
      this.B.appendChild(this.U);
      this.J = this.C.createElement('div');
      _.So(this.J, '+');
      _.mr(this.J, ['XkWAb-BtWyge', 'XkWAb-RCfa3e']);
      this.U.appendChild(this.J);
      this.W = this.C.createElement('div');
      _.mr(this.W, ['XkWAb-a4WLyb', 'XkWAb-RCfa3e']);
      this.B.appendChild(this.W);
      this.O = this.C.createElement('div');
      _.So(this.O, '\u2013');
      _.mr(this.O, ['XkWAb-BtWyge', 'XkWAb-RCfa3e']);
      this.W.appendChild(this.O);
      this.Y = this.C.createElement('div');
      _.mr(this.Y, ['XkWAb-IE9qgd', 'XkWAb-RCfa3e']);
      this.B.appendChild(this.Y);
      this.H = this.C.createElement('div');
      _.mr(this.H, ['XkWAb-IlRY5e', 'XkWAb-RCfa3e']);
      this.Y.appendChild(this.H);
      this.G = null;
      this.F = new _.ws(1e3);
      _.ni(this, this.F);
      _.Ns(bV(this), this.F, 'tick', function() {
        KV(this, !1);
      });
      this.ma = !1;
      _.Ns(bV(this), this.B, 'mouseover', function() {
        this.F.stop();
        this.ma = !0;
        KV(this, !0);
      });
      _.Ns(bV(this), this.B, 'mouseout', function() {
        this.ma = !1;
        this.F.stop();
        this.F.start();
      });
      gia(this);
      KV(this, !1);
      this.da = void 0;
    }
    wb() {
      this.D = this.B;
    }
    Ca(a) {
      'start' != a.type &&
        ((a = a.left / this.T), null != this.qa && this.qa(a));
    }
    getHeight(a) {
      return a ? 30 : 8;
    }
  }
  _.t(LV, aV);
  var MV = function(a) {
      a.ma || (KV(a, !0), a.F.stop(), a.F.start());
    },
    hia = function(a, b) {
      a.qa = b;
    };
  var KV = function(a, b) {
    var c = a.getHeight(b) + 'px',
      d = b ? '30px' : '0';
    a.B.style.height = _.Fr(c, !0);
    a.B.style.backgroundColor = a.oa
      ? 'rgb(0, 0, 0)'
      : 'rgba(0, 0, 0, ' + (b ? '1' : '0.5') + ')';
    a.H.style.height = _.Fr(c, !0);
    a.Y.style.height = c;
    a.U.style.height = c;
    a.W.style.height = c;
    a.O.style.height = d;
    a.J.style.height = d;
    a.oa
      ? ((b = b ? 'visible' : 'hidden'),
        (a.O.style.visibility = b),
        (a.J.style.visibility = b))
      : ((b = b ? '1' : '0'), (a.O.style.opacity = b), (a.J.style.opacity = b));
  };
  var gia = function(a) {
    _.Ns(bV(a), a.U, 'click', function() {
      MV(this);
      this.Ga(new sU(1));
    });
    _.Ns(bV(a), a.W, 'click', function() {
      MV(this);
      this.Ga(new sU(-1));
    });
  };
  class PV {
    B: number;
    Db: any;
    F: any;
    C: any;
    ua: any;
    ma: any;
    sb: fV;
    Eb: pU;
    Y: any;
    ld: number;
    Wb: any;
    U: any[];
    J: LV;
    W: any;
    Yb: any;
    Ae: NU;
    xd: zV;
    mc: vV;
    od: number;
    oa: number;
    T: number;
    G: number;
    H: any;
    qa: any;
    Ca: any;
    da: any;
    O: any;
    fc: boolean;
    zd: number;
    D: any;
    constructor(a, b) {
      aV.call(this);
      this.B = 150;
      this.Db = new _.no(10, 10);
      this.F = this.C.createElement('div');
      _.lr(this.F, 'XkWAb-pVNTue');
      _.Gr(this.F, this.Db);
      this.ua = this.C.createElement('div');
      _.lr(this.ua, 'XkWAb-sM5MNb');
      this.F.appendChild(this.ua);
      this.ma = this.C.createElement('div');
      _.lr(this.ma, 'XkWAb-SMWX4b');
      this.ua.appendChild(this.ma);
      this.sb = new fV();
      this.sb.render(this.ma);
      _.ni(this, this.sb);
      this.Eb = new pU(this.sb);
      _.ni(this, this.Eb);
      _.Ns(bV(this), this.Eb, 'drag_hover', this.ee);
      _.Ns(bV(this), this.Eb, ['drag_start', 'drag_move'], this.Dg);
      this.Y = new _.qo(this.B, this.B);
      this.ld = 0;
      this.Wb = this.C.createElement('div');
      _.lr(this.Wb, 'XkWAb-xJ5Hz');
      this.ma.appendChild(this.Wb);
      this.U = [];
      for (var c = 0; 4 > c; ++c)
        (this.U[c] = this.C.createElement('div')),
          _.lr(this.U[c], 'XkWAb-ZdFRdf'),
          this.ma.appendChild(this.U[c]);
      this.J = new LV();
      _.ni(this, this.J);
      _.Ns(bV(this), this.J, 'zoom', function(a) {
        this.Ga(a);
        NV(this);
      });
      this.J.render(this.F);
      hia(this.J, (0, _.q)(this.Ff, this));
      this.W = this.C.createElement('div');
      _.lr(this.W, 'XkWAb-pfZwlb');
      this.ma.appendChild(this.W);
      this.Yb = a(this.W);
      sV(this.Yb);
      _.ni(this, this.Yb);
      this.Ae = new NU(this.W);
      _.ni(this, this.Ae);
      this.xd = new zV(b);
      this.mc = new vV(this.Ae, this.Yb, this.xd);
      _.ni(this, this.mc);
      this.od = 0;
      this.oa = 1;
      this.T = 0;
      this.G = 1;
      this.H = new _.qo(0, 0);
      this.qa = new _.mQ(0, 0);
      this.Ca = new _.mQ(0, 0);
      this.da = null;
      this.O = new _.ws(1e3);
      _.ni(this, this.O);
      _.Ns(bV(this), this.O, 'tick', function() {
        this.setVisible(!1);
      });
      this.fc = !1;
      this.zd = 0;
      _.Ns(bV(this), this.F, 'mouseover', function() {
        this.O.stop();
        this.fc = !0;
        this.setVisible(OV(this));
      });
      _.Ns(bV(this), this.F, 'mouseout', function() {
        this.fc = !1;
        this.O.stop();
        this.O.start();
      });
    }
    wb() {
      this.D = this.F;
    }
    Dg(a) {
      var b = new _.mQ(a.position.x - this.qa.x, a.position.y - this.qa.y);
      a = b.x - this.Ca.x;
      b = b.y - this.Ca.y;
      a /= this.H.width * this.B * this.G;
      b /= this.H.height * this.B * this.G;
      this.Ga(new $U(new _.mQ(a, b)));
    }
    Ga(arg0: $U): any {
      throw new Error('Method not implemented.');
    }
    Ff(a) {
      this.Ga(new RU(this.T + a * (this.oa - this.T), !1));
    }
    ee() {
      NV(this);
      MV(this.J);
    }
    setVisible(a, b) {
      _.pr(this.F, 'XkWAb-RCfa3e', !a && !b);
      _.bd && _.Bd('8')
        ? (this.F.style.visibility = a ? 'visible' : 'hidden')
        : ((a = a ? 1 : 0),
          (b = this.F.style),
          'opacity' in b
            ? (b.opacity = a)
            : 'MozOpacity' in b
            ? (b.MozOpacity = a)
            : 'filter' in b &&
              (b.filter =
                '' === a ? '' : 'alpha(opacity=' + 100 * Number(a) + ')'));
    }
  }
  _.t(PV, aV);
  var QV = function(a, b, c, d, f) {
    null != a &&
      ((a.style.margin = c + 'px 0 0 ' + b + 'px'),
      (a.style.width = d + 'px'),
      (a.style.height = f + 'px'));
  };
  var NV = function(a) {
    a.fc ||
      ((a.zd = (0, _.bb)()), a.setVisible(OV(a)), a.O.stop(), a.O.start());
  };
  _.RV = function(a, b) {
    a.ld = b;
    a.J.Gd().style.display = 1 == b ? 'none' : '';
    a.J.Gd().style.borderWidth = 2 == b ? '1px' : '';
    a.ua.style.display = 2 == b ? 'none' : '';
    a.F.style.display = 3 == b ? 'none' : '';
    a.setVisible(OV(a));
  };
  var OV = function(a) {
    return 4 == a.ld && a.od <= a.T ? !1 : a.oa > a.T;
  };
  iia = function(a, b, c) {
    a.da = b;
    a.oa = b.C - 1;
    a.setVisible(OV(a), !0);
    _.SV(a);
    a.mc.load(c, b, a.Yb, !1);
    AV(a.xd, b, c);
  };
  _.SV = function(a) {
    if (null == a.da) throw Error('Db');
    _.gD(a.F, a.B, a.B);
    var b = a.da.B[a.oa];
    b = getWidth(b) / getHeight(b);
    a.H = new _.qo(Math.min(1, b), Math.min(1, 1 / b));
    b = a.B * a.H.width;
    var c = a.B * a.H.height;
    _.gD(a.W, b, c);
    a.Ae.trigger();
    c = (a.B - c) / 2;
    a.W.style.marginTop = c + 'px';
    b = (a.B - b) / 2;
    a.W.style.marginLeft = b + 'px';
    a.qa = new _.mQ(Math.round(b), Math.round(c));
    b = a.J;
    a = a.B;
    b.G ||
      ((b.G = new DV(b.H, null)),
      (b.G.G = !0),
      _.ni(b, b.G),
      (c = bV(b)),
      _.Ms(c, b.G, ['start', 'drag', 'end'], b.Ca, void 0));
    b.T = a - 60;
    b.G.M = new _.wr(0, 0, b.T, 0);
  };
  class TV {
    B: number;
    endTime: any;
    startTime: any;
    constructor() {
      _.en.call(this);
      this.B = 0;
      this.endTime = this.startTime = null;
    }
    Na() {
      this.C('pause');
    }
    Ht() {
      this.C('play');
    }
    Fa() {
      this.C('resume');
    }
    C(a) {
      this.Ga(a);
    }
    Ga(a: any): any {
      throw new Error('Method not implemented.');
    }
  }
  _.t(TV, _.en);
  var UV = {},
    VV = null,
    WV = function(a) {
      a = _.Ya(a);
      delete UV[a];
      _.Dc(UV) && VV && VV.stop();
    },
    XV = function() {
      VV ||
        (VV = new _.hD(function() {
          jia();
        }, 20));
      var a = VV;
      a.tc() || a.start();
    },
    jia = function() {
      var a = (0, _.bb)();
      _.wc(UV, function(b) {
        YV(b, a);
      });
      _.Dc(UV) || XV();
    };
  class ZV {
    D: any;
    G: any;
    duration: any;
    F: any;
    coords: any[];
    progress: number;
    static Ba: any;
    constructor(a, b, c, d) {
      TV.call(this);
      if (!_.p(a) || !_.p(b)) throw Error('Fb');
      if (a.length != b.length) throw Error('Gb');
      this.D = a;
      this.G = b;
      this.duration = c;
      this.F = d;
      this.coords = [];
      this.progress = 0;
    }
    nt() {
      this.C('animate');
    }
    C(a) {
      this.Ga(new aW(a, this));
    }
    Ga(arg0: aW): any {
      throw new Error('Method not implemented.');
    }
  }
  _.t(ZV, TV);
  _.e = ZV.prototype;
  _.e.play = function(a) {
    if (a || 0 == this.B) (this.progress = 0), (this.coords = this.D);
    else if (1 == this.B) return !1;
    WV(this);
    this.startTime = a = (0, _.bb)();
    -1 == this.B && (this.startTime -= this.duration * this.progress);
    this.endTime = this.startTime + this.duration;
    this.progress || this.C('begin');
    this.Ht();
    -1 == this.B && this.Fa();
    this.B = 1;
    var b = _.Ya(this);
    b in UV || (UV[b] = this);
    XV();
    YV(this, a);
    return !0;
  };
  _.e.stop = function(a) {
    WV(this);
    this.B = 0;
    a && (this.progress = 1);
    $V(this, this.progress);
    this.C('stop');
    this.C('end');
  };
  _.e.pause = function() {
    1 == this.B && (WV(this), (this.B = -1), this.Na());
  };
  _.e.Ir = function() {
    return this.progress;
  };
  _.e.Ia = function() {
    0 == this.B || this.stop(!1);
    this.C('destroy');
    ZV.Ba.Ia.call(this);
  };
  var YV = function(a, b) {
      b < a.startTime &&
        ((a.endTime = b + a.endTime - a.startTime), (a.startTime = b));
      a.progress = (b - a.startTime) / (a.endTime - a.startTime);
      1 < a.progress && (a.progress = 1);
      $V(a, a.progress);
      1 == a.progress
        ? ((a.B = 0), WV(a), a.C('finish'), a.C('end'))
        : 1 == a.B && a.nt();
    },
    $V = function(a, b) {
      _.Ua(a.F) && (b = a.F(b));
      a.coords = Array(a.D.length);
      for (var c = 0; c < a.D.length; c++)
        a.coords[c] = (a.G[c] - a.D[c]) * b + a.D[c];
    };
  class aW {
    coords: any;
    x: any;
    y: any;
    z: any;
    duration: any;
    progress: any;
    state: any;
    constructor(a, b) {
      _.rm.call(this, a);
      this.coords = b.coords;
      this.x = b.coords[0];
      this.y = b.coords[1];
      this.z = b.coords[2];
      this.duration = b.duration;
      this.progress = b.Ir();
      this.state = b.B;
    }
  }
  _.t(aW, _.rm);
  class bW {
    O: any;
    Y: any;
    H: any;
    qa: any;
    ua: any;
    D: any;
    B: number;
    C: any;
    W: any;
    F: any;
    ma: number;
    M: number;
    U: any;
    la: string;
    T: boolean;
    oa: any;
    G: any;
    da: any;
    J: any;
    wI(G: any, O: any, arg2: string, wI: any, arg4: undefined): any {
      throw new Error('Method not implemented.');
    }
    pI(G: any, O: any, arg2: string, pI: any, arg4: undefined): any {
      throw new Error('Method not implemented.');
    }
    vI(G: any, O: any, arg2: string, vI: any, arg4: undefined): any {
      throw new Error('Method not implemented.');
    }
    mI(G: any, O: any, arg2: string, mI: any, arg4: undefined): any {
      throw new Error('Method not implemented.');
    }
    tI(G: any, O: any, arg2: string, tI: any, arg4: undefined): any {
      throw new Error('Method not implemented.');
    }
    DD(G: any, H: any, arg2: string, DD: any, arg4: undefined): any {
      throw new Error('Method not implemented.');
    }
    constructor(a, b, c, d, f) {
      _.en.call(this);
      this.O = a;
      this.Y = b;
      this.H = c;
      this.qa = d;
      this.ua = _.Ia(f) ? f : !0;
      this.D = null;
      this.B = 0;
      this.C = new _.mQ(0.5, 0.5);
      this.W = this.F = null;
      this.ma = this.M = 0;
      this.U = MU(this.H);
      this.la = 'fixed';
      this.T = !1;
      this.oa = null;
      this.G = new _.Ks(this);
      _.ni(this, this.G);
      this.da = new _.ws(100);
      _.ni(this, this.da);
      this.J = new $ha(c);
      _.Ms(this.G, this.O, 'zoom', this.wI, void 0);
      _.Ms(this.G, this.O, 'level_change', this.pI, void 0);
      _.Ms(this.G, this.O, 'view_move', this.vI, void 0);
      _.Ms(this.G, this.O, 'drag_move', this.mI, void 0);
      _.Ms(this.G, this.O, 'throw', this.tI, void 0);
      _.Ms(this.G, this.H, 'resize', this.DD, void 0);
      _.Ms(this.G, this.da, 'tick', this.Ca, void 0);
    }
    getState() {
      var a = PT(this.D, this.B),
        b = this.H.B;
      return new _.YR(
        this.C.x,
        this.C.y,
        this.B,
        new _.qo(b.width / a.width, b.height / a.height)
      );
    }
    Ca() {
      var a = this.getState(),
        b = this.oa;
      b = !((null != b) != (null != a)
        ? 0
        : b == a ||
          (b.x == a.x && b.y == a.y && b.z == a.z && _.ro(b.size, a.size)));
      this.oa = a;
      eW(this, b);
    }
  }
  _.t(bW, _.en);
  var kia = function(a, b) {
    a.J.B = b;
    a.C.x = 0.5;
    a.C.y = 0.5;
    a.B = 0;
    a.F = null;
    a.da.start();
    a.D = b;
    b = a.Y;
    var c = _.PU(a.J);
    b.T = c;
    OV(b) || b.setVisible(!1);
    a.B = 0;
    cW(a, _.PU(a.J), 0);
  };
  var gW = function(a, b, c) {
      c ? dW(a, b.x, b.y) : ((a.C.x = b.x), (a.C.y = b.y));
      eW(a, !0);
      fW(a);
    },
    jW = function(a, b, c, d) {
      var f = a.M + b;
      1 == Math.abs(b) && (f = Math.round(f));
      f = hW(a, f);
      iW(a);
      f != a.B && cW(a, f, c ? void 0 : 0, d);
    },
    cW = function(a, b, c, d) {
      a.W = _.Ia(d) ? d : null;
      iW(a);
      !a.ua || (_.Ia(c) && 0 >= c)
        ? ((a.M = b), kW(a, b, a.W))
        : ((a.M = b),
          (a.ma = a.B),
          (a.F = new ZV(
            [void 0, void 0, 0],
            [void 0, void 0, 1],
            c || 600,
            _.GS
          )),
          _.ni(a, a.F),
          _.Ms(a.G, a.F, 'animate', a.mt, void 0),
          _.Ps(a.G, a.F, 'end', a.hA),
          a.F.play());
    },
    lW = function(a, b, c, d) {
      iW(a);
      a.ma = a.B;
      a.M = null != c ? c : a.B;
      c = a.B != a.M;
      a.F = new ZV(
        [a.C.x, a.C.y, c ? 0 : void 0],
        [b.x, b.y, c ? 1 : void 0],
        d || 500,
        _.GS
      );
      _.ni(a, a.F);
      _.Ms(a.G, a.F, 'animate', a.mt, void 0);
      _.Ps(a.G, a.F, 'end', a.hA);
      a.F.play();
    };
  _.e = bW.prototype;
  _.e.DD = function() {
    if (this.D) {
      var a = 0;
      if (this.U && 'scale' == this.la) {
        a = MU(this.H);
        var b = PT(this.D, this.B);
        a = getPyramidLevelIndex(
          this.D,
          new _.qo(
            (a.width / this.U.width) * b.width,
            (a.height / this.U.height) * b.height
          )
        );
        a -= this.B;
      } else
        'fill' == this.la &&
          ((a = MU(this.H)),
          (a = getPyramidLevelAccordingToDimensionsRatio(
            this.D,
            new _.qo(a.width, a.height)
          )),
          (a -= this.B));
      this.U = MU(this.H);
      b = this.Y;
      var c = _.PU(this.J);
      b.T = c;
      OV(b) || b.setVisible(!1);
      jW(this, a, !1);
      mW(this);
      fW(this);
    }
  };
  _.e.vI = function(a) {
    gW(this, a.position, !0);
  };
  _.e.tI = function(a) {
    if (null != a.be) {
      var b = PT(this.D, this.B);
      lW(
        this,
        new _.mQ(this.C.x - a.be.x / b.width, this.C.y - a.be.y / b.height)
      );
    } else iW(this);
  };
  _.e.wI = function(a) {
    jW(this, a.F, 4 != a.H, a.G);
  };
  _.e.pI = function(a) {
    var b = hW(this, a.F);
    cW(this, b, a.animate ? void 0 : 0, a.G);
  };
  _.e.mI = function(a) {
    if (null == this.D) throw Error('Hb');
    if (null == this.F) {
      var b = PT(this.D, this.B);
      gW(
        this,
        new _.mQ(this.C.x - a.F.x / b.width, this.C.y - a.F.y / b.height),
        !0
      );
    }
  };
  _.e.mt = function(a) {
    var b = this.B;
    null == a.z ||
      isNaN(a.z) ||
      ((b = this.ma), (b = hW(this, b + a.z * (this.M - b))));
    kW(this, b, this.W);
    null == a.x ||
      isNaN(a.x) ||
      null == a.y ||
      isNaN(a.y) ||
      gW(this, new _.mQ(a.x, a.y), !0);
  };
  _.e.hA = function(a) {
    this.mt(a);
    this.M = this.B;
    this.W = this.F = null;
  };
  var hW = function(a, b) {
    return _.di(b, _.PU(a.J), a.D.C - 1);
  };
  var eW = function(a, b) {
      var c = a.T;
      a.T = b;
      c != a.T && fW(a);
    },
    kW = function(a, b, c) {
      if (null != c) {
        var d = a.H.B,
          f = PT(a.D, b),
          g = (c.x - d.width / 2) / f.width;
        d = (c.y - d.height / 2) / f.height;
        f = nW(a, a.B);
        var k = PT(a.D, a.B),
          l = (c.y - f.y) / k.height;
        a.C.x = (c.x - f.x) / k.width - g;
        a.C.y = l - d;
      }
      a.B = hW(a, b);
      c = a.Y;
      c.od = a.B;
      4 == c.ld && (0, _.bb)() - c.zd < c.O.B && c.setVisible(OV(c));
      b = c.J;
      c = (c.od - c.T) / (c.oa - c.T);
      c = Math.max(Math.min(c, 1), 0);
      null == b.da && (b.da = _.qM(b.B));
      b.da
        ? (b.H.style.marginRight = b.T * c + 'px')
        : (b.H.style.marginLeft = b.T * c + 'px');
      mW(a);
      eW(a, !0);
      fW(a);
    },
    fW = function(a) {
      var b = PT(a.D, a.B),
        c = nW(a, a.B),
        d = a.H.B;
      a.Ga(
        new SU(
          -(c.x / b.width),
          -(c.y / b.height),
          (d.width - c.x + b.width) / b.width - 1,
          (d.height - c.y + b.height) / b.height - 1,
          a.T
        )
      );
      b = nW(a, 0);
      c = PT(a.D, a.B);
      a.qa.D.J = a.T;
      xV(a.qa, b.x, b.y, c, a.B);
    },
    iW = function(a) {
      null != a.F && (a.F.stop(!1), (a.F = null));
    },
    nW = function(a, b) {
      b = PT(a.D, b);
      var c = a.H.B;
      c = new _.mQ(
        c.width / 2 - b.width * a.C.x,
        c.height / 2 - b.height * a.C.y
      );
      var d = PT(a.D, a.B);
      c.x += a.C.x * (b.width - d.width);
      c.y += a.C.y * (b.height - d.height);
      return c;
    },
    dW = function(a, b, c) {
      var d = a.C.x,
        f = a.C.y;
      a.C.x = b;
      a.C.y = c;
      mW(a, d, f);
    },
    mW = function(a, b, c) {
      var d = a.J;
      var f = a.getState();
      var g = f.x,
        k = f.y,
        l = PT(d.B, f.z),
        m = d.D.B;
      g = QU(g, null != b ? b : g, m.width / l.width);
      k = QU(k, null != c ? c : k, m.height / l.height);
      c = OU(d);
      b = c.width / l.width;
      m = c.height / l.height;
      var r = (d = 0);
      b > m ? (d = Math.max((b - m) / 2, 0)) : (r = Math.max((m - b) / 2, 0));
      l = k + Math.max(-0.5, -m / 2 + r);
      c = g + Math.min(0.5, b / 2 - d);
      m = k + Math.min(0.5, m / 2 - r);
      b = g + Math.max(-0.5, -b / 2 + d);
      0 > b ? (g -= b) : 1 < c && (g += 1 - c);
      0 > l ? (k -= l) : 1 < m && (k += 1 - m);
      f = new _.YR(g, k, f.z);
      a.C.x = f.x;
      a.C.y = f.y;
    };
  class rW {
    F: any;
    C: number;
    G: any;
    D: any[][];
    J: any[][];
    B: any[];
    H: number;
    constructor(a) {
      this.F = a;
      this.C = this.F.length / 4;
      this.G = this.C + 6;
      this.D = [[], [], [], []];
      this.J = [[], [], [], []];
      this.B = Array(oW * (this.G + 1));
      for (a = 0; a < this.C; a++)
        this.B[a] = [
          this.F[4 * a],
          this.F[4 * a + 1],
          this.F[4 * a + 2],
          this.F[4 * a + 3]
        ];
      var b = Array(4);
      for (a = this.C; a < oW * (this.G + 1); a++) {
        b[0] = this.B[a - 1][0];
        b[1] = this.B[a - 1][1];
        b[2] = this.B[a - 1][2];
        b[3] = this.B[a - 1][3];
        if (0 == a % this.C) {
          var c = b,
            d = c[0];
          c[0] = c[1];
          c[1] = c[2];
          c[2] = c[3];
          c[3] = d;
          pW(b);
          b[0] ^= qW[a / this.C][0];
          b[1] ^= qW[a / this.C][1];
          b[2] ^= qW[a / this.C][2];
          b[3] ^= qW[a / this.C][3];
        } else 6 < this.C && 4 == a % this.C && pW(b);
        this.B[a] = Array(4);
        this.B[a][0] = this.B[a - this.C][0] ^ b[0];
        this.B[a][1] = this.B[a - this.C][1] ^ b[1];
        this.B[a][2] = this.B[a - this.C][2] ^ b[2];
        this.B[a][3] = this.B[a - this.C][3] ^ b[3];
      }
    }
  }
  rW.prototype.H = 16;
  var oW = rW.prototype.H / 4,
    sW = function(a, b) {
      for (var c = 0; 4 > c; c++)
        for (var d = 0; 4 > d; d++) a.D[c][d] ^= a.B[4 * b + d][c];
    },
    tW = function(a) {
      for (var b = lia, c = 0; 4 > c; c++)
        for (var d = 0; 4 > d; d++) a.D[c][d] = b[a.D[c][d]];
    },
    uW = function(a) {
      for (var b = 1; 4 > b; b++)
        for (var c = 0; 4 > c; c++) a.J[b][(c + b) % oW] = a.D[b][c];
      for (b = 1; 4 > b; b++) for (c = 0; 4 > c; c++) a.D[b][c] = a.J[b][c];
    },
    pW = function(a) {
      a[0] = vW[a[0]];
      a[1] = vW[a[1]];
      a[2] = vW[a[2]];
      a[3] = vW[a[3]];
    },
    vW = [
      99,
      124,
      119,
      123,
      242,
      107,
      111,
      197,
      48,
      1,
      103,
      43,
      254,
      215,
      171,
      118,
      202,
      130,
      201,
      125,
      250,
      89,
      71,
      240,
      173,
      212,
      162,
      175,
      156,
      164,
      114,
      192,
      183,
      253,
      147,
      38,
      54,
      63,
      247,
      204,
      52,
      165,
      229,
      241,
      113,
      216,
      49,
      21,
      4,
      199,
      35,
      195,
      24,
      150,
      5,
      154,
      7,
      18,
      128,
      226,
      235,
      39,
      178,
      117,
      9,
      131,
      44,
      26,
      27,
      110,
      90,
      160,
      82,
      59,
      214,
      179,
      41,
      227,
      47,
      132,
      83,
      209,
      0,
      237,
      32,
      252,
      177,
      91,
      106,
      203,
      190,
      57,
      74,
      76,
      88,
      207,
      208,
      239,
      170,
      251,
      67,
      77,
      51,
      133,
      69,
      249,
      2,
      127,
      80,
      60,
      159,
      168,
      81,
      163,
      64,
      143,
      146,
      157,
      56,
      245,
      188,
      182,
      218,
      33,
      16,
      255,
      243,
      210,
      205,
      12,
      19,
      236,
      95,
      151,
      68,
      23,
      196,
      167,
      126,
      61,
      100,
      93,
      25,
      115,
      96,
      129,
      79,
      220,
      34,
      42,
      144,
      136,
      70,
      238,
      184,
      20,
      222,
      94,
      11,
      219,
      224,
      50,
      58,
      10,
      73,
      6,
      36,
      92,
      194,
      211,
      172,
      98,
      145,
      149,
      228,
      121,
      231,
      200,
      55,
      109,
      141,
      213,
      78,
      169,
      108,
      86,
      244,
      234,
      101,
      122,
      174,
      8,
      186,
      120,
      37,
      46,
      28,
      166,
      180,
      198,
      232,
      221,
      116,
      31,
      75,
      189,
      139,
      138,
      112,
      62,
      181,
      102,
      72,
      3,
      246,
      14,
      97,
      53,
      87,
      185,
      134,
      193,
      29,
      158,
      225,
      248,
      152,
      17,
      105,
      217,
      142,
      148,
      155,
      30,
      135,
      233,
      206,
      85,
      40,
      223,
      140,
      161,
      137,
      13,
      191,
      230,
      66,
      104,
      65,
      153,
      45,
      15,
      176,
      84,
      187,
      22
    ],
    lia = [
      82,
      9,
      106,
      213,
      48,
      54,
      165,
      56,
      191,
      64,
      163,
      158,
      129,
      243,
      215,
      251,
      124,
      227,
      57,
      130,
      155,
      47,
      255,
      135,
      52,
      142,
      67,
      68,
      196,
      222,
      233,
      203,
      84,
      123,
      148,
      50,
      166,
      194,
      35,
      61,
      238,
      76,
      149,
      11,
      66,
      250,
      195,
      78,
      8,
      46,
      161,
      102,
      40,
      217,
      36,
      178,
      118,
      91,
      162,
      73,
      109,
      139,
      209,
      37,
      114,
      248,
      246,
      100,
      134,
      104,
      152,
      22,
      212,
      164,
      92,
      204,
      93,
      101,
      182,
      146,
      108,
      112,
      72,
      80,
      253,
      237,
      185,
      218,
      94,
      21,
      70,
      87,
      167,
      141,
      157,
      132,
      144,
      216,
      171,
      0,
      140,
      188,
      211,
      10,
      247,
      228,
      88,
      5,
      184,
      179,
      69,
      6,
      208,
      44,
      30,
      143,
      202,
      63,
      15,
      2,
      193,
      175,
      189,
      3,
      1,
      19,
      138,
      107,
      58,
      145,
      17,
      65,
      79,
      103,
      220,
      234,
      151,
      242,
      207,
      206,
      240,
      180,
      230,
      115,
      150,
      172,
      116,
      34,
      231,
      173,
      53,
      133,
      226,
      249,
      55,
      232,
      28,
      117,
      223,
      110,
      71,
      241,
      26,
      113,
      29,
      41,
      197,
      137,
      111,
      183,
      98,
      14,
      170,
      24,
      190,
      27,
      252,
      86,
      62,
      75,
      198,
      210,
      121,
      32,
      154,
      219,
      192,
      254,
      120,
      205,
      90,
      244,
      31,
      221,
      168,
      51,
      136,
      7,
      199,
      49,
      177,
      18,
      16,
      89,
      39,
      128,
      236,
      95,
      96,
      81,
      127,
      169,
      25,
      181,
      74,
      13,
      45,
      229,
      122,
      159,
      147,
      201,
      156,
      239,
      160,
      224,
      59,
      77,
      174,
      42,
      245,
      176,
      200,
      235,
      187,
      60,
      131,
      83,
      153,
      97,
      23,
      43,
      4,
      126,
      186,
      119,
      214,
      38,
      225,
      105,
      20,
      99,
      85,
      33,
      12,
      125
    ],
    qW = [
      [0, 0, 0, 0],
      [1, 0, 0, 0],
      [2, 0, 0, 0],
      [4, 0, 0, 0],
      [8, 0, 0, 0],
      [16, 0, 0, 0],
      [32, 0, 0, 0],
      [64, 0, 0, 0],
      [128, 0, 0, 0],
      [27, 0, 0, 0],
      [54, 0, 0, 0]
    ],
    wW = [
      0,
      9,
      18,
      27,
      36,
      45,
      54,
      63,
      72,
      65,
      90,
      83,
      108,
      101,
      126,
      119,
      144,
      153,
      130,
      139,
      180,
      189,
      166,
      175,
      216,
      209,
      202,
      195,
      252,
      245,
      238,
      231,
      59,
      50,
      41,
      32,
      31,
      22,
      13,
      4,
      115,
      122,
      97,
      104,
      87,
      94,
      69,
      76,
      171,
      162,
      185,
      176,
      143,
      134,
      157,
      148,
      227,
      234,
      241,
      248,
      199,
      206,
      213,
      220,
      118,
      127,
      100,
      109,
      82,
      91,
      64,
      73,
      62,
      55,
      44,
      37,
      26,
      19,
      8,
      1,
      230,
      239,
      244,
      253,
      194,
      203,
      208,
      217,
      174,
      167,
      188,
      181,
      138,
      131,
      152,
      145,
      77,
      68,
      95,
      86,
      105,
      96,
      123,
      114,
      5,
      12,
      23,
      30,
      33,
      40,
      51,
      58,
      221,
      212,
      207,
      198,
      249,
      240,
      235,
      226,
      149,
      156,
      135,
      142,
      177,
      184,
      163,
      170,
      236,
      229,
      254,
      247,
      200,
      193,
      218,
      211,
      164,
      173,
      182,
      191,
      128,
      137,
      146,
      155,
      124,
      117,
      110,
      103,
      88,
      81,
      74,
      67,
      52,
      61,
      38,
      47,
      16,
      25,
      2,
      11,
      215,
      222,
      197,
      204,
      243,
      250,
      225,
      232,
      159,
      150,
      141,
      132,
      187,
      178,
      169,
      160,
      71,
      78,
      85,
      92,
      99,
      106,
      113,
      120,
      15,
      6,
      29,
      20,
      43,
      34,
      57,
      48,
      154,
      147,
      136,
      129,
      190,
      183,
      172,
      165,
      210,
      219,
      192,
      201,
      246,
      255,
      228,
      237,
      10,
      3,
      24,
      17,
      46,
      39,
      60,
      53,
      66,
      75,
      80,
      89,
      102,
      111,
      116,
      125,
      161,
      168,
      179,
      186,
      133,
      140,
      151,
      158,
      233,
      224,
      251,
      242,
      205,
      196,
      223,
      214,
      49,
      56,
      35,
      42,
      21,
      28,
      7,
      14,
      121,
      112,
      107,
      98,
      93,
      84,
      79,
      70
    ],
    xW = [
      0,
      11,
      22,
      29,
      44,
      39,
      58,
      49,
      88,
      83,
      78,
      69,
      116,
      127,
      98,
      105,
      176,
      187,
      166,
      173,
      156,
      151,
      138,
      129,
      232,
      227,
      254,
      245,
      196,
      207,
      210,
      217,
      123,
      112,
      109,
      102,
      87,
      92,
      65,
      74,
      35,
      40,
      53,
      62,
      15,
      4,
      25,
      18,
      203,
      192,
      221,
      214,
      231,
      236,
      241,
      250,
      147,
      152,
      133,
      142,
      191,
      180,
      169,
      162,
      246,
      253,
      224,
      235,
      218,
      209,
      204,
      199,
      174,
      165,
      184,
      179,
      130,
      137,
      148,
      159,
      70,
      77,
      80,
      91,
      106,
      97,
      124,
      119,
      30,
      21,
      8,
      3,
      50,
      57,
      36,
      47,
      141,
      134,
      155,
      144,
      161,
      170,
      183,
      188,
      213,
      222,
      195,
      200,
      249,
      242,
      239,
      228,
      61,
      54,
      43,
      32,
      17,
      26,
      7,
      12,
      101,
      110,
      115,
      120,
      73,
      66,
      95,
      84,
      247,
      252,
      225,
      234,
      219,
      208,
      205,
      198,
      175,
      164,
      185,
      178,
      131,
      136,
      149,
      158,
      71,
      76,
      81,
      90,
      107,
      96,
      125,
      118,
      31,
      20,
      9,
      2,
      51,
      56,
      37,
      46,
      140,
      135,
      154,
      145,
      160,
      171,
      182,
      189,
      212,
      223,
      194,
      201,
      248,
      243,
      238,
      229,
      60,
      55,
      42,
      33,
      16,
      27,
      6,
      13,
      100,
      111,
      114,
      121,
      72,
      67,
      94,
      85,
      1,
      10,
      23,
      28,
      45,
      38,
      59,
      48,
      89,
      82,
      79,
      68,
      117,
      126,
      99,
      104,
      177,
      186,
      167,
      172,
      157,
      150,
      139,
      128,
      233,
      226,
      255,
      244,
      197,
      206,
      211,
      216,
      122,
      113,
      108,
      103,
      86,
      93,
      64,
      75,
      34,
      41,
      52,
      63,
      14,
      5,
      24,
      19,
      202,
      193,
      220,
      215,
      230,
      237,
      240,
      251,
      146,
      153,
      132,
      143,
      190,
      181,
      168,
      163
    ],
    yW = [
      0,
      13,
      26,
      23,
      52,
      57,
      46,
      35,
      104,
      101,
      114,
      127,
      92,
      81,
      70,
      75,
      208,
      221,
      202,
      199,
      228,
      233,
      254,
      243,
      184,
      181,
      162,
      175,
      140,
      129,
      150,
      155,
      187,
      182,
      161,
      172,
      143,
      130,
      149,
      152,
      211,
      222,
      201,
      196,
      231,
      234,
      253,
      240,
      107,
      102,
      113,
      124,
      95,
      82,
      69,
      72,
      3,
      14,
      25,
      20,
      55,
      58,
      45,
      32,
      109,
      96,
      119,
      122,
      89,
      84,
      67,
      78,
      5,
      8,
      31,
      18,
      49,
      60,
      43,
      38,
      189,
      176,
      167,
      170,
      137,
      132,
      147,
      158,
      213,
      216,
      207,
      194,
      225,
      236,
      251,
      246,
      214,
      219,
      204,
      193,
      226,
      239,
      248,
      245,
      190,
      179,
      164,
      169,
      138,
      135,
      144,
      157,
      6,
      11,
      28,
      17,
      50,
      63,
      40,
      37,
      110,
      99,
      116,
      121,
      90,
      87,
      64,
      77,
      218,
      215,
      192,
      205,
      238,
      227,
      244,
      249,
      178,
      191,
      168,
      165,
      134,
      139,
      156,
      145,
      10,
      7,
      16,
      29,
      62,
      51,
      36,
      41,
      98,
      111,
      120,
      117,
      86,
      91,
      76,
      65,
      97,
      108,
      123,
      118,
      85,
      88,
      79,
      66,
      9,
      4,
      19,
      30,
      61,
      48,
      39,
      42,
      177,
      188,
      171,
      166,
      133,
      136,
      159,
      146,
      217,
      212,
      195,
      206,
      237,
      224,
      247,
      250,
      183,
      186,
      173,
      160,
      131,
      142,
      153,
      148,
      223,
      210,
      197,
      200,
      235,
      230,
      241,
      252,
      103,
      106,
      125,
      112,
      83,
      94,
      73,
      68,
      15,
      2,
      21,
      24,
      59,
      54,
      33,
      44,
      12,
      1,
      22,
      27,
      56,
      53,
      34,
      47,
      100,
      105,
      126,
      115,
      80,
      93,
      74,
      71,
      220,
      209,
      198,
      203,
      232,
      229,
      242,
      255,
      180,
      185,
      174,
      163,
      128,
      141,
      154,
      151
    ],
    zW = [
      0,
      14,
      28,
      18,
      56,
      54,
      36,
      42,
      112,
      126,
      108,
      98,
      72,
      70,
      84,
      90,
      224,
      238,
      252,
      242,
      216,
      214,
      196,
      202,
      144,
      158,
      140,
      130,
      168,
      166,
      180,
      186,
      219,
      213,
      199,
      201,
      227,
      237,
      255,
      241,
      171,
      165,
      183,
      185,
      147,
      157,
      143,
      129,
      59,
      53,
      39,
      41,
      3,
      13,
      31,
      17,
      75,
      69,
      87,
      89,
      115,
      125,
      111,
      97,
      173,
      163,
      177,
      191,
      149,
      155,
      137,
      135,
      221,
      211,
      193,
      207,
      229,
      235,
      249,
      247,
      77,
      67,
      81,
      95,
      117,
      123,
      105,
      103,
      61,
      51,
      33,
      47,
      5,
      11,
      25,
      23,
      118,
      120,
      106,
      100,
      78,
      64,
      82,
      92,
      6,
      8,
      26,
      20,
      62,
      48,
      34,
      44,
      150,
      152,
      138,
      132,
      174,
      160,
      178,
      188,
      230,
      232,
      250,
      244,
      222,
      208,
      194,
      204,
      65,
      79,
      93,
      83,
      121,
      119,
      101,
      107,
      49,
      63,
      45,
      35,
      9,
      7,
      21,
      27,
      161,
      175,
      189,
      179,
      153,
      151,
      133,
      139,
      209,
      223,
      205,
      195,
      233,
      231,
      245,
      251,
      154,
      148,
      134,
      136,
      162,
      172,
      190,
      176,
      234,
      228,
      246,
      248,
      210,
      220,
      206,
      192,
      122,
      116,
      102,
      104,
      66,
      76,
      94,
      80,
      10,
      4,
      22,
      24,
      50,
      60,
      46,
      32,
      236,
      226,
      240,
      254,
      212,
      218,
      200,
      198,
      156,
      146,
      128,
      142,
      164,
      170,
      184,
      182,
      12,
      2,
      16,
      30,
      52,
      58,
      40,
      38,
      124,
      114,
      96,
      110,
      68,
      74,
      88,
      86,
      55,
      57,
      43,
      37,
      15,
      1,
      19,
      29,
      71,
      73,
      91,
      85,
      127,
      113,
      99,
      109,
      215,
      217,
      203,
      197,
      239,
      225,
      243,
      253,
      167,
      169,
      187,
      181,
      159,
      145,
      131,
      141
    ];
  class mia {
    B: any;
    constructor(a) {
      this.B = a;
    }
  }
  var AW = function(a, b) {
    return a[b] + (a[b + 1] << 8) + (a[b + 2] << 16) + (a[b + 3] << 24);
  };
  var BW = function(a) {
    return 'undefined' != typeof Uint8Array && a instanceof Uint8Array;
  };
  class nia {
    C: number[];
    B: mia;
    constructor() {
      this.C = [
        7,
        49,
        57,
        70,
        73,
        113,
        231,
        4,
        5,
        53,
        58,
        119,
        139,
        250,
        111,
        188,
        48,
        50,
        27,
        149,
        146,
        18,
        19,
        23,
        49,
        80,
        23
      ];
      var a = [
        40,
        55,
        67,
        80,
        83,
        91,
        99,
        219,
        17,
        59,
        122,
        243,
        224,
        177,
        67,
        85,
        86,
        200,
        249,
        83,
        12,
        4,
        50,
        72,
        73,
        85,
        39
      ];
      a = new rW(null == a ? [] : a.slice(5, 21));
      this.B = new mia(a);
    }
  }
  var lV = null;
  class oia {
    B: any;
    constructor(a) {
      this.B = a;
    }
  }
  class CW {
    G: nia;
    W: boolean;
    F: boolean;
    J: any;
    H: string;
    B: any;
    C: boolean;
    D: any;
    constructor(a) {
      _.ki.call(this);
      this.G = new nia();
      this.W = 'undefined' != typeof Uint8Array;
      this.F = null != dU();
      this.J = (0, _.q)(
        a ? (this.W ? this.M : _.bd ? this.U : this.T) : this.O,
        this
      );
      this.H = _.bd && !_.Bd('11') ? 'readystatechange' : 'load';
      this.B = new _.Vs();
      this.C = !0;
      this.D = new _.Ks(this);
      _.ni(this, this.D);
    }
    load(a, b) {
      this.J(a, function(c) {
        setTimeout(function() {
          b(a, new oia(c));
        }, 1);
      });
    }
    O(a, b, c) {
      var d = new Image();
      _.Ia(c) && c && (d.crossOrigin = 'anonymous');
      _.Ns(this.D, d, this.H, function(c) {
        (('readystatechange' == c.type && 'complete' == d.readyState) ||
          'load' == c.type ||
          d.complete) &&
          setTimeout(function() {
            b(_.Mn(a));
          }, 1);
      });
      d.src = a;
    }
    M(a, b) {
      var c = new XMLHttpRequest();
      c.open('GET', a, !0);
      c.responseType = 'arraybuffer';
      _.Ns(this.D, c, 'load', function() {
        200 == c.status &&
          EW(
            this,
            (0, _.q)(function() {
              var a = new Uint8Array(c.response);
              FW(this, a, b);
            }, this)
          );
      });
      c.send();
    }
    T(a, b) {
      var c = new XMLHttpRequest();
      c.open('GET', a, !0);
      c.overrideMimeType('text/plain; charset=x-user-defined');
      _.Ns(this.D, c, 'readystatechange', function() {
        4 == c.readyState &&
          200 == c.status &&
          EW(
            this,
            (0, _.q)(function() {
              for (var a = [], f = 0, g = c.responseText.length; f < g; ++f)
                a.push(c.responseText.charCodeAt(f) & 255);
              FW(this, a, b);
            }, this)
          );
      });
      c.send();
    }
    U(a) {
      new XDomainRequest().open('GET', a);
      EW(this, function() {
        throw Error('Jb');
      });
    }
  }
  _.t(CW, TU);
  var EW = function(a, b) {
      a.C && a.B.isEmpty() && DW(a);
      a.B.B.push(b);
    },
    DW = function(a) {
      setTimeout(
        (0, _.q)(function() {
          this.C &&
            !this.B.isEmpty() &&
            (_.Xs(this.B)(), this.B.isEmpty() || DW(this));
        }, a),
        0
      );
    };
  var FW = function(a, b, c) {
    var d = a.G,
      f = b;
    if (10 == f[0] && 10 == f[1] && 10 == f[2] && 10 == f[3]) {
      b = AW(f, f.length - 4);
      var g = f.length - 4;
      f = BW(f) ? f.subarray(4, g) : f.slice(4, g);
      g = AW(f, b);
      if (BW(f)) {
        var k = new Uint8Array(f.length - 4);
        k.set(f.subarray(0, b));
        k.set(f.subarray(b + 4), b);
        f = k;
      } else f.splice(b, 4);
      g = b + g;
      g = BW(f) ? f.subarray(b, g) : f.slice(b, g);
      try {
        var l = d.C.slice(5, 21),
          m = d.B;
        d = [];
        for (k = 0; k < g.length; ) {
          for (
            var r = _.Eb(g, k, k + m.B.H),
              v = m.B,
              x = void 0,
              y = void 0,
              B = v,
              H = r,
              M = 0;
            M < oW;
            M++
          )
            for (var X = 0; 4 > X; X++)
              (x = 4 * X + M), (y = H[x]), (B.D[M][X] = y);
          sW(v, v.G);
          for (x = 1; x < v.G; ++x) {
            uW(v);
            tW(v);
            sW(v, v.G - x);
            var Z = v.D,
              ta = v.J[0];
            for (y = 0; 4 > y; y++)
              (ta[0] = Z[0][y]),
                (ta[1] = Z[1][y]),
                (ta[2] = Z[2][y]),
                (ta[3] = Z[3][y]),
                (Z[0][y] = zW[ta[0]] ^ xW[ta[1]] ^ yW[ta[2]] ^ wW[ta[3]]),
                (Z[1][y] = wW[ta[0]] ^ zW[ta[1]] ^ xW[ta[2]] ^ yW[ta[3]]),
                (Z[2][y] = yW[ta[0]] ^ wW[ta[1]] ^ zW[ta[2]] ^ xW[ta[3]]),
                (Z[3][y] = xW[ta[0]] ^ yW[ta[1]] ^ wW[ta[2]] ^ zW[ta[3]]);
          }
          uW(v);
          tW(v);
          sW(v, 0);
          y = v;
          x = [];
          for (B = 0; B < oW; B++)
            for (H = 0; 4 > H; H++) x[4 * H + B] = y.D[B][H];
          y = l;
          B = [];
          for (H = 0; H < y.length; H++) B.push(y[H] ^ x[H]);
          _.Db(d, B);
          l = r;
          k += m.B.H;
        }
        var Ga = d;
      } catch (lb) {
        throw Error('Ib`' + lb.toString());
      }
      for (m = 0; m < Ga.length; ++m) f[m + b] = Ga[m];
      b = f;
    } else b = f;
    a.F
      ? c(
          _.eU(
            new Blob([b], {
              type: 'image/jpg'
            })
          )
        )
      : ((a = 'data:image/jpeg;base64,' + _.Wd(b)), (a = _.Kn(a)), c(a));
  };
  var pia = function() {
      if (!_.bd) return !1;
      try {
        return new ActiveXObject('MSXML2.DOMDocument'), !0;
      } catch (a) {
        return !1;
      }
    },
    qia = _.bd && pia();
  var sia = function(a, b) {
      return ria(a, function(a) {
        b(a);
      });
    },
    ria = function(a, b) {
      var c = window.XDomainRequest;
      if (c) {
        var d = new c();
        d.open('GET', a);
        d.onload = function() {
          var a = d.responseText;
          if ('undefined' != typeof DOMParser)
            a = new DOMParser().parseFromString(a, 'application/xml');
          else if (qia) {
            var c = new ActiveXObject('MSXML2.DOMDocument');
            c.resolveExternals = !1;
            c.validateOnParse = !1;
            try {
              c.setProperty('ProhibitDTD', !0),
                c.setProperty('MaxXMLSize', 2048),
                c.setProperty('MaxElementDepth', 256);
            } catch (k) {}
            c.loadXML(a);
            a = c;
          } else throw Error('Kb');
          b(a);
        };
        d.onerror = function() {
          b(null);
        };
        d.onprogress = _.Qa;
        d.send();
        a = new _.ki();
        _.li(a, function() {
          d.onload = _.Qa;
          d.onerror = _.Qa;
          d.abort();
        });
        return a;
      }
      d = new _.Ot();
      _.Pm(d, 'complete', function() {
        try {
          var a = this.B ? this.B.responseXML : null;
        } catch (g) {
          a = null;
        }
        b(a);
      });
      d.send(a);
      return d;
    };
  class GW {
    D: number;
    G: number;
    H: any;
    C: any;
    F: any;
    J: any;
    O: any;
    B: any;
    constructor(a, b, c, d, f) {
      _.ki.call(this);
      this.D = 2e3;
      this.G = 0;
      this.H = new _.hD(this.load, 0, this);
      _.ni(this, this.H);
      this.C = a;
      this.F = b;
      this.J = c || _.Qa;
      this.O = d || _.Qa;
      this.B = f || null;
    }
    load() {
      if (!this.C.$k((0, _.q)(this.F, this.B))) {
        var a = sia(this.C.Mr(), (0, _.q)(this.M, this));
        _.ni(this, a);
      }
    }
    M(a) {
      var b = null;
      if (a)
        try {
          b = this.C.Lk(a);
        } catch (c) {}
      (a = b) && this.C.Kd(a)
        ? this.F.call(this.B, a)
        : this.C.Dq(a)
        ? (++this.G,
          5 > this.G
            ? (this.O.call(this.B), this.H.start(this.D), (this.D *= 2))
            : this.J.call(this.B))
        : this.J.call(this.B);
    }
  }
  _.t(GW, _.ki);
  var uia;
  class HW {
    Ca: any;
    oa: any;
    ua: any;
    La: any;
    W: CW;
    T: UU;
    F: any;
    ma: any;
    U: any;
    H: any;
    jb: boolean;
    Y: any;
    M: any;
    J: NU;
    G: fV;
    C: PV;
    da: PyramidInformationMT;
    la: any;
    O: any;
    D: any;
    B: any;
    qa: any[];
    static Ba: any;
    constructor(a, b, c) {
      _.ki.call(this);
      this.Ca = 'WebKitCSSMatrix' in window && b.Km;
      this.oa = null != b.Ue ? b.Ue : !0;
      this.ua = b.$V || 'transparent';
      this.La = c || null;
      this.W = new CW(b.Bk);
      _.ni(this, this.W);
      this.T = new UU(this.W, 100);
      _.ni(this, this.T);
      this.F = this.Ax(a);
      _.ni(this, this.F);
      this.ma = this.U = this.H = null;
      this.jb = !1;
      this.Y = null;
      this.M = new _.Ks(this);
      _.ni(this, this.M);
      this.J = new NU(this.F.L(), this.oa);
      a = this.F;
      b = this.J;
      null === a.J || _.Xm(a.F);
      a.F = _.Pm(b, 'resize', (0, _.q)(a.Jt, a));
      a.J = b;
      _.ni(this, this.J);
      this.G = new fV(this.J);
      _.ni(this, this.G);
      this.C = new PV((0, _.q)(this.Ax, this), this.T);
      _.ni(this, this.C);
      this.da = this.la = this.O = this.D = this.B = null;
      this.qa = [];
      this.init();
    }
    Ax(a: any): any {
      throw new Error('Method not implemented.');
    }
    init() {
      this.C.render(this.F.L());
      this.G.render(this.F.L());
      this.la = new zV(this.T);
      this.O = new vV(this.J, this.F, this.la, (0, _.q)(this.uN, this));
      _.ni(this, this.O);
      var a = new KU(this.La || this.G);
      a.D = !0;
      a.H = !0;
      a.J = !0;
      a.G = !0;
      a.F = !0;
      a = a.add(this.C);
      var b = [],
        c = null;
      a.J && ((c = new IU(a.B)), b.push(c));
      var d = null;
      a.F && ((d = new rU()), b.push(d));
      a.G && b.push(new tU(a.B));
      if (a.D) {
        var f = new pU(a.B);
        b.push(f);
        a.H && ((f = new vU(f)), b.push(f));
      }
      this.D = new JU(b, a.C, c, d);
      _.ni(this, this.D);
      this.B = new bW(this.D, this.C, this.J, this.O);
      _.ni(this, this.B);
      _.Ms(this.M, this.B, 'viewport_update', this.kO, void 0);
      _.Ms(this.M, this.O, 'tile_loaded', this.CD, void 0);
      a = (0, _.q)(this.G.F, this.G, !0);
      _.Ms(this.M, this.D, 'drag_start', a, void 0);
      a = (0, _.q)(this.G.F, this.G, !1);
      _.Ms(this.M, this.D, 'drag_end', a, void 0);
      _.Ms(
        this.M,
        this.D,
        ['drag_start', 'drag_hover', 'zoom'],
        this.uD,
        void 0
      );
      sV(this.F);
    }
    uN(uN: any, arg1: this): any {
      throw new Error('Method not implemented.');
    }
    kO(M: any, B: any, arg2: string, kO: any, arg4: undefined): any {
      throw new Error('Method not implemented.');
    }
    CD(M: any, O: any, arg2: string, CD: any, arg4: undefined): any {
      throw new Error('Method not implemented.');
    }
    uD(M: any, D: any, arg2: string[], uD: any, arg4: undefined): any {
      throw new Error('Method not implemented.');
    }
    getCurrentState() {
      return this.B.getState();
    }
    center() {
      gW(this.B, new _.mQ(0.5, 0.5));
    }
  }
  _.t(HW, _.ki);
  uia = function(a, b) {
    a.H && a.H.Ta();
    a.H = new GW(
      b,
      function(a) {
        tia(this, a, b);
        this.U && this.U(!0);
      },
      function() {
        this.U && this.U(!1);
      },
      function() {},
      a
    );
    a.H.load();
  };
  _.IW = function(a, b, c) {
    a = a.B;
    b = b || null == b;
    var d = OU(a.J);
    cW(
      a,
      'fill' == c
        ? getPyramidLevelAccordingToDimensionsRatio(a.D, d)
        : getPyramidLevelIndex(a.D, d),
      b ? void 0 : 0
    );
  };
  var tia = function(a: HW, b: PyramidInformationMT, c) {
    if (null == a.O) throw Error('Mb');
    if (null == a.B) throw Error('Nb');
    a.da = b;
    WU(a.T);
    (0, _.kb)(
      a.qa,
      function(a) {
        var b = _.Gn(a.B);
        XU(this.T, b, a, 0);
      },
      a
    );
    a.qa = [];
    a.jb = !1;
    a.J.trigger();
    a.O.load(c, b, a.F, !1);
    AV(a.la, b, c);
    iia(a.C, b, c);
    kia(a.B, b);
    _.IW(a, !1);
  };
  _.e = HW.prototype;
  _.e.Ax = function(a) {
    return new rV(a, this.T, this.Ca, this.ua);
  };
  _.e.uN = function() {
    this.Y && this.Y();
  };
  _.e.kO = function(a) {
    var b = this.W,
      c = !a.F;
    c != b.C && (c ? ((b.C = c), b.B.isEmpty() || DW(b)) : (b.C = c));
    b = this.C;
    if (null == b.da) throw Error('Eb');
    var d = b.Y.width * b.H.width,
      f = b.Y.height * b.H.height,
      g = d - 2,
      k = f - 2;
    c = Math.min((a.right - a.left) * d, (a.bottom - a.top) * f);
    b.G = 0 < c ? Math.max(1, 20 / c) : 1;
    c = _.di(a.left * d, 0, g);
    var l = _.di(a.top * f, 0, k),
      m = _.di(a.right * d, 0, g),
      r = _.di(a.bottom * f, 0, k);
    a = m - c;
    var v = r - l,
      x = (b.G - 1) * a,
      y = (b.G - 1) * v;
    d = c / (c + d - m);
    f = l / (l + f - r);
    var B = Math.floor(_.di(c - x * d - 2, 0, g));
    var H = Math.floor(_.di(l - y * f - 2, 0, k));
    g = Math.ceil(_.di(m + x * (1 - d) - 1, 0, g));
    m = Math.ceil(_.di(r + y * (1 - f) - 1, 0, k));
    k = g - B;
    m -= H;
    r = getPyramidLevelIndex(
      b.da,
      new _.qo(b.G * b.H.width * b.B, b.G * b.H.height * b.B)
    );
    b.Ca = new _.mQ(-(c + a * d) * (b.G - 1), -(l + v * f) * (b.G - 1));
    xV(
      b.mc,
      Math.round(b.Ca.x),
      Math.round(b.Ca.y),
      new _.qo(b.B * b.H.width * b.G, b.B * b.H.height * b.G),
      r
    );
    B += b.qa.x;
    g += b.qa.x;
    H += b.qa.y;
    QV(b.Wb, B, H, k, m);
    QV(b.U[0], 0, 0, b.Y.width, H);
    QV(b.U[1], 0, H, B, m + 2);
    QV(b.U[2], g + 2, H, b.Y.width - (B + k) - 2, m + 2);
    QV(b.U[3], 0, H + m + 2, b.Y.width, b.Y.height - (H + m) - 2);
    this.ma && this.ma(this.getCurrentState());
  };
  _.e.CD = function() {};
  _.e.uD = function() {
    NV(this.C);
  };
  _.e.Ia = function() {
    this.H && (this.H.Ta(), (this.H = null));
    HW.Ba.Ia.call(this);
  };
  _.JW = function(a, b, c) {
    var d = {
      Bk: !1,
      Km: !1
    };
    _.Va(b) ? (d = b) : _.Ia(b) && (d.Bk = b);
    this.B = new HW(a, d, c);
  };
  _.KW = function(a, b) {
    uia(a.B, b);
  };
  _.LW = function(a, b, c) {
    a = a.B.B;
    c = null != c ? c : 500;
    var d = a.H.B,
      f = b.z;
    b.size &&
      (f = getPyramidLevelIndex(
        a.D,
        new _.qo(d.width / b.size.width, d.height / b.size.height)
      ));
    f = hW(a, f);
    0 >= c
      ? (iW(a), (a.B = f), dW(a, b.x, b.y), cW(a, a.B, 0))
      : lW(a, new _.mQ(b.x, b.y), f, c);
  };
  _.MW = function(a, b) {
    a.B.Y = b;
  };
  _.eb('Microscope', _.JW);

  _.h().B();
}
