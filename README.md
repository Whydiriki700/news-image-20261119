# The World in One Image: Thursday 19 November 2026

One image that sums up the world news of Thursday 19 November 2026, drawn as a newspaper front page. An entry for the make.fun **news-image-20261119** bounty.

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/Whydiriki700/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/Whydiriki700/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

## Status: frame entry

This repository currently holds the kit starter image as a placeholder. The final poster is built on the morning of Friday 20 November 2026, once Thursday 19 November's news is complete, and submitted signed before the deadline of 21 November 2026 00:00 UTC (07:00 WIB).

## How it is made

The page is composed programmatically (HTML and SVG with real type, rendered to a 1024 by 1024 PNG), so every headline stays crisp and legible. `main.ts` is the entry program: it copies `entry.png` to the output directory. The image is a whole PNG of at most 1 MiB and 1024 by 1024 pixels.

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Entered in

[news-image-20261119 on make.fun](https://make.fun/bounty/news-image-20261119), a coding bounty paid in USDC on Solana. New to make.fun? [Join with our referral link](https://make.fun/r/vwpycztt).

## License

See `LICENSE`.
