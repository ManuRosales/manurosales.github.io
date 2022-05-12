---
title: Workshops - Manu Rosales - Musician, composer, producer and teacher
workshopsTitle: WORKSHOPS
background-image: "/uploads/workshops-header.png"
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

<section id="musica-section">
  <style>
    .workshop-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 30px;
    }
    .workshop-container:first-of-type {
        margin-top: 0;
      }
    .workshop-image-container {
        width: 80%
    }
    .workshop-image {
      width: 100%;
      height: auto;
    }
    @media (min-width: 767px) {
      .workshop-container {
        display: flex;
        flex-direction: row;
      }
      .workshop-image-container {
        width: 30%
      }
      .workshop-image {
        width: 100%;
        height: auto;
      }
      .workshop-text {
        width: 70%;
        margin-left: 10px;
      }
      .workshop-text > h2, .workshop-text > p {
        text-align: left;
      }
    }
  </style>
    {% for workshop in page.workshops %}
      {% capture workshopRow %}
        <div class="workshop-container">
          <div class="workshop-image-container">
            <img src="{{ workshop.image }}" class="workshop-image" />
          </div>
          <div class="workshop-text">
            <h2>{{ workshop.title }}</h2>
            <p>{{ workshop.description }}</p>
          </div>
        </div>
      {% endcapture %}
      {{ workshopRow }}
    {% endfor %}
</section>
