---
title: Manu Rosales - Músico, compositor, productor y docente
tituloBio: BIO
bio:
- With a contemporary view over songwriting, <span class="bold">Manu Rosales</span>
  creates an eclectic universe of sounds. His guitar evokes different roots of the
  world, from the folklore of Argentina, passing through the Andes and Brazil and
  reaching the Northwest of Africa.
- Manu's nomadic curiosity has inspired him to delve into multiple cultures, which
  shines through in his lyrics and music. Contemplative and profound, and also nostalgic
  yet hopeful, the poetics of his compositions narrate mystical and mundane episodes
  of everyday life, passing through the complexities and crises of our time, like
  climate issues and forced migration, or the nostalgia of being far away from home.
- Manu has successfully presented his first álbum <span class="bold">“Cuerpo Aldea”</span>
  in Europe in 2019, touring in Barcelona, Lisbon, Porto, Brussels, Ghent, Strasbourg
  and Tübingen. Currently he is post-producing his second album <span class="bold">“Estrada”</span>,
  which will be launched in Summer 2022.
- Since 2020 he has been conducting the project <span class="bold">"Delving into South
  American Folk Music"</span> in cooperation with Klangfolk e.V., a Tübingen based
  cultural associacion, in which he shares different aspects of South American music.
fotos:
- "/uploads/manu-rosales-1.png"
- "/uploads/manu-rosales-2.png"
- "/uploads/manu-rosales-3.jpeg"
tituloVideo: MAREA
urlVideo: POjvEmtovIk
tituloLinks: LINKS
layout: index
---

<main>
    <section id="bio">
        <h2>
            {{ page.tituloBio }} —
        </h2>
        <div id="bio-text">
            {% for paragraph in page.bio %}
                <p>{{ paragraph }}</p>
            {% endfor %}
        </div>
        <div id="bio-fotos">
            <div id="left-gallery-arrow">
                <i class="fa-solid fa-chevron-left"></i>
            </div>
            {% for foto in page.fotos %}
                {% assign fotoNumber = 1 %}
                {% capture image %}
                    <div id="foto-{{ fotoNumber }}" style="background-image: url({{ foto }})" class="foto"></div>
                {% endcapture %}
                {{ image }}
                {{ fotoNumber | plus: 1 }}
            {% endfor %}
            <div id="right-gallery-arrow">
                <i class="fa-solid fa-chevron-right"></i>
            </div>
        </div>
        <h2>
            {{ page.tituloVideo }} —
        </h2>
        <div id="bio-video">
            {% capture videoEmbed %}
                <iframe src="https://www.youtube.com/embed/{{ page.urlVideo }}?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            {% endcapture %}
            {{ videoEmbed }}
        </div>
        <h2>
            {{ page.tituloLinks }} —
        </h2>
        <div id="bio-text-links">
            <a href="https://open.spotify.com/artist/1CviTVT7wHkZab0k53O1Kj?si=y31kJpQOSzKlwq2IVpDaHg">
                <i class="fa-brands fa-spotify"></i>
            </a>
            <a href="https://www.youtube.com/c/ManuRosales">
                <i class="fa-brands fa-youtube"></i>
            </a>
            <a href="https://www.instagram.com/manurosalesmusico/">
                <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="mailto:rosalesmanuelmail@gmail.com">
                <i class="fa fa-envelope"></i>
            </a>
        </div>
    </section>
</main>
