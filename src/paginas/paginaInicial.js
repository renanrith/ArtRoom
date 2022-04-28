import MakePosts from "../components/layout/Make_post";
import PostsLists from "../components/posts/posts_list";
import "./paginainicial.css"

const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'Olha que foda esse desenho',
      image:
        'https://i.imgur.com/dEsSnPK.png',
      description:
        'Muito foda né',
    },
    {
      id: 'm2',
      title: 'This is a second meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
  ];

export default function PaginaInicial() {
  return (<div>
    
    <main>
      <div className="posts"> 
      <PostsLists postsImages={DUMMY_DATA}/> 
      </div>
      <div className="make_post">
        <MakePosts/>
      </div>

    </main>
    </div>
  );
}
