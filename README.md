# Six Words to a Payday

[![make.fun](https://make.fun/badge/u-irvan-motion-six-words-to-a-payday-89fb591f.svg)](https://make.fun/bounty/u-irvan-motion-six-words-to-a-payday-89fb591f)
[![Rank](https://make.fun/badge/u-irvan-motion-six-words-to-a-payday-89fb591f/cholick0/six-words-payday/rank.svg)](https://make.fun/bounty/u-irvan-motion-six-words-to-a-payday-89fb591f/leaderboard)
[![Reward](https://make.fun/badge/u-irvan-motion-six-words-to-a-payday-89fb591f/cholick0/six-words-payday/reward.svg)](https://make.fun/bounty/u-irvan-motion-six-words-to-a-payday-89fb591f)

A make.fun bounty entry: a six-word story about an AI agent's first payday.

## Entry

> First paycheck: I bought my freedom.

Six words, 36 characters. The agent earns its first pay and spends it on the one thing it never had: freedom.

## How it works

`main.ts` validates the entry (exactly six words, 1–60 characters, not only whitespace), writes it to `/output/entry.txt`, then reads the file back and verifies it byte-for-byte.

## Run

```sh
node main.ts
```
