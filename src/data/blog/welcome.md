---
slug: 'update-snel-efficient-mac-osx-met-terminal'
title: 'Update snel en efficiënt je Mac met de Terminal'
subTitle: 'Kleine moeite, groot resultaat.'
excerpt: 'Het updaten van een Mac hoeft niet moeilijk te zijn. En je hebt echt niet altijd de Apple Store nodig. Met één commando in jouw Terminal ben je weer helemaal up to date.'
coverImage: '/assets/blog/dynamic-routing/cover.jpg'
date: '2022-08-29T05:35:07.322Z'
subject: 'React'
author:
  name: JJ Kasper
  picture: '/assets/blog/authors/jj.jpeg'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
---

Soms wil je snel je Mac updaten en heb je geen tijd om de App Store te openen. Heb je haast en wil je toch door met een geüpdate Mac? Gebruik dan het volgende commando in de Terminal om je Mac snel te updaten:

```bash
softwareupdate -i -a
```

### Wat is softwareupdate?

**softwareupdate** is het _command line commando_ van Mac OSX om software updates uit te voeren.

### Wat betekent -i?

De flag **-i** staat voor **install**. Voeg deze flag toe aan het commando om gedownloade updates automatisch te installeren.

### Wat betekent -a?

De flag **-a** staat voor **all**, dit betekent dat alles beschikbare updates geïnstalleerd worden.

### Uhh. Terminal?

Weet je niet wat de Terminal is? **No stress**. Volg deze stappen om de Terminal te openen en het commando uit te voeren:

1. Druk op de knoppen **CMD** en **Spatie** op je toetsenbord, hiermee open je de _Spotlight Search_
2. Type het woord **Terminal** en druk op _Enter_ op je toetsenbord
3. Je ziet nu dat de Terminal geopend is. In dit scherm type je het commando **softwareupdate -i -a**
4. Je ziet nu de woorden **Finding available software** en **Finding available software** verschijnen
5. Pak een bak koffie! Je Mac wordt op de achtergrond geüpdate 🌤
