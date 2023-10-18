---
title: DIÁRIO DE UM CRIME - Manu Rosales - Músico, compositor, productor y docente
description: Diario de un crimen habla de fronteras, entre adentro y afuera, Yo y
  el Mundo, lo legal y lo ilegal, la normalidad y la locura. Las fronteras, en este
  sentido, no son sólo geográficas o políticas. Las fronteras son cuerpos, lenguajes,
  sueños, creencias. Todo lo que, posiblemente, nos está uniendo pero también a veces
  hiriendo, manteniéndonos a distancia. Es un espacio íntimo, intermedio, que permite
  los pasajes.
smallHeroTitle: DIÁRIO DE UM CRIME
smallHeroTitle-color: "#999999"
backgroundImage: "/uploads/diario.png"
embed: '<iframe style="border: 0; width: 350px; height: 350px;" src="https://bandcamp.com/EmbeddedPlayer/album=1573118158/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/"
  seamless><a href="https://manurosales.bandcamp.com/album/di-rio-de-um-crime-bso">Diário
  de um Crime BSO by Manuel Rosales</a></iframe>'
primary-text: Diario de un crimen habla de fronteras, entre adentro y afuera, Yo y
  el Mundo, lo legal y lo ilegal, la normalidad y la locura. Las fronteras, en este
  sentido, no son sólo geográficas o políticas. Las fronteras son cuerpos, lenguajes,
  sueños, creencias. Todo lo que, posiblemente, nos está uniendo pero también a veces
  hiriendo, manteniéndonos a distancia. Es un espacio íntimo, intermedio, que permite
  los pasajes.
credits-title: CRÉDITOS
credits-text: <span class="bold">Manu Rosales:</span> Compositor de la banda sonora
  y producción de sonido.<br /><span class="bold">Pavel Tavares:</span> Director.<br
  /><span class="bold">Flore de Corbier:</span> Co-autora, escritora.<br />
altLang: "/projects/en/diario-de-um-crime"
language: es
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