# Thursday 19 November 2026, in one image

A newspaper front page that sums up the world news of Thursday 19 November 2026. Built for the make.fun **news-image-20261119** bounty.

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/Whydiriki700/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/Whydiriki700/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

## What the picture shows

The front page leads with the first Trump-Xi-Putin three-way summit at APEC in Shenzhen. The rest of the page carries the day's other big stories: GTA VI's worldwide rollout, Anthropic's record $81.3bn IPO, the US and Iran trading fire again, Hakeem Jeffries' nomination as the first Black Speaker of the US House, the EU's €45bn loan for Ukraine, and Voyager 1 reaching one light-day from Earth. A strip at the foot adds the record Van Gogh sale, the Crimean Bridge attack, and Cyclone Akvan.

## How it is built

The poster is drawn as HTML and SVG with real type, then rendered to a 1024 by 1024 PNG, so the headlines stay sharp at any size. `main.ts` checks that poster against the competition's limits (a whole PNG or JPEG, at most 1 MiB, at most 1024 pixels on a side) and hands it in as the entry.

```text
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## The bounty

[news-image-20261119 on make.fun](https://make.fun/bounty/news-image-20261119) pays $250 across the 50 best entries, in USDC on Solana. New to make.fun? [Join with our referral link](https://make.fun/r/vwpycztt).

## License

See `LICENSE`.
