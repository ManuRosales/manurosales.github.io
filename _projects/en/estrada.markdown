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
- The poetics of Estrada proposes to shift the focus from personal biography and turn
  to the landscapes of the encounters that emerge along the road.
- It pursues to capture the chant of various birds, birds that migrate and move together
  towards the same direction, and then depart on different routes. The compositions
  oscillate between the life stories of people who are on the road and the sensation
  of being collectively interwoven in a climate crisis.
- Contemplative and profound, and also nostalgic yet hopeful, the poetics of this
  compositions narrate mystical and mundane episodes of everyday life, passing through
  the complexities and crises of our time, like climate issues and forced migration,
  or the nostalgia of being far away from home.
- These songs, some in Spanish and others in Portuguese, began during the "Corpo Aldea"
  European tour, a moment of nomadism that was transformed into the total stillness
  that the pandemic brought us".
credits-title: CREDITS
credits-text:
- <span class="bold">Manu Rosales:</span> Guitar, voice, shakuhachi, bombo, qraqeb<br
  /><span class="bold">Laurel Florida:</span> Violin, voice<br /><span class="bold">Francisco
  Martinez:</span> Bandoneon<br /><span class="bold">Javier Fourcade:</span> Tabla,
  udu<br /><span class="bold">Lautaro Barrionuevo:</span> Double Bass<br /><span class="bold">Helena
  Helft:</span> Voice
- Cover art <span class="bold">Beatriz Rola</span>.
- All songs composed by <span class="bold">Manu Rosales</span>, except "Jardines humanos/Jarabi"
  (Violeta Parra / trad. Mali).
layout: projects
altLang: "/projects/estrada"
language: en
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