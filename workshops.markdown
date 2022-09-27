---
title: TALLERES - Manu Rosales - Músico, compositor, productor y docente
smallHeroTitle: TALLERES
smallHeroTitle-color: "#999999"
backgroundImage: "/uploads/workshops-header.png"
workshops:
- title: Buceando en la música sudamericana
  image: "/uploads/workshop-delving.png"
  description:
  - En 2020 nació el proyecto Delving into south american music ("Buceando en la música
    folclórica sudamericana") en cooperación con Klangfolk e.V., una asociación cultural
    con sede en Tübingen. Desde entonces se han estudiado diferentes aspectos de la
    música sudamericana. Los encuentros se basan en ejercicios de percusión corporal
    para profundizar en los nuevos ritmos, la enseñanza oral de melodías y finalmente
    llevar estas canciones a cada instrumento. Canciones de Argentina, Brasil, Perú,
    Bolivia se han estudiado en los talleres y el viaje aún está en marcha. Para participar,
    ponte en contacto!
- title: Clases particulares
  image: "/uploads/clases.png"
  description: Para tomar clases particulares, entrar en contacto!
layout: workshops
language: es
---

<section>
  {% for workshop in page.workshops %}
    {% include workshops/workshop.html %}
  {% endfor %}
</section>
