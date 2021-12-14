"use strict";
document.addEventListener("DOMContentLoaded", function() {
    var chants = document.querySelectorAll("pre.chant");
    chants.forEach(function(chant) {
        chant.firstChild.style.display = 'block'; // important
        var layoutChant = function() {
          score.performLayoutAsync(ctxt, function() {
            score.layoutChantLines(ctxt, chant.firstChild.offsetWidth, function() {
              chant.firstChild.innerHTML = score.createSvg(ctxt);
            });
          });
        }
        var ctxt = new exsurge.ChantContext();
        var mappings = exsurge.Gabc.createMappingsFromSource(ctxt, chant.firstChild.textContent);
        var score = new exsurge.ChantScore(ctxt, mappings, true);
        window.addEventListener("resize", function() {
            layoutChant();
        });
    });
}, false);
