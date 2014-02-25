;(function (generatedHtml) {
  var Apiary, Embed, writeIt;

  if (window.Apiary == null){
    window.Apiary = Apiary = {};
  }

  Embed = function(){};

  Apiary.Embed = Embed;

  Apiary.Embed.prototype.resources = function (options) {
    writeIt(options);
  };

  Apiary.Embed.prototype.resource = function (options) {
    writeIt(options);
  };

  Apiary.Embed.prototype.documentation = function (options) {
    writeIt(options);
  };

  writeIt = function () {
    document.write(generatedHtml);
  };

})((function(){

var s = "";

s += "<h1 id='apiHeadline'>APIblueprint.org - Powered by Seed &amp; Embed</h1>";
s += "<div class='details'><p>There will be an API for apiblueprint.org too. Sooner or later, it does not matter how far away in the future.</p></div>";
s += "<div class='details'><p>There might be an extraordinary valuable content. If it was generated from Apiary servers. But it is static, now. It might be replaced after implementation succeeds.</p></div>";

return s;

})());