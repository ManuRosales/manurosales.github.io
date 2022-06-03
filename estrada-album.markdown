---
title: Estrada - Manu Rosales - Musician, composer, producer and teacher
smallHeroTitle: ESTRADA
smallHeroTitle-color: "#999999"
backgroundImage: "/uploads/estrada-portada-final.jpg"
album-cover-image: "/uploads/estrada-portada-final.jpg"
spanish-personal-text:
- ¡Muchas gracias por colaborar con mi proyecto musical!
- No dejes de regalarte tiempo para escuchar música. Yo te recomiendo buscar un momento para escuchar estas canciones tranquilx. Una vez que lo hayas escuchado, ¡me encantaría saber qué te pareció! Podés enviarme un email a <a href="mailto:manurosalesmusico@gmail.com">manurosalesmusico@gmail.com</a> y contarme.
- ¡Sentite libre de compartir este disco/postal con quien quieras!
- ¡Gracias y buen viaje!
spanish-album-text:
- Estrada <em>(strāta)</em> significa camino y también es mi apellido materno.
- El estado de encuentro con paisajes nuevos, de los cuales las personas también somos una parte, me dio materiales y sentidos para componer estas canciones; la sensación de estar colectivamente entrelazados en una crisis que cubre el suelo y viaja por dentro. El estado de espera que incluye viajar, me dio el tiempo para traducirlas en música.
- Después fue trabajar y pulir este disco, ya en Buenos Aires, junto a musicxs admiradxs.
- Buenos Aires, 2022
credits-spanish-title: CRÉDITOS
credits-spanish-text:
- Composiciones - <span class="bold">Manu Rosales</span><br />excepto jardines humanos / jarabi (Violeta Parra / trad. de Mali)
- <span class="bold">Manu Rosales</span> - guitarra, voz, qraqeb, bombo<br /><span class="bold">Laura Tagle</span> - violín y voz<br /><span class="bold">Francisco Martinez</span> - bandoneón<br /><span class="bold">Javier Fourcade</span> - tabla y udú<br /><span class="bold">Lautaro Barrionuevo</span> - contrabajo<br /><span class="bold">Sofi Alvarez</span> - guitarra electríca<br /><span class="bold">Natacha Naim</span> - cello<br /><span class="bold">Helena Helft</span> - voz<br /><span class="bold">Stephanie Kobori</span> - voz<br /><span class="bold">Pilar Fogwill</span> - flauta traversa
- Letra de Sonho sem ver terra & Ainda, escritas en colaboración con <span class="bold">Pavel Tavares</span>
english-personal-text:
- Thank you very much for collaborating with my musical project! 
- Don't stop giving yourself time to listen to music. I recommend you find a quiet moment to listen to these songs. Once you've heard it, I'd love to hear what you thought of it! You can send me an email to <a href="mailto:manurosalesmusico@gmail.com">manurosalesmusico@gmail.com</a> and tell me! 
- Feel free to share this album/postcard with whoever you want! 
- Thanks and enjoy the journey!
english-album-text:
- Estrada (strāta) means way and it’s also my mother’s last name. 
- The state of encountering new landscapes, which people are also a part of, gave me motives and senses to compose these songs. The feeling of being collectively interwoven in a crisis that covers the ground and travels inside. The state of waiting that is a part of traveling, gave me the time to translate these sensations into music.
- Afterwards, already back in Buenos Aires, the pieces were polished and recorded, accompanied by admired musicians.
- Buenos Aires, 2022
credits-english-title: CREDITS
credits-english-text:
- Composition - <span class="bold">Manu Rosales</span><br />except jardines humanos / jarabi (Violeta Parra / trad. de Mali)
- <span class="bold">Manu Rosales</span> - guitar, voice, qraqeb, bombo<br /><span class="bold">Laura Tagle</span> - violin y voice<br /><span class="bold">Francisco Martinez</span> - bandoneon<br /><span class="bold">Javier Fourcade</span> - tabla y udú<br /><span class="bold">Lautaro Barrionuevo</span> - double bass<br /><span class="bold">Sofi Alvarez</span> - electric guitar<br /><span class="bold">Natacha Naim</span> - cello<br /><span class="bold">Helena Helft</span> - voice<br /><span class="bold">Stephanie Kobori</span> - voice<br /><span class="bold">Pilar Fogwill</span> - transverse flute
- Lyrics in Sonho sem ver terra & Ainda, written in collaboration with <span class="bold">Pavel Tavares</span>
layout: projects
---

<section id="estrada=album">
    <div id="estrada-cover">
        <img style="width: 100%;" src="{{ page.album-cover-image }}" />
    </div>
    <h2>
        <a href="https://drive.google.com/drive/folders/17om4QYm2P1ykhf3H97LQDichG-s_bULT" target="_blank">
            DESCARGAR | <em>DOWNLOAD</em>
        </a>
    </h2>
    <div id="spanish-text">
        <div>
            {% for paragraph in page.spanish-personal-text %}
                <p>
                    {{ paragraph }}
                </p>
            {% endfor %}
        </div>
        <div>
            {% for paragraph in page.spanish-album-text %}
                <p>
                    {{ paragraph }}
                </p>
            {% endfor %}
        </div>
        <h2>
            {{ page.credits-spanish-title }} —
        </h2>
        <div>
            {% for paragraph in page.credits-spanish-text %}
                <p>
                    {{ paragraph }}
                </p>
            {% endfor %}
        </div>
    </div>
    <div id="divider">
        <hr />
    </div>
    <div id="english-text">
        <div>
            {% for paragraph in page.english-personal-text %}
                <p>
                    {{ paragraph }}
                </p>
            {% endfor %}
        </div>
        <div>
            {% for paragraph in page.english-album-text %}
                <p>
                    {{ paragraph }}
                </p>
            {% endfor %}
        </div>
    </div>
    <h2>
        {{ page.credits-english-title }} —
    </h2>
    <div>
        {% for paragraph in page.credits-english-text %}
            <p>
                {{ paragraph }}
            </p>
        {% endfor %}
    </div>
</section>