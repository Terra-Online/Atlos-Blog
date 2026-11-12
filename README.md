# Open Endfield Map Blog

## R2 asset uploads

Production asset uploads use [rclone](https://rclone.org/install/) and the R2 S3 API.
Install rclone, then copy `config.template.json` to `config.json` in the repository
root and fill in its `r2` section. `config.json` is ignored by Git.

- `endpoint`: `https://<account-id>.r2.cloudflarestorage.com`, `region`: `auto`.
- Credentials: an R2 S3 access key ID and secret with Object Read & Write access
  to the `opendfieldmap-blog` bucket. A Wrangler login or Cloudflare API token
  is not an S3 credential. Set `accessKeyId` and `secretAccessKey` in `config.json`.

To generate these credentials, open the Cloudflare dashboard, then **R2 Object
Storage → Overview → Account Details → API Tokens → Manage**. Create an Account
or User API token with **Object Read & Write**, scoped to `opendfieldmap-blog`.
Copy the resulting Access Key ID and Secret Access Key; the secret is only shown
once. See [Cloudflare's authentication guide](https://developers.cloudflare.com/r2/api/tokens/).

The script passes the configuration to rclone through its process environment;
no global rclone remote is required.

Verify access and preview changes before uploading:

```sh
pnpm run sync:blog-assets --dry-run
pnpm run sync:blog-assets
```

The dry run reads the remote to compare files but does not upload. Each source
directory is copied with 32 concurrent transfers. Size and checksum comparisons
skip unchanged files, including files whose timestamps changed during a build.
`copy` preserves remote-only objects; it does not prune the bucket. Uploaded
objects retain their inferred Content-Type and the configured Cache-Control.

| Environment variable | Default |
| --- | --- |
| `BLOG_MEDIA_R2_BUCKET` | `r2.bucket` in `config.json` |
| `BLOG_MEDIA_UPLOAD_CONCURRENCY` | `r2.concurrency`, or `32` (positive integer) |
| `BLOG_MEDIA_SOURCE_DIR` | `public/blogs`, copied to `blogs/` |
| `BLOG_FONT_SOURCE_DIR` | `public/fonts`, copied to `fonts/` |
| `BLOG_MEDIA_CACHE_CONTROL` | `public, max-age=31536000, stale-while-revalidate=604800` |

`pnpm run deploy` and `pnpm run upload` include this asset copy and therefore
require rclone and `config.json`. Automated runners must supply this ignored
configuration file before running the asset upload.

For local Wrangler R2 storage, use `pnpm run sync:blog-assets --local`.
`--local --dry-run` prints the local Wrangler commands without writing files.
