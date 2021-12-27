"use strict";
document.addEventListener("DOMContentLoaded", function() {
    var chants = document.querySelectorAll("pre.chant");
    if (chants) var color = window.getComputedStyle(chants[0]).getPropertyValue("color");
    chants.forEach(function(chant) {
        chant.firstChild.style.display = "block"; // important
        var ctxt = new exsurge.ChantContext();
        ctxt.dropCapTextColor = color;
        ctxt.lyricTextColor = color;
        ctxt.rubricColor = "#d00";
        ctxt.staffLineColor = color;
        ctxt.neumeLineColor = color;
        ctxt.dividerLineColor = color;
        var mappings = exsurge.Gabc.createMappingsFromSource(ctxt, chant.firstChild.textContent);
        var score = new exsurge.ChantScore(ctxt, mappings, true);
        window.addEventListener("resize", function() {
          score.performLayoutAsync(ctxt, function() {
            score.layoutChantLines(ctxt, chant.firstChild.offsetWidth, function() {
              chant.firstChild.innerHTML = score.createSvg(ctxt);
            });
          });
        });
    });
}, false);
