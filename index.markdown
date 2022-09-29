---
title: Manu Rosales - Músico, compositor, productor y docente
description: Con una visión contemporánea de la composición, Manu Rosales crea un
  universo ecléctico de canciones. Su guitarra evoca distintas raíces del mundo, desde
  el folklore de Argentina, pasando por los Andes y Brasil y llegando al Noroeste
  de África.
tituloBio: BIO
bio-desktop-text:
- Con una visión contemporánea de la composición, Manu Rosales crea un universo ecléctico
  de canciones. Su guitarra evoca distintas raíces del mundo, desde el folklore de
  Argentina, pasando por los Andes y Brasil y llegando al Noroeste de África.
- La curiosidad nómada de Manu lo ha inspirado a profundizar en múltiples culturas,
  lo que se refleja en sus letras y música. Contemplativa y profunda, entrelazando
  la nostalgia con la esperanza, la poética de sus composiciones dialoga con las complejidades
  y crisis de nuestro tiempo.
- Acompañado por su guitarra, Manu ha presentado con éxito su primer disco <span class="bold"><a
  href="/projects/cuerpo-aldea">“Cuerpo Aldea”</a></span> en Argentina y luego en
  Europa en 2019, girando por Barcelona, ​​Lisboa, Oporto, Bruselas, Gante, Estrasburgo
  y Tübingen.
- Recientemente acaba de finalizar la gira de presentación de su segundo disco <span
  class="bold"><a href="/projects/estrada">“Estrada”</a></span>, comenzando en Argentina
  y dando luego conciertos en Portugal, Alemania, Bélgica, Suiza, Eslovenia, Italia
  y Francia.
- Actualmente se encuentra en Argentina, donde presentará este nuevo repertorio a
  lo largo del país.
bio-mobile-text:
- Con una visión contemporánea de la composición, Manu Rosales crea un universo ecléctico
  de canciones. Su guitarra evoca distintas raíces del mundo, desde el folklore de
  Argentina, pasando por los Andes y Brasil y llegando al Noroeste de África.
images:
- "/uploads/ethno%20grande.png"
- "/uploads/Dise%C3%B1o%20sin%20t%C3%ADtulo.jpg"
- "/uploads/IMG-20190731-WA0016.jpg"
tituloVideo: MAREA
urlVideo: POjvEmtovIk
video-fallback-image: "/uploads/Manuel-Rosales.JPG"
tituloLinks: LINKS
tituloContacto: CONTACTO
tituloNewsletter: NEWSLETTER
labelFormulario: 'DIRECCIÓN DE CORREO ELECTRÓNICO:'
textoBoton: SUSCRIBIRSE
layout: index
language: es
altLang: "/en"
---

<section id="bio">
    <h2>
        {{ page.tituloBio }} —
    </h2>
    {% include index/bio.html %}
    <h2>
        {{ page.tituloVideo }} —
    </h2>
    {% include index/video.html %}
    {% include index/fotos.html %}
    <!---
    <h2>
        {{ page.tituloLinks }} —
    </h2>
    {% include index/links.html %}
    --->
    {% include index/contact-newsletter.html %}
</section>
