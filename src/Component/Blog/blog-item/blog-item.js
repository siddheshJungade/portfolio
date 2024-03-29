
// import { Link } from "react-router-dom";
import './blog-item.css'
const BlogItem = ({ ...post }) => {
    
    return (
        <a href={`https://blog.siddheshjungade.me/${post.slug}`} target="_blank" rel="noreferrer" >
        <div className="blog-item">
            <img className='blog-image' src={post.coverImage} alt="id"></img>
            <div className="blog-container">
                <h4><b>{post.title}</b></h4>
            </div>
        </div>
        </a>
    );
}


export default BlogItem
