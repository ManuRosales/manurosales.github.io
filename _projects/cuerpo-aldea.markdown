---
title: Cuerpo Aldea - Manu Rosales - Musician, composer, producer and teacher
smallHeroTitle: CUERPO ALDEA
smallHeroTitleColor: "#151d1e"
backgroundImage: "/uploads/hero-cuerpo-aldea.jpg"
embed: <iframe src="https://bandcamp.com/EmbeddedPlayer/album=2443839239/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/"
  seamless><a href="https://manurosales.bandcamp.com/album/cuerpo-aldea">Cuerpo Aldea
  by Manu Rosales</a></iframe>
primary-text: The words "Cuerpo Aldea" can be translated as body and village. As the
  title expresses, these songs are born from multiple cultures dialoguing in the same
  body, from South American folklore to the African Maghreb. "A village where all
  sounds I have heard and everything I have apprehended converge without distinctions
  of genres or styles". Cuerpo Aldea is a search for sung poetry linked to the popular
  and contemporary study of composition.
credits-title: CREDITS
credits-text:
- <span class="bold">Manu Rosales:</span> Guitar, voice, quena, didgeridoo, sicus,
  kora.<br /><span class="bold">Sofi Álvarez:</span> Percution set.<br /><span class="bold">Emmanuel
  Sandoval:</span> Chelo.<br /><span class="bold">Juan Klas:</span> Flute and clarinet.<br
  /><span class="bold">Nico Simari:</span> Double Bass<br /><span class="bold">Guillermo
  OConnor:</span> Second guitar at “Agua de lo imposible".<br />
- 'Cover art/design: <span class="bold">Mauro Tapia</span> and <span class="bold">Lucía
  Rosales</span>.'
- All songs composed by <span class="bold">Manu Rosales</span>, and worked together
  with the musicians.
links-title: LISTEN ON
link-spotify: https://open.spotify.com/album/0cV1yAHx9NSEsyFyMBoQs4?si=rsyG5TeWS0SCUgJRZL8JBg
link-youtube: https://www.youtube.com/watch?v=6ZW9Slotpy8
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