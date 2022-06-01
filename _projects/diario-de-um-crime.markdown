---
title: Diario De Um Crime - Manu Rosales - Musician, composer, producer and teacher
smallHeroTitle: DIÁRIO DE UM CRIME
smallHeroTitleColor: "#000000"
backgroundImage: "/uploads/diario.png"
primary-text: The Diary of a Crime talks about borders, between inside and outside,
  Me and the World, the legal and the illegal, normality and craziness. Borders, in
  this sense, are not only geographi- cal or political. Borders are bodies, languages,
  dreams, beliefs. Everything that, possibly, is linking us but also sometimes hurting,
  keeping us at distance. It is an intimate, intermediary space that allows passages.
credits-title: CREDITS
credits-text: <span class="bold">Pavel Tavares:</span> Director<br /><span class="bold">Flore
  de Corbier:</span> Co-author, writer<br /><span class="bold">Manu Rosales:</span>
  Original soundtrack and music production<br />
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