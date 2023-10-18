---
title: DIÁRIO DE UM CRIME - Manu Rosales - Musician, composer, producer and teacher
description: The Diary of a Crime talks about borders, between inside and outside,
  Me and the World, the legal and the illegal, normality and craziness. Borders, in
  this sense, are not only geographi- cal or political. Borders are bodies, languages,
  dreams, beliefs. Everything that, possibly, is linking us but also sometimes hurting,
  keeping us at distance. It is an intimate, intermediary space that allows passages.
smallHeroTitle: DIÁRIO DE UM CRIME
smallHeroTitle-color: "#999999"
backgroundImage: "/uploads/diario.png"
embed: '<iframe style="border: 0; width: 350px; height: 350px;" src="https://bandcamp.com/EmbeddedPlayer/album=1573118158/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/"
  seamless><a href="https://manurosales.bandcamp.com/album/di-rio-de-um-crime-bso">Diário
  de um Crime BSO by Manuel Rosales</a></iframe>'
primary-text: The Diary of a Crime talks about borders, between inside and outside,
  Me and the World, the legal and the illegal, normality and craziness. Borders, in
  this sense, are not only geographi- cal or political. Borders are bodies, languages,
  dreams, beliefs. Everything that, possibly, is linking us but also sometimes hurting,
  keeping us at distance. It is an intimate, intermediary space that allows passages.
credits-title: CREDITS
credits-text: <span class="bold">Manu Rosales:</span> Original soundtrack and music
  production<br /><span class="bold">Pavel Tavares:</span> Director<br /><span class="bold">Flore
  de Corbier:</span> Script and texts<br />
altLang: "/projects/diario-de-um-crime"
language: en
layout: projects
---

<section>
    {% if page.embed != false %}
        {{ page.embed }}
    {% endif %}
    <div>
        {% for paragraph in page.primary-text %}
            <p>
                {{ paragraph }}
            </p>
        {% endfor %}
    </div>
    <h2>
        {{ page.credits-title }} —
    </h2>
    <div>
        {% for paragraph in page.credits-text %}
            <p>
                {{ paragraph }}
            </p>
        {% endfor %}
    </div>
</section>