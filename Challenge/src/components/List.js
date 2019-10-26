import React, { Component } from 'react';

import PostItem from './Item';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Leonardo Henrique Lopes',
          avatar: 'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-4.jpg'
        },
        date: '26 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando? Ou se eles podem me indicar alguma vaga para front-end?',
        comments: [
          {
            id: 2,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4'
            },
            date: '27 Jun 2019',
            content:
              'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp.'
          }
        ]
      },
      {
        id: 3,
        author: {
          name: 'Antônia Antonieta',
          avatar: 'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-5.jpg'
        },
        date: '30 Ago 2019',
        content:
          'Bom dia, Pessoal?\nMeu netinho está querendo ingressar no Bootcamp, deve comprar para ele de presente?',
        comments: [
          {
            id: 4,
            author: {
              name: 'Maria Mariana',
              avatar: 'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-6.jpg'
            },
            date: '30 Ago 2019',
            content:
              'Estou fazendo o Bootcamp e recomendo sim!'
          },
          {
            id: 5,
            author: {
              name: 'Victor Vitano',
              avatar: 'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-9.jpg'
            },
            date: '31 AGO 2019',
            content:
              'Só vai!!!!'
          }
        ]
      },
      {
        id: 6,
        author: {
          name: 'Jubileu Jubilei',
          avatar: 'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-10.jpg'
        },
        date: '25 Set 2019',
        content:
          'Fala, Pessoal! Alguém pode me indicar algumas vagas para front-end?',
        comments: [
          {
            id: 4,
            author: {
              name: 'Manuel Manual',
              avatar: 'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-14.jpg'
            },
            date: '5 Set 2019',
            content:
              'Tenta lá na Outsourcing! Eles estão contratando!'
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;