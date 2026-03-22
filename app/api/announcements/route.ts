import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const announcementsDir = path.join(process.cwd(), 'content/docs/blogs/announcements');

    if (!fs.existsSync(announcementsDir)) {
      return NextResponse.json([]);
    }

    const files = fs.readdirSync(announcementsDir).filter(file => file.endsWith('.md'));

    const announcements = files.map(file => {
      const filePath = path.join(announcementsDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');

      // Parse frontmatter
      const frontmatterMatch = fileContent.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
      if (!frontmatterMatch) return null;

      const frontmatter = frontmatterMatch[1];
      const content = frontmatterMatch[2];

      const title = frontmatter.match(/title:\s*"?([^"\n]+)"?/)?.[1] || '';
      const description = frontmatter.match(/description:\s*"?([^"\n]+)"?/)?.[1] || '';
      const date = frontmatter.match(/date:\s*(\S+)/)?.[1] || '';

      return {
        id: file.replace('.md', ''),
        title,
        description,
        content,
        date
      };
    }).filter(Boolean);

    announcements.sort((a, b) => new Date(b!.date).getTime() - new Date(a!.date).getTime());

    return NextResponse.json(announcements, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
      },
    });
  } catch (error) {
    console.error('Error reading announcements:', error);
    return NextResponse.json([]);
  }
}
