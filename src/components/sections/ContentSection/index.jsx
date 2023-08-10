export const ContentSection = ({ post }) => {
   return post ? (
      <section>
         <h1>{post.title}</h1>
         <span>{post.author}</span>
         <p>{post.content}</p>
      </section>
   ) : null;
};
