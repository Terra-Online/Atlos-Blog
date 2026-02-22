---
title: "Dev Log #1 — Project Kickoff"
description: First development log entry for the Open Endfield Map project.
lastUpdated: 2026-02-22
---

> **This is a sample article placeholder.**

## Starting the Journey

Welcome to the first development log for Open Endfield Map! In this post we'll cover the initial technical decisions and architecture choices.

## Tech Stack

- **Frontend**: Astro + Starlight for documentation
- **Map Engine**: Custom WebGL-based tile renderer
- **Backend**: Cloudflare Workers (serverless)
- **Database**: D1 (SQLite) + Upstash Redis
- **CDN**: Cloudflare Pages

## Key Decisions

### Why Astro?

Astro's island architecture gives us the best of both worlds — fast static pages with interactive components where needed.

### Why Cloudflare?

Edge-first architecture means low latency for users worldwide, with built-in DDoS protection and SSL.

## What's Next

Stay tuned for more development updates as we build out the interactive map features.
