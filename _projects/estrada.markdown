---
title: ESTRADA - Manu Rosales - Músico, compositor, productor y docente
smallHeroTitle: ESTRADA
smallHeroTitle-color: "#999999"
backgroundImage: "/uploads/tapa.jpg"
primary-text:
- La poética de Estrada propone desplazar el foco de la biografía personal hacia los paisajes y encuentros que surgen a lo largo del camino. 
- Se escucha el canto de varios pájaros, pájaros que migran y se mueven juntos en la misma dirección, para luego partir por diferentes rutas. Las composiciones oscilan entre las historias de vida de las personas que están en su camino y la sensación/certeza de estar entrelazados colectivamente en una crisis climática, humana, y en cierto sentido de la palabra, espiritual. 
- Contemplativa y profunda, y también nostálgica pero esperanzadora, la poética de estas composiciones narra episodios místicos y mundanos de la vida cotidiana, transitando entre las fronteras y crisis de nuestro tiempo, dialoga con el caos climático, las migraciones forzadas y la nostalgia de estar lejos del hogar.
credits-title: CRÉDITOS
credits-text:
- <span class="bold">Manu Rosales:</span> Guitarra, voz, shakuhachi, bombo, qraqeb.<br
  /><span class="bold">Laurel Florida:</span> Violín, voz.<br /><span class="bold">Francisco
  Martinez:</span> Bandoneón.<br /><span class="bold">Javier Fourcade:</span> Tabla, udu.<br /><span class="bold">Lautaro Barrionuevo:</span> Contrabajo.<br /><span class="bold">Helena
  Helft:</span> Voz.
- Arte de tapa <span class="bold">Beatriz Rola</span>.
- Todas las composiciones compuestas por <span class="bold">Manu Rosales</span>, excepto  "Jardines humanos/Jarabi" (Violeta Parra / trad. Mali).
- Las letras de "Ainda" y "Sonho sem ver terra" fueron escritas por <span class="bold">Pavel Tavares</span>.
layout: projects
language: es
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