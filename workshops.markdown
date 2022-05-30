---
title: Workshops - Manu Rosales - Musician, composer, producer and teacher
smallHeroTitle: WORKSHOPS
backgroundImage: "/uploads/workshops-header.png"
workshops:
- title: Delving into south american folk music
  image: "/uploads/workshop-delving.png"
  description:
  - In 2020 the project "Delving into South American folk music" was born in cooperation
    with Klangfolk e.V., a cultural association based in Tübingen. Different aspects
    of South American music have been studied since.
  - The meetings are based on body percussion exercises to delve into the new rhythms,
    the oral teaching of melodies and finally bring these songs to each instrument.
  - Songs from Argentina, Brazil, Peru, Bolivia have been studied in the workshops
    and the journey is still under way.
  - The workshops are free to anyone in the world who wants to join. To participate,
    get in touch!
- title: Canciones a mano
  image: "/uploads/workshop-canciones.png"
  description:
  - Since 2021 he started with the project "Canciones a mano", a song-writing workshop,
    in wich he shares and creates a space for new composers.
layout: workshops
---

<section>
  {% for workshop in page.workshops %}
    {% include workshops/workshop.html %}
  {% endfor %}
</section>
