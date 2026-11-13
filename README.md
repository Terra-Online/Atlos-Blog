# Open Endfield Map Blog

## Static assets and fonts

Images and runtime fonts are published with the site through Cloudflare Workers
Static Assets. Existing `/blogs/...` and `/fonts/...` URLs are preserved. The
Worker has no R2 binding or media proxy, and deployment does not upload to R2.

Complete UD font sources remain in the existing `opendfieldmap-blog` R2 bucket
under `fonts/UD/`. They are downloaded only as build inputs. This workflow never
commits font files to the repository; the UD sources and generated subsets remain
Git-ignored. `public/.assetsignore` also excludes the complete UD sources from
the deployed assets, so only their generated subsets are published.

### Local setup

Install [rclone](https://rclone.org/install/) and the font build tools:

```sh
python3 -m pip install -r scripts/requirements-fonts.txt
cp config.template.json config.json
```

Fill in the ignored `config.json` with R2 S3 credentials that can read the bucket.
An Object Read only token is sufficient. To create one, open **Cloudflare → R2
Object Storage → Overview → Account Details → API Tokens → Manage**. Copy the
Access Key ID and Secret Access Key into `r2.accessKeyId` and
`r2.secretAccessKey`, and set the account's S3 endpoint. See
[Cloudflare's authentication guide](https://developers.cloudflare.com/r2/api/tokens/).

Fetch the complete sources once, or again when the R2 source fonts change:

```sh
pnpm run fetch:ud-fonts --dry-run
pnpm run fetch:ud-fonts
pnpm run generate:ud-subsets
pnpm dev
```

`fetch:ud-fonts` copies from R2 to the local `public/fonts/UD` directory, with 32
concurrent downloads and checksums to skip unchanged sources. It never uploads
or deletes R2 objects. `r2.concurrency` controls download concurrency.
`UD_FONT_SOURCE_DIR` overrides the local source directory;
`UD_FONT_SUBSET_DIR` overrides the generated subset directory.

Every production build regenerates subsets from the current content before
building Next.js. Once the complete sources are present, builds and deployments
do not need R2 credentials or a network connection to R2:

```sh
pnpm build
pnpm preview
pnpm run deploy
```

### GitHub Actions

Set the repository's `BLOG_R2_CONFIG` Actions secret to the contents of the local
`config.json`. The existing Cloudflare deployment secrets are still required.
CI installs the pinned font tools, downloads complete sources to its temporary
checkout, and builds fresh subsets. It does not commit fonts, cache them, or
upload them as GitHub artifacts. An always-run cleanup removes the downloaded
fonts, subsets and temporary credentials after the job.
