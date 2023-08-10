import { PostCard } from "./PostCard";

export const PostSection = ({ title, postList }) => {
   return (
      <section>
         <h2>{title}</h2>
         <ul>
            {postList.map((post) => (
               <PostCard key={post.id} post={post} />
            ))}
         </ul>
      </section>
   );
};