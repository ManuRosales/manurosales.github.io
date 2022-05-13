---
title: Tour - Manu Rosales - Musician, composer, producer and teacher
workshopsTitle: TOUR
background-image: "/uploads/hero-tour.png"
tour-dates:
- date: 2022-07-14 00:00:00 Z
  venue: Cafe Berlin
  location: Barcelona, España
- date: 2022-10-10 00:00:00 Z
  venue: Café Berlín
  location: Barcelona, España
- date: 2022-07-14 00:00:00 Z
  venue: Cafe Berlin
  location: Barcelona, España
- date: 2022-07-14 00:00:00 Z
  venue: Cafe Berlin
  location: Barcelona, España
- date: 2022-07-14 00:00:00 Z
  venue: Cafe Berlin
  location: Barcelona, España
- date: 2022-07-14 00:00:00 Z
  venue: Cafe Berlin
  location: Barcelona, España
- date: 2022-07-14 00:00:00 Z
  venue: Cafe Berlin
  location: Barcelona, España
- date: 2022-07-14 00:00:00 Z
  venue: Cafe Berlin
  location: Barcelona, España
- date: 2022-07-14 00:00:00 Z
  venue: Cafe Berlin
  location: Barcelona, España
layout: basic-page
---

<section id="musica-section">
  <style>
    #dates-container {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding-top: 30px;
    }
    .date-container {
      margin-bottom: 30px;
    }
    main {
      min-height: 50vh;
    }
    #musica-section p {
      margin-bottom: 0;
    }
    #musica-section p:first-of-type {
      margin: 0;
    }
    .date-bold {
      font-weight: bold;
    }
    .date-grey {
      color: #999999;
    }
    @media (min-width: 767px) {
      #dates-container {
        width: 80%
      }
      .date-container {
        margin-left: 30px;
        margin-right: 30px;
        margin-bottom: 50px;
      }
    }
  </style>
  <div id="dates-container">
        {% for date in page.tour-dates %}
            <div class="date-container">
                <p>{{ date.date | date: "%d.%b.%y"}}</p>
                <p class="date-bold">{{ date.venue }}</p>
                <p class="date-grey">{{ date.location }}</p>
            </div>
        {% endfor %}
  </div>
</section>