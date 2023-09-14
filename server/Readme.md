pnpm init
pnpm i typescript @types/node tsx -D
pnpm i fastify
pnpm i prisma -D
pnpm prisma init --datasource-provider sqlite
pnpm prisma migrate dev
pnpm prisma studio

pnpm i @fastify/multipart

pnpm i openai