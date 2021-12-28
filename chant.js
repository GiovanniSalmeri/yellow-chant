"use strict";
document.addEventListener("DOMContentLoaded", function() {
    var chants = document.querySelectorAll("pre.chant");
    chants.forEach(function(chant) {
        chant.firstChild.style.display = "block"; // important
        var firstColor = window.getComputedStyle(chant, "::first-letter").color;
        var color = window.getComputedStyle(chant).color;
        var ctxt = new exsurge.ChantContext();
        ctxt.dropCapTextColor = firstColor;
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
