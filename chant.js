// Chant extension, https://github.com/GiovanniSalmeri/yellow-chant

"use strict";
document.addEventListener("DOMContentLoaded", function() {
    var chants = document.querySelectorAll("pre.chant");
    chants.forEach(function(chant, i) {
        // accessibility
        var chantText = chant.firstChild.textContent;
        var metadata = [];
        [/^office-part:\s*(.*?);\s*$/m, /^name:\s*(.*?);\s*$/m].forEach(function(re) {
            var match = chantText.match(re);
            if (match) metadata.push(match[1]);
        });
        var label = metadata.join(' ');
        var accessibleText = document.createElement("PRE");
        accessibleText.style.display = "none";
        accessibleText.id = "chant"+i;
        accessibleText.textContent = chantText;
        chant.insertAdjacentElement("afterend", accessibleText);
        chant.setAttribute("role", "img");
        chant.setAttribute("aria-describedby", "chant"+i);
        if (label) chant.setAttribute("aria-label", label);
        // draw score
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
        var mappings = exsurge.Gabc.createMappingsFromSource(ctxt, chantText);
        var score = new exsurge.ChantScore(ctxt, mappings, true);
        window.addEventListener("resize", function() {
          score.performLayoutAsync(ctxt, function() {
            score.layoutChantLines(ctxt, chant.firstChild.offsetWidth, function() {
              chant.firstChild.innerHTML = score.createSvg(ctxt);
              chant.style.visibility = "visible";
            });
          });
        });
    });
}, false);
