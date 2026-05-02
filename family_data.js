const FAMILY_DATA = {

  /* ════════════════════════════════════════════
     UI STRINGS — translatable interface text
  ════════════════════════════════════════════ */
  ui: {
    header_sub: {
      en: "A family across five nations · ten generations",
      fr: "Une famille à travers cinq nations · dix générations"
    },
    nayla_title: {
      en: "Nayla — 10 generations · 5 nations",
      fr: "Nayla — 10 générations · 5 nations"
    },
    nayla_sub: {
      en: "Italian Veneto · Andalusian · French Aude · Occitan (Thil · Maurens · Ariège · Toulouse)\nLebanese Maronite — Mayfouk (2nd Patriarchal seat) · Batroun (1st Patriarch's diocese, 685 AD)\nBorn Toronto · 15 January 2022 · 3 birth certificates confirmed ✓",
      fr: "Vénétie italienne · Andalouse · Aude française · Occitane (Thil · Maurens · Ariège · Toulouse)\nLibanaise Maronite — Mayfouk (2e siège patriarcal) · Batroun (1er diocèse du patriarche, 685 ap. J.-C.)\nNée à Toronto · 15 janvier 2022 · 3 actes de naissance confirmés ✓"
    }
  },

  /* ════════════════════════════════════════════
     SECTIONS — dividers and generation labels
  ════════════════════════════════════════════ */
  sections: [
    {
      id: "italian-line",
      label: { en: "Ghisi / Marconi — Veneto, Italy · paternal line", fr: "Ghisi / Marconi — Vénétie, Italie · lignée paternelle" }
    },
    {
      id: "spanish-line",
      label: { en: "Caballero / Dominguez — Zalamea la Real, Andalusia", fr: "Caballero / Dominguez — Zalamea la Real, Andalousie" }
    },
    {
      id: "occitan-line",
      label: { en: "Lafourcade / Massip / Bordes / Respaud — Thil · Maurens · Ariège · Toulouse", fr: "Lafourcade / Massip / Bordes / Respaud — Thil · Maurens · Ariège · Toulouse" }
    },
    {
      id: "elias-line",
      label: { en: "Elias — Sahar's paternal line · Mayfouk, Jbeil", fr: "Elias — lignée paternelle de Sahar · Mayfouk, Jbeil" }
    },
    {
      id: "rouhana-line",
      label: { en: "Rouhana / Tanous / Mouzaya — Sahar's maternal line · Batroun", fr: "Rouhana / Tanous / Mouzaya — lignée maternelle de Sahar · Batroun" }
    }
  ],

  /* ════════════════════════════════════════════
     PEOPLE — all biographical panel data
  ════════════════════════════════════════════ */
  people: {

    /* ── Unknown ancestors ── */
    "unk-ghisi": {
      en: {
        name: "? Ghisi (Gen 6)",
        dates: "San Martino di Lupari · ~1820s",
        tags: ["To discover"],
        sections: [
          { title: "San Martino di Lupari in the 1820s", text: "This ancestor lived in San Martino di Lupari, a comune in the Province of Padua, during the Austrian-ruled period of Venetia. Life in the Veneto in the 1820s was deeply rural — small landholders and sharecroppers working land owned by the nobility, speaking Venetian dialect, attending the same parish church their grandparents had. The world was about to change: unification, industrialization, and the great emigration were still decades away." }
        ]
      },
      fr: {
        name: "? Ghisi (Gén. 6)",
        dates: "San Martino di Lupari · ~1820",
        tags: ["À découvrir"],
        sections: [
          { title: "San Martino di Lupari dans les années 1820", text: "Cet ancêtre vivait à San Martino di Lupari, commune de la Province de Padoue, sous la domination autrichienne de la Vénétie. La vie dans la Vénétie des années 1820 était profondément rurale — petits propriétaires et métayers travaillant des terres appartenant à la noblesse, parlant le dialecte vénitien. Le monde allait bientôt changer : unification, industrialisation et grande émigration étaient encore à des décennies de là." }
        ]
      }
    },

    "unk-marconi": {
      en: {
        name: "? Marconi (Gen 6)",
        dates: "Mizzole, Verona · ~1800s",
        tags: ["To discover"],
        sections: [
          { title: "Mizzole in the early 19th century", text: "This ancestor lived in Mizzole, in the Lessini hills above Verona, during the era of Austrian rule. Mizzole was — and still is — a village of vines and small farms, tucked into the same hills that produce Valpolicella wine. Life followed the agricultural calendar: pruning in spring, harvest in autumn, the village church marking the seasons." }
        ]
      },
      fr: {
        name: "? Marconi (Gén. 6)",
        dates: "Mizzole, Vérone · ~1800",
        tags: ["À découvrir"],
        sections: [
          { title: "Mizzole au début du XIXe siècle", text: "Cet ancêtre vivait à Mizzole, dans les collines des Lessini au-dessus de Vérone, à l'époque autrichienne. Mizzole était — et reste — un village de vignes et de petites fermes. La vie suivait le calendrier agricole : taille de la vigne au printemps, vendanges en automne, l'église du village rythmant les saisons." }
        ]
      }
    },

    /* ── Italian Ghisi line ── */
    "baptiste-ghisi": {
      en: {
        name: "Giovanni Battista Ghisi",
        dates: "resident Soave · father of Silvio & Carlo",
        tags: ["Italian Veneto", "Gen 5"],
        sections: [
          { title: "Confirmed from the 1901 marriage record", text: "Giovanni Battista Ghisi is confirmed as the father of both Silvio Mario (b. 1895, Soave) and Carlo (b. Colognola ai Colli), from Carlo's marriage certificate of January 1901. He was resident in Soave at that time." },
          { title: "The Veneto in his time", text: "Giovanni Battista lived through the unification of Italy (1866, when Venetia was annexed from Austria), the agricultural crises of the 1870s–80s, and the great wave of emigration that followed. His son Giuseppe would eventually join that wave and take the family to France." }
        ]
      },
      fr: {
        name: "Giovanni Battista Ghisi",
        dates: "résident de Soave · père de Silvio et Carlo",
        tags: ["Vénétie italienne", "Gén. 5"],
        sections: [
          { title: "Confirmé par l'acte de mariage de 1901", text: "Giovanni Battista Ghisi est confirmé comme père de Silvio Mario (n. 1895, Soave) et de Carlo (n. Colognola ai Colli), d'après l'acte de mariage de Carlo de janvier 1901." },
          { title: "La Vénétie à son époque", text: "Giovanni Battista vécut l'unification de l'Italie (1866, quand la Vénétie fut annexée par l'Autriche), les crises agricoles des années 1870–1880, et la grande vague d'émigration qui suivit. Son fils Giuseppe rejoindrait finalement cette vague et emmènerait la famille en France." }
        ]
      }
    },

    "edigio-marconi": {
      en: {
        name: "Edigio Marconi",
        dates: "b. ~1835 · Mizzole, Verona",
        tags: ["Italian Veneto", "Gen 5"],
        sections: [
          { title: "Mizzole", text: "Mizzole sits in the Lessini hills east of Verona, among the vineyards that produce Valpolicella and Soave wines. In Edigio's time it was a tight-knit rural community of farmers and smallholders, far removed from the industrializing cities of the north." },
          { title: "Pre-unification Veneto", text: "Edigio was born into Austrian-ruled Venetia — the region was part of the Habsburg Empire until 1866. The land system favored large landowners; peasant farmers like the Marconi family had little security and few prospects, which would eventually push the next generation toward emigration." }
        ]
      },
      fr: {
        name: "Edigio Marconi",
        dates: "n. ~1835 · Mizzole, Vérone",
        tags: ["Vénétie italienne", "Gén. 5"],
        sections: [
          { title: "Mizzole", text: "Mizzole se niche dans les collines des Lessini à l'est de Vérone, parmi les vignes qui produisent la Valpolicella et le Soave. Du temps d'Edigio, c'était une communauté rurale fermée, loin des villes industrialisées du nord." },
          { title: "La Vénétie avant l'unité", text: "Edigio est né en Vénétie sous domination autrichienne — la région faisait partie de l'Empire des Habsbourg jusqu'en 1866. Le système foncier favorisait les grands propriétaires ; les paysans comme les Marconi n'avaient guère de sécurité." }
        ]
      }
    },

    "giuseppe-ghisi": {
      en: {
        name: "Giuseppe Ghisi",
        dates: "b. 1868, San Martino di Lupari · d. 1936, Sainte-Eulalie",
        tags: ["Italian Veneto", "Villico · Soave", "Emigrant ~1900"],
        sections: [
          { title: "A farmer from Soave", text: "Giuseppe was a villico — a peasant farmer — living at Via Campagnola no. 14 in Soave. Soave was already famous for its white wine and its perfectly preserved medieval walls when Giuseppe was raising his family there in the 1890s." },
          { title: "The Great Migration", text: "Between 1876 and 1913, Veneto had the highest emigration rate of any Italian region. Giuseppe led his whole family across the Alps into southern France — one of hundreds of thousands of Venetians who chose France as their destination." },
          { title: "A life in two countries", text: "He settled in the Aude department of Languedoc, in the shadow of the Black Mountains. He died in 1936 at Sainte-Eulalie, having spent nearly four decades as a Frenchman — but with a Soave birth certificate and a Venetian soul." }
        ]
      },
      fr: {
        name: "Giuseppe Ghisi",
        dates: "n. 1868, San Martino di Lupari · d. 1936, Sainte-Eulalie",
        tags: ["Vénétie italienne", "Villico · Soave", "Émigrant ~1900"],
        sections: [
          { title: "Un paysan de Soave", text: "Giuseppe était villico — paysan cultivateur — demeurant Via Campagnola n°14 à Soave, au cœur du vignoble vénitien. Soave était déjà célèbre pour son vin blanc et ses remparts médiévaux quand Giuseppe y élevait sa famille dans les années 1890." },
          { title: "La Grande Migration", text: "Entre 1876 et 1913, la Vénétie connut le plus fort taux d'émigration de toutes les régions italiennes. Giuseppe mena toute sa famille à travers les Alpes vers le sud de la France — l'un des centaines de milliers de Vénitiens qui choisirent la France." },
          { title: "Une vie entre deux pays", text: "Il s'établit dans le département de l'Aude, au pied des Montagnes Noires. Il mourut en 1936 à Sainte-Eulalie, après près de quarante ans passés en France — avec un acte de naissance soavais et une âme vénitienne." }
        ]
      }
    },

    "dosolina": {
      en: {
        name: "Dosolina Molinaroli",
        dates: "b. 1873, Soave, Verona · d. 1929, Laure-Minervois",
        tags: ["Italian Veneto", "Emigrant"],
        sections: [
          { title: "From Soave to the Midi", text: "Dosolina was born in Soave and raised in the shadow of its famous medieval castle and vineyards. She left it all behind around 1900 to follow Giuseppe to southern France. She died in Laure-Minervois in 1929 at 56 — far from the Veneto she was born in." },
          { title: "The Molinaroli name", text: "'Molinaroli' derives from mulinaro — miller. The name suggests a family historically associated with grain milling, common along the waterways of the Venetian plain." }
        ]
      },
      fr: {
        name: "Dosolina Molinaroli",
        dates: "n. 1873, Soave · d. 1929, Laure-Minervois",
        tags: ["Vénétie italienne", "Émigrante"],
        sections: [
          { title: "De Soave au Midi", text: "Dosolina naquit à Soave et grandit à l'ombre de son célèbre château médiéval. Elle laissa tout derrière elle vers 1900 pour suivre Giuseppe en France. Elle mourut à Laure-Minervois en 1929 à 56 ans — loin de la Vénétie natale." },
          { title: "Le nom Molinaroli", text: "« Molinaroli » dérive de mulinaro — meunier. Ce nom évoque une famille historiquement liée à un moulin, commune le long des cours d'eau de la plaine vénitienne." }
        ]
      }
    },

    "gaetano-marconi": {
      en: {
        name: "Gaetano Marconi",
        dates: "b. 22 May 1867, Mizzole · d. 1933, Villesèquelande",
        tags: ["Italian Veneto", "Emigrant"],
        sections: [
          { title: "From the Veronese hills to the Aude", text: "Gaetano was born in Mizzole in the Lessini hills and spent his working life in France, dying at Villesèquelande near Carcassonne in 1933. Like the Ghisi family, he was part of the wave of Venetian agricultural workers who found their way to Languedoc." },
          { title: "Two Veneto families, one village", text: "The fact that both the Ghisi and Marconi families from the same corner of Verona ended up in the same part of the Aude was no coincidence — emigrants followed networks. Their children Silvio and Carillia would marry, uniting the two families permanently." }
        ]
      },
      fr: {
        name: "Gaetano Marconi",
        dates: "n. 22 mai 1867, Mizzole · d. 1933, Villesèquelande",
        tags: ["Vénétie italienne", "Émigrant"],
        sections: [
          { title: "Des collines véronaises à l'Aude", text: "Gaetano naquit à Mizzole et passa sa vie active en France, mourant à Villesèquelande près de Carcassonne en 1933. Comme les Ghisi, il faisait partie de la vague de travailleurs agricoles vénitiens qui rejoignirent les fermes du Languedoc." },
          { title: "Deux familles vénètes, un même village", text: "Le fait que les familles Ghisi et Marconi du même coin de Vérone se retrouvèrent dans la même partie de l'Aude n'est pas un hasard — les émigrés suivaient des réseaux. Leurs enfants Silvio et Carillia se marieraient, unissant définitivement les deux familles." }
        ]
      }
    },

    "silvio-ghisi": {
      en: {
        name: "Silvio Mario Ghisi",
        dates: "b. 1 May 1895, Soave ✓ · d. 1934, Aude",
        tags: ["Italian-French", "Gen 3", "Birth certificate confirmed ✓"],
        sections: [
          { title: "Born in Soave", text: "Silvio Mario Ghisi was born on the first of May 1895 at 9:30am, in the family home at Via Campagnola no. 14, Soave. His father Giuseppe declared the birth five days later at the town hall. The full name Silvio Mario was recorded; the Mario was previously unknown." },
          { title: "A brother in Colognola", text: "Silvio had at least one brother, Carlo, born in Colognola ai Colli — suggesting the family moved between Soave and Colognola during those years. Carlo married Regina Tebaldi in Soave in January 1901." },
          { title: "Raised in France, died young", text: "Silvio grew up in the Aude after his family emigrated. He married Carillia Marconi — another Veronese emigrant family. He died in 1934, aged just 39, leaving his son Lino to carry the name forward." }
        ]
      },
      fr: {
        name: "Silvio Mario Ghisi",
        dates: "n. 1er mai 1895, Soave ✓ · d. 1934, Aude",
        tags: ["Italien-Français", "Gén. 3", "Acte de naissance confirmé ✓"],
        sections: [
          { title: "Né à Soave", text: "Silvio Mario Ghisi naquit le 1er mai 1895 à 9h30, Via Campagnola n°14, Soave. Son père Giuseppe déclara la naissance cinq jours plus tard à la mairie. Le prénom complet Silvio Mario fut enregistré ; le « Mario » était jusqu'alors inconnu." },
          { title: "Un frère à Colognola", text: "Silvio avait au moins un frère, Carlo, né à Colognola ai Colli. Carlo épousa Regina Tebaldi à Soave en janvier 1901." },
          { title: "Élevé en France, mort jeune", text: "Silvio grandit dans l'Aude après l'émigration de sa famille. Il épousa Carillia Marconi — une autre famille émigrée de Vénétie. Il mourut en 1934 à seulement 39 ans, laissant son fils Lino perpétuer le nom." }
        ]
      }
    },

    "lino-ghisi": {
      en: {
        name: "Lino Guido Ghisi",
        dates: "b. 17 Jan 1919, Montorio, Italy · d. Caunes-Minervois",
        tags: ["Born Italy · Raised France", "Gen 2", "Christophe's grandfather"],
        sections: [
          { title: "Born in Italy, became French", text: "Lino was born in Montorio, Italy, and moved to France as an infant with his whole family. He grew up in the Aude speaking French, working the land of the Minervois — becoming as thoroughly Occitan as any of his neighbours, despite his Italian birth certificate." },
          { title: "A wartime marriage", text: "On 14 October 1940, just months after France fell to Germany, Lino married Fernande Caballero in Laure. Their union brought together the Italian Ghisi line and the Andalusian Caballero line — two immigrant families that had independently crossed into France and ended up in the same village." },
          { title: "The Minervois in the 1940s", text: "The Aude was part of the 'Free Zone' until November 1942, when German forces occupied all of France. Life in small villages like Caunes continued — the vineyards still needed tending — but under a shadow that would last until Liberation in 1944." }
        ]
      },
      fr: {
        name: "Lino Guido Ghisi",
        dates: "n. 17 jan. 1919, Montorio, Italie · d. Caunes-Minervois",
        tags: ["Né en Italie · Élevé en France", "Gén. 2", "Grand-père de Christophe"],
        sections: [
          { title: "Né en Italie, devenu Français", text: "Lino naquit à Montorio, en Italie, et émigra en France en bas âge avec toute sa famille. Il grandit dans l'Aude en parlant français, travaillant les terres du Minervois — devenant aussi profondément occitan que ses voisins, malgré son acte de naissance italien." },
          { title: "Un mariage en temps de guerre", text: "Le 14 octobre 1940, Lino épousa Fernande Caballero à Laure. Leur union rassembla la lignée italienne des Ghisi et la lignée andalouse des Caballero — deux familles d'immigrants qui avaient traversé la frontière séparément pour atterrir dans le même village." },
          { title: "Le Minervois dans les années 1940", text: "L'Aude faisait partie de la « zone libre » jusqu'en novembre 1942. La vie dans les villages comme Caunes continua — les vignes réclamaient toujours leurs soins — mais sous une ombre qui dura jusqu'à la Libération en 1944." }
        ]
      }
    },

    /* ── Spanish / Caballero line ── */
    "justo-caballero": {
      en: {
        name: "Justo Caballero",
        dates: "Zalamea la Real, Huelva",
        tags: ["Andalusian", "Gen 5"],
        sections: [
          { title: "Life in the mining country", text: "Justo lived in Zalamea la Real, a town at the heart of the Iberian Pyrite Belt in Huelva province. The Rio Tinto copper mines nearby — sold to a British syndicate in 1873 — transformed the region entirely, bringing foreign capital, railways, and thousands of workers." },
          { title: "The Year of the Shots", text: "In February 1888, a peaceful protest by miners and farmers against toxic mine fumes was met with gunfire from the Spanish army — historians estimate between 100 and 200 deaths. This massacre, known as the 'Year of the Shots,' left a deep scar on the Huelva mining communities." },
          { title: "Name & heritage", text: "'Caballero' means knight or gentleman in Spanish — an old Castilian surname widespread across Andalusia. Zalamea itself traces its name to the Moorish word 'Shalama' (peace), a reminder of the 800 years of Islamic rule that shaped the region's DNA." }
        ]
      },
      fr: {
        name: "Justo Caballero",
        dates: "Zalamea la Real, Huelva",
        tags: ["Andalou", "Gén. 5"],
        sections: [
          { title: "La vie dans le pays des mines", text: "Justo vivait à Zalamea la Real, au cœur de la Ceinture de pyrite ibérique. Les mines de Rio Tinto — vendues à un syndicat britannique en 1873 — transformèrent entièrement la région, apportant capitaux étrangers, chemins de fer et milliers d'ouvriers." },
          { title: "L'année des coups de feu", text: "En février 1888, une manifestation pacifique fut réprimée par l'armée espagnole — entre 100 et 200 morts. Ce massacre, connu sous le nom de « l'Année des coups de feu », laissa une cicatrice profonde dans les communautés minières de Huelva." },
          { title: "Nom et héritage", text: "« Caballero » signifie chevalier en espagnol. Zalamea tire son nom du mot maure « Shalama » (la paix), rappel des 800 ans de domination islamique qui ont façonné l'ADN de la région." }
        ]
      }
    },

    "joseph-dominguez": {
      en: {
        name: "Joseph Dominguez",
        dates: "Zalamea la Real, Huelva",
        tags: ["Andalusian", "Gen 5"],
        sections: [
          { title: "Zalamea la Real", text: "Joseph lived in the same mining town as the Caballero family. Zalamea sits at 400 metres above sea level in the Andévalo highlands. People had been mining its copper-rich earth since the Copper Age — the Dolmens of El Pozuelo nearby date to 2800 BC." },
          { title: "The Dominguez name", text: "'Dominguez' is a patronymic from Domingo (Dominic). One of the most common surnames in southwestern Spain, it traces to the deeply Catholic culture of post-Reconquista Andalusia." }
        ]
      },
      fr: {
        name: "Joseph Dominguez",
        dates: "Zalamea la Real, Huelva",
        tags: ["Andalou", "Gén. 5"],
        sections: [
          { title: "Zalamea la Real", text: "Joseph vivait dans la même ville minière que la famille Caballero. Zalamea se dresse à 400 mètres d'altitude dans les hauteurs de l'Andévalo. Les hommes extrayaient le cuivre ici depuis l'âge du cuivre — les dolmens d'El Pozuelo datent de 2800 av. J.-C." },
          { title: "Le nom Dominguez", text: "« Dominguez » est un patronyme dérivé de Domingo (Dominique). L'un des noms les plus répandus dans le sud-ouest de l'Espagne, il témoigne de la culture profondément catholique de l'Andalousie post-Reconquista." }
        ]
      }
    },

    "fernande-barada": {
      en: {
        name: "Fernande Barada",
        dates: "Zalamea la Real · Moorish roots",
        tags: ["Andalusian", "Moorish heritage"],
        sections: [
          { title: "A Moorish thread", text: "The notation 'Moorish roots' reflects Andalusia's 800 years under Islamic rule (711–1492 AD). Even after the Reconquista, converted Muslims remained part of Andalusian communities for generations, leaving genetic, linguistic, and cultural traces. The Barada surname itself may be of Arabic origin." },
          { title: "Al-Andalus legacy", text: "Huelva was part of the Caliphate of Córdoba, one of the most sophisticated civilizations in medieval Europe. The Moors introduced irrigation, advanced agriculture, and architectural traditions that transformed southern Spain." }
        ]
      },
      fr: {
        name: "Fernande Barada",
        dates: "Zalamea la Real · racines mauresques",
        tags: ["Andalouse", "Héritage maure"],
        sections: [
          { title: "Un fil maure", text: "La mention « racines mauresques » reflète les 800 ans de domination islamique en Andalousie (711–1492). Même après la Reconquista, les Morisques restèrent présents dans les communautés andalouses pendant des générations, laissant des traces génétiques et culturelles encore perceptibles aujourd'hui." },
          { title: "L'héritage d'Al-Andalus", text: "Huelva faisait partie du Califat de Cordoue, l'une des civilisations les plus sophistiquées de l'Europe médiévale. Les Maures introduisirent l'irrigation et des traditions architecturales qui transformèrent le sud de l'Espagne." }
        ]
      }
    },

    "emilio-caballero": {
      en: {
        name: "Emilio Caballero",
        dates: "b. 20 Apr 1893, Zalamea la Real · → Caunes-Minervois ~1913",
        tags: ["Spanish → French", "Gen 4"],
        sections: [
          { title: "Growing up in the mines", text: "Emilio was born in 1893 in Zalamea. The open-pit mine at Corta Atalaya — which would become the largest in Europe — opened in 1907 when Emilio was 14. The landscape of his childhood was red earth, copper dust, and foreign-owned industry." },
          { title: "The journey to France", text: "Around 1913, Emilio and Emilia left Zalamea for Caunes-Minervois in the Aude. By that time Andalusians were arriving in Languedoc in significant numbers, drawn to the vineyards and agricultural estates of the Midi." },
          { title: "Caunes-Minervois", text: "The village they chose is one of the most beautiful in the Aude — a medieval settlement built around an 8th-century Benedictine abbey, its streets paved with the famous crimson-red marble that adorns the Palace of Versailles." }
        ]
      },
      fr: {
        name: "Emilio Caballero",
        dates: "n. 20 avr. 1893, Zalamea la Real · → Caunes-Minervois ~1913",
        tags: ["Espagnol → Français", "Gén. 4"],
        sections: [
          { title: "Grandir dans les mines", text: "Emilio naquit en 1893 à Zalamea. La mine à ciel ouvert de Corta Atalaya — qui deviendrait la plus grande d'Europe — ouvrit en 1907 quand il avait 14 ans. Le paysage de son enfance : terre rouge, poussière de cuivre, industrie aux mains étrangères." },
          { title: "Le voyage vers la France", text: "Vers 1913, Emilio et Emilia quittèrent Zalamea pour Caunes-Minervois dans l'Aude. À cette époque, les Andalous arrivaient en nombre en Languedoc, attirés par les vignobles et les domaines agricoles du Midi." },
          { title: "Caunes-Minervois", text: "Le village qu'ils choisirent est l'un des plus beaux de l'Aude — bâti autour d'une abbaye bénédictine du VIIIe siècle, ses rues pavées du célèbre marbre rouge cramoisi qui orne le château de Versailles." }
        ]
      }
    },

    "emilia-dominguez": {
      en: {
        name: "Emilia Dominguez",
        dates: "b. 2 Mar 1893, Zalamea la Real · → Caunes-Minervois ~1913",
        tags: ["Spanish → French", "Gen 4"],
        sections: [
          { title: "Born the same year, same town", text: "Emilia and Emilio were both born in 1893 in Zalamea la Real — she on 2 March, he on 20 April. They grew up together, married, and emigrated to France around 1913. Their daughter Fernande, born in Caunes in 1920, would be the first of their line born on French soil." },
          { title: "Women in the mining community", text: "Life for women in the Huelva mining towns was defined by brutal work rhythms, accident risk, and sulfurous air. Emilia's decision to leave with Emilio was as much a choice for a better life as a leap into the unknown." }
        ]
      },
      fr: {
        name: "Emilia Dominguez",
        dates: "n. 2 mars 1893, Zalamea la Real · → Caunes-Minervois ~1913",
        tags: ["Espagnole → Française", "Gén. 4"],
        sections: [
          { title: "Nés la même année, dans la même ville", text: "Emilia et Emilio naquirent tous deux en 1893 à Zalamea la Real. Ils grandirent ensemble, se marièrent et émigrèrent vers la France vers 1913. Leur fille Fernande, née à Caunes en 1920, serait la première de leur lignée à naître sur le sol français." },
          { title: "Les femmes dans la communauté minière", text: "La vie des femmes dans les villes minières était rythmée par des postes épuisants, des accidents constants et un air vicié par le soufre. La décision d'Emilia de partir avec Emilio était autant un choix de vie meilleure qu'un saut dans l'inconnu." }
        ]
      }
    },

    "fernande-caballero": {
      en: {
        name: "Fernande Caballero",
        dates: "b. 29 Dec 1920, Caunes-Minervois · m. 14 Oct 1940, Laure",
        tags: ["First generation born in France", "Gen 2", "Christophe's grandmother"],
        sections: [
          { title: "First of her line born in France", text: "Fernande was born in Caunes-Minervois on 29 December 1920 — the first of the Caballero family to be born on French soil. Her parents Emilio and Emilia had arrived from Zalamea seven years earlier; she was their France, the proof that the journey had worked." },
          { title: "Growing up between two worlds", text: "Fernande grew up speaking French but with Spanish at home, in a village where Italian and Spanish immigrant families lived side by side with the old Occitan locals. Caunes in the 1920s and 30s was a patchwork of accents and origins, all tending the same vines under the same Languedoc sun." },
          { title: "Marriage under occupation", text: "Her marriage to Lino Ghisi on 14 October 1940 in Laure took place just four months after France's armistice with Germany. Two immigrant families, now fully French, joined their lines in the shadow of war." }
        ]
      },
      fr: {
        name: "Fernande Caballero",
        dates: "n. 29 déc. 1920, Caunes-Minervois · m. 14 oct. 1940, Laure",
        tags: ["Première génération née en France", "Gén. 2", "Grand-mère de Christophe"],
        sections: [
          { title: "Première de sa lignée née en France", text: "Fernande naquit à Caunes-Minervois le 29 décembre 1920 — première des Caballero à naître sur le sol français. Ses parents Emilio et Emilia étaient arrivés de Zalamea sept ans plus tôt ; elle était leur France, la preuve que le voyage avait réussi." },
          { title: "Grandir entre deux mondes", text: "Fernande grandit en parlant français mais avec l'espagnol à la maison, dans un village où les familles d'immigrants italiens et espagnols côtoyaient les anciens habitants occitans. Caunes dans les années 1920–30 était un patchwork d'accents et d'origines." },
          { title: "Un mariage sous l'Occupation", text: "Son mariage avec Lino Ghisi le 14 octobre 1940 eut lieu à Laure, quatre mois à peine après l'armistice franco-allemand. Deux familles d'immigrants, désormais pleinement françaises, unirent leurs destins dans l'ombre de la guerre." }
        ]
      }
    },

    /* ── Occitan line ── */
    "jean-lafourcade": {
      en: {
        name: "Jean Lafourcade",
        dates: "b. ~1838, Thil, Haute-Garonne · cultivateur",
        tags: ["Occitan", "Gen 7"],
        sections: [
          { title: "Deep Occitan roots", text: "Jean was a cultivateur — a farmer — in Thil, a small commune in the Haute-Garonne between Toulouse and Saint-Gaudens. The Lafourcade family had been part of this landscape for generations, working the same fields, speaking the same Occitan language that distinguished the people of the Midi." },
          { title: "France in the 1830s–1870s", text: "Jean lived through the revolution of 1848, the Second Republic, the coup of Louis-Napoléon, the Second Empire, the Franco-Prussian War of 1870, and the birth of the Third Republic. For a farmer in the Haute-Garonne, these great events were felt mostly as distant thunder — the harvest still had to come in." },
          { title: "The name Lafourcade", text: "An Occitan surname derived from 'la fourche' — the fork — referring to a crossroads in the landscape. Surnames like this were born from the land itself, given to families who lived near a particular feature of the countryside." }
        ]
      },
      fr: {
        name: "Jean Lafourcade",
        dates: "n. ~1838, Thil, Haute-Garonne · cultivateur",
        tags: ["Occitan", "Gén. 7"],
        sections: [
          { title: "Racines occitanes profondes", text: "Jean était cultivateur à Thil, petite commune de Haute-Garonne entre Toulouse et Saint-Gaudens. La famille Lafourcade faisait partie de ce paysage depuis des générations, travaillant les mêmes champs, parlant la même langue occitane qui distinguait les gens du Midi." },
          { title: "La France des années 1830–1870", text: "Jean vécut la révolution de 1848, la Seconde République, le coup d'État de Louis-Napoléon, le Second Empire, la guerre franco-prussienne de 1870 et la naissance de la Troisième République. Pour un cultivateur de Haute-Garonne, ces grands événements n'étaient que tonnerre lointain." },
          { title: "Le nom Lafourcade", text: "Patronyme occitan dérivé de « la fourche » — une bifurcation dans le paysage. Des noms comme celui-ci étaient nés de la terre elle-même, donnés aux familles qui vivaient près d'un trait particulier du terroir." }
        ]
      }
    },

    "michel-lafourcade": {
      en: {
        name: "Michel Félix Lafourcade",
        dates: "b. 15 Sep 1876, Thil · m. 10 Feb 1904, Grenade-sur-Garonne",
        tags: ["Occitan", "Gen 6", "Marriage confirmed ✓"],
        sections: [
          { title: "Born in the Third Republic", text: "Michel was born in 1876, just five years after France's defeat in the Franco-Prussian War. The Midi was experiencing the devastating phylloxera crisis that wiped out vineyards across Languedoc and Haute-Garonne throughout the 1870s and 80s." },
          { title: "Marriage at Grenade-sur-Garonne", text: "Michel married Catherine Delmas on 10 February 1904 in Grenade-sur-Garonne, a medieval bastide town on the Garonne north of Toulouse, founded in 1290. The record is confirmed." }
        ]
      },
      fr: {
        name: "Michel Félix Lafourcade",
        dates: "n. 15 sep. 1876, Thil · m. 10 fév. 1904, Grenade-sur-Garonne",
        tags: ["Occitan", "Gén. 6", "Mariage confirmé ✓"],
        sections: [
          { title: "Né sous la Troisième République", text: "Michel naquit en 1876, cinq ans après la défaite française face à la Prusse. Le Midi traversait la crise dévastatrice du phylloxéra qui dévasta les vignobles du Languedoc et de la Haute-Garonne tout au long des années 1870–1880." },
          { title: "Mariage à Grenade-sur-Garonne", text: "Michel épousa Catherine Delmas le 10 février 1904 à Grenade-sur-Garonne, bastide médiévale sur la Garonne au nord de Toulouse, fondée en 1290. L'acte est confirmé." }
        ]
      }
    },

    "catherine-delmas": {
      en: {
        name: "Catherine Delmas",
        dates: "b. ~1883, Maurens area, Haute-Garonne",
        tags: ["Occitan", "Gen 6"],
        sections: [
          { title: "Of the farmhouse", text: "'Delmas' — or del mas in Occitan — means 'of the farmhouse.' The mas was the defining unit of rural life in the Midi: a self-sufficient stone farmstead surrounded by fields, vineyards, and orchards." },
          { title: "The Midi at the turn of the century", text: "Catherine grew up in the aftermath of the great wine crisis of 1907, when overproduction and falling prices drove thousands of Languedoc winegrowers to revolt. The Midi was politically alive, fiercely republican, and deeply attached to its own language and traditions." }
        ]
      },
      fr: {
        name: "Catherine Delmas",
        dates: "n. ~1883, région de Maurens, Haute-Garonne",
        tags: ["Occitane", "Gén. 6"],
        sections: [
          { title: "De la ferme", text: "« Delmas » — ou del mas en occitan — signifie « de la ferme ». Le mas était l'unité fondamentale de la vie rurale dans le Midi : une ferme en pierre autonome entourée de champs, vignes et vergers." },
          { title: "Le Midi au tournant du siècle", text: "Catherine grandit dans les séquelles de la grande crise viticole de 1907, quand la surproduction et l'effondrement des prix poussèrent des milliers de vignerons languedociens à se révolter." }
        ]
      }
    },

    "joseph-respaud": {
      en: {
        name: "Joseph Respaud",
        dates: "b. 19 Jun 1902, Lorp-Sentaraille · d. 30 Dec 1979, Prat-Bonrepaux",
        tags: ["Occitan Ariège", "Gen 5", "Confirmed ✓"],
        sections: [
          { title: "Ariège — Cathar country", text: "Joseph was born and died in the Ariège, the Pyrenean département that was once the heartland of the Cathar heresy — a medieval Christian movement brutally crushed by the Albigensian Crusade in the 13th century. The ruins of Cathar castles still crown the hilltops above the valleys where Joseph farmed." },
          { title: "A long life in the foothills", text: "Born in Lorp-Sentaraille and dying in Prat-Bonrepaux, Joseph spent his 77 years in the same narrow corridor of Pyrenean foothills. He lived through two world wars, the liberation of France, and the great rural exodus of the 1950s–60s." }
        ]
      },
      fr: {
        name: "Joseph Respaud",
        dates: "n. 19 juin 1902, Lorp-Sentaraille · d. 30 déc. 1979, Prat-Bonrepaux",
        tags: ["Occitan Ariège", "Gén. 5", "Confirmé ✓"],
        sections: [
          { title: "L'Ariège — pays cathare", text: "Joseph naquit et mourut en Ariège, le département pyrénéen qui fut jadis le cœur de l'hérésie cathare — mouvement chrétien médiéval brutalement écrasé par la croisade des Albigeois au XIIIe siècle. Les ruines des châteaux cathares couronnent encore les collines." },
          { title: "Une longue vie dans les contreforts", text: "Né à Lorp-Sentaraille et mort à Prat-Bonrepaux, Joseph passa ses 77 ans dans le même corridor de piémont pyrénéen. Il vécut deux guerres mondiales, la libération de la France, et le grand exode rural des années 1950–60." }
        ]
      }
    },

    "mt-lafourcade": {
      en: {
        name: "Marie-Thérèse Lafourcade",
        dates: "b. 17 Mar 1904, Maurens ✓ · d. 2 May 1979, Thil ✓",
        tags: ["Occitan", "Gen 5", "Confirmed ✓"],
        sections: [
          { title: "A life between two villages", text: "Marie-Thérèse was born in Maurens in 1904 and died in Thil in 1979 — the same village her grandfather Jean Lafourcade had farmed in the 1830s. Her life traces an arc of 75 years within the same small corner of the Haute-Garonne." },
          { title: "Her era", text: "Marie-Thérèse lived through the First World War as a child, the Depression as a young mother, the Second World War and Occupation in her thirties, and the extraordinary postwar transformation of France in her later years." }
        ]
      },
      fr: {
        name: "Marie-Thérèse Lafourcade",
        dates: "n. 17 mars 1904, Maurens ✓ · d. 2 mai 1979, Thil ✓",
        tags: ["Occitane", "Gén. 5", "Confirmée ✓"],
        sections: [
          { title: "Une vie entre deux villages", text: "Marie-Thérèse naquit à Maurens en 1904 et mourut à Thil en 1979 — le même village où son grand-père Jean Lafourcade avait cultivé ses champs dans les années 1830. Sa vie décrit un arc de 75 ans dans le même petit coin de Haute-Garonne." },
          { title: "Son époque", text: "Marie-Thérèse vécut la Première Guerre mondiale enfant, la Dépression jeune mère, la Seconde Guerre et l'Occupation dans la trentaine, et l'extraordinaire transformation de la France d'après-guerre dans ses dernières années." }
        ]
      }
    },

    "guillaume-bordes": {
      en: {
        name: "Guillaume André Yvan Bordes",
        dates: "b. 15 Mar 1938, Thil, Haute-Garonne",
        tags: ["Occitan", "Gen 4"],
        sections: [
          { title: "Born in the shadow of war", text: "Guillaume was born in March 1938 in Thil — six months before the Munich Agreement, and eighteen months before France entered the Second World War. He spent his early childhood under the Vichy regime and the German Occupation." },
          { title: "The Bordes name", text: "'Bordes' comes from the Occitan word borde — a small isolated farmstead. It became a surname for families who lived at or worked such a farm, and is widespread across the Midi and Gascony." }
        ]
      },
      fr: {
        name: "Guillaume André Yvan Bordes",
        dates: "n. 15 mars 1938, Thil, Haute-Garonne",
        tags: ["Occitan", "Gén. 4"],
        sections: [
          { title: "Né dans l'ombre de la guerre", text: "Guillaume naquit à Thil en mars 1938 — six mois avant les accords de Munich, et dix-huit mois avant l'entrée en guerre de la France. Il passa sa petite enfance sous le régime de Vichy et l'Occupation allemande." },
          { title: "Le nom Bordes", text: "« Bordes » vient du mot occitan borde — une petite ferme isolée. Ce nom de famille désignait les familles qui vivaient à une telle ferme, et il est répandu dans tout le Midi et la Gascogne." }
        ]
      }
    },

    "eliane-respaud": {
      en: {
        name: "Éliane Noëlle Respaud",
        dates: "b. 25 Dec 1943, Toulouse ✓ · daughter of Joseph + Marie-Thérèse",
        tags: ["Occitan", "Gen 4", "Confirmed ✓"],
        sections: [
          { title: "From the Pyrenean foothills to Toulouse", text: "Éliane was born of the Ariège Respaud family and the Haute-Garonne Lafourcade family, and settled in Toulouse — the great Occitan capital. Her move to the city mirrored a pattern repeated across the Midi in the postwar decades." },
          { title: "Toulouse", text: "The 'Pink City' — so called for its distinctive rose-coloured brick — had been the capital of Occitan civilization in the Middle Ages. By the time Éliane arrived, it was a growing industrial and university city, home to aeronautics and the beginnings of what would become Airbus." }
        ]
      },
      fr: {
        name: "Éliane Noëlle Respaud",
        dates: "n. 25 déc. 1943, Toulouse ✓ · fille de Joseph + Marie-Thérèse",
        tags: ["Occitane", "Gén. 4", "Confirmée ✓"],
        sections: [
          { title: "Des contreforts pyrénéens à Toulouse", text: "Éliane, née de la famille Respaud d'Ariège et des Lafourcade de Haute-Garonne, s'installa à Toulouse — la grande capitale occitane. Son déménagement vers la ville reflète un mouvement répété dans tout le Midi après la guerre." },
          { title: "Toulouse", text: "La « Ville Rose » — ainsi nommée pour sa brique rose — avait été la capitale de la civilisation occitane au Moyen Âge. Quand Éliane y grandit, c'était une ville industrielle et universitaire en plein essor, foyer de l'aéronautique et des débuts de ce qui allait devenir Airbus." }
        ]
      }
    },

    /* ── Gen 3 — parents ── */
    "richard-ghisi": {
      en: {
        name: "Richard Ghisi",
        dates: "b. 9 May · Caunes-Minervois",
        tags: ["Italian · Spanish · French", "Gen 3", "Christophe's father"],
        sections: [
          { title: "Where three journeys meet", text: "Richard was born in Caunes-Minervois to Lino Ghisi — whose family came from the Veneto — and Fernande Caballero — the first of her Andalusian family born in France. In him, the Italian and Spanish immigrant stories became one family, rooted in the same medieval village in the Aude." },
          { title: "Caunes-Minervois", text: "The village Richard grew up in is one of the most ancient in the region. Its red marble — quarried since Roman times — can be found in the Hall of Mirrors at Versailles. The 8th-century Abbey at its heart has watched over the village through Visigoths, Franks, Cathars, and two world wars." }
        ]
      },
      fr: {
        name: "Richard Ghisi",
        dates: "n. 9 mai · Caunes-Minervois",
        tags: ["Italien · Espagnol · Français", "Gén. 3", "Père de Christophe"],
        sections: [
          { title: "Là où trois voyages se rejoignent", text: "Richard naquit à Caunes-Minervois de Lino Ghisi — dont la famille venait de Vénétie — et de Fernande Caballero — première de sa lignée andalouse née en France. En lui, les histoires italiennes et espagnoles devinrent une seule famille, enracinée dans le même village médiéval de l'Aude." },
          { title: "Caunes-Minervois", text: "Le village où Richard grandit est l'un des plus anciens de la région. Son marbre rouge — extrait depuis l'époque romaine — orne la galerie des Glaces de Versailles. L'abbaye du VIIIe siècle en son cœur a vu passer Wisigoths, Francs, Cathares et deux guerres mondiales." }
        ]
      }
    },

    "brigitte-bordes": {
      en: {
        name: "Brigitte Bordes",
        dates: "b. 29 Nov 1963, Toulouse ✓",
        tags: ["Occitan", "Gen 3", "Christophe's mother", "Confirmed ✓"],
        sections: [
          { title: "Daughter of the Midi", text: "Brigitte was born in Toulouse in November 1963 — the same month President Kennedy was assassinated. She carries some of the deepest French roots in the tree: the Lafourcade family of Thil documented to the 1830s, and the Respaud family of the Ariège Pyrenean foothills." },
          { title: "Toulouse in the 1960s", text: "The city Brigitte was born into was in the middle of the 'Trente Glorieuses' — France's thirty years of postwar economic boom. Toulouse was growing fast, driven by aviation, engineering, and a major university." }
        ]
      },
      fr: {
        name: "Brigitte Bordes",
        dates: "n. 29 nov. 1963, Toulouse ✓",
        tags: ["Occitane", "Gén. 3", "Mère de Christophe", "Confirmée ✓"],
        sections: [
          { title: "Fille du Midi", text: "Brigitte naquit à Toulouse en novembre 1963 — le même mois que l'assassinat du président Kennedy. Elle porte quelques-unes des racines françaises les plus profondes de l'arbre : la famille Lafourcade de Thil documentée jusqu'aux années 1830, et la famille Respaud des contreforts pyrénéens d'Ariège." },
          { title: "Toulouse dans les années 1960", text: "La ville où Brigitte naquit était en pleine période des « Trente Glorieuses ». Toulouse grandissait rapidement, portée par l'aviation, l'ingénierie et une grande université." }
        ]
      }
    },

    /* ── Gen 0 ── */
    "christophe": {
      en: {
        name: "Christophe Elie Ghisi",
        dates: "b. 5 Jun 1985, Narbonne · France → Malaysia → France → Canada 2018",
        tags: ["French", "Gen 0", "Nayla's father"],
        sections: [
          { title: "Born in ancient Narbonne", text: "Christophe was born in Narbonne — the oldest Roman city in France, founded in 118 BC as the capital of Gallia Narbonensis. The Via Domitia, Rome's first road in Gaul, ran straight through it. Just 30 km from Caunes-Minervois, it was a city his family had lived near for three generations." },
          { title: "What he carries", text: "In Christophe flows the blood of Venetian peasant farmers, Andalusian miners with possible Moorish ancestry, and Occitan families rooted in the Haute-Garonne and Ariège since at least the 1830s. His grandfather Lino was born in Italy. His grandmother Fernande was the first of her Spanish family born in France." },
          { title: "Malaysia & Canada", text: "Christophe met Sahar in Malaysia — a chance encounter on the other side of the world. They lived in France before moving to Canada in 2018, where Nayla was born in January 2022." }
        ]
      },
      fr: {
        name: "Christophe Elie Ghisi",
        dates: "n. 5 juin 1985, Narbonne · France → Malaisie → France → Canada 2018",
        tags: ["Français", "Gén. 0", "Père de Nayla"],
        sections: [
          { title: "Né dans l'antique Narbonne", text: "Christophe naquit à Narbonne — la plus ancienne ville romaine de France, fondée en 118 av. J.-C. comme capitale de la Gallia Narbonensis. La Via Domitia, première route romaine en Gaule, la traversait de part en part. À seulement 30 km de Caunes-Minervois, sa famille y vivait depuis trois générations." },
          { title: "Ce qu'il porte en lui", text: "Dans les veines de Christophe coule le sang de paysans vénitiens, de mineurs andalous avec peut-être une ascendance maure, et de familles occitanes enracinées dans la Haute-Garonne et l'Ariège depuis au moins les années 1830. Son grand-père Lino est né en Italie. Sa grand-mère Fernande était la première de sa lignée espagnole née en France." },
          { title: "La Malaisie et le Canada", text: "Christophe rencontra Sahar en Malaisie — une rencontre de l'autre côté du monde. Ils vécurent en France avant de s'installer au Canada en 2018, où Nayla naquit en janvier 2022." }
        ]
      }
    },

    "sahar": {
      en: {
        name: "Sahar Ghassan Elias",
        dates: "b. 22 Aug 1987, Beirut · left Lebanon 1991",
        tags: ["Lebanese Maronite", "Gen 0", "Nayla's mother"],
        sections: [
          { title: "Born in Beirut", text: "Sahar was born in Beirut in 1987, at the height of the Lebanese civil war. Beirut — once called the 'Paris of the Middle East' — had been torn apart by fifteen years of conflict. The city Sahar was born into was a city of checkpoints, shelters, and extraordinary resilience." },
          { title: "Leaving at four years old", text: "In 1991, when Sahar was just four years old — the same age Nayla is now — her family left Lebanon. Her mother Najibeh had sent the children to safety in Jbeil, sent her brother to Cyprus, and traveled alone to Damascus to secure the family's emigration papers. Her father Ghassan was already in Canada, waiting." },
          { title: "Malaysia & Canada", text: "Sahar met Christophe in Malaysia — a Lebanese girl and a French boy, finding each other on the other side of the world. They lived in France before moving to Canada together in 2018." }
        ]
      },
      fr: {
        name: "Sahar Ghassan Elias",
        dates: "n. 22 août 1987, Beyrouth · a quitté le Liban en 1991",
        tags: ["Libano-Maronite", "Gén. 0", "Mère de Nayla"],
        sections: [
          { title: "Née à Beyrouth", text: "Sahar naquit à Beyrouth en 1987, en pleine guerre civile libanaise. Beyrouth — jadis surnommée le « Paris du Moyen-Orient » — était déchirée par quinze ans de conflits. La ville que Sahar connut à sa naissance était une ville de checkpoints, d'abris et d'une résilience extraordinaire." },
          { title: "Partir à quatre ans", text: "En 1991, quand Sahar avait tout juste quatre ans — l'âge de Nayla aujourd'hui — sa famille quitta le Liban. Sa mère Najibeh avait envoyé les enfants en sécurité à Jbeil, expédié son frère à Chypre, et voyagé seule à Damas pour obtenir les papiers d'émigration. Son père Ghassan l'attendait déjà au Canada." },
          { title: "La Malaisie et le Canada", text: "Sahar rencontra Christophe en Malaisie — une Libanaise et un Français qui se trouvèrent de l'autre côté du monde. Ils vécurent en France avant de s'installer ensemble au Canada en 2018." }
        ]
      }
    },

    "nayla": {
      en: {
        name: "Nayla Ghisi",
        dates: "b. 15 Jan 2022, Toronto, Canada",
        tags: ["Canadian", "5 nations · 10 generations", "3 birth certificates ✓"],
        sections: [
          { title: "The destination of ten journeys", text: "Nayla was born in Toronto on 15 January 2022, the living synthesis of ten generations across five nations. Italian Venetian farmers, Andalusian miners, Occitan peasants, and Lebanese Maronite families — each made their crossing, each landed somewhere new, and each choice eventually led here, to this child, in this city." },
          { title: "What she carries", text: "Through her father: the red earth of Soave's vineyards, the copper mines of Zalamea, the lavender hills of the Ariège, the red marble of Caunes-Minervois. Through her mother: the cedar mountains of Mayfouk, the ancient Phoenician shore of Batroun, and 1,400 years of Maronite Christian continuity." },
          { title: "Three birth certificates", text: "Nayla holds three confirmed birth certificates — French, Lebanese, and Canadian — a document of belonging to three nations at once, and a symbol of everything her family crossed to give her." }
        ]
      },
      fr: {
        name: "Nayla Ghisi",
        dates: "n. 15 jan. 2022, Toronto, Canada",
        tags: ["Canadienne", "5 nations · 10 générations", "3 actes de naissance ✓"],
        sections: [
          { title: "La destination de dix voyages", text: "Nayla naquit à Toronto le 15 janvier 2022, synthèse vivante de dix générations à travers cinq nations. Paysans vénitiens, mineurs andalous, paysans occitans et familles maronites libanaises — chacun fit sa traversée, chacun atterrit quelque part de nouveau, et chaque choix mena finalement ici, à cet enfant, dans cette ville." },
          { title: "Ce qu'elle porte en elle", text: "Par son père : la terre rouge des vignobles de Soave, les mines de cuivre de Zalamea, les collines de lavande d'Ariège, le marbre rouge de Caunes-Minervois. Par sa mère : les montagnes de cèdres de Mayfouk, le rivage phénicien antique de Batroun, et 1 400 ans de continuité chrétienne maronite." },
          { title: "Trois actes de naissance", text: "Nayla détient trois actes de naissance confirmés — français, libanais et canadien — document d'appartenance simultanée à trois nations, et symbole de tout ce que sa famille a traversé pour lui offrir ce monde." }
        ]
      }
    },

    /* ── Lebanese — Elias line ── */
    "nassib-elias": {
      en: {
        name: "Nassib Elias",
        dates: "Mayfouk, Jbeil, Lebanon",
        tags: ["Lebanese Maronite", "Mayfouk", "Gen 4"],
        sections: [
          { title: "Mayfouk — a Patriarchal village", text: "Nassib lived in Mayfouk, a Maronite village in the Jbeil (Byblos) district of Mount Lebanon. During the medieval centuries of persecution, Maronite Patriarchs repeatedly took refuge in Mayfouk — it was a place of sanctuary, identity, and faith." },
          { title: "Jbeil / Byblos", text: "Jbeil is one of the oldest continuously inhabited cities in the world — archaeologists trace settlement there to at least 7000 BC. The Phoenicians called it Byblos; the Greeks named their word for book after its papyrus trade. Nassib's family lived in the shadow of this extraordinary ancient history." }
        ]
      },
      fr: {
        name: "Nassib Elias",
        dates: "Mayfouk, Jbeil, Liban",
        tags: ["Libano-Maronite", "Mayfouk", "Gén. 4"],
        sections: [
          { title: "Mayfouk — village patriarcal", text: "Nassib vivait à Mayfouk, village maronite du district de Jbeil (Byblos) au Mont-Liban. Durant les siècles médiévaux de persécution, les patriarches maronites se réfugièrent à plusieurs reprises à Mayfouk — lieu de sanctuaire, d'identité et de foi." },
          { title: "Jbeil / Byblos", text: "Jbeil est l'une des villes habitées en continu les plus anciennes du monde — les archéologues y tracent des établissements humains remontant à au moins 7000 av. J.-C. Les Phéniciens l'appelèrent Byblos ; les Grecs nommèrent leur mot pour livre d'après son commerce de papyrus." }
        ]
      }
    },

    "ghassan-elias": {
      en: {
        name: "Ghassan Elias",
        dates: "b. 1940, Mayfouk, Jbeil · → Canada ~1991",
        tags: ["Lebanese Maronite", "Gen 3", "Sahar's father"],
        sections: [
          { title: "Going ahead", text: "As the Lebanese civil war drew toward its end, Ghassan made the decision to go to Canada ahead of his family — to find work, establish a home, and prepare the ground for their arrival. He left while his wife Najibeh stayed behind to navigate the paperwork, the borders, and the danger." },
          { title: "From Mayfouk to Canada", text: "Ghassan was born in Mayfouk, a village whose Maronite community traces its identity to the 7th century. He arrived in Canada as one of hundreds of thousands of Lebanese who emigrated during and after the civil war." }
        ]
      },
      fr: {
        name: "Ghassan Elias",
        dates: "n. 1940, Mayfouk, Jbeil · → Canada ~1991",
        tags: ["Libano-Maronite", "Gén. 3", "Père de Sahar"],
        sections: [
          { title: "Ouvrir la voie au Canada", text: "Alors que la guerre civile libanaise touchait à sa fin, Ghassan prit la décision de partir au Canada avant sa famille — pour trouver du travail, établir un foyer et préparer le terrain pour leur arrivée. Il partit pendant que sa femme Najibeh restait pour naviguer la paperasse et le danger." },
          { title: "De Mayfouk au Canada", text: "Ghassan naquit à Mayfouk, village dont la communauté maronite remonte son identité au VIIe siècle. Il arriva au Canada comme l'un des centaines de milliers de Libanais qui émigrèrent pendant et après la guerre civile." }
        ]
      }
    },

    /* ── Lebanese — Rouhana line ── */
    "boutros-rouhana": {
      en: {
        name: "Boutros Tanous Rouhana",
        dates: "Batroun · 'Peter the Wise'",
        tags: ["Lebanese Maronite", "Batroun", "Gen 6"],
        sections: [
          { title: "His name", text: "'Boutros' is the Arabic form of Peter — from Greek Petros, from Aramaic Kepha, meaning rock. 'Tanous' is Aramaic for wise. 'Rouhana' means spiritual or of the spirit in Arabic — a distinctively Maronite surname." },
          { title: "Batroun — the oldest diocese", text: "Boutros lived in Batroun, one of the oldest cities in Lebanon. It was here that John Maron — the first Maronite Patriarch — held his diocese in 685 AD. For a family named Rouhana living in Batroun, the Church was not an institution but the very fabric of daily life." }
        ]
      },
      fr: {
        name: "Boutros Tanous Rouhana",
        dates: "Batroun · « Pierre le Sage »",
        tags: ["Libano-Maronite", "Batroun", "Gén. 6"],
        sections: [
          { title: "Son nom", text: "« Boutros » est la forme arabe de Pierre — du grec Petros, de l'araméen Kepha, signifiant rocher. « Tanous » est araméen pour sage. « Rouhana » signifie spirituel ou de l'esprit en arabe — un patronyme distinctement maronite." },
          { title: "Batroun — le plus ancien diocèse", text: "Boutros vivait à Batroun, l'une des plus anciennes villes du Liban. C'est ici que Jean Maron — le premier patriarche maronite — établit son diocèse en 685 ap. J.-C. Pour une famille nommée Rouhana vivant à Batroun, l'Église n'était pas une institution mais la trame même de la vie quotidienne." }
        ]
      }
    },

    "najibeh-akiki": {
      en: {
        name: "Najibeh Akiki",
        dates: "Batroun · 'agate stone'",
        tags: ["Lebanese Maronite", "Batroun", "Gen 6"],
        sections: [
          { title: "A name that recurs", text: "'Najibeh' means noble or of noble birth in Arabic — a name that echoes through the generations, shared with her descendant Najibeh Rouhana four generations later. 'Akiki' likely derives from the Arabic word for agate (عقيق, aqiq), a semi-precious stone long associated with protection and good fortune." },
          { title: "Batroun in her time", text: "Najibeh Akiki lived in Batroun during the late Ottoman period. The 1860s had brought a catastrophic civil conflict and French intervention; by the 1880s and 90s, the Maronites were navigating a fragile autonomy under the Mutasarrifate of Mount Lebanon." }
        ]
      },
      fr: {
        name: "Najibeh Akiki",
        dates: "Batroun · « pierre d'agate »",
        tags: ["Libano-Maronite", "Batroun", "Gén. 6"],
        sections: [
          { title: "Un prénom qui traverse les générations", text: "« Najibeh » signifie noble ou de noble naissance en arabe — un prénom qui résonne à travers les générations, partagé avec sa descendante Najibeh Rouhana quatre générations plus tard. « Akiki » dérive probablement de l'arabe pour agate (عقيق, aqiq), pierre semi-précieuse associée à la protection et la bonne fortune." },
          { title: "Batroun à son époque", text: "Najibeh Akiki vécut à Batroun durant la période ottomane tardive. Les années 1860 avaient apporté un conflit civil catastrophique et l'intervention française ; dans les années 1880–90, les Maronites naviguaient une fragile autonomie sous le Mutasarrifat du Mont-Liban." }
        ]
      }
    },

    "youssef-mouzaya": {
      en: {
        name: "Youssef Mouzaya",
        dates: "Batroun · rare Maronite surname",
        tags: ["Lebanese Maronite", "Batroun", "Gen 6"],
        sections: [
          { title: "A rare name", text: "'Mouzaya' is one of the rarer Maronite surnames, possibly of Syriac or Aramaic origin. The Maronite Church preserved Syriac as its liturgical language for centuries — the same language family as the Aramaic spoken by Jesus — and many family names carry traces of this ancient tongue." },
          { title: "Batroun in the 19th century", text: "Youssef lived in Batroun during the Ottoman era, in a Maronite community that had maintained its distinct identity and faith for over a thousand years. The silk trade, olive cultivation, and fishing were the economic pillars of coastal Batroun." }
        ]
      },
      fr: {
        name: "Youssef Mouzaya",
        dates: "Batroun · patronyme maronite rare",
        tags: ["Libano-Maronite", "Batroun", "Gén. 6"],
        sections: [
          { title: "Un nom rare", text: "« Mouzaya » est l'un des patronymes maronites les plus rares, peut-être d'origine syriaque ou araméenne. L'Église maronite préserva le syriaque comme langue liturgique pendant des siècles — la même famille de langues que l'araméen parlé par Jésus." },
          { title: "Batroun au XIXe siècle", text: "Youssef vivait à Batroun à l'époque ottomane, au sein d'une communauté maronite qui avait maintenu son identité distincte et sa foi pendant plus de mille ans. Le commerce de la soie, la culture de l'olivier et la pêche étaient les piliers économiques de la Batroun côtière." }
        ]
      }
    },

    "zahia-khoury": {
      en: {
        name: "Zahia Khoury",
        dates: "Batroun · 'the priest family'",
        tags: ["Lebanese Maronite", "Batroun", "Gen 6"],
        sections: [
          { title: "The Khoury name", text: "'Khoury' (خوري) means priest in Arabic — historically given to families of Maronite clergy, since Maronite priests, unlike Roman Catholic priests, may marry. The Khoury family is one of the most distinctly Maronite surnames in Lebanon." },
          { title: "Faith in Batroun", text: "For the Khoury family, living in the city where the first Maronite Patriarch established his diocese in 685 AD, faith and identity were inseparable. The Maronite Church was the institution that had preserved the community's language, laws, and culture through centuries of foreign rule." }
        ]
      },
      fr: {
        name: "Zahia Khoury",
        dates: "Batroun · « la famille du prêtre »",
        tags: ["Libano-Maronite", "Batroun", "Gén. 6"],
        sections: [
          { title: "Le nom Khoury", text: "« Khoury » (خوري) signifie prêtre en arabe — historiquement donné aux familles de membres du clergé maronite, puisque les prêtres maronites peuvent se marier. Le nom Khoury est l'un des patronymes les plus distinctement maronites du Liban." },
          { title: "La foi à Batroun", text: "Pour la famille Khoury, vivant dans la ville où le premier patriarche maronite établit son diocèse en 685 ap. J.-C., la foi et l'identité étaient inséparables. L'Église maronite était l'institution qui avait préservé la langue, les lois et la culture de la communauté." }
        ]
      }
    },

    "youssef-boutros": {
      en: {
        name: "Youssef Boutros Tanous",
        dates: "Batroun · son of Boutros Tanous Rouhana",
        tags: ["Lebanese Maronite", "Batroun", "Gen 5"],
        sections: [
          { title: "The naming tradition", text: "The name Youssef Boutros Tanous embeds three generations in a single name — a classic Maronite practice where a son carries his father's and grandfather's names. 'Boutros Tanous' means Peter the Wise; Youssef (Joseph) was the name added by his own generation." },
          { title: "Ottoman Lebanon", text: "Youssef lived in Batroun during the last decades of Ottoman rule. The Mutasarrifate of Mount Lebanon (1861–1915) gave the Christian communities a degree of self-governance — but this fragile autonomy was shattered by WWI, during which famine and disease killed a third of the Lebanese population." }
        ]
      },
      fr: {
        name: "Youssef Boutros Tanous",
        dates: "Batroun · fils de Boutros Tanous Rouhana",
        tags: ["Libano-Maronite", "Batroun", "Gén. 5"],
        sections: [
          { title: "La tradition des prénoms", text: "Le nom Youssef Boutros Tanous inscrit trois générations en un seul nom — pratique maronite classique où le fils porte le prénom de son père et celui de son grand-père. « Boutros Tanous » signifie Pierre le Sage ; Youssef (Joseph) était le prénom ajouté par sa propre génération." },
          { title: "Le Liban ottoman", text: "Youssef vécut à Batroun dans les dernières décennies de la domination ottomane. Le Mutasarrifat du Mont-Liban (1861–1915) accordait aux communautés chrétiennes un certain degré d'autonomie — mais cette fragile autonomie fut brisée par la Première Guerre mondiale, au cours de laquelle la famine tua un tiers de la population libanaise." }
        ]
      }
    },

    "nahia-mouzaya": {
      en: {
        name: "Nahia Mouzaya",
        dates: "Batroun · daughter of Youssef Mouzaya + Zahia Khoury",
        tags: ["Lebanese Maronite", "Batroun", "Gen 5"],
        sections: [
          { title: "Two families united", text: "Nahia brought together the Mouzaya and Khoury surnames — both rare and deeply Maronite, both from the same ancient coastal city of Batroun. Her marriage united a family whose name speaks of ancient Syriac origins with one whose name means priest." },
          { title: "Her descendants' journey", text: "Nahia's granddaughter Najibeh Rouhana would one day navigate the Lebanese civil war, send children to safety in Jbeil, dispatch her son to Cyprus, travel alone to Damascus — and ultimately make possible a family's arrival in Canada and the birth of Nayla in Toronto in 2022." }
        ]
      },
      fr: {
        name: "Nahia Mouzaya",
        dates: "Batroun · fille de Youssef Mouzaya + Zahia Khoury",
        tags: ["Libano-Maronite", "Batroun", "Gén. 5"],
        sections: [
          { title: "Deux familles unies", text: "Nahia réunit les patronymes Mouzaya et Khoury — tous deux rares et profondément maronites, tous deux issus de la même cité côtière antique de Batroun. Son mariage unit une famille dont le nom évoque des origines syriaques anciennes avec une autre dont le nom signifie prêtre." },
          { title: "Le destin de ses descendants", text: "La petite-fille de Nahia, Najibeh Rouhana, naviguerait un jour la guerre civile libanaise, enverrait ses enfants en sécurité à Jbeil, expédierait son fils à Chypre, voyagerait seule à Damas — et rendrait possible la naissance de Nayla à Toronto en 2022." }
        ]
      }
    },

    "najibeh-rouhana": {
      en: {
        name: "Najibeh Rouhana",
        dates: "b. 1948, Batroun, North Lebanon ✓",
        tags: ["Lebanese Maronite", "Batroun", "Gen 4", "Confirmed ✓", "Sahar's mother"],
        sections: [
          { title: "Born in Batroun, 1948", text: "Najibeh was born in 1948 — the same year as the Arab-Israeli war and the Palestinian Nakba. She grew up in Batroun, the ancient Phoenician city where the first Maronite Patriarch had established his diocese in 685 AD." },
          { title: "A mother's war", text: "When the Lebanese civil war erupted in 1975, Najibeh was 27 — a young mother in Beirut, one of the most dangerous cities on earth. She sent the children regularly to Jbeil, to the safety of uncles and aunts in the mountains; dispatched her son to Cyprus when he came of age, to keep him out of the militias' reach." },
          { title: "The Damascus journey", text: "In 1991, with the war finally ending but all embassies in Beirut still closed, Najibeh traveled alone to Damascus to obtain the emigration papers the family needed to join Ghassan in Canada. She navigated foreign bureaucracy in a region still raw from 15 years of conflict — and she succeeded." },
          { title: "Her name", text: "Najibeh means noble in Arabic. She shared the name with her ancestor Najibeh Akiki four generations earlier. She earned it." }
        ]
      },
      fr: {
        name: "Najibeh Rouhana",
        dates: "n. 1948, Batroun, Liban Nord ✓",
        tags: ["Libano-Maronite", "Batroun", "Gén. 4", "Confirmée ✓", "Mère de Sahar"],
        sections: [
          { title: "Née à Batroun en 1948", text: "Najibeh naquit en 1948 — l'année de la guerre arabo-israélienne et de la Nakba palestinienne. Elle grandit à Batroun, l'antique cité phénicienne où le premier patriarche maronite avait établi son diocèse en 685 ap. J.-C." },
          { title: "La guerre d'une mère", text: "Quand la guerre civile libanaise éclata en 1975, Najibeh avait 27 ans — jeune mère à Beyrouth. Elle envoya régulièrement les enfants à Jbeil, chez des oncles et tantes dans les montagnes ; expédia son fils à Chypre quand il fut en âge d'être enrôlé, pour le tenir hors de portée des milices." },
          { title: "Le voyage à Damas", text: "En 1991, la guerre touchant à sa fin mais toutes les ambassades encore fermées à Beyrouth, Najibeh voyagea seule à Damas pour obtenir les papiers d'émigration permettant à la famille de rejoindre Ghassan au Canada. Elle navigua seule une bureaucratie étrangère — et elle réussit." },
          { title: "Son prénom", text: "Najibeh signifie noble en arabe. Elle partageait ce prénom avec son ancêtre Najibeh Akiki, quatre générations plus tôt. Elle l'a pleinement mérité." }
        ]
      }
    }

  } /* end people */

}; /* end FAMILY_DATA */
