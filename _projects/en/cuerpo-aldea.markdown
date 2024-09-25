---
title: CUERPO ALDEA - Manu Rosales - Musician, composer, producer and teacher
description: Cuerpo Aldea is a search for sung poetry linked to the popular and contemporary
  study of composition. These songs are born from multiple cultures dialoguing in
  the same body, from South American folklore to the African Maghreb.
smallHeroTitle: CUERPO ALDEA
smallHeroTitle-color: "#999999"
backgroundImage: "/uploads/hero-cuerpo-aldea.jpg"
embed: <iframe src="https://bandcamp.com/EmbeddedPlayer/album=2443839239/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/"
  seamless><a href="https://manurosales.bandcamp.com/album/cuerpo-aldea">Cuerpo Aldea
  by Manu Rosales</a></iframe>
primary-text: "Cuerpo Aldea can be translated as \"body village\". As the title expresses,
  the compositions are born from multiple cultures, from South American folklore to
  the African Maghreb, in dialogue in a singular body. A village where all heard sounds
  and all that was apprehended over time converges, without distinctions of genres
  or styles. Cuerpo Aldea presents a research of sung poetry linked to the popular,
  contemporary and academic study of song composition. \n<br />In Manu Rosales' debut
  album, the guitar and the composer's voice are protagonists elements. However, the
  compositions have a diverse instrumentation including arrangement with flute, clarinet,
  quena, sikus, double bass, cello, percussion set and also didgeridoo and African
  kora.<br />\n"
credits-title: CREDITS
credits-text:
- <span class="bold">Manu Rosales:</span> Guitar, voice, quena, didgeridoo, sicus,
  kora.<br /><span class="bold">Sofi Álvarez:</span> Percution set.<br /><span class="bold">Emmanuel
  Sandoval:</span> Chelo.<br /><span class="bold">Juan Klas:</span> Flute and clarinet.<br
  /><span class="bold">Nico Simari:</span> Double Bass<br /><span class="bold">Guillermo
  OConnor:</span> Second guitar at “Agua de lo imposible".<br />
- 'Cover art/design: <span class="bold">Mauro Tapia</span> and <span class="bold">Lucía
  Rosales</span>.'
- All songs compositions, lyrics and arrangements by <span class="bold">Manu Rosales</span>.
  All invited musicians contributed to the arrangements in which they participated.
- <span class="bold">Mariano Abadal:</span> mix<br /><span class="bold">Fernando Richard:</span>
  Master.<br /><span class="bold">Mauro Tapia:</span> Cover art.<br /><span class="bold">Lucía
  Rosales:</span> Graphic design.<br /><span class="bold">Manuel Rosales:</span> Production.<br
  />
links-title: LISTEN ON
link-spotify: https://open.spotify.com/album/0cV1yAHx9NSEsyFyMBoQs4?si=rsyG5TeWS0SCUgJRZL8JBg
link-youtube: https://www.youtube.com/watch?v=6ZW9Slotpy8
altLang: "/projects/cuerpo-aldea"
language: en
layout: projects
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