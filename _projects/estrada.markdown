---
title: ESTRADA - Manu Rosales - Músico, compositor, productor y docente
description: La poética de Estrada propone desplazar el foco de la biografía personal
  hacia los paisajes y encuentros que surgen a lo largo del camino.
smallHeroTitle: ESTRADA
smallHeroTitle-color: "#999999"
backgroundImage: "/uploads/tapa.jpg"
primary-text:
- La poética de <span class="bold">Estrada</span> propone desplazar el foco de la
  biografía personal hacia los paisajes y encuentros que surgen a lo largo del camino.
- 'Se escucha el canto de varios pájaros, pájaros que migran y se mueven juntos en
  la misma dirección, para luego partir por diferentes rutas. De la misma forma oscilan
  las canciones, entrelazando lo individual y lo colectivo, sobrevolando fronteras
  y crisis de nuestro tiempo. Estas canciones evocan así las migraciones forzadas,
  la nostalgia de un hogar y la crisis climática que sigue revelandose. '
- La instrumentación y composición responde al mismo concepto, la guitarra y voz de
  Manu aparece en su estado más íntimo así como también entrelazada a un ensamble
  no convencional (bandoneón, tabla, violínes, cellos, guitarras eléctricas, shakuhachi,
  qraqeb, y más).
credits-title: CRÉDITOS
credits-text:
- <span class="bold">Manu Rosales:</span> Guitarra, voz, shakuhachi, bombo, qraqeb.<br
  /><span class="bold">Laurel Florida:</span> Violín, voz.<br /><span class="bold">Francisco
  Martinez:</span> Bandoneón.<br /><span class="bold">Javier Fourcade:</span> Tabla,
  udu.<br /><span class="bold">Lautaro Barrionuevo:</span> Contrabajo.<br /><span
  class="bold">Helena Helft:</span> Voz.
- Arte de tapa <span class="bold">Beatriz Rola</span>.
- Todas las composiciones compuestas por <span class="bold">Manu Rosales</span>, excepto  "Jardines
  humanos/Jarabi" (Violeta Parra / trad. Mali).
- Las letras de "Ainda" y "Sonho sem ver terra" fueron escritas por <span class="bold">Pavel
  Tavares</span>.
language: es
altLang: "/projects/en/estrada"
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