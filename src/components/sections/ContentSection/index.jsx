export const ContentSection = ({ post }) => {
   return post ? (
      <section>
         <div className="container sm">
            <h1 className="title blog center">{post.title}</h1>
            <span className="paragraph bold center">{post.author}</span>
            <p className="paragraph center">{post.content}</p>
         </div>
      </section>
   ) : null;
};
