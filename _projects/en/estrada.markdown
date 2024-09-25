---
title: ESTRADA - Manu Rosales - Musician, composer, producer and teacher
description: The poetics of Estrada proposes to shift the focus from personal biography
  and turn to the landscapes of the encounters that emerge along the road.
smallHeroTitle: ESTRADA
smallHeroTitle-color: "#999999"
backgroundImage: "/uploads/tapa.jpg"
embed: '<iframe style="border: 0; width: 350px; height: 350px;" src="https://bandcamp.com/EmbeddedPlayer/album=1706411445/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/"
  seamless><a href="https://manurosales.bandcamp.com/album/estrada">Estrada by Manu
  Rosales</a></iframe>'
primary-text:
- 'Estrada''s poetics proposes to shift the focus from personal biography to the landscapes
  and encounters that arise along the way. '
- The compositions invite reflection, and the possibility of listening to a proposal
  different from what is usually associated with the category of "singer-songwriter",
  showing a contemporary songwriting style emerging in Buenos Aires. The songs evoke
  forced migrations, the longing for home, and the ongoing revelation of the climate
  crisis.
- The songs are based on real stories of immigrants, the distances felt and  involved
  in migration processes and the humanitarian crisis our time is currently going through.
  The songs are based on immigrants’ real stories, the distance involved in migration
  processes and the current humanitarian climate crisis.
- 'The music has its origins in the multiple influences that exist in a cosmopolitan
  city like Buenos Aires, and still is rooted in Argentine and Brazilian folk. The
  lyrics move between two languages, Spanish and Portuguese. '
- 'The instrumentation and composition respond to the same concept, Manu''s guitar
  and voice move from his most intimate state to the encounter with an unconventional
  ensemble that includes bandoneon, violin, tabla, cello, double bass, electric guitar,
  shakuhachi, and qraqeb. Although the compositions are by Manu Rosales, each of the
  guest musicians contributed ideas to the arrangements, bringing not only their musicality,
  but also their cultural influences.

'
credits-title: CREDITS
credits-text:
- <span class="bold">Manu Rosales:</span> Guitar, voice, shakuhachi, bombo, qraqeb<br
  /><span class="bold">Laura Campos:</span> Violin, voice<br /><span class="bold">Francisco
  Martinez:</span> Bandoneon<br /><span class="bold">Javier Fourcade:</span> Tabla,
  udu<br /><span class="bold">Lautaro Barrionuevo:</span> Double Bass<br /><span class="bold">Helena
  Helft:</span> Voice<br /><span class="bold">Stephanie Kobori:</span> Voice<br /><span
  class="bold">Pilar Fogwill:</span> Flute
- 'Cover art/design: <span class="bold">Beatriz Rola</span> and <span class="bold">Lucía
  Rosales</span>.'
- All songs composed by <span class="bold">Manu Rosales</span>, except "Jardines humanos/Jarabi"
  (Violeta Parra / trad. Mali).
- <span class="bold">Mariano Abadal:</span> Mix<br /><span class="bold">Diego Guerrero:</span>
  Master.<br /><span class="bold">Manuel Rosales:</span> Production.<br />
altLang: "/projects/estrada"
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
</section>