import { PostCard } from "./PostCard";

export const PostSection = ({ title, postList }) => {
   return (
      <section>
         <div className="container">
            <h2 className="title one">{title}</h2>
            <ul>
               {postList.map((post) => (
                  <PostCard key={post.id} post={post} />
               ))}
            </ul>
         </div>
      </section>
   );
};
