# Unity Simulation Portfolio

Personal portfolio site for a Unity developer focused on educational simulations, WebGL experiences, VR prototypes, digital twins, and interactive systems.

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Edit Projects

Project content lives in `src/data/projects.ts`.

Each project uses this structure:

```ts
{
  id: string,
  title: string,
  category: string,
  summary: string,
  role: string,
  platform: string[],
  tech: string[],
  thumbnail: string,
  demoUrl?: string,
  githubUrl?: string,
  caseStudyUrl: string,
  highlights: string[]
}
```

To add a new project:

1. Add a thumbnail asset in `src/assets`.
2. Import it at the top of `src/data/projects.ts`.
3. Add a new object to the `projects` array.
4. Use `caseStudyUrl: "/projects/your-project-id"` and keep `id` URL-safe.

The case study page is generated automatically from the project data.

## YouTube Media Galleries

Projects can use YouTube videos as high-quality looping media previews without converting them to GIFs. Add a
`media` array to a project in `src/data/projects.ts`:

```ts
media: [
  {
    id: "full-system-run",
    type: "youtube",
    title: "Full System Run",
    youtubeId: "https://youtu.be/example",
    thumbnail: "https://i.ytimg.com/vi/example/hqdefault.jpg",
    caption: "Short caption for the selected video."
  }
]
```

The `MediaDemoViewer` component uses privacy-friendly `youtube-nocookie.com` embeds, shows thumbnails first, and
loads the iframe only when the visitor clicks play. YouTube embeds are muted and configured to loop.

## Resume And Contact

The current resume download is `public/amr-khalil-resume.pdf`, generated from
`public/amr-khalil-resume.html`.

To replace it with an Overleaf export, save the exported PDF to:

```text
public/amr-khalil-resume.pdf
```

Update the placeholder email and social links in:

Most profile/contact values live in `src/data/profile.ts`.

## Visual Assets

Current project thumbnails are editable SVG placeholders in `src/assets`. Replace them with real screenshots, videos, or WebGL preview images when available.
