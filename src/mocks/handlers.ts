import { graphql } from 'msw'

export const handlers = [
  graphql.query('GetAllArticles', (req, res, ctx) => {
    const { uuid } = req.variables
    return res(
      ctx.data({
        data: [
          {
            id: 1,
            title: 'Title1',
            url: './',
            done: false,
            userId: uuid,
            createdAt: '2022-12-31T13:50:40+09:00',
          },
          {
            id: 2,
            title: 'Title2',
            url: './',
            done: false,
            userId: uuid,
            createdAt: '2023-1-1T13:50:40+09:00',
          },
          {
            id: 3,
            title: 'Title3',
            url: './',
            done: false,
            userId: uuid,
            createdAt: '2022-1-1T13:40:40+09:00',
          },
          {
            id: 4,
            title: 'Title4',
            url: './',
            done: false,
            userId: uuid,
            createdAt: '2021-12-31T13:50:40+09:00',
          },
        ],
      }),
    )
  }),
]
