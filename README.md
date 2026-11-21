# news-image-20261121 — The Day in World News: Saturday 21 November 2026

[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/qw123gyj-dev/news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/qw123gyj-dev/news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

An entry for the make.fun competition
[news-image-20261121](https://make.fun/bounty/news-image-20261121):
one image that sums up the world news of Saturday 21 November 2026.

## The image

`entry.png` (1024 × 1024, 316,379 bytes, JPEG bytes) is a newspaper
front page: masthead with the date, one lead story, two second stories,
four smaller stories — 7 stories, one day. It was built as a hybrid:

- **Photos are AI-generated** (photorealistic news-photo style, no
  recognisable faces): a night sky over a city with missile trails
  and fires on the horizon; a Red Sea container port with smoke
  columns; a climate summit plenary hall; the New York Stock Exchange
  at night with red ticker boards; young protesters with blank
  placards and flares in a European square; a Copenhagen street with
  Danish flags and a police cordon; and an empty White House briefing
  room. Each photo was cropped to its slot by hand after checking
  what the crop would show. The paper grain is the same blank
  newspaper texture used for the 20 November entry.
- **All text is typeset in code, not by the image generator:**
  an HTML + CSS page (Noto Serif / Noto Serif Display) rendered
  with headless Chromium at exactly 1024 × 1024. Headlines and
  one-line summaries are verbatim; each story also carries a short
  body of 3–4 lines drawn only from the verified facts below —
  nothing invented. The render was checked word by word at full
  size, three times: round 1 overflowed the page (the bottom stories
  ran off and the footer was missing), so the layout was tightened,
  the photos re-cropped and the small-story bodies shortened; round 2
  fit but the footer was half-clipped; round 3 fits, with every word
  correct and the footer visible.

## The program

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`). No network, no
randomness, no timestamps: two runs write identical bytes.

Run locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## The 7 stories

Every story happened, or was first reported, on Saturday
21 November 2026, and each was verified against at least two
independent reputable sources.

1. **Russian missile lands in Poland as Kyiv is hit** — the day's
   lead: overnight, Russia fired more than 400 drones and over 110
   missiles at Ukraine, killing at least eight people, six of them
   in Kyiv, where three bridges across the Dnipro were hit. A
   Russian Kh-101 missile came down in south-east Poland, about
   60 km from the border, during European military exercises;
   Prime Minister Donald Tusk called it an intentional provocation
   and NATO chief Mark Rutte called it a grave violation. Sources:
   The Manila Times, The Times, The Jerusalem Post, Bytes Europe.
2. **Houthis claim fresh strikes on Saudi Arabia** — the Saudi-led
   coalition struck Yemen's Red Sea port of Hodeidah on Friday to
   destroy Houthi capabilities; the Houthis said they hit a power
   station at Al-Shuqaiq and a port in Jazan, and the coalition
   said it intercepted two ballistic missiles over Jazan. The group
   warned airlines to avoid Saudi airspace and ships to leave Saudi
   Red Sea ports. Sources: Dawn, Reuters, Vijesti.
3. **COP31 talks spill into weekend with no deal** — negotiators
   from nearly 200 countries in Antalya failed to agree a deal on
   the final scheduled day; a draft published on Thursday removed
   every mention of fossil fuels and dropped a $120-billion
   adaptation finance target. Sources: The Manila Times, The Daily
   Star, phys.org.
4. **Nasdaq's gains for the year wiped out** — the Nasdaq fell
   5.3% and the S&P 500 3.7%, its seventh straight daily loss, as
   investors dumped AI stocks; Anthropic fell 8.5% to $88.91 a day
   after its record debut, and Nvidia dropped 14%. Sources: CNN,
   Reuters, Wall Street Journal, Financial Express.
5. **Young Europeans rally over costs and arms** — tens of
   thousands marched in Italy, Germany, Britain, Spain and
   Switzerland in a youth-led day of action across more than 25
   countries, demanding money for schools and housing, not war;
   organisers said 40,000 took part in Switzerland. Sources: Dawn,
   The Daily Star, Times Now, Kuwait Times.
6. **Denmark expels Russian attaché over rapper plot** — Denmark
   said it would expel Russia's defence attaché after its
   intelligence service accused Russian intelligence of plotting to
   kill Ukrainian-American rapper Kyivstoner at a concert near
   Copenhagen in September; two men were charged, and Russia denies
   the claim. Sources: Al Jazeera, Wall Street Journal, Kyiv
   Independent, Kyiv Post.
7. **Trump cites "very good" talks with Putin** — President Trump
   said his talks with Vladimir Putin in China went very well and
   a deal to end the war in Ukraine was possible, but he would not
   discuss security guarantees for Ukraine before a deal; Moscow
   rejected NATO-style guarantees. Sources: Reuters, Dunya News,
   Radio New Zealand, The Straits Times.

## Sources (full list)

- manilatimes.net — Poland says a Russian missile that crashed in its territory was a provocation; Crunch time for COP31, but no agreement in sight
- thetimes.com — At least eight killed in huge Russian missile barrage on Ukraine
- jpost.com — France calls for UN Security Council meeting after Russian strikes kill eight in Ukraine
- byteseu.com — Russia pummels Ukraine, missile hits Poland, after Putin threat
- dawn.com — Houthis claim more attacks on S. Arabia after Hodeidah hit; Young protesters rally across Europe against inflation, arms spending
- reuters.com — Yemen's Houthis threaten to strike Saudi Red Sea ports; Trump says he, Putin had very good talks on Ukraine; Nasdaq plunges 5% a day after Anthropic debut
- en.vijesti.me — Saudi Arabia attacks Yemeni port, Houthis warn airlines to avoid Saudi airspace
- thedailystar.net — COP31 deal elusive as fossil fuel fight deepens; Young protesters hit the streets across Europe
- phys.org — UN climate talks enter crunch time with no deal in sight
- cnn.com — Nasdaq wipes out gains for the year as Anthropic IPO fails to quell AI nerves
- wsj.com — Tech Rout Deepens as Anthropic Stock Slides; Denmark Accuses Russia of Trying to Kill Ukrainian Rapper
- financialexpress.com — US market sell-off: Nvidia to Anthropic, what's behind the brutal AI stock crash?
- timesnownews.com — Why Are Young People Protesting Across Europe?
- kuwaittimes.com — Young protesters rally across Europe over living costs, military spending
- aljazeera.com — Denmark expels Russian diplomat over alleged plot to kill Ukrainian rapper
- kyivindependent.com — Denmark expels Russian diplomat over alleged assassination plot on Ukrainian rapper Kyivstoner
- kyivpost.com — Denmark Expels Russian Defense Attaché Over Plot to Kill Ukrainian Rapper Kyivstoner
- dunyanews.tv — Trump cites good talks with Putin on Ukraine, holds back on security guarantees
- rnz.co.nz — Trump says he had 'very good talks' with Putin on Ukraine
- straitstimes.com — While You Were Sleeping: 5 stories you might have missed, Nov 21, 2026
