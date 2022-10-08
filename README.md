Chant 0.8.18
============
Display Gregorian chant scores.

<p align="center"><img src="chant-screenshot.png?raw=true" alt="Screenshot"></p>

## How to show a Gregorian chant score

Write the Gregorian chant score in [GABC notation](https://gregorio-project.github.io/gabc/) and put it into a block code with the attribute `chant`. GABC is a format that allows to write easily Gregorian music, even without a graphical editor. [GregorBase](https://gregobase.selapa.net/) is a huge library of public domain chants in GABC notation.

## Example

A Gregorian chant score in GABC notation:

    ```chant
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

## Installation

[Download extension](https://github.com/GiovanniSalmeri/yellow-chant/archive/main.zip) and copy zip file into your `system/extensions` folder. Right click if you use Safari.

This extension uses [exsurge](https://github.com/bbloomf/exsurge) by Matthew Spencer, currently maintained by Benjamin Bloomfield.

## Developer

Giovanni Salmeri. [Get help](https://datenstrom.se/yellow/help/)
