---
title: Diario De Um Crime - Manu Rosales - Musician, composer, producer and teacher
smallHeroTitle: DIÁRIO DE UM CRIME
smallHeroTitle-color: "#999999"
backgroundImage: "/uploads/diario.png"
primary-text: Diario de un crimen habla de fronteras, entre adentro y afuera, Yo y el Mundo, lo legal y lo ilegal, la normalidad y la locura. Las fronteras, en este sentido, no son sólo geográficas o políticas. Las fronteras son cuerpos, lenguajes, sueños, creencias. Todo lo que, posiblemente, nos está uniendo pero también a veces hiriendo, manteniéndonos a distancia. Es un espacio íntimo, intermedio, que permite los pasajes.
credits-title: CRÉDITOS
credits-text: <span class="bold">Pavel Tavares:</span> Director.<br /><span class="bold">Flore
  de Corbier:</span> Co-autora, escritora.<br /><span class="bold">Manu Rosales:</span>
  Compositor de la banda sonora y producción de sonido.<br />
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