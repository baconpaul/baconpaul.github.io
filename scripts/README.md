# scripts/

## surge_report.py

Generates the report published at
<https://baconpaul.org/reports/surge-repo-activity/> — open pull requests,
merge and issue activity over the last 7 and 90 days, new contributors in the
last 30 days, and open-issue age by repo, across the `surge-synthesizer` org.

Read-only: every GitHub call is a GraphQL **query** via `gh api graphql`, and
the script refuses to send any document containing a mutation.

### How it gets published

`.github/workflows/deploy.yml` runs it **before** the Astro build, on every
push to `main` and daily at 12:00 UTC. It writes into
`public/reports/surge-repo-activity/`, which Astro copies to the site root
untouched.

Nothing is committed by CI — the report is regenerated on each deploy, so the
repo carries no daily churn. The copy that *is* committed acts as a fallback:
the generate step is `continue-on-error`, so if the GitHub API is unavailable
the build still ships that last-committed copy, which shows its own
"Generated ..." timestamp rather than pretending to be fresh. Expect the
committed copy to look stale in `git log` — that is by design.

The step passes `--public-only`. **Keep it.** The site is public, and without
it the report names private repos (`surge-xt2` currently shows up in the
90-day activity table).

### Running it by hand

```sh
# preview locally without touching the repo
python3 scripts/surge_report.py --out /tmp --open

# regenerate what CI would publish
python3 scripts/surge_report.py --publish-dir . --public-only --out /tmp
```

Useful flags: `--days` (short window, 7), `--long-days` (90), `--contrib-days`
(30), `--org`, `--slug`, `--discord-webhook`. `--help` lists them all.

### Adding another report

Write it to `public/reports/<slug>/index.html`, add a `--publish-dir` style
step to `deploy.yml`, and add an entry to the `reports` array in
`src/pages/reports/index.astro`. That index page is hand-maintained and is
never overwritten by a generator.

### Auth

On CI the script uses `GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}`, which can read
public data across GitHub — enough for `--public-only`. If a future report
ever needs private data, swap in a PAT stored as a repository secret; the
built-in token cannot see outside this repo.
