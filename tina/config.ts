import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    publicFolder: "public",
    outputFolder: "admin",
  },
  media: {
    tina: {
      mediaRoot: "/assets",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Seções",
        path: "src/app",
        format: "json",
        ui: {
          router: () => "/",
        },
        fields: [
          {
            name: "hero",
            label: "Seção Inicial",
            type: "object",
            list: true,
            templates: [
              {
                name: "hero",
                label: "Hero",
                fields: [
                  {
                    name: "h1",
                    label: "Headline",
                    type: "string",
                  },
                  {
                    name: "h4",
                    label: "SubHeadline",
                    type: "string",
                  },
                  {
                    name: "btn",
                    label: "Botão",
                    type: "string",
                  },
                  {
                    name: "bgImg",
                    label: "Imagem de Fundo",
                    type: "image",
                  },
                  {
                    name: "logosClients",
                    label: "Logos Clientes",
                    type: "object",
                    list: true,
                    fields: [
                      {
                        name: "image",
                        label: "Imagem",
                        type: "image",
                      },
                      {
                        name: "alt",
                        label: "Informação Imagem",
                        type: "string",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "problem",
            label: "Seção Problemas",
            type: "object",
            list: true,
            templates: [
              {
                name: "problem",
                label: "Problem",
                fields: [
                  {
                    name: "h2",
                    label: "Título da Seção",
                    type: "string",
                  },
                  {
                    name: "p",
                    label: "Descrição",
                    type: "string",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});
