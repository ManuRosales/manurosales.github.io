---
title: CUERPO ALDEA - Manu Rosales - Músico, compositor, productor y docente
description: Cuerpo Aldea es una búsqueda sobre la poesía cantada, unida al estudio académico, popular y contemporáneo de la composición. Una aldea donde converge todo lo escuchado, todo lo aprehendido, sin distinciones de géneros ni estilos. Desde los folklores Sudamericanos hasta el Magreb Africano.
smallHeroTitle: CUERPO ALDEA
smallHeroTitle-color: "#999999"
backgroundImage: "/uploads/hero-cuerpo-aldea.jpg"
embed: <iframe src="https://bandcamp.com/EmbeddedPlayer/album=2443839239/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/"
  seamless><a href="https://manurosales.bandcamp.com/album/cuerpo-aldea">Cuerpo Aldea
  by Manu Rosales</a></iframe>
primary-text: Como el título expresa, estas músicas nacen de múltiples culturas dialogando
  en un mismo cuerpo. Desde los folklores Sudamericanos hasta el Magreb Africano.
  Una aldea donde converge todo lo escuchado, todo lo aprehendido, sin distinciones
  de géneros ni estilos. Cuerpo Aldea es una búsqueda sobre la poesía cantada, unida
  al estudio académico, popular y contemporáneo de la composición.
credits-title: CRÉDITOS
credits-text:
- <span class="bold">Manu Rosales:</span> Guitarra, voz, quena, didgeridoo, sicus
  y kora.<br /><span class="bold">Sofi Álvarez:</span> Set de percusión.<br /><span
  class="bold">Emmanuel Sandoval:</span> Chelo.<br /><span class="bold">Juan Klas:</span>
  Flauta y clarinete.<br /><span class="bold">Nico Simari:</span> Contrabajo.<br /><span
  class="bold">Guillermo OConnor:</span> Segunda guitarra en “Agua de lo imposible”.<br
  />
- 'Arte de tapa y diseño: <span class="bold">Mauro Tapia</span>/<span class="bold">Lucía
  Rosales</span>.'
- Las nueve canciones compuestas y arregladas por <span class="bold">Manu Rosales</span>.
links-title: ESCUCHAR EN
link-spotify: https://open.spotify.com/album/0cV1yAHx9NSEsyFyMBoQs4?si=rsyG5TeWS0SCUgJRZL8JBg
link-youtube: https://www.youtube.com/watch?v=6ZW9Slotpy8
layout: projects
language: es
---

<section>
    {% if page.embed != false %}
        {% include projects/embed.html %}
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
    <h2>
        {{ page.links-title }} —
    </h2>
    <div id="bio-text-links">
        <a href="{{ page.link-spotify }}">
            <i class="fa-brands fa-spotify"></i>
        </a>
        <a href="{{ page.link-youtube }}">
            <i class="fa-brands fa-youtube"></i>
        </a>
    </div>
</section>