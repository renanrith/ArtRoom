import PostImage from "./posts_imagem";
import classes from "./posts_lists.module.css";

export default function PostsLists(props) {
  return (
    <ul className={classes.list}>
      {props.postsImages.map((postsImages) => (
        <PostImage
          key={postsImages.id}
          id={postsImages.id}
          image={postsImages.image}
          title={postsImages.title}
          description={postsImages.description}
        />
      ))}
    </ul>
  );
}
