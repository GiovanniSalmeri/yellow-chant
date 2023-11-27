Chant 0.8.18
============
Gregorian chant scores.

<p align="center"><img src="SCREENSHOT.png?raw=true" alt="Screenshot"></p>

## How to install an extension

[Download ZIP file](https://github.com/GiovanniSalmeri/yellow-chant/archive/refs/heads/main.zip) and copy it into your `system/extensions` folder. [Learn more about extensions](https://github.com/annaesvensson/yellow-update).

## How to show a Gregorian chant score

You can write a Gregorian chant score with [GABC notation](https://gregorio-project.github.io/gabc/). GABC is a format that allows to write easily Gregorian music, even without a graphical editor. [GregorBase](https://gregobase.selapa.net/) is a huge library of public domain chants in GABC notation.

Insert the chant score with a code block. Wrap the data in \`\`\` and add the language identifier `chant`.

## Example

A Gregorian chant score in GABC notation:

    ``` chant
    name:Puer natus est;
    office-part:Introitus;
    mode:7;
    book:Graduale Romanum, 1961, p. 33 & The Liber Usualis, 1961, p. 408;
    transcriber:Andrew Hinkley;
    %%
    (c3) PU(ei)ER(i.) *() na(iji)tus(h) est(hhh) no(ih/ji)bis,(i.) (;) 
    et(ei~) fí(iji)li(hg)us(f) da(hhi)tus(h) est(h) no(hihh)bis :(efe.) 
    (:) cu(e)jus(f) im(h)pé(gi!jk)ri(ih)um(h.) (,) su(h)per(h) 
    hú(ih/ji)me(h_g)rum(hhh) e(h_f/hghvG~F~)jus :(gf..) (:) et(hg) 
    vo(h)cá(hji)bi(h)tur(hhh) no(h)men(hhh) e(highvG~F~)jus,(gf..) (;) 
    ma(hj)gni(i) con(eh~)sí(h)li(hhh_f)i(f) An(fhf___!gwh)ge(efe___)lus.(e.) 
    Ps.(::) Can(ehg)tá(hi)te(i) Dó(i)mi(i)no(i) cán(ik)ti(j)cum(j) 
    no(ji)vum :(ij..) *(:) qui(ig)a(hi) mi(i)ra(i)bí(i!jwk)li(i')a(h) 
    fe(hhh)cit.(fe..) (::) Gló(ehg)ri(hi)a(i) Pa(i)tri.(i) (::) 
    E(i) u(i!jwk) o(i') u(h) a(hhh) e.(fe..) (::)
    ```

## Acknowledgements

This extension includes [exsurge](https://github.com/bbloomf/exsurge) by Matthew Spencer, currently maintained by Benjamin Bloomfield. Thank you for the good work.

## Developer

Giovanni Salmeri. [Get help](https://datenstrom.se/yellow/help/).
