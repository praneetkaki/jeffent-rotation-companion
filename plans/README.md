# Animation plans

Written from the animation audit at commit 7512774. One plan per finding. Each plan is self-contained.

| # | Plan | Severity | Status |
|---|---|---|---|
| 001 | Remove the flashcard flip and slide-up reveals | HIGH | DONE |
| 002 | Replace the blanket reduced-motion rule with a targeted one | HIGH | DONE |
| 003 | Gate hover motion to real hover devices | MEDIUM | TODO |
| 004 | Play Home count-ups and ring draws once per day | MEDIUM | TODO |
| 005 | Animate indicators and progress bars with transform, not layout | MEDIUM | TODO |
| 006 | Shorten the route fade and make it a quiet opacity change | MEDIUM | TODO |
| 007 | Make the case answer scroll prompt and keyboard friendly | MEDIUM | TODO |
| 008 | Add subtle press feedback to the main controls | LOW | TODO |
| 009 | Add duration tokens and use them | LOW | TODO |

## Recommended order

1. 001 and 002 first (highest effect on daily use and accessibility).
2. 004, 006 and 007 (frequency fixes, small).
3. 003, then 005 (more edits in the stylesheet).
4. 008 and 009 last. Do 009 after 001, 005 and 006 so the token replacement does not collide with those edits.

## Dependencies

- 009 touches many lines of `assets/styles.css`; run it after every other CSS plan.
- 002 and 006 both remove reduced-motion special cases; run 002 before 006.
